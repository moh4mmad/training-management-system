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
                    title="Year"
                  ></i>
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="year">
                  <el-select
                    class="form-select-solid"
                    placeholder="Select Year"
                    v-model="formData.year"
                  >
                    <el-option label="2021" value="2021">2021</el-option>
                    <el-option label="2022" value="2022">2022</el-option>
                    <el-option label="2023" value="2023">2023</el-option>
                    <el-option label="2024" value="2024">2024</el-option>
                    <el-option label="2025" value="2025">2025</el-option>
                    <el-option label="2026" value="2026">2026</el-option>
                    <el-option label="2027" value="2027">2027</el-option>
                    <el-option label="2028" value="2028">2028</el-option>
                    <el-option label="2029" value="2029">2029</el-option>
                    <el-option label="2030" value="2030">2030</el-option>
                  </el-select>
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
                    title="Type"
                  ></i>
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="holiday_type">
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
                    title="Name"
                  ></i>
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="holiday_name">
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
                    title="Date"
                  ></i>
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="date">
                  <el-date-picker
                    v-model="formData.date"
                    value-format="YYYY-MM-DD"
                    format="DD-MM-YYYY"
                    type="date"
                  >
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
import { defineComponent, ref } from "vue";
import { hideModal } from "@/core/helpers/dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useBus } from "../../../../bus";

export default defineComponent({
  name: "add_holiday-modal",
  components: {},
  props: {
    data: { type: Object },
  },
  setup(props) {
    const formData = ref(props.data);
    const formRef = ref<null | HTMLFormElement>(null);
    const addHolidayModalRef = ref<null | HTMLElement>(null);
    const loading = ref<boolean>(false);
    const update = ref<boolean>(false);
    const rules = ref({
      year: [
        {
          required: true,
          message: "Year is required",
          trigger: "change",
        },
      ],
      holiday_type: [
        {
          required: true,
          message: "Type is required",
          trigger: "change",
        },
      ],
      date: [
        {
          type: "date",
          required: true,
          message: "Date is required",
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
        holiday_name: "",
        year: "2021",
        holiday_type: "",
        date: "",
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
            ? "configurations/holidays/" + `${formData?.value?.id}`
            : "configurations/holidays";

          await ApiService[action](url, formData.value)
            .then((response) => {
              loading.value = false;
              bus.emit("holiday-updated", true);
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
                  hideModal(addHolidayModalRef.value);
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
      addHolidayModalRef,
    };
  },
});
</script>
