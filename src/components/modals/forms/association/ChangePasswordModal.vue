<template>
  <div
    class="modal fade"
    id="kt_modal_change_pass"
    ref="addModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header" id="kt_modal_change_pass_header">
          <!--begin::Modal title-->
          <h2 class="fw-bolder">Change Password</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div
            id="kt_modal_change_pass_close"
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
        <Form
          class="form"
          :validation-schema="Schema"
          @submit.prevent="submit()"
        >
          <!--begin::Modal body-->
          <div class="modal-body py-10 px-lg-17">
            <!--begin::Scroll-->
            <div
              class="scroll-y me-n7 pe-7"
              id="kt_modal_change_pass_scroll"
              data-kt-scroll="true"
              data-kt-scroll-activate="{default: false, lg: true}"
              data-kt-scroll-max-height="auto"
              data-kt-scroll-dependencies="#kt_modal_change_pass_header"
              data-kt-scroll-wrappers="#kt_modal_change_pass_scroll"
              data-kt-scroll-offset="300px"
            >
              <div class="row">
                <div class="col-md-12">
                  <!--begin::Label-->
                  <label class="fs-6 fw-bold mb-2">
                    <span class="required">Username</span>

                    <i
                      class="fas fa-exclamation-circle ms-1 fs-7"
                      data-bs-toggle="tooltip"
                      title="Username"
                    ></i>
                  </label>
                  <Field
                    v-model="user.username"
                    name="username"
                    class="form-control form-control-lg"
                    type="text"
                    disabled
                  />
                  <!--end::Input-->
                </div>
                <div class="row mt-3">
                  <div class="col-md-6">
                    <label class="d-flex align-items-center form-label">
                      <span class="required">Password</span>
                    </label>
                    <Field
                      v-model="user.password"
                      name="password"
                      class="form-control form-control-lg"
                      type="password"
                    />
                    <ErrorMessage
                      name="password"
                      class="fv-plugins-message-container invalid-feedback"
                    ></ErrorMessage>
                  </div>
                  <div class="col-md-6">
                    <label class="d-flex align-items-center form-label">
                      <span class="required">Confirm Password</span>
                    </label>
                    <Field
                      v-model="user.password_confirmation"
                      name="confirmPassword"
                      class="form-control form-control-lg"
                      type="password"
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      class="fv-plugins-message-container invalid-feedback"
                    ></ErrorMessage>
                  </div>
                </div>
              </div>
            </div>
            <!--end::Scroll-->
          </div>
          <!--end::Modal body-->

          <!--begin::Modal footer-->
          <div class="modal-footer flex-center">
            <!--begin::Button-->
            <button
              data-bs-dismiss="modal"
              id="kt_modal_change_pass_cancel"
              class="btn btn-light me-3"
            >
              Close
            </button>
            <!--end::Button-->

            <!--begin::Button-->
            <button
              :data-kt-indicator="loading ? 'on' : null"
              class="btn btn-lg btn-primary"
              type="submit"
              @click="submit()"
            >
              <span v-if="!loading" class="indicator-label">
                Submit
                <span class="svg-icon svg-icon-3 ms-2 me-0">
                  <inline-svg src="media/icons/duotune/arrows/arr064.svg" />
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
        </Form>
        <!--end::Form-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ApiService from "@/core/services/ApiService";
import { Form, Field, ErrorMessage } from "vee-validate";
import { defineComponent } from "vue";
import Swal from "sweetalert2/dist/sweetalert2.js";
import * as Yup from "yup";

export default defineComponent({
  name: "password_change",
  components: {
    Field,
    ErrorMessage,
    Form,
  },

  data() {
    return {
      user: {
        username: "",
        password: "",
        password_confirmation: "",
        user_id: "",
      },
      loading: false,
    };
  },
  created() {
    this.emitter.on("user-data", async (data) => {
      this.user.username = data.email;
      this.user.user_id = data.user_id;
    });
  },
  methods: {
    async submit() {
      this.loading = true;
      await ApiService.post("employee/changePassword", this.user)
        .then((response) => {
          this.loading = false;
          if (response.status == 200) {
            Swal.fire({
              text: response.data.message,
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok",
              customClass: {
                confirmButton: "btn btn-primary",
              },
            });
          } else {
            let err = "";
            for (const field of Object.keys(response.data.errors)) {
              err += response.data.errors[field][0] + "<br>";
            }
            Swal.fire({
              title: "Error",
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
          this.loading = false;
          Swal.fire({
            title: "Unknown error",
            html: response.data.error,
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Close",
            customClass: {
              confirmButton: "btn btn-danger",
            },
          });
          console.log(response);
        });
    },
  },
  setup() {
    const Schema = Yup.object().shape({
      password: Yup.string()
        .required()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        )
        .label("Password"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Password didn't match!")
        .label("Confirm Password"),
    });
    return {
      Schema,
    };
  },
});
</script>
