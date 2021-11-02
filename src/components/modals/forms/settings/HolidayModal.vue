<template>
  <div
    class="modal fade"
    id="kt_modal_add_holiday"
    ref="addHolidayModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header" id="kt_modal_add_holiday_header">
          <!--begin::Modal title-->
          <h2 class="fw-bolder">Add Holiday</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div
            id="kt_modal_add_holiday_close"
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
              id="kt_modal_add_holiday_scroll"
              data-kt-scroll="true"
              data-kt-scroll-activate="{default: false, lg: true}"
              data-kt-scroll-max-height="auto"
              data-kt-scroll-dependencies="#kt_modal_add_holiday_header"
              data-kt-scroll-wrappers="#kt_modal_add_holiday_scroll"
              data-kt-scroll-offset="300px"
            >
              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-bold mb-2">
                  <span class="required">Year</span>

                  <i
                    class="fas fa-exclamation-circle ms-1 fs-7"
                    data-bs-toggle="tooltip"
                    title="Email address must be active"
                  ></i>
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="email">
                  <el-input v-model="formData.year" />
                </el-form-item>
                <!--end::Input-->
              </div>
              <!--end::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-bold mb-2">
                  <span class="required">Type</span>

                  <i
                    class="fas fa-exclamation-circle ms-1 fs-7"
                    data-bs-toggle="tooltip"
                    title="Email address must be active"
                  ></i>
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="email">
                  <el-input v-model="formData.holiday_type" />
                </el-form-item>
                <!--end::Input-->
              </div>
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-bold mb-2">
                  <span class="required">Name</span>

                  <i
                    class="fas fa-exclamation-circle ms-1 fs-7"
                    data-bs-toggle="tooltip"
                    title="Email address must be active"
                  ></i>
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="email">
                  <el-input v-model="formData.holiday_name" />
                </el-form-item>
                <!--end::Input-->
              </div>
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-bold mb-2">
                  <span class="required">Date</span>

                  <i
                    class="fas fa-exclamation-circle ms-1 fs-7"
                    data-bs-toggle="tooltip"
                    title="Email address must be active"
                  ></i>
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="date">
                  <el-date-picker v-model="formData.date" type="date">
                  </el-date-picker>
                </el-form-item>
                <!--end::Input-->
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
              id="kt_modal_add_holiday_cancel"
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
import {
    defineComponent,
    ref
} from "vue";
import {
    hideModal
} from "@/core/helpers/dom";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default defineComponent({
            name: "add_holiday-modal",
            components: {},
            data() {
                return {
                    formData: {
                      name: "",
                      year: "",
                      holiday_type: "",
                      date: "",
                    },
                    rules: [{
                        name: [{
                            required: true,
                            message: "Name is required",
                            trigger: "change",
                        }, ],
                        year: [{
                            required: true,
                            message: "Year is required",
                            trigger: "change",
                        }, ],
                        holiday_type: [{
                            required: true,
                            message: "Type is required",
                            trigger: "change",
                        }, ],
                        date: [{
                            type: 'date',
                            required: true,
                            message: "Date is required",
                            trigger: "change",
                        }, ],
                    }]
                };
            },
            methods: {
                async submit() {
                    await ApiService.post("configurations/holidays", this.formData)
                        .then((response) => {
                           Swal.fire({
                              text: response.data.message,
                              icon: "success",
                              buttonsStyling: false,
                              confirmButtonText: "Ok, got it!",
                              customClass: {
                                confirmButton: "btn btn-primary",
                              },
                            }).then(() => {
                              hideModal(addHolidayModalRef.value);
                            });
                        })
                        .catch(({
                            response
                        }) => {
                            console.log(response);
                        });
                },
            });
</script>
