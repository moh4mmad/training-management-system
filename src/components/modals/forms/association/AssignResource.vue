<template>
  <div
    class="modal fade"
    id="kt_modal_assign_role"
    ref="addModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-1000px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header" id="kt_modal_assign_role_header">
          <!--begin::Modal title-->
          <h2 class="fw-bolder">Assign as a Assessor/Trainer</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div
            id="kt_modal_assign_role_close"
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
          @submit.prevent="submit()"
          :validation-schema="Schema"
        >
          <!--begin::Modal body-->
          <div class="modal-body py-10 px-lg-17">
            <!--begin::Scroll-->
            <div
              class="scroll-y me-n7 pe-7"
              id="kt_modal_assign_role_scroll"
              data-kt-scroll="true"
              data-kt-scroll-activate="{default: false, lg: true}"
              data-kt-scroll-max-height="auto"
              data-kt-scroll-dependencies="#kt_modal_assign_role_header"
              data-kt-scroll-wrappers="#kt_modal_assign_role_scroll"
              data-kt-scroll-offset="300px"
            >
              <div class="row">
                <div class="col-md-3">
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

                <div class="col-md-3">
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

                <div class="col-md-3">
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

                <div class="col-md-3">
                  <label class="d-flex align-items-center form-label required">
                    <span>Resource</span>
                  </label>
                  <el-select
                    style="width: 100%"
                    class="form-select-solid"
                    placeholder="Select Role"
                    v-model="entity.resource_type"
                    filterable
                  >
                    <el-option label="Assessor" value="assessor">
                      Assessor</el-option
                    >
                    <el-option label="Trainer" value="trainer">
                      Trainer</el-option
                    >
                  </el-select>
                </div>
              </div>

              <div
                class="row"
                style="margin-top: 3rem !important"
                v-if="entity.resource_type == 'assessor'"
              >
                <h4>Assessor Assessment Specification</h4>
                <div class="col-md-6 mt-3">
                  <label class="fs-6 fw-bold mb-2">
                    <span class="required">Educaiton</span>
                  </label>
                  <el-select
                    style="width: 100%"
                    class="form-select-solid"
                    placeholder="Educaiton"
                    v-model="assessor.highest_level_of_education"
                    filterable
                  >
                    <el-option label="Class - 1" value="2">Class - 1</el-option>
                    <el-option label="Class - 10 or Equivalent" value="11"
                      >Class - 10 or Equivalent</el-option
                    >
                    <el-option label="Class - 2" value="3">Class - 2</el-option>
                    <el-option label="Class - 3" value="4">Class - 3</el-option>
                    <el-option label="Class - 4" value="5">Class - 4</el-option>
                    <el-option label="Class - 5" value="6">Class - 5</el-option>
                    <el-option label="Class - 6" value="7">Class - 6</el-option>
                    <el-option label="Class - 7" value="8">Class - 7</el-option>
                    <el-option label="Class - 8" value="9">Class - 8</el-option>
                    <el-option label="Class - 9" value="16"
                      >Class - 9</el-option
                    >
                    <el-option label="Diploma or Equivalent" value="13"
                      >Diploma or Equivalent</el-option
                    >
                    <el-option label="Graduation or Equivalent" value="14"
                      >Graduation or Equivalent</el-option
                    >
                    <el-option label="Higher Secondary or Equivalent" value="12"
                      >Higher Secondary or Equivalent</el-option
                    >
                    <el-option label="Nursery or Kindergarden" value="1"
                      >Nursery or Kindergarden</el-option
                    >
                    <el-option label="Post-Graduation or Equivalent" value="15"
                      >Post-Graduation or Equivalent</el-option
                    >
                  </el-select>
                </div>
                <div class="col-md-6 mt-3">
                  <label class="fs-6 fw-bold mb-2">
                    <span class="required">Experience</span>
                  </label>
                  <Field
                    v-model="assessor.year_of_experience"
                    name="experience"
                    class="form-control form-control-lg"
                    type="text"
                    placeholder="Year of experience"
                  />
                  <ErrorMessage
                    name="experience"
                    class="fv-plugins-message-container invalid-feedback"
                  ></ErrorMessage>
                </div>
                <div class="col-md-4 mt-3">
                  <label class="fs-6 fw-bold mb-2">
                    <span class="required">Is Certified</span>
                  </label>
                  <el-select
                    style="width: 100%"
                    class="form-select-solid"
                    placeholder="Is Certified"
                    v-model="assessor.is_certified_assessor"
                    filterable
                  >
                    <el-option label="Yes" value="1"> Yes</el-option>
                    <el-option label="No" value="0"> No</el-option>
                  </el-select>
                </div>
                <div class="col-md-8 mt-3">
                  <label class="fs-6 fw-bold mb-2">
                    <span class="">Assessor Body Name</span>
                  </label>
                  <Field
                    v-model="assessor.assessor_body_name"
                    name="assessor_body_name"
                    class="form-control form-control-lg"
                    type="text"
                    placeholder="Assessor Body Name"
                  />
                  <ErrorMessage
                    name="assessor_body_name"
                    class="fv-plugins-message-container invalid-feedback"
                  ></ErrorMessage>
                </div>
                <div class="col-md-6 mt-3">
                  <label class="fs-6 fw-bold mb-2">
                    <span class="required">Area of Expertise</span>
                  </label>
                  <textarea
                    v-model="assessor.area_of_expertise"
                    name="area_of_expertise"
                    class="form-control form-control-lg"
                    placeholder="Area of Expertise"
                  ></textarea>
                  <ErrorMessage
                    name="area_of_expertise"
                    class="fv-plugins-message-container invalid-feedback"
                  ></ErrorMessage>
                </div>
                <div class="col-md-6 mt-3">
                  <label class="fs-6 fw-bold mb-2">
                    <span class="">List of Certification</span>
                  </label>
                  <textarea
                    v-model="assessor.list_of_certification"
                    name="list_of_certification"
                    class="form-control form-control-lg"
                    placeholder="List of Certification"
                  ></textarea>
                  <ErrorMessage
                    name="list_of_certification"
                    class="fv-plugins-message-container invalid-feedback"
                  ></ErrorMessage>
                </div>
              </div>

              <div
                class="row"
                style="margin-top: 3rem !important"
                v-if="entity.resource_type == 'trainer'"
              >
                <h4>Trainer Training Specification</h4>
                <div class="col-md-4 mt-3">
                  <label class="fs-6 fw-bold mb-2">
                    <span class="required">BTEB Registration Number</span>
                  </label>
                  <Field
                    v-model="trainer.bteb_registration_number"
                    name="bteb_registration_number"
                    class="form-control form-control-lg"
                    type="text"
                    placeholder="BTEB Registration Number"
                  />
                  <ErrorMessage
                    name="bteb_registration_number"
                    class="fv-plugins-message-container invalid-feedback"
                  ></ErrorMessage>
                </div>

                <div class="col-md-4 mt-3">
                  <label class="fs-6 fw-bold mb-2">
                    <span class="required">Educaiton</span>
                  </label>
                  <el-select
                    style="width: 100%"
                    class="form-select-solid"
                    placeholder="Educaiton"
                    v-model="trainer.highest_level_of_education"
                    filterable
                  >
                    <el-option label="Class - 1" value="2">Class - 1</el-option>
                    <el-option label="Class - 10 or Equivalent" value="11"
                      >Class - 10 or Equivalent</el-option
                    >
                    <el-option label="Class - 2" value="3">Class - 2</el-option>
                    <el-option label="Class - 3" value="4">Class - 3</el-option>
                    <el-option label="Class - 4" value="5">Class - 4</el-option>
                    <el-option label="Class - 5" value="6">Class - 5</el-option>
                    <el-option label="Class - 6" value="7">Class - 6</el-option>
                    <el-option label="Class - 7" value="8">Class - 7</el-option>
                    <el-option label="Class - 8" value="9">Class - 8</el-option>
                    <el-option label="Class - 9" value="16"
                      >Class - 9</el-option
                    >
                    <el-option label="Diploma or Equivalent" value="13"
                      >Diploma or Equivalent</el-option
                    >
                    <el-option label="Graduation or Equivalent" value="14"
                      >Graduation or Equivalent</el-option
                    >
                    <el-option label="Higher Secondary or Equivalent" value="12"
                      >Higher Secondary or Equivalent</el-option
                    >
                    <el-option label="Nursery or Kindergarden" value="1"
                      >Nursery or Kindergarden</el-option
                    >
                    <el-option label="Post-Graduation or Equivalent" value="15"
                      >Post-Graduation or Equivalent</el-option
                    >
                  </el-select>
                </div>

                <div class="col-md-4 mt-3">
                  <label class="fs-6 fw-bold mb-2">
                    <span class="required">Experience</span>
                  </label>
                  <Field
                    v-model="trainer.year_of_experience"
                    name="experience"
                    class="form-control form-control-lg"
                    type="text"
                    placeholder="Year of experience"
                  />
                  <ErrorMessage
                    name="experience"
                    class="fv-plugins-message-container invalid-feedback"
                  ></ErrorMessage>
                </div>
                <div class="col-md-6 mt-3">
                  <label class="fs-6 fw-bold mb-2">
                    <span class="required">Area of Expertise</span>
                  </label>
                  <textarea
                    v-model="assessor.area_of_expertise"
                    name="area_of_expertise"
                    class="form-control form-control-lg"
                    placeholder="Area of Expertise"
                  ></textarea>
                </div>
                <div class="col-md-6 mt-3">
                  <label class="fs-6 fw-bold mb-2">
                    <span class="">List of Certification</span>
                  </label>
                  <textarea
                    v-model="assessor.list_of_certification"
                    name="list_of_certification"
                    class="form-control form-control-lg"
                    placeholder="List of Certification"
                  ></textarea>
                  <ErrorMessage
                    name="list_of_certification"
                    class="fv-plugins-message-container invalid-feedback"
                  ></ErrorMessage>
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
import { defineComponent } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import Swal from "sweetalert2/dist/sweetalert2.js";
import * as Yup from "yup";

