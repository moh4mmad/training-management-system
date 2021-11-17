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
          @click="assignEntity"
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
          @click="assignInstitute"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_assign_institute"
        >
          <i class="fa fa-university"></i></button
        ><button
          class="btn btn-primary align-self-center mr-2"
          data-toggle="tooltip"
          data-placement="top"
          title="Assign Role"
          @click="assignRole"
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
          class="btn btn-secondary align-self-center mr-2"
          data-toggle="tooltip"
          data-placement="top"
          title="Deactivate Resource"
          @click="Deactivate()"
        >
          <i class="fas fa-minus-square fa-lg"></i>
        </button>
        <button
          class="btn btn-danger align-self-center"
          data-toggle="tooltip"
          data-placement="top"
          title="Delete Resource"
          @click="Delete()"
        >
          <i class="fa fa-user-times fa-lg"></i>
        </button>
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
                  <a
                    class="text-gray-800 text-hover-primary fs-2 fw-bolder me-1"
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
                      text-gray-800 text-hover-primary
                      me-5
                      mb-2
                    "
                  >
                    <span class="fw-bold d-block pt-1 me-2"
                      ><i class="fa fa-cloud mr-2"></i></span
                    >Date Of Birth : {{ employee.dob }}
                  </div>
                </div>
                <div class="d-flex flex-wrap fw-bold fs-6">
                  <div
                    class="
                      d-flex
                      align-items-center
                      text-gray-800 text-hover-primary
                      me-5
                      mb-2
                    "
                  >
                    <span class="fw-bold d-block pt-1 me-2"
                      ><i class="fa fa-address-card"></i
                    ></span>
                    NID : {{ employee.nid }}
                  </div>
                </div>
                <div class="d-flex flex-wrap fw-bold fs-6">
                  <div
                    class="
                      d-flex
                      align-items-center
                      text-gray-800 text-hover-primary
                      me-5
                      mb-2
                    "
                  >
                    <span class="fw-bold d-block pt-1 me-2"
                      ><i class="fa fa-cloud mr-2"></i></span
                    >Gender : {{ employee.gender }}
                  </div>
                </div>
                <div class="d-flex flex-wrap fw-bold fs-6">
                  <div
                    class="
                      d-flex
                      align-items-center
                      text-gray-800 text-hover-primary
                      mb-2
                    "
                  >
                    <span class="fw-bold d-block pt-1 me-2"
                      ><i class="fa fa-address-card"></i></span
                    >Religion : {{ employee.religion }}
                  </div>
                </div>
                <div class="d-flex flex-wrap fw-bold fs-6">
                  <div
                    class="
                      d-flex
                      align-items-center
                      text-gray-800 text-hover-primary
                      mb-2
                    "
                  >
                    <span class="fw-bold d-block pt-1 me-2"
                      ><i class="fa fa-user"></i></span
                    >Username : {{ employee.email }}
                  </div>
                </div>
                <div class="d-flex flex-wrap fw-bold fs-6">
                  <hr />
                </div>
                <div class="d-flex flex-wrap fw-bold fs-6">
                  <div
                    class="
                      d-flex
                      align-items-center
                      text-gray-800 text-hover-primary
                      mb-2
                    "
                  >
                    <span class="svg-icon svg-icon-4 me-1">
                      <inline-svg
                        src="media/icons/duotune/communication/com009.svg"
                      />
                    </span>
                    Active Status:
                    {{ employee.actve_status == 1 ? "Yes" : "No" }}
                  </div>
                </div>
                <div class="d-flex flex-wrap fw-bold fs-6">
                  <div
                    class="
                      d-flex
                      align-items-center
                      text-gray-800 text-hover-primary
                      mb-2
                    "
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
                    class="
                      d-flex
                      align-items-center
                      text-gray-800 text-hover-primary
                      mb-2
                    "
                  >
                    <span class="fw-bold d-block pt-1 me-2"
                      ><i class="fa fa-phone"></i></span
                    >Contact : {{ employee.mobile }}
                  </div>
                </div>
                <div class="d-flex flex-wrap fw-bold fs-6">
                  <div
                    class="
                      d-flex
                      align-items-center
                      text-gray-800 text-hover-primary
                      mb-2
                    "
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
                      text-gray-800 text-hover-primary
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
                      text-gray-800 text-hover-primary
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
        <template v-slot:cell-sl=""> </template>
        <template v-slot:cell-actions="">
          <button
            data-bs-toggle="modal"
            data-bs-target="#infos_details"
            class="
              btn btn-icon btn-bg-light btn-active-color-primary btn-sm
              me-1
            "
          >
            <i class="fas fa-eye"></i>
          </button>
          <!-- <button
            class="btn btn-primary align-self-center mr-2"
            data-toggle="tooltip"
            data-placement="top"
            title="Role Deactivate"
          >
            Role Deactivate
          </button>
          <button
            class="btn btn-primary align-self-center mr-2"
            data-toggle="tooltip"
            data-placement="top"
            title="Delete Role"
          >
            Delete Role
          </button> -->
        </template>
      </Datatable>
    </div>
  </div>
  <AssignEntityModal></AssignEntityModal>
  <AssignInstituteModal></AssignInstituteModal>
  <AssignRoleModal></AssignRoleModal>
  <ChangePasswordModal></ChangePasswordModal>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Datatable from "@/components/kt-datatable/KTDatatable.vue";
import Swal from "sweetalert2/dist/sweetalert2.js";
import AssignEntityModal from "@/components/modals/forms/association/AssignEntityModal.vue";
import AssignInstituteModal from "@/components/modals/forms/association/AssignInstituteModal.vue";
import AssignRoleModal from "@/components/modals/forms/association/AssignRoleModal.vue";
import ChangePasswordModal from "@/components/modals/forms/association/ChangePasswordModal.vue";
import ApiService from "@/core/services/ApiService";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "profile",
  components: {
    Datatable,
    AssignEntityModal,
    AssignInstituteModal,
    AssignRoleModal,
    ChangePasswordModal,
  },
  setup() {
    const route = useRoute();
    const employeeID = route.params.id;
    return { employeeID };
  },
  data() {
    return {
      tableHeader: [
        {
          name: "Role",
          key: "name",
          sortable: true,
        },
        {
          name: "Training Partner",
          key: "designation",
          sortable: true,
        },
        {
          name: "Training Institute",
          key: "dob",
          sortable: true,
        },
        {
          name: "Active?",
          key: "nid",
          sortable: false,
        },
        {
          name: "Action",
          key: "actions",
          sortable: true,
        },
      ],
      employee: [],
      search: "",
      tableData: [],
      data: {},
    };
  },
  async created() {
    await this.getEmployee();
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
    Delete() {
      Swal.fire({
        title: "Are you sure you want to delete this resource?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete!",
      });
    },
    Deactivate() {
      Swal.fire({
        title: "Are you sure you want to deactivate this resource?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete!",
      });
    },
    assignEntity() {
      this.emitter.emit("add-modal-data", true);
    },
    assignInstitute() {
      this.emitter.emit("add-modal-data", true);
    },
    assignRole() {
      this.emitter.emit("add-modal-data", true);
    },
    changePassword(data) {
      this.emitter.emit("user-data", data);
    },
  },
});
</script>
