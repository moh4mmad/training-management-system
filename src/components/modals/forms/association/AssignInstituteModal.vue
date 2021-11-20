<template>
  <div
    class="modal fade"
    id="kt_modal_assign_institute"
    ref="addModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header" id="kt_modal_assign_institute_header">
          <!--begin::Modal title-->
          <h2 class="fw-bolder">Assign to a Training Institute</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div
            id="kt_modal_assign_institute_close"
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
        <form @submit.prevent="submit()">
          <!--begin::Modal body-->
          <div class="modal-body py-10 px-lg-17">
            <!--begin::Scroll-->
            <div
              class="scroll-y me-n7 pe-7"
              id="kt_modal_assign_institute_scroll"
              data-kt-scroll="true"
              data-kt-scroll-activate="{default: false, lg: true}"
              data-kt-scroll-max-height="auto"
              data-kt-scroll-dependencies="#kt_modal_assign_institute_header"
              data-kt-scroll-wrappers="#kt_modal_assign_institute_scroll"
              data-kt-scroll-offset="300px"
            >
              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="d-flex align-items-center form-label required">
                    <span>Entity</span>
                  </label>
                  <el-select
                    style="width: 100%"
                    class="form-select-solid"
                    placeholder="Select Entity"
                    filterable
                    v-model="entityId"
                    @change="trainingInstitute()"
                  >
                    <el-option
                      v-for="info in entityInfos"
                      :key="info.id"
                      :label="
                        '[' + info.entity_short_name + '] - ' + info.entity_name
                      "
                      :value="info.id"
                      >{{
                        "[" + info.entity_short_name + "] - " + info.entity_name
                      }}</el-option
                    >
                  </el-select>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="d-flex align-items-center form-label required">
                    <span>Training Institute</span>
                  </label>
                  <el-select
                    style="width: 100%"
                    class="form-select-solid"
                    placeholder="Select Training Institute"
                    v-model="obj"
                    @change="getRoles()"
                    filterable
                    value-key="id"
                  >
                    <el-option
                      v-for="training in institutes"
                      :key="training.id"
                      :label="
                        '[' +
                        training.entity_short_name +
                        '] - ' +
                        training.entity_name
                      "
                      :value="training"
                      >{{
                        "[" +
                        training.entity_short_name +
                        "] - " +
                        training.entity_name
                      }}</el-option
                    >
                  </el-select>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="d-flex align-items-center form-label required">
                    <span>Role</span>
                  </label>
                  <el-select
                    style="width: 100%"
                    class="form-select-solid"
                    placeholder="Select Role"
                    v-model="entity.entity_type_role_id"
                    filterable
                  >
                    <el-option
                      v-for="info in entityRoles"
                      :key="info.id"
                      :label="info.role_name + ' - ' + info.role_title"
                      :value="info.id"
                      >{{ info.role_name + " - " + info.role_title }}</el-option
                    >
                  </el-select>
                </div>
              </div>
            </div>
            <!--end::Scroll-->
          </div>
          <!--end::Modal body-->

          <!--begin::Modal footer-->
          <div class="modal-footer flex-center">
            <!--begin::Button-->
            <button data-bs-dismiss="modal" class="btn btn-light me-3">
              Close
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
        </form>
        <!--end::Form-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ApiService from "@/core/services/ApiService";
import { defineComponent } from "vue";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default defineComponent({
  name: "assign_institute",
  components: {},
  data() {
    return {
      obj: {
        entity_type_id: "",
        id: "",
      },
      entity: {
        entity_type_id: "",
        entity_type_role_id: "",
        user_id: "",
        entity_info_id: "",
        institute_info_id: "",
      },
      entityId: "",
      entityRoles: [],
      entityInfos: [],
      institutes: [],
      loading: false,
    };
  },
  async created() {
    await this.getEntityInfos();
    this.emitter.on("assign_data", async (data) => {
      this.entity.user_id = data.employee.user_id;
    });
  },
  methods: {
    async submit() {
      this.loading = true;
      await ApiService.post("mapping/userEntityRoleMapping", this.entity)
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
    async getEntityInfos() {
      await ApiService.get("entity/infos")
        .then((response) => {
          this.entityInfos = response.data;
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },

    async trainingInstitute() {
      await ApiService.get("entity/trainingInstitutes/" + this.entityId)
        .then((response) => {
          this.institutes = response.data;
          this.obj = {
            entity_type_id: "",
            id: "",
          };
          this.entity.entity_type_role_id = "";
          this.entityRoles = [];
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },

    async getRoles() {
      this.entity.entity_type_id = this.obj.entity_type_id;
      this.entity.entity_info_id = this.entityId;
      this.entity.institute_info_id = this.obj.id;
      await ApiService.get(
        "entity/type_roles?entity_type=" + this.entity.entity_type_id
      )
        .then((response) => {
          this.entityRoles = response.data;
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },
  },
});
</script>
