<template>
  <div
    class="modal fade"
    id="kt_modal_add_entity_info"
    ref="addModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header" id="kt_modal_add_entity_info_header">
          <!--begin::Modal title-->
          <h2 class="fw-bolder">Add Info</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div
            id="kt_modal_add_entity_info_close"
            data-bs-dismiss="modal"
            class="btn btn-icon btn-sm btn-active-icon-primary"
          >
            <span class="svg-icon svg-icon-1">
              <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
            </span>
          </div>
          <!--end::Close-->
        </div>
        <!--end::Modal header-->
        <!--begin::Form-->
        <el-form
          @submit.prevent="submit()"
          :model="formData"
          :rules="rules"
          ref="formRef"
        >
          <!--begin::Modal body-->
          <div class="modal-body py-10 px-lg-17">
            <!--begin::Scroll-->
            <div
              class="scroll-y me-n7 pe-7"
              id="kt_modal_add_entity_info_scroll"
              data-kt-scroll="true"
              data-kt-scroll-activate="{default: false, lg: true}"
              data-kt-scroll-max-height="auto"
              data-kt-scroll-dependencies="#kt_modal_add_entity_info_header"
              data-kt-scroll-wrappers="#kt_modal_add_entity_info_scroll"
              data-kt-scroll-offset="300px"
            >
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-bold mb-2">
                  <span class="required">Name</span>

                  <i
                    class="fas fa-exclamation-circle ms-1 fs-7"
                    data-bs-toggle="tooltip"
                    title="Name"
                  ></i>
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="name">
                  <el-input v-model="formData.name" />
                </el-form-item>
                <!--end::Input-->
              </div>
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-bold mb-2">
                  <span class="required">Designation</span>

                  <i
                    class="fas fa-exclamation-circle ms-1 fs-7"
                    data-bs-toggle="tooltip"
                    title="Designation"
                  ></i>
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="designation">
                  <el-input v-model="formData.designation" />
                </el-form-item>
                <!--end::Input-->
              </div>
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-bold mb-2">
                  <span class="required">Date Of Birth</span>

                  <i
                    class="fas fa-exclamation-circle ms-1 fs-7"
                    data-bs-toggle="tooltip"
                    title="Date Of Birth"
                  ></i>
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="dob">
                  <el-input v-model="formData.dob" type="date" />
                </el-form-item>
                <!--end::Input-->
              </div>
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-bold mb-2">
                  <span class="required">NID</span>

                  <i
                    class="fas fa-exclamation-circle ms-1 fs-7"
                    data-bs-toggle="tooltip"
                    title="NID"
                  ></i>
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="nid">
                  <el-input v-model="formData.nid" type="number" />
                </el-form-item>
                <!--end::Input-->
              </div>
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-bold mb-2">
                  <span class="required">Mobile</span>

                  <i
                    class="fas fa-exclamation-circle ms-1 fs-7"
                    data-bs-toggle="tooltip"
                    title="Mobile"
                  ></i>
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="mobile">
                  <el-input v-model="formData.mobile" type="number" />
                </el-form-item>
                <!--end::Input-->
              </div>
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-bold mb-2">
                  <span class="required">Email</span>

                  <i
                    class="fas fa-exclamation-circle ms-1 fs-7"
                    data-bs-toggle="tooltip"
                    title="Email"
                  ></i>
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="email">
                  <el-input v-model="formData.email" type="email" />
                </el-form-item>
                <!--end::Input-->
              </div>
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-bold mb-2">
                  <span class="required">Gender</span>

                  <i
                    class="fas fa-exclamation-circle ms-1 fs-7"
                    data-bs-toggle="tooltip"
                    title="Gender"
                  ></i>
                </label>
                <!--end::Label-->
                <el-form-item prop="gender">
                  <el-select
                    class="form-select-solid"
                    placeholder="Select Gender"
                    v-model="formData.gender"
                  >
                    <!--begin::Input-->
                    <option value="" disabled selected>Select Gender</option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="O">Other</option>
                    <!--end::Input-->
                  </el-select>
                </el-form-item>
              </div>
            </div>
            <!--end::Scroll-->
          </div>
          <!--end::Modal body-->

          <!--begin::Modal footer-->
          <div class="modal-footer flex-center">
            <!--begin::Button-->
            <button
              type="reset"
              id="kt_modal_add_entity_info_cancel"
              class="btn btn-light me-3"
            >
              Discard
            </button>
            <!--end::Button-->

            <!--begin::Button-->
            <button
              :data-kt-indicator="loading ? 'on' : null"
              class="btn btn-lg btn-primary"
              type="submit"
            >
              <span v-if="!loading" class="indicator-label">
                Submit
                <span class="svg-icon svg-icon-3 ms-2 me-0">
                  <inline-svg src="icons/duotune/arrows/arr064.svg" />
                </span>
              </span>
              <span v-if="loading" class="indicator-progress">
                Please wait...
                <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
              </span>
            </button>
            <!--end::Button-->
          </div>
          <!--end::Modal footer-->
        </el-form>
        <!--end::Form-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ApiService from "@/core/services/ApiService";
