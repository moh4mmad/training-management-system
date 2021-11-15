<template>
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
              <label class="form-label"><span>Gender</span></label>
              <Field
                v-model="employee.gender"
                name="gender"
                class="form-control form-control-lg"
                value=""
              />
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
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="card-body">
    <div class="d-flex"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import ApiService from "@/core/services/ApiService";
import { useRoute } from "vue-router";
// import Swal from "sweetalert2/dist/sweetalert2.js";

export default defineComponent({
  name: "profile",
  components: {},
  setup() {
    const route = useRoute();
    const entityInfoID = route.params.id;
    return { entityInfoID };
  },
  data() {
    return {
      tableHeader: [
        {
          name: "Photo",
          key: "photo",
          sortable: true,
        },
        {
          name: "Name",
          key: "name",
          sortable: true,
        },
        {
          name: "Designation",
          key: "designation",
          sortable: true,
        },
        {
          name: "Date of Birth",
          key: "dob",
          sortable: true,
        },
        {
          name: "NID",
          key: "nid",
          sortable: false,
        },
        {
          name: "Mobile",
          key: "mobile",
          sortable: false,
        },
        {
          name: "Email",
          key: "email",
          sortable: false,
        },
        {
          name: "Action",
          key: "actions",
          sortable: true,
        },
      ],
      employee: {
        name: "test",
        designation: "test",
        dob: "02.03.2021",
        nid: "125478",
        passport: "78895623145",
        driving_license: "7878787878",
        mobile: "78458956",
        email: "test@gmail.com",
        gender: "M",
        religion: "Islam",
        present_address: "test",
        permanent_address: "test",
      },
      lists: [],
      search: "",
      tableData: [],
      data: {},
      tabIndex: ref(0),
      entityInfos: [],
    };
  },
  async created() {
    await this.getEmployee();
    await this.getEntity();
    Object.assign(this.tableData, this.lists);
  },
  methods: {
    setActiveTab(event) {
      this.tabIndex = parseInt(event.target.getAttribute("data-tab-index"));
    },
    async getEmployee() {
      await ApiService.get("employee/search?entity_info=" + this.entityInfoID)
        .then((response) => {
          this.lists = response.data;
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },
    async getEntity() {
      await ApiService.get("entity/infos/" + this.entityInfoID)
        .then((response) => {
          this.entityInfos = response.data;
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },
  },
});
</script>
