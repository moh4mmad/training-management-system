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
                  <span class="required">Types</span>

                  <i
                    class="fas fa-exclamation-circle ms-1 fs-7"
                    data-bs-toggle="tooltip"
                    title="Types"
                  ></i>
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="entity_type_id">
                  <el-select
                    class="form-select-solid"
                    placeholder="Select Entity Type"
                    v-model="formData.entity_type_id"
                  >
                    <el-option
                      v-for="types in entityTypes"
                      :key="types.id"
                      :label="types.name"
                      :value="types.id"
                      >{{ types.name }}</el-option
                    >
                  </el-select>
                </el-form-item>
                <!--end::Input-->
              </div>
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-bold mb-2">
                  <span class="required">Registration Number</span>

                  <i
                    class="fas fa-exclamation-circle ms-1 fs-7"
                    data-bs-toggle="tooltip"
                    title="Registration Number"
                  ></i>
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="registration_number">
                  <el-input v-model="formData.registration_number" />
                </el-form-item>
                <!--end::Input-->
              </div>
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-bold mb-2">
                  <span class="required">Registration Authority</span>

                  <i
                    class="fas fa-exclamation-circle ms-1 fs-7"
                    data-bs-toggle="tooltip"
                    title="Registration Authority"
                  ></i>
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="registration_authority">
                  <el-input v-model="formData.registration_authority" />
                </el-form-item>
                <!--end::Input-->
              </div>
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-bold mb-2">
                  <span class="required">Postcode</span>

                  <i
                    class="fas fa-exclamation-circle ms-1 fs-7"
                    data-bs-toggle="tooltip"
                    title="Postcode"
                  ></i>
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="postcode">
                  <el-input v-model="formData.postcode" />
                </el-form-item>
                <!--end::Input-->
              </div>
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-bold mb-2">
                  <span class="required">Sub-district</span>

                  <i
                    class="fas fa-exclamation-circle ms-1 fs-7"
                    data-bs-toggle="tooltip"
                    title="Sub-district"
                  ></i>
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="sub_district">
                  <el-input v-model="formData.sub_district" />
                </el-form-item>
                <!--end::Input-->
              </div>
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-bold mb-2">
                  <span class="required">District</span>

                  <i
                    class="fas fa-exclamation-circle ms-1 fs-7"
                    data-bs-toggle="tooltip"
                    title="District"
                  ></i>
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="district">
                  <el-input v-model="formData.district" />
                </el-form-item>
                <!--end::Input-->
              </div>
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-bold mb-2">
                  <span class="required">Division</span>

                  <i
                    class="fas fa-exclamation-circle ms-1 fs-7"
                    data-bs-toggle="tooltip"
                    title="Division"
                  ></i>
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="division">
                  <el-input v-model="formData.division" />
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
      registration_number: "",
      registration_authority: "",
      postcode: "",
      sub_district: "",
      district: "",
      division: "",
    });
    const formRef = ref<null | HTMLFormElement>(null);
    const addModalRef = ref<null | HTMLElement>(null);
    const loading = ref<boolean>(false);
    const update = ref<boolean>(false);
    const rules = ref({
      registration_number: [
        {
          required: true,
          message: "Role Name is required",
          trigger: "change",
        },
      ],
      registration_authority: [
        {
          required: true,
          message: "Role Title is required",
          trigger: "change",
        },
      ],
      postcode: [
        {
          required: true,
          message: "Level is required",
          trigger: "change",
        },
      ],
      sub_district: [
        {
          required: true,
          message: "Sub District is required",
          trigger: "change",
        },
      ],
      district: [
        {
          required: true,
          message: "District is required",
          trigger: "change",
        },
      ],
      division: [
        {
          required: true,
          message: "Division is required",
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
        registration_number: "",
        registration_authority: "",
        postcode: "",
        sub_district: "",
        district: "",
        division: "",
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
            ? "entity/infos/" + `${formData?.value?.id}`
            : "entity/infos";

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
    await this.getTypes();
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