export default defineComponent({
  name: "assign_role",
  components: { Form, Field, ErrorMessage },
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
        resource_type: "",
        resource_id: "",
      },
      assessor: {
        highest_level_of_education: "",
        year_of_experience: "",
        is_certified_assessor: "1",
        assessor_body_name: "",
        area_of_expertise: "",
        list_of_certification: "",
        user_id: "",
      },
      trainer: {
        bteb_registration_number: "",
        highest_level_of_education: "",
        year_of_experience: "",
        area_of_expertise: "",
        list_of_certification: "",
        user_id: "",
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
      this.assessor.user_id = data.employee.user_id;
      this.trainer.user_id = data.employee.user_id;
    });
  },
  methods: {
    async submit() {
      this.loading = true;
      let url =
        this.entity.resource_type == "assessor"
          ? "resource/assessor"
          : "resource/trainer";
      let data =
        this.entity.resource_type == "assessor" ? this.assessor : this.trainer;
      await ApiService.post(url, data)
        .then((response) => {
          this.loading = false;
          if (response.status == 200) {
            this.entity.resource_id = response.data.id;
            this.mapping();
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
    async mapping() {
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
  setup() {
    const Schema = Yup.object().shape({
      experience: Yup.string().required().label("Experience"),
      //assessor_body_name: Yup.string().required().label("Assessor Body Name"),
      bteb_registration_number: Yup.string()
        .required()
        .label("BTEB Registration Number"),
    });
    return {
      Schema,
    };
  },
});
</script>
