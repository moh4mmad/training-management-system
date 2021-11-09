<template>
  <!--begin::Wrapper-->
  <div class="w-lg-900px bg-white rounded shadow-sm p-10 mx-auto row">
    <div class="col-md-6">
      <div class="mb-6">
        <img alt="Logo" src="media/logos/logo-1.svg" class="h-50px" />
      </div>
      <h2 class="text-dark mt-3">
        Skills for Employment Investment Program (SEIP)
      </h2>
      <div>
        <p class="mb-0">Probashi Kalyan Bhaban (Level-16)</p>
        <p>71-72 Old Elephant Road, Eskaton Garden, Dhaka-1000.</p>
        <hr class="border-white" />
        <p class="mb-0">Developed and Maintained By</p>
        <p class="mb-0 text-secondary">
          <a href="//tappware.com" target="_blank" class="text-bold"
            >TAPPWARE Solutions Limited</a
          >
        </p>
      </div>
      <div class="mt-6">
        <img src="media/logos/bangladesh-govt.png" class="mr-2 h-65px" />
        <img src="media/logos/Adb-logo-block.jpg" class="mr-2 h-65px" />
        <img src="media/logos/sdc.png" class="h-65px" />
      </div>
    </div>
    <div class="col-md-6">
      <Form
        class="form w-100"
        id="kt_login_signin_form"
        @submit="onSubmitLogin"
        :validation-schema="login"
      >
        <div class="text-center mb-10">
          <h1 class="text-dark mb-3">Sign-in to system</h1>
        </div>

        <!--begin::Input group-->
        <div class="fv-row mb-10">
          <!--begin::Label-->
          <label class="form-label fs-6 fw-bolder text-dark">Username</label>
          <!--end::Label-->

          <!--begin::Input-->
          <Field
            class="form-control form-control-lg form-control-solid"
            type="text"
            name="username"
            autocomplete="off"
          />
          <!--end::Input-->
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="username" />
            </div>
          </div>
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div class="fv-row mb-10">
          <!--begin::Wrapper-->
          <div class="d-flex flex-stack mb-2">
            <!--begin::Label-->
            <label class="form-label fw-bolder text-dark fs-6 mb-0"
              >Password</label
            >
            <!--end::Label-->

            <!--begin::Link-->
            <router-link
              to="/password-reset"
              class="link-primary fs-6 fw-bolder"
            >
              Forgot Password ?
            </router-link>
            <!--end::Link-->
          </div>
          <!--end::Wrapper-->

          <!--begin::Input-->
          <Field
            class="form-control form-control-lg form-control-solid"
            type="password"
            name="password"
            autocomplete="off"
          />
          <!--end::Input-->
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="password" />
            </div>
          </div>
        </div>
        <!--end::Input group-->

        <!--begin::Actions-->
        <div class="text-center">
          <!--begin::Submit button-->
          <button
            type="submit"
            ref="submitButton"
            id="kt_sign_in_submit"
            class="btn btn-lg btn-primary w-100 mb-5"
          >
            <span class="indicator-label"> Continue </span>

            <span class="indicator-progress">
              Please wait...
              <span
                class="spinner-border spinner-border-sm align-middle ms-2"
              ></span>
            </span>
          </button>
          <!--end::Submit button-->
        </div>
        <!--end::Actions-->
      </Form>
    </div>
  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import { Actions } from "@/store/enums/StoreEnums";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import * as Yup from "yup";

export default defineComponent({
  name: "sign-in",
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const submitButton = ref<HTMLElement | null>(null);
    const login = Yup.object().shape({
      username: Yup.string().required().label("username"),
      password: Yup.string().min(6).required().label("Password"),
    });

    const onSubmitLogin = (values) => {
      store.dispatch(Actions.LOGOUT);
      if (submitButton.value) {
        submitButton.value.setAttribute("data-kt-indicator", "on");
      }
      setTimeout(() => {
        store
          .dispatch(Actions.LOGIN, values)
          .then(() => {
            router.push({ name: "dashboard" });
          })
          .catch(() => {
            Swal.fire({
              text: store.getters.getErrors,
              icon: "error",
              buttonsStyling: false,
              confirmButtonText: "Try again",
              customClass: {
                confirmButton: "btn fw-bold btn-danger",
              },
            });
          });
        submitButton.value?.removeAttribute("data-kt-indicator");
      }, 2000);
    };
    return {
      onSubmitLogin,
      login,
      submitButton,
    };
  },
});
</script>
