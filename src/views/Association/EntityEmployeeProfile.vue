<template>
  <div class="card mb-5 mb-xxl-8">
    <div class="card-header cursor-pointer">
      <!--begin::Card title-->
      <div class="card-title m-0">
        <h3 class="fw-bolder m-0">Profile Details</h3>
      </div>
      <div class="btn-group" role="group">
        <button
          class="btn btn-primary align-self-center mr-2"
          data-toggle="tooltip"
          data-placement="top"
          title="Assign Entity"
          @click="employeeData()"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_assign_entity"
        >
          <i class="fa fa-home fa-lg"></i>
        </button>
        <button
          class="btn btn-success align-self-center mr-2"
          data-toggle="tooltip"
          data-placement="top"
          title="Assign Institute"
          @click="employeeData()"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_assign_institute"
        >
          <i class="fa fa-university"></i></button
        ><button
          class="btn btn-primary align-self-center mr-2"
          data-toggle="tooltip"
          data-placement="top"
          title="Assign Role"
          @click="employeeData()"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_assign_role"
        >
          <i class="fa fa-users fa-lg"></i>
        </button>
        <button
          class="btn btn-warning align-self-center mr-2"
          data-toggle="tooltip"
          data-placement="top"
          title="Change Password"
          @click="changePassword(employee)"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_change_pass"
        >
          <i class="fa fa-key fa-lg"></i>
        </button>
        <button
          v-if="employee.user.active_status == 1"
          class="btn btn-secondary align-self-center mr-2"
          data-toggle="tooltip"
          data-placement="top"
          title="Deactivate Resource"
          @click="Deactivate()"
        >
          <i class="fas fa-minus-square fa-lg"></i>
        </button>
        <button
          v-if="employee.user.active_status == 0"
          class="btn btn-success align-self-center mr-2"
          data-toggle="tooltip"
          data-placement="top"
          title="Active Resource"
          @click="Activate()"
        >
          <i class="fas fa-plus-square fa-lg"></i>
        </button>
        <!-- <button
          class="btn btn-danger align-self-center"
          data-toggle="tooltip"
          data-placement="top"
          title="Delete Resource"
          @click="Delete()"
        >
          <i class="fa fa-user-times fa-lg"></i>
        </button> -->
      </div>
    </div>
    <div class="card-body pt-9 pb-0">
      <!--begin::Details-->
      <div class="row">
        <!--begin: Pic-->
        <div class="col-md-2">
          <div class="me-7 mb-4 ml-3">
            <div
              class="
                symbol symbol-100px symbol-lg-160px symbol-fixed
                position-relative
              "
            >
              <span class="fw-bold d-block pt-1"
                ><i class="fa fa-user fa-8x"></i
              ></span>
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <div class="flex-grow-1">
            <!--begin::Title-->
            <div
              class="
                d-flex
                justify-content-between
                align-items-start
                flex-wrap
                mb-2
              "
            >
              <!--begin::User-->
              <div class="d-flex flex-column">
                <!--begin::Name-->
                <div class="d-flex align-items-center mb-2">
                  <a class="text-hover-primary fs-2 fw-bolder me-1"
                    >{{ employee.name }}
                  </a>
                </div>
                <div class="d-flex align-items-center mb-2">
                  <a class="font-weight-bold text-hover-primary fs-5 me-1">{{
                    employee.designation
                  }}</a>
                </div>
                <div class="d-flex flex-wrap fw-bold fs-6">
                  <div
                    class="
                      d-flex
                      align-items-center
                      text-hover-primary
                      me-5
                      mb-2
                    "
                  >
                    <span class="fw-bold d-block pt-1"
                      ><i class="fa fa-cloud mr-2"></i></span
                    >Date Of Birth : {{ employee.dob }}
                  </div>
                </div>
                <div class="d-flex flex-wrap fw-bold fs-6">
                  <div
                    class="
                      d-flex
                      align-items-center
                      text-hover-primary
                      me-5
                      mb-2
                    "
                  >
                    <span class="fw-bold d-block pt-1"
                      ><i class="fa fa-address-card mr-2"></i
                    ></span>
                    NID : {{ employee.nid }}
                  </div>
                </div>
                <div class="d-flex flex-wrap fw-bold fs-6">
                  <div
                    class="
                      d-flex
                      align-items-center
                      text-hover-primary
                      me-5
                      mb-2
                    "
                  >
                    <span class="fw-bold d-block pt-1"
                      ><i class="fa fa-cloud mr-2"></i></span
                    >Gender : {{ employee.gender }}
                  </div>
                </div>
                <div class="d-flex flex-wrap fw-bold fs-6">
                  <div
                    class="d-flex align-items-center text-hover-primary mb-2"
                  >
                    <span class="fw-bold d-block pt-1"
                      ><i class="fa fa-address-card mr-2"></i></span
                    >Religion : {{ employee.religion }}
                  </div>
                </div>
                <div class="d-flex flex-wrap fw-bold fs-6">
                  <div
                    class="d-flex align-items-center text-hover-primary mb-2"
                  >
                    <span class="fw-bold d-block pt-1"
                      ><i class="fa fa-user mr-2"></i></span
                    >Username : {{ employee.email }}
                  </div>
                </div>
                <div class="d-flex flex-wrap fw-bold fs-6">
                  <hr />
                </div>
                <div class="d-flex flex-wrap fw-bold fs-6">
                  <div
                    class="d-flex align-items-center text-hover-primary mb-2"
                  >
                    <span class="svg-icon svg-icon-4 me-1">
                      <inline-svg
                        src="media/icons/duotune/communication/com009.svg"
                      />
                    </span>
                    Active Status:
                    {{ employee.user.active_status == 1 ? "Yes" : "No" }}
                  </div>
                </div>
                <div class="d-flex flex-wrap fw-bold fs-6">
                  <div
                    class="d-flex align-items-center text-hover-primary mb-2"
                  >
                    <span class="svg-icon svg-icon-4 me-1">
                      <inline-svg
                        src="media/icons/duotune/communication/com009.svg"
                      />
                    </span>
                    Last Login :
                  </div>
                </div>
              </div>
            </div>
            <!--end::Title-->
          </div>
        </div>
        <div class="col-md-5">
          <!--begin::Info-->
          <div class="flex-grow-1">
            <!--begin::Title-->
            <div
              class="
                d-flex
                justify-content-between
                align-items-start
                flex-wrap
                mb-2
              "
            >
              <!--begin::User-->
              <div class="d-flex flex-column">
                <!--begin::Info-->
                <br />
                <br />
                <br />
                <div class="d-flex flex-wrap fw-bold fs-6">
                  <div
                    class="d-flex align-items-center text-hover-primary mb-2"
                  >
                    <span class="fw-bold d-block pt-1"
                      ><i class="fa fa-phone mr-2"></i></span
                    >Contact : {{ employee.mobile }}
                  </div>
                </div>
                <div class="d-flex flex-wrap fw-bold fs-6">
                  <div
                    class="d-flex align-items-center text-hover-primary mb-2"
                  >
                    <span class="svg-icon svg-icon-4 me-1">
                      <inline-svg
                        src="media/icons/duotune/communication/com011.svg"
                      />
                    </span>
                    Email : {{ employee.email }}
                  </div>
                </div>
                <div class="d-flex flex-wrap fw-bold fs-6">
                  <div
                    class="
                      d-flex
                      align-items-center
                      text-hover-primary
                      me-5
                      mb-2
                    "
                  >
                    <span class="svg-icon svg-icon-4 me-1">
                      <inline-svg
                        src="media/icons/duotune/general/gen018.svg"
                      /> </span
                    >Present Address: {{ employee.present_address }}
                  </div>
                </div>
                <div class="d-flex flex-wrap fw-bold fs-6">
                  <div
                    class="
                      d-flex
                      align-items-center
                      text-hover-primary
                      me-5
                      mb-2
                    "
                  >
                    <span class="svg-icon svg-icon-4 me-1">
                      <inline-svg
                        src="media/icons/duotune/general/gen018.svg"
                      /> </span
                    >Parmanent Address: {{ employee.permanent_address }}
                  </div>
                </div>
                <!--end::Info-->
              </div>
              <!--end::User-->
            </div>
            <!--end::Title-->
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="card mb-5 mb-xxl-8">
    <div class="card-header cursor-pointer">
      <div class="card-title m-0">
        <h3 class="fw-bolder m-0">Roles</h3>
      </div>
    </div>
    <div class="card-body">
      <Datatable
        :table-data="tableData"
        :table-header="tableHeader"
        :enable-items-per-page-dropdown="true"
      >
        <template v-slot:cell-role="{ row }">
          <p class="bg-primary text-white text-center align-middle">
            Team : {{ row.role.role_name }}
          </p>
        </template>

        <template v-slot:cell-training_partner="{ row }">
          <p class="align-middle">
            {{ row.entity.entity_short_name }}
          </p>
        </template>

        <template v-slot:cell-training_institute="{ row }">
          <p class="align-middle">
            {{ row.entity.entity_name }}
          </p>
        </template>

        <template v-slot:cell-active="{ row }">
          <p class="align-middle">
            {{ row.active_status == 1 ? "Yes" : "No" }}
          </p>
        </template>

        <template v-slot:cell-actions="{ row }">
          <div class="btn-group" role="group">
            <button
              v-if="row.active_status == 1"
              class="btn btn-info btn-sm mr-2"
              data-toggle="tooltip"
              data-placement="top"
              title="Deactivate Role"
              @click="RoleStatus(row.id, 0)"
            >
              Deactivate
            </button>
            <button
              v-if="row.active_status == 0"
              class="btn btn-success btn-sm mr-2"
              data-toggle="tooltip"
              data-placement="top"
              title="Active Role"
              @click="RoleStatus(row.id, 1)"
            >
              Active
            </button>
            <button
              class="btn btn-danger btn-sm"
              data-toggle="tooltip"
              data-placement="top"
              title="Delete Role"
              @click="DeleteRole(row.id)"
            >
              Delete
            </button>
          </div>
        </template>
      </Datatable>
    </div>
  </div>
  <AssignEntityModal></AssignEntityModal>
  <AssignInstituteModal></AssignInstituteModal>
  <AssignResource></AssignResource>
  <ChangePasswordModal></ChangePasswordModal>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Datatable from "@/components/kt-datatable/KTDatatable.vue";
