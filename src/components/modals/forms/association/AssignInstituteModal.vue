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
                    class="form-select-solid"
                    placeholder="Select Entity"
                    v-model="entity.entity_type"
                    filterable
                    @change="getRoles()"
                  >
                    <el-option
                      v-for="info in entityInfos"
                      :key="info.id"
                      :label="info.entity_name"
                      :value="info.entity_type_id"
                      >{{ info.entity_name }}</el-option
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
                    class="form-select-solid"
                    placeholder="Select Training Institute"
                    filterable
                  >
                    <el-option></el-option>
                  </el-select>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="d-flex align-items-center form-label required">
                    <span>Role</span>
                  </label>
                  <el-select
                    class="form-select-solid"
                    placeholder="Select Role"
                    filterable
                  >
                    <el-option></el-option>
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
            <button
              type="reset"
              id="kt_modal_assign_institute_cancel"
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
import { defineComponent } from "vue";

export default defineComponent({
  name: "assign_institute",
  components: {},
  data() {
    return {
      entity: {
        entity_type: "",
        role: "",
      },
      entityRoles: [],
      entityInfos: [],
      loading: false,
    };
  },
  async created() {
    await this.getEntityInfos();
  },
  methods: {
    async getEntityInfos() {
      await ApiService.get("entity/infos")
        .then((response) => {
          this.entityInfos = response.data;
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },
    async getRoles() {
      await ApiService.get(
        "entity/type_roles?entity_type=" + this.entity.entity_type
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
