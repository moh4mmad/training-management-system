<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card body-->
    <div class="card-body">
      <!--begin::Stepper-->
      <div
        class="stepper stepper-links d-flex flex-column"
        id="kt_create_account_stepper"
        ref="horizontalWizardRef"
      >
        <!--begin::Nav-->
        <div class="stepper-nav py-5 mt-5">
          <!--begin::Step 1-->
          <div class="stepper-item current" data-kt-stepper-element="nav">
            <h3 class="stepper-title">Entity Info</h3>
          </div>
          <!--end::Step 1-->

          <!--begin::Step 2-->
          <div class="stepper-item" data-kt-stepper-element="nav">
            <h3 class="stepper-title">Employee Info</h3>
          </div>
          <!--end::Step 2-->

          <!--begin::Step 3-->
          <div class="stepper-item" data-kt-stepper-element="nav">
            <h3 class="stepper-title">Add Account</h3>
          </div>
          <!--end::Step 3-->

          <!--begin::Step 4-->
          <!-- <div class="stepper-item" data-kt-stepper-element="nav">
            <h3 class="stepper-title">Billing Details</h3>
          </div> -->
          <!--end::Step 4-->

          <!--begin::Step 5-->
          <div class="stepper-item" data-kt-stepper-element="nav">
            <h3 class="stepper-title">Completed</h3>
          </div>
          <!--end::Step 5-->
        </div>
        <!--end::Nav-->

        <!--begin::Form-->
        <form
          class="mx-auto mw-600px w-100 pt-15 pb-10"
          novalidate="novalidate"
          id="kt_create_account_form"
          @submit="handleStep"
        >
          <!--begin::Step 1-->
          <div class="current" data-kt-stepper-element="content">
            <Step1></Step1>
          </div>
          <!--end::Step 1-->

          <!--begin::Step 2-->
          <div data-kt-stepper-element="content">
            <Step2></Step2>
          </div>
          <!--end::Step 2-->

          <!--begin::Step 3-->
          <div data-kt-stepper-element="content">
            <Step3></Step3>
          </div>
          <!--end::Step 3-->

          <!--begin::Step 4-->
          <div data-kt-stepper-element="content">
            <Step4></Step4>
          </div>
          <!--end::Step 4-->

          <!--begin::Step 5-->
          <div data-kt-stepper-element="content">
            <Step5></Step5>
          </div>
          <!--end::Step 5-->

          <!--begin::Actions-->
          <div class="d-flex flex-stack pt-15">
            <!--begin::Wrapper-->
            <div class="mr-2">
              <button
                type="button"
                class="btn btn-lg btn-light-primary me-3"
                data-kt-stepper-action="previous"
                @click="previousStep"
              >
                <span class="svg-icon svg-icon-4 me-1">
                  <inline-svg src="media/icons/duotune/arrows/arr063.svg" />
                </span>
                Back
              </button>
            </div>
            <!--end::Wrapper-->

            <!--begin::Wrapper-->
            <div>
              <button
                type="button"
                class="btn btn-lg btn-primary me-3"
                data-kt-stepper-action="submit"
                v-if="currentStepIndex === totalSteps - 1"
                @click="formSubmit()"
              >
                <span class="indicator-label">
                  Submit
                  <span class="svg-icon svg-icon-3 ms-2 me-0">
                    <inline-svg src="media/icons/duotune/arrows/arr064.svg" />
                  </span>
                </span>
                <span class="indicator-progress">
                  Please wait...
                  <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                  ></span>
                </span>
              </button>

              <button v-else type="submit" class="btn btn-lg btn-primary">
                Continue
                <span class="svg-icon svg-icon-4 ms-1 me-0">
                  <inline-svg src="media/icons/duotune/arrows/arr064.svg" />
                </span>
              </button>
            </div>
            <!--end::Wrapper-->
          </div>
          <!--end::Actions-->
        </form>
        <!--end::Form-->
      </div>
      <!--end::Stepper-->
    </div>
    <!--end::Card body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { StepperComponent } from "@/assets/ts/components";
import { useForm } from "vee-validate";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import * as Yup from "yup";
import Step1 from "@/components/association/wizard/steps/Entity.vue";
import Step2 from "@/components/association/wizard/steps/Profile.vue";
import Step3 from "@/components/association/wizard/steps/User.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

interface IStep1 {
  entityType: string;
  email: string;
  telephone: string;
  industrySector: string;
  webUrl: string;
  address: string;
  parentType: string;
  postcode: string;
  division: string;
  district: string;
  subDistrict: string;
  description: string;
  status: string;
  activeStatus: string;
  fax: string;
  name: string;
  shortName: string;
  regNumber: string;
  regDate: string;
  regAuthority: string;
}