import { defineComponent, ref } from "vue";
import { hideModal } from "@/core/helpers/dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useBus } from "../../../../bus";

export default defineComponent({
  name: "add_info",
  components: {},
  props: {
    data: { type: Object },
  },
  setup() {
    const formData = ref({
      id: "",
      name: "",
      designation: "",
      dob: "",
      nid: "",
      mobile: "",
      email: "",
      passport: "",
      driving_license: "",
      gender: "",
      religion: "",
      present_address: "",
      present_district: "",
      permanent_address: "",
      permanent_district: "",
    });
    const formRef = ref<null | HTMLFormElement>(null);
    const addModalRef = ref<null | HTMLElement>(null);
    const loading = ref<boolean>(false);
    const update = ref<boolean>(false);
    const rules = ref({
      name: [
        {
          required: true,
          message: "Name is required",
          trigger: "change",
        },
      ],
      designation: [
        {
          required: true,
          message: "Designation is required",
          trigger: "change",
        },
      ],
      dob: [
        {
          required: true,
          message: "dob is required",
          trigger: "change",
        },
      ],
      nid: [
        {
          required: true,
          message: "NID is required",
          trigger: "change",
        },
      ],
      mobile: [
        {
          required: true,
          message: "Mobile number is required",
          trigger: "change",
        },
      ],
      email: [
        {
          required: true,
          message: "Email is required",
          trigger: "change",
        },
      ],
      //   passport: [
      //     {
      //       required: true,
      //       message: "Email is required",
      //       trigger: "change",
      //     },
      //   ],
      //   driving_license: [
      //     {
      //       required: true,
      //       message: "Email is required",
      //       trigger: "change",
      //     },
      //   ],
      gender: [
        {
          required: true,
          message: "Gender is required",
          trigger: "change",
        },
      ],
      religion: [
        {
          required: true,
          message: "Religion is required",
          trigger: "change",
        },
      ],
      //   present_address: [
      //     {
      //       required: true,
      //       message: "Present Address is required",
      //       trigger: "change",
      //     },
      //   ],
      present_district: [
        {
          required: true,
          message: "Present District is required",
          trigger: "change",
        },
      ],
      //   permanent_address:[
      //     {
      //       required: true,
      //       message: "Permanent Address is required",
      //       trigger: "change",
      //     },
      //   ],
      permanent_district: [
        {
          required: true,
          message: "Permanent District is required",
          trigger: "change",
        },
      ],
    });
    const { bus } = useBus();

    bus.on("edit-modal-data", (data) => {
      update.value = true;
      formData.value = data;
    });

    bus.on("add-modal-data", () => {
      update.value = false;
      formData.value = {
        id: "",
        name: "",
        designation: "",
        dob: "",
        nid: "",
        mobile: "",
        email: "",
        passport: "",
        driving_license: "",
        gender: "",
        religion: "",
        present_address: "",
        present_district: "",
        permanent_address: "",
        permanent_district: "",
      };
    });

    const submit = () => {
      if (!formRef.value) {
        return;
      }

      formRef.value.validate(async (valid) => {
        if (valid) {
          loading.value = true;
          const action = update.value ? "update" : "post";
          const url = update.value
            ? "employee/newProfile" + `${formData?.value?.id}`
            : "employee/newProfile";

          await ApiService[action](url, formData.value)
            .then((response) => {
              loading.value = false;
              bus.emit("role-updated", true);
              if (response.status == 200) {
                Swal.fire({
                  text: response.data.message,
                  icon: "success",
                  buttonsStyling: false,
                  confirmButtonText: "Ok",
                  customClass: {
                    confirmButton: "btn btn-primary",
                  },
                }).then(() => {
                  hideModal(addModalRef.value);
                });
              } else {
                let err = "";
                for (const field of Object.keys(response.data.errors)) {
                  err += response.data.errors[field][0] + "<br>";
                }
                Swal.fire({
                  html: err,
                  icon: "error",
                  buttonsStyling: false,
                  confirmButtonText: "Close",
                  customClass: {
                    confirmButton: "btn btn-danger",
                  },
                });
              }
            })
            .catch(({ response }) => {
              loading.value = false;
              console.log(response);
            });
        }
      });
    };

    return {
      formData,
      rules,
      submit,
      formRef,
      loading,
      addModalRef,
    };
  },
  data() {
    return {
      entityTypes: [],
    };
  },
  async created() {
    //await this.getTypes();
  },
  methods: {
    async getTypes() {
      await ApiService.get("entity/types")
        .then((response) => {
          this.entityTypes = response.data;
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },
  },
});
</script>
