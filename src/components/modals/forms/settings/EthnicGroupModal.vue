<template>
  <div
    class="modal fade"
    id="kt_modal_add_ethnic"
    ref="addModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header" id="kt_modal_add_ethnic_header">
          <!--begin::Modal title-->
          <h2 class="fw-bolder">Add Ethnic Group</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div
            id="kt_modal_add_ethnic_close"
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
              id="kt_modal_add_ethnic_scroll"
              data-kt-scroll="true"
              data-kt-scroll-activate="{default: false, lg: true}"
              data-kt-scroll-max-height="auto"
              data-kt-scroll-dependencies="#kt_modal_add_ethnic_header"
              data-kt-scroll-wrappers="#kt_modal_add_ethnic_scroll"
              data-kt-scroll-offset="300px"
            >
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-bold mb-2">
                  <span class="required">Code</span>

                  <i
                    class="fas fa-exclamation-circle ms-1 fs-7"
                    data-bs-toggle="tooltip"
                    title="Code"
                  ></i>
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="code">
                  <el-input v-model="formData.code" />
                </el-form-item>
                <!--end::Input-->
              </div>
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-bold mb-2">
                  <span class="required">Ethnic Group</span>

                  <i
                    class="fas fa-exclamation-circle ms-1 fs-7"
                    data-bs-toggle="tooltip"
                    title="Ethnic Group"
                  ></i>
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="ethnic_group">
                  <el-input v-model="formData.ethnic_group" />
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
              id="kt_modal_add_ethnic_cancel"
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
  name: "add_ethnic",
  components: {},
  props: {
    data: { type: Object },
  },
  setup() {
    const formData = ref({
      code: "",
      id: "",
      ethnic_group: "",
    });
    const formRef = ref<null | HTMLFormElement>(null);
    const addModalRef = ref<null | HTMLElement>(null);
    const loading = ref<boolean>(false);
    const update = ref<boolean>(false);
    const rules = ref({
      code: [
        {
          required: true,
          message: "Code is required",
          trigger: "change",
        },
      ],
      ethnic_group: [
        {
          required: true,
          message: "Ethnic Group is required",
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
        code: "",
        ethnic_group: "",
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
            ? "configurations/ethnic_groups/" + `${formData?.value?.id}`
            : "configurations/ethnic_groups";

          await ApiService[action](url, formData.value)
            .then((response) => {
              loading.value = false;
              bus.emit("ethnic-updated", true);
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
});
</script>
