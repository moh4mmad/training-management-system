<template>
  <Form
    @submit.prevent="formSubmit"
    class="form"
    :validation-schema="AssociationSchema"
  >
    <div class="card mb-5 mb-xl-10">
      <div
        class="card-header border-0 cursor-pointer"
        role="button"
        data-bs-toggle="collapse"
        data-bs-target="#create_entity"
        aria-expanded="true"
        aria-controls="form"
      >
        <div class="card-title m-0">
          <h3 class="fw-bolder m-0">Entity Information</h3>
        </div>
      </div>

      <div id="create_entity" class="collapse show">
        <div class="collapse show">
          <div class="card-body border-top p-9">
            <div class="current" data-kt-stepper-element="content">
              <div class="row">
                <div class="col-md-4">
                  <!--begin::Label-->
                  <label class="form-label required">Entity Type</label><br />
                  <!--end::Label-->

                  <el-select
                    class="form-select-solid"
                    placeholder="Select Entity Type"
                    v-model="entity.entity_type_id"
                    filterable
                  >
                    <el-option
                      v-for="types in entityTypes"
                      :key="types.id"
                      :label="types.name"
                      :value="types.id"
                      >{{ types.name }}</el-option
                    >
                  </el-select>
                  <!--end::Input-->
                  <ErrorMessage
                    name="entity_type_id"
                    class="fv-plugins-message-container invalid-feedback"
                  ></ErrorMessage>
                </div>

                <!--end::Input group-->
                <div class="col-md-4">
                  <!--begin::Label-->
                  <label class="form-label">Parent</label> <br />
                  <!--end::Label-->
                  <el-select
                    class="form-select-solid"
                    placeholder="Select Entity Parent"
                    v-model="entity.parent_entity_id"
                    filterable
                  >
                    <el-option
                      v-for="info in entityInfos"
                      :key="info.id"
                      :label="info.entity_short_name"
                      :value="info.id"
                      >{{ info.entity_name }}</el-option
                    >
                  </el-select>
                  <!--end::Input-->
                  <ErrorMessage
                    name="parent_entity_id"
                    class="fv-plugins-message-container invalid-feedback"
                  ></ErrorMessage>
                </div>
                <div class="col-md-4">
                  <!--begin::Label-->
                  <label class="form-label required">Industry Sector</label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-select
                    class="form-select-solid"
                    placeholder="Select Entity Parent"
                    v-model="entity.industry_sector"
                    filterable
                  >
                    <el-option
                      v-for="indus in industry"
                      :key="indus.id"
                      :label="indus.sector_name"
                      :value="indus.id"
                      >{{ indus.sector_name }}</el-option
                    >
                  </el-select>
                  <!--end::Input-->
                  <ErrorMessage
                    name="industry_sector"
                    class="fv-plugins-message-container invalid-feedback"
                  ></ErrorMessage>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-8">
                  <!--begin::Label-->
                  <label class="d-flex align-items-center form-label">
                    <span class="required">Name</span>
                  </label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <Field
                    name="entity_name"
                    class="form-control form-control-lg"
                    v-model="entity.entity_name"
                  />
                  <!--end::Input-->
                  <ErrorMessage
                    name="entity_name"
                    class="fv-plugins-message-container invalid-feedback"
                  ></ErrorMessage>
                </div>
                <div class="col-md-4">
                  <!--begin::Label-->
                  <label class="d-flex align-items-center form-label">
                    <span class="required">Short Name</span>
                  </label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <Field
                    v-model="entity.entity_short_name"
                    name="entity_short_name"
                    class="form-control form-control-lg"
                  />
                  <!--end::Input-->
                  <ErrorMessage
                    name="entity_short_name"
                    class="fv-plugins-message-container invalid-feedback"
                  ></ErrorMessage>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-4">
                  <!--begin::Label-->
                  <label class="d-flex align-items-center form-label">
                    <span>Registration Number</span>
                  </label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <Field
                    v-model="entity.entity_short_name"
                    name="registration_number"
                    class="form-control form-control-lg"
                    value=""
                  />
                </div>
                <div class="col-md-4">
                  <!--begin::Label-->
                  <label class="d-flex align-items-center form-label">
                    <span>Registration Date</span>
                  </label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-form-item prop="date">
                    <el-date-picker
                      v-model="entity.registration_date"
                      value-format="YYYY-MM-DD"
                      format="DD-MM-YYYY"
                      type="date"
                    >
                    </el-date-picker>
                  </el-form-item>
                </div>
                <div class="col-md-4">
                  <!--begin::Label-->
                  <label class="d-flex align-items-center form-label">
                    <span>Registration Authority</span>
                  </label>

                  <Field
                    v-model="entity.registration_authority"
                    name="registration_authority"
                    class="form-control form-control-lg"
                    value=""
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-3">
                  <label class="d-flex align-items-center form-label">
                    <span class="required">Telephone</span>
                  </label>
                  <Field
                    v-model="entity.telephone"
                    name="telephone"
                    class="form-control form-control-lg"
                    value=""
                  />
                  <ErrorMessage
                    name="telephone"
                    class="fv-plugins-message-container invalid-feedback"
                  ></ErrorMessage>
                </div>
                <div class="col-md-3">
                  <label class="d-flex align-items-center form-label">
                    <span>Fax</span>
                  </label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <Field
                    v-model="entity.fax"
                    name="fax"
                    class="form-control form-control-lg"
                    value=""
                  />
                </div>
                <div class="col-md-3">
                  <label class="fs-6 fw-bold form-label required">Email</label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <Field
                    v-model="entity.email"
                    name="email"
                    type="email"
                    class="form-control form-control-lg"
                  />
                  <ErrorMessage
                    name="email"
                    class="fv-plugins-message-container invalid-feedback"
                  ></ErrorMessage>
                </div>
                <div class="col-md-3">
                  <label class="d-flex align-items-center form-label">
                    <span class="required">Web Url</span>
                  </label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <Field
                    v-model="entity.web_url"
                    name="web_url"
                    class="form-control form-control-lg"
                    value=""
                  />
                  <ErrorMessage
                    name="web_url"
                    class="fv-plugins-message-container invalid-feedback"
                  ></ErrorMessage>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="d-flex align-items-center form-label">
                    <span>Address</span>
                  </label>
                  <Field
                    v-model="entity.address"
                    name="address"
                    class="form-control form-control-lg"
                    value=""
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-3">
                  <label class="form-label">Division</label>
                  <el-select
                    class="form-select-solid"
                    placeholder="Select Entity Parent"
                    v-model="entity.division"
                    filterable
                    @change="getDistrict()"
                  >
                    <el-option
                      v-for="division in divisions"
                      :key="division.id"
                      :label="division.division_name_eng"
                      :value="division.id"
                      >{{ division.division_name_eng }}</el-option
                    >
                  </el-select>
                </div>
                <div class="col-md-3">
                  <label class="form-label">District</label>
                  <el-select
                    class="form-select-solid"
                    placeholder="Select Entity Parent"
                    v-model="entity.district"
                    filterable
                    @change="getSubDistrict()"
                  >
                    <el-option
                      v-for="district in districts"
                      :key="district.id"
                      :label="district.district_name_eng"
                      :value="district.id"
                      >{{ district.district_name_eng }}</el-option
                    >
                  </el-select>
                </div>
                <div class="col-md-3">
                  <label class="form-label">Sub District</label>
                  <el-select
                    class="form-select-solid"
                    placeholder="Select Entity Parent"
                    v-model="entity.sub_district"
                    filterable
                  >
                    <el-option
                      v-for="sub_district in subDistricts"
                      :key="sub_district.id"
                      :label="sub_district.upazila_name_eng"
                      :value="sub_district.id"
                      >{{ sub_district.upazila_name_eng }}</el-option
                    >
                  </el-select>
                </div>
                <div class="col-md-3">
                  <label class="form-label">Postcode</label>
                  <Field
                    v-model="entity.postcode"
                    name="address"
                    class="form-control form-control-lg"
                    value=""
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="d-flex align-items-center form-label">
                    <span>Description</span>
                  </label>
                  <textarea
                    v-model="entity.entity_description"
                    name="description"
                    class="form-control form-control-lg"
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  <label
                    class="
                      form-check form-switch form-check-custom form-check-solid
                    "
                  >
                    <Field
                      type="checkbox"
                      class="form-check-input"
                      name="active_status"
                      v-model="entity.active_status"
                      value="1"
                    />
                    <span class="form-check-label fw-bold"> Active </span>
                  </label>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="form-label">Status Description</label>
                  <Field
                    v-model="entity.status_remarks"
                    name="status_remarks"
                    class="form-control form-control-lg"
                  ></Field>
                  <div class="form-text">
                    Add description for inactive status. Leave empty for active
                    entity.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card mb-5 mb-xl-10">
      <div
        class="card-header border-0 cursor-pointer"
        role="button"
        data-bs-toggle="collapse"
        data-bs-target="#employee_information"
        aria-expanded="true"
        aria-controls="form"
      >
        <div class="card-title m-0">
          <h3 class="fw-bolder m-0">Employee Information</h3>
        </div>
      </div>
      <div id="employee_information" class="collapse show">
        <div class="collapse show">
          <div class="card-body border-top p-9">
            <div data-kt-stepper-element="content">
              <Step2></Step2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card mb-5 mb-xl-10">
      <div
        class="card-header border-0 cursor-pointer"
        role="button"
        data-bs-toggle="collapse"
        data-bs-target="#user_account"
        aria-expanded="true"
        aria-controls="form"
      >
        <div class="card-title m-0">
          <h3 class="fw-bolder m-0">Add User Account</h3>
        </div>
      </div>

      <div id="user_account" class="collapse show">
        <div class="collapse show">
          <div class="card-body border-top p-9">
            <div data-kt-stepper-element="content">
              <Step3></Step3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card-body">
      <div class="d-flex">
        <div>
          <button
            type="submit"
            class="btn btn-lg btn-primary"
            data-kt-stepper-action="submit"
          >
            <span class="indicator-label">
              Submit
              <span class="svg-icon svg-icon-3 ms-2 me-0">
                <inline-svg src="media/icons/duotune/arrows/arr064.svg" />
              </span>
            </span>
            <span class="indicator-progress">
              Please wait...
              <span
                class="spinner-border spinner-border-sm align-middle ms-2"
              ></span>
            </span>
          </button>
        </div>
      </div>
    </div>
  </Form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
