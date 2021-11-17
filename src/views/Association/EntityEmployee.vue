<template>
  <Form
    @submit="formSubmit()"
    class="form"
    :validation-schema="AssociationSchema"
  >
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
            <div class="row">
              <div class="col-md-6">
                <label class="form-label required">Name</label>
                <Field
                  v-model="employee.name"
                  type="text"
                  name="name"
                  class="form-control form-control-lg"
                  rows="3"
                ></Field>
                <ErrorMessage
                  name="name"
                  class="fv-plugins-message-container invalid-feedback"
                ></ErrorMessage>
              </div>
              <div class="col-md-6">
                <label class="form-label required">Designation</label>
                <Field
                  v-model="employee.designation"
                  name="designation"
                  class="form-control form-control-lg"
                ></Field>
                <ErrorMessage
                  name="designation"
                  class="fv-plugins-message-container invalid-feedback"
                ></ErrorMessage>
              </div>
            </div>

            <div class="row mt-3">
              <div class="col-md-6">
                <label class="form-label required">Date of birth</label>

                <el-form-item prop="date">
                  <el-date-picker
                    v-model="employee.dob"
                    value-format="YYYY-MM-DD"
                    format="DD-MM-YYYY"
                    type="date"
                    name="dob"
                  >
                  </el-date-picker>
                </el-form-item>
                <!--end::Input-->
              </div>
              <div class="col-md-6">
                <label class="form-label">
                  <span>National ID</span>
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <Field
                  v-model="employee.nid"
                  name="nid"
                  class="form-control form-control-lg"
                  value=""
                />
              </div>
            </div>

            <div class="row mt-3">
              <div class="col-md-4">
                <label>
                  <span>Passport</span>
                </label>
                <Field
                  v-model="employee.passport"
                  name="passport"
                  class="form-control form-control-lg"
                  value=""
                />
              </div>
              <div class="col-md-4">
                <label class="form-label">
                  <span>Driving License</span>
                </label>
                <Field
                  v-model="employee.driving_license"
                  name="driving_license"
                  class="form-control form-control-lg"
                  value=""
                />
              </div>
              <div class="col-md-4">
                <label class="form-label required"><span>Mobile</span></label>
                <Field
                  v-model="employee.mobile"
                  name="mobile"
                  class="form-control form-control-lg"
                  value=""
                />
                <ErrorMessage
                  name="mobile"
                  class="fv-plugins-message-container invalid-feedback"
                ></ErrorMessage>
              </div>
            </div>

            <div class="row mt-3">
              <div class="col-md-4">
                <label class="form-label required">
                  <span>Email</span>
                </label>
                <Field
                  v-model="employee.email"
                  name="employeeEmail"
                  class="form-control form-control-lg"
                  value=""
                />
                <ErrorMessage
                  name="employeeEmail"
                  class="fv-plugins-message-container invalid-feedback"
                ></ErrorMessage>
              </div>
              <div class="col-md-4">
                <label class="form-label required">
                  <span>Gender</span>
                </label>
                <Field
                  name="gender"
                  v-model="employee.gender"
                  class="form-select form-select-lg"
                  data-control="select2"
                  data-placeholder="Select..."
                  data-allow-clear="true"
                  data-hide-search="true"
                  as="select"
                >
                  <option value="" disabled selected>Select gender</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                  <option value="O">Other</option>
                </Field>
                <!--end::Input-->
                <ErrorMessage
                  name="gender"
                  class="fv-plugins-message-container invalid-feedback"
                ></ErrorMessage>
              </div>
              <div class="col-md-4">
                <label class="form-label"><span>Religion</span></label>
                <Field
                  v-model="employee.religion"
                  name="religion"
                  class="form-control form-control-lg"
                  value=""
                />
              </div>
            </div>

            <div class="row mt-3">
              <div class="col-md-8">
                <label class="d-flex align-items-center form-label">
                  <span>Present Address</span>
                </label>
                <Field
                  v-model="employee.present_address"
                  name="present_address"
                  class="form-control form-control-lg"
                />
              </div>
              <div class="col-md-4">
                <label class="d-flex align-items-center form-label required">
                  <span>Present District</span>
                </label>
                <el-select
                  class="form-select-solid"
                  placeholder="Select Present District"
                  v-model="employee.present_district"
                  filterable
                >
                  <el-option
                    v-for="district in empDistricts"
                    :key="district.id"
                    :label="district.district_name_eng"
                    :value="district.id"
                    >{{ district.district_name_eng }}</el-option
                  >
                </el-select>
              </div>
            </div>

            <div class="row mt-3">
              <div class="col-md-8">
                <label class="d-flex align-items-center form-label">
                  <span>Permanent Address</span>
                </label>
                <Field
                  v-model="employee.permanent_address"
                  name="permanent_address"
                  class="form-control form-control-lg"
                />
              </div>
              <div class="col-md-4">
                <label class="d-flex align-items-center form-label">
                  <span>Permanent District</span>
                </label>
                <el-select
                  class="form-select-solid"
                  placeholder="Select Permanent District"
                  v-model="employee.permanent_district"
                  name="permanent_district"
                  filterable
                >
                  <el-option
                    v-for="district in empDistricts"
                    :key="district.id"
                    :label="district.district_name_eng"
                    :value="district.id"
                    >{{ district.district_name_eng }}</el-option
                  >
                </el-select>
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
              <div class="row">
                <div class="col-md-12">
                  <label class="fs-6 fw-bold form-label required">Email</label>
                  <Field
                    v-model="employee.email"
                    name="userEmail"
                    class="form-control form-control-lg"
                    type="email"
                    disabled
                  />
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
                      v-model="user.active_status"
                      value="1"
                    />
                    <span class="form-check-label fw-bold"> Active </span>
                  </label>
                </div>
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
        </div>
      </div>
    </div>

    <div class="card-body">
      <div class="d-flex">
        <div>
          <button
            :data-kt-indicator="loading ? 'on' : null"
            class="btn btn-lg btn-primary"
            type="submit"
            @click="formSubmit()"
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
        </div>
      </div>
    </div>
  </Form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import * as Yup from "yup";