import Swal from "sweetalert2/dist/sweetalert2.js";
import AssignEntityModal from "@/components/modals/forms/association/AssignEntityModal.vue";
import AssignInstituteModal from "@/components/modals/forms/association/AssignInstituteModal.vue";
import AssignResource from "@/components/modals/forms/association/AssignResource.vue";
import ChangePasswordModal from "@/components/modals/forms/association/ChangePasswordModal.vue";
import ApiService from "@/core/services/ApiService";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "profile",
  components: {
    Datatable,
    AssignEntityModal,
    AssignInstituteModal,
    AssignResource,
    ChangePasswordModal,
  },
  setup() {
    const route = useRoute();
    const employeeID = route.params.id;
    const entityID = route.params.entity;
    return { employeeID, entityID };
  },
  data() {
    return {
      tableHeader: [
        {
          name: "Role",
          key: "role",
          sortable: true,
        },
        {
          name: "Training Partner",
          key: "training_partner",
          sortable: true,
        },
        {
          name: "Training Institute",
          key: "training_institute",
          sortable: true,
        },
        {
          name: "Active?",
          key: "active",
          sortable: false,
        },
        {
          name: "Action",
          key: "actions",
          sortable: false,
        },
      ],
      employee: {
        user_id: "",
        user: {
          active_status: 1,
        },
        roles: [],
      },
      search: "",
      tableData: [],
    };
  },
  async created() {
    await this.getEmployee();
    Object.assign(this.tableData, this.employee.roles);
  },
  methods: {
    async getEmployee() {
      await ApiService.get("employee/lists/" + this.employeeID)
        .then((response) => {
          this.employee = response.data;
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },
    // Delete() {
    //   Swal.fire({
    //     title: "Are you sure you want to delete this resource?",
    //     icon: "warning",
    //     showCancelButton: true,
    //     confirmButtonColor: "#3085d6",
    //     cancelButtonColor: "#d33",
    //     confirmButtonText: "Yes, delete!",
    //   });
    // },
    Deactivate() {
      Swal.fire({
        title: "Are you sure you want to deactivate this resource?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, deactivate!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          let data = {
            user_id: this.employee.user_id,
            active_status: 0,
          };
          await ApiService.post("employee/changeActiveStatus", data)
            .then((response) => {
              if (response.status == 200) {
                this.getEmployee();
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
        }
      });
    },

    RoleStatus(id, type) {
      const status = type == 1 ? "activate" : "deactivate";
      Swal.fire({
        title: "Are you sure you want to " + status + " this role?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, " + status + "!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          let data = {
            id: id,
            active_status: type,
          };
          await ApiService.post("employee/changeRoleActiveStatus", data)
            .then(async (response) => {
              if (response.status == 200) {
                await this.getEmployee();
                Object.assign(this.tableData, this.employee.roles);
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
        }
      });
    },

    DeleteRole(id) {
      Swal.fire({
        title: "Are you sure you want to delete this role?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await ApiService.delete("employee/deleteRole/" + id)
            .then(async (response) => {
              if (response.status == 200) {
                await this.getEmployee();
                Object.assign(this.tableData, this.employee.roles);
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
        }
      });
    },

    Activate() {
      Swal.fire({
        title: "Are you sure you want to activate this resource?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, activate!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          let data = {
            user_id: this.employee.user_id,
            active_status: 1,
          };
          await ApiService.post("employee/changeActiveStatus", data)
            .then((response) => {
              if (response.status == 200) {
                this.getEmployee();
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
        }
      });
    },
    employeeData() {
      this.emitter.emit("assign_data", {
        employee: this.employee,
        entity: this.entityID,
      });
    },
    changePassword(data) {
      this.emitter.emit("user-data", data);
    },
  },
});
</script>