//import Swal from "sweetalert2/dist/sweetalert2.min.js";
import * as Yup from "yup";
import Step2 from "@/components/association/wizard/steps/Profile.vue";
import Step3 from "@/components/association/wizard/steps/User.vue";
import ApiService from "@/core/services/ApiService";

export default defineComponent({
  name: "kt-horizontal-wizard",
  components: {
    Form,
    Field,
    ErrorMessage,
    Step2,
    Step3,
  },
  data() {
    return {
      entity: {
        entity_type_id: "",
        email: "",
        telephone: "",
        industry_sector: "",
        web_url: "",
        address: "",
        parent_entity_id: "",
        postcode: "",
        division: "",
        district: "",
        sub_district: "",
        entity_description: "",
        status: "",
        active_status: "1",
        status_remarks: "",
        fax: "",
        name: "",
        entity_short_name: "",
        registration_number: "",
        registration_date: "",
        registration_authority: "",
      },
      employee: {
        employeeName: "",
        designation: "",
        dob: "",
        nationalID: "",
        passport: "",
        drivingLicense: "",
        mobile: "",
        gender: "",
        religion: "",
        employeeEmail: "",
        presentAddress: "",
        presentDistrict: "",
        permanentAddress: "",
        permanentDistrict: "",
      },
      user: {
        password: "",
        confirmPassword: "",
      },
      entityTypes: [],
      industry: [],
      entityInfos: [],
      divisions: [],
      districts: [],
      subDistricts: [],
    };
  },
  async created() {
    await this.getEntityTypes();
    await this.getIndustry();
    await this.getEntityInfos();
    await this.getDivision();
  },
  methods: {
    formSubmit() {
      //alert("pl");
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
    async getEntityTypes() {
      await ApiService.get("entity/types")
        .then((response) => {
          this.entityTypes = response.data;
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },
    async getIndustry() {
      await ApiService.get("configurations/industry_sectors")
        .then((response) => {
          this.industry = response.data;
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },
    async getDivision() {
      await ApiService.get("geo/divisions")
        .then((response) => {
          this.divisions = response.data;
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },
    async getDistrict() {
      await ApiService.get("geo/districts?division=" + this.entity.division)
        .then((response) => {
          this.districts = response.data;
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },
    async getSubDistrict() {
      await ApiService.get(
        "geo/upazilas?division=" +
          this.entity.division +
          "&district=" +
          this.entity.district
      )
        .then((response) => {
          this.subDistricts = response.data;
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },
  },
  setup() {
    const AssociationSchema = Yup.object().shape({
      //entity_type_id: Yup.string().required().label("Entity Type"),
      email: Yup.string()
        .email("Must be valid email")
        .required()
        .label("Email"),
      //industry_sector: Yup.string().required().label("Idustry Sector"),
      web_url: Yup.string().required().label("Web Url"),
      telephone: Yup.string().required().label("Telephone"),
      entity_name: Yup.string().required().label("Name"),
      entity_short_name: Yup.string().required().label("Short Name"),

      employeeEmail: Yup.string()
        .email("Must be valid email")
        .required()
        .label("Email"),
      presentDistrict: Yup.string().required().label("Present District"),
      name: Yup.string().required().label("Name"),
      designation: Yup.string().required().label("Designation"),
      gender: Yup.string().required().label("Gender"),
      mobile: Yup.string().required().min(11).label("Mobile"),
      dob: Yup.string().required().label("Date of Birth"),

      password: Yup.string().required().min(8).label("Password"),
      confirmPassword: Yup.string()
        .required()
        .min(8)
        .label("Confirmation Password"),
    });
    return {
      AssociationSchema,
    };
  },
});
</script>