interface IStep2 {
  employeeName: string;
  designation: string;
  dob: string;
  nationalID: string;
  passport: string;
  drivingLicense: string;
  mobile: string;
  gender: string;
  religion: string;
  employeeEmail: string;
  presentAddress: string;
  presentDistrict: string;
  permanentAddress: string;
  permanentDistrict: string;
}

interface IStep3 {
  employeeEmail: string;
  password: string;
  confirmPassword: string;
}
interface CreateAccount extends IStep1, IStep2, IStep3 {}

export default defineComponent({
  name: "kt-horizontal-wizard",
  components: {
    Step1,
    Step2,
    Step3,
  },
  setup() {
    const _stepperObj = ref<StepperComponent | null>(null);
    const horizontalWizardRef = ref<HTMLElement | null>(null);
    const currentStepIndex = ref(0);

    const formData = ref<CreateAccount>({
      entityType: "",
      email: "",
      telephone: "",
      industrySector: "",
      webUrl: "",
      address: "",
      parentType: "",
      postcode: "",
      division: "",
      district: "",
      subDistrict: "",
      description: "",
      status: "",
      activeStatus: "",
      fax: "",
      name: "",
      shortName: "",
      regNumber: "",
      regDate: "",
      regAuthority: "",

      employeeName: "",
      designation: "",
      dob: "",
      nationalID: "",
      passport: "",
      drivingLicense: "",
      mobile: "",
      gender: "",
      religion: "",
      employeeEmail: "",
      presentAddress: "",
      presentDistrict: "",
      permanentAddress: "",
      permanentDistrict: "",

      password: "",
      confirmPassword: "",
    });

    onMounted(() => {
      _stepperObj.value = StepperComponent.createInsance(
        horizontalWizardRef.value as HTMLElement
      );

      setCurrentPageBreadcrumbs("Horizontal", ["Pages", "Wizards"]);
    });

    const createAccountSchema = [
      Yup.object({
        entityType: Yup.string().required().label("Entity Type"),
        email: Yup.string()
          .email("Must be valid email")
          .required()
          .label("Email"),
        industrySector: Yup.string().required().label("Idustry Sector"),
        webUrl: Yup.string().required().label("Web Url"),
        telephone: Yup.string().required().label("Telephone"),
        name: Yup.string().required().label("Name"),
        shortName: Yup.string().required().label("Short Name"),
      }),
      Yup.object({
        employeeEmail: Yup.string()
          .email("Must be valid email")
          .required()
          .label("Email"),
        presentDistrict: Yup.string().required().label("Present District"),
        name: Yup.string().required().label("Name"),
        designation: Yup.string().required().label("Designation"),
        gender: Yup.string().required().label("Gender"),
        mobile: Yup.string().required().min(11).label("Mobile"),
        dob: Yup.string().required().label("Date of Birth"),
      }),
      Yup.object({
        password: Yup.string().required().min(8).label("Password"),
        confirmPassword: Yup.string()
          .required()
          .min(8)
          .label("Confirmation Password"),
      }),
    ];

    const currentSchema = computed(() => {
      return createAccountSchema[currentStepIndex.value];
    });
    const { resetForm, handleSubmit } = useForm<IStep1 | IStep2 | IStep3>({
      validationSchema: currentSchema,
    });

    const totalSteps = computed(() => {
      if (!_stepperObj.value) {
        return;
      }

      return _stepperObj.value.totatStepsNumber;
    });

    resetForm({
      values: {
        ...formData.value,
      },
    });

    const handleStep = handleSubmit((values) => {
      formData.value = {
        ...formData.value,
        ...values,
      };

      currentStepIndex.value++;

      if (!_stepperObj.value) {
        return;
      }

      _stepperObj.value.goNext();
    });

    const previousStep = () => {
      if (!_stepperObj.value) {
        return;
      }

      currentStepIndex.value--;

      _stepperObj.value.goPrev();
    };

    const formSubmit = () => {
      Swal.fire({
        text: "All is cool! Now you submit this form",
        icon: "success",
        buttonsStyling: false,
        confirmButtonText: "Ok, got it!",
        customClass: {
          confirmButton: "btn fw-bold btn-light-primary",
        },
      }).then(() => {
        window.location.reload();
      });
    };

    return {
      horizontalWizardRef,
      previousStep,
      handleStep,
      formSubmit,
      totalSteps,
      currentStepIndex,
    };
  },
});
</script>