import ApiService from "@/core/services/ApiService";

export default defineComponent({
  name: "kt-horizontal-wizard",
  components: {
    Form,
    Field,
    ErrorMessage,
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
        name: "",
        designation: "",
        dob: "",
        nid: "",
        passport: "",
        driving_license: "",
        mobile: "",
        email: "",
        gender: "",
        religion: "",
        present_address: "",
        present_district: "",
        permanent_address: "",
        permanent_district: "",
      },
      user: {
        password: "",
        password_confirmation: "",
        active_status: "1",
      },
      entityTypes: [],
      industry: [],
      entityInfos: [],
      divisions: [],
      districts: [],
      subDistricts: [],
      empDistricts: [],
      loading: false,
    };
  },
  async created() {
    await this.getEntityTypes();
    await this.getIndustry();
    await this.getEntityInfos();
    await this.getDivision();
    await this.getDistrictForEmp();
  },
  methods: {
    async formSubmit() {
      //let data = new FormData();
      let entity = {};
      Object.keys(this.entity).forEach((key) => {
        if (this.entity[key] != "") entity[key] = this.entity[key];
      });
      let employee = {};
      Object.keys(this.employee).forEach((key) => {
        if (this.employee[key] != "") employee[key] = this.employee[key];
      });
      let user = {};
      Object.keys(this.user).forEach((key) => {
        if (this.user[key] != "") user[key] = this.user[key];
      });

      let data = {
        entity: entity,
        employee: employee,
        user: user,
      };
      this.loading = true;
      await ApiService.post("associatioin/new", data)
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
            }).then(() => {
              this.entity = {
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
              };
              this.employee = {
                name: "",
                designation: "",
                dob: "",
                nid: "",
                passport: "",
                driving_license: "",
                mobile: "",
                email: "",
                gender: "",
                religion: "",
                present_address: "",
                present_district: "",
                permanent_address: "",
                permanent_district: "",
              };
              this.user = {
                password: "",
                password_confirmation: "",
                active_status: "1",
              };
            });
          } else {
            let err = "";
            for (const field of Object.keys(response.data.errors)) {
              err += response.data.errors[field][0] + "<br>";
            }
            Swal.fire({
              title: "Please check all the required field",
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
    async getDistrictForEmp() {
      await ApiService.get("geo/districts")
        .then((response) => {
          this.empDistricts = response.data;
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
      email: Yup.string()
        .email("Must be valid email")
        .required()
        .label("Email"),
      web_url: Yup.string().required().label("Web Url"),
      postcode: Yup.string().required().max(4).label("Postcode"),
      registration_number: Yup.string().required().label("Registration Number"),
      registration_authority: Yup.string()
        .required()
        .label("Registration Authority"),
      telephone: Yup.number().required().min(11).label("Telephone"),
      entity_name: Yup.string().required().label("Name"),
      entity_short_name: Yup.string().required().label("Short Name"),

      employeeEmail: Yup.string()
        .email("Must be valid email")
        .required()
        .label("Email"),
      //presentDistrict: Yup.string().required().label("Present District"),
      name: Yup.string().required().label("Name"),
      designation: Yup.string().required().label("Designation"),
      gender: Yup.string().required().label("Gender"),
      mobile: Yup.number().required().min(11).label("Mobile"),
      dob: Yup.string().required().label("Date of Birth"),

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
      AssociationSchema,
    };
  },
});
</script>
