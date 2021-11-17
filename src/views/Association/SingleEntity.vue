<template>
  <!--begin::Navbar-->
  <div class="card mb-5 mb-xxl-8">
    <div class="card-body pt-9 pb-0">
      <!--begin::Details-->
      <div class="d-flex flex-wrap flex-sm-nowrap mb-3">
        <!--begin: Pic-->
        <div class="me-7 mb-4">
          <div
            class="
              symbol symbol-100px symbol-lg-160px symbol-fixed
              position-relative
            "
          >
            <span class="fw-bold d-block pt-1"
              ><i class="fa fa-university fa-4x" aria-hidden="true"></i
            ></span>
          </div>
        </div>
        <!--end::Pic-->

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
              <!--begin::Name-->
              <div class="d-flex align-items-center mb-2">
                <a class="text-gray-800 text-hover-primary fs-3 fw-bolder me-1"
                  >{{ entityInfos.entity_name }}({{
                    entityInfos.entity_short_name
                  }})</a
                >
              </div>
              <!--end::Name-->

              <!--begin::Info-->
              <div class="d-flex flex-wrap fw-bold fs-6">
                <div
                  class="
                    d-flex
                    align-items-center
                    text-gray-400 text-hover-primary
                    me-5
                    mb-2
                  "
                >
                  <span class="svg-icon svg-icon-4 me-1">
                    <inline-svg src="media/icons/duotune/general/gen018.svg" />
                  </span>
                  {{ entityInfos.address }}
                </div>
              </div>
              <div class="d-flex flex-wrap fw-bold fs-6">
                <div
                  class="
                    d-flex
                    align-items-center
                    text-gray-400 text-hover-primary
                    me-5
                    mb-2
                  "
                >
                  <span class="svg-icon svg-icon-4 me-1">
                    <inline-svg
                      src="media/icons/duotune/communication/com006.svg"
                    />
                  </span>
                  {{ entityInfos.telephone }}
                </div>
              </div>
              <div class="d-flex flex-wrap fw-bold fs-6">
                <div
                  class="
                    d-flex
                    align-items-center
                    text-gray-400 text-hover-primary
                    mb-2
                  "
                >
                  <span class="svg-icon svg-icon-4 me-1">
                    <inline-svg
                      src="media/icons/duotune/communication/com011.svg"
                    />
                  </span>
                  {{ entityInfos.email }}
                </div>
              </div>
              <div class="d-flex flex-wrap fw-bold fs-6">
                <div
                  class="
                    d-flex
                    align-items-center
                    text-gray-400 text-hover-primary
                    mb-2
                  "
                >
                  <span class="svg-icon svg-icon-4 me-1">
                    <inline-svg
                      src="media/icons/duotune/communication/com008.svg"
                    />
                  </span>
                  {{ entityInfos.web_url }}
                </div>
              </div>
              <div class="d-flex flex-wrap fw-bold fs-6">
                <div
                  class="
                    d-flex
                    align-items-center
                    text-gray-400 text-hover-primary
                    mb-2
                  "
                >
                  <span class="svg-icon svg-icon-4 me-1">
                    <inline-svg
                      src="media/icons/duotune/communication/com009.svg"
                    />
                  </span>
                  Active: {{ entityInfos.active_status == 1 ? "Yes" : "No" }}
                </div>
              </div>

              <!--end::Info-->
            </div>
            <!--end::User-->
          </div>
          <!--end::Title-->
        </div>
        <!--end::Info-->
      </div>
      <!--end::Details-->

      <!--begin::Navs-->
      <div class="d-flex overflow-auto h-55px">
        <ul
          class="
            nav nav-stretch nav-line-tabs nav-line-tabs-2x
            border-transparent
            fs-5
            fw-bolder
            flex-nowrap
          "
        >
          <!--begin::Nav item-->
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: tabIndex === 0 }"
              data-bs-toggle="tab"
              @click="setActiveTab($event)"
              data-tab-index="0"
              href="#training_summary"
              role="tab"
            >
              Training Summary
            </a>
          </li>
          <!--end::Nav item-->
          <!--begin::Nav item-->
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: tabIndex === 1 }"
              data-bs-toggle="tab"
              @click="setActiveTab($event)"
              data-tab-index="1"
              href="#employee_list"
              role="tab"
            >
              Employee List
            </a>
          </li>
        </ul>
      </div>
      <!--begin::Navs-->
    </div>
  </div>
  <!--end::Navbar-->
  <div class="card" v-if="tabIndex === 0">
    <div class="card-body">
      <div class="tab-content pt-3" id="kt_tabs">
        <div
          class="tab-pane"
          :class="{ active: tabIndex === 0 }"
          id="training_summary"
        >
          <!--begin::Post-->
          <div class="mb-5">
            <!--begin::Text-->
            <p class="text-gray-800 fw-normal mb-5">
              {{ entityInfos.entity_description }}
            </p>
            <!--end::Text-->
          </div>
          <div class="separator mb-4"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="card" v-if="tabIndex === 1">
    <div class="card-body">
      <div class="tab-content" id="kt_tabs">
        <div
          class="tab-pane"
          :class="{ active: tabIndex === 1 }"
          id="employee_list"
        >
          <div class="card-header border-0 pt-6">
            <!--begin::Card title-->
            <div class="card-title">
              <!--begin::Search-->
              <div class="d-flex align-items-center position-relative">
                <input
                  type="text"
                  v-model="search"
                  @input="searchItems()"
                  class="form-control form-control-solid"
                  placeholder="Search Employee"
                />
              </div>
              <!--end::Search-->
            </div>
            <!--begin::Card title-->
            <!--begin::Card toolbar-->
            <div class="card-toolbar">
              <!--begin::Toolbar-->
              <div
                class="d-flex justify-content-end"
                data-kt-infos-table-toolbar="base"
              >
                <button @click="add" type="button" class="btn btn-primary">
                  Add Resource Person
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
            <!--end::Card toolbar-->
          </div>
          <Datatable
            :table-data="tableData"
            :table-header="tableHeader"
            :enable-items-per-page-dropdown="true"
          >
            <template v-slot:cell-sl="{ row }">
              {{ row.id }}
            </template>
            <template v-slot:cell-name="{ row: infos }">
              {{ infos.name }}
            </template>
            <template v-slot:cell-designation="{ row: infos }">
              {{ infos.designation }}
            </template>
            <template v-slot:cell-dob="{ row: infos }">
              {{ infos.dob }}
            </template>
            <template v-slot:cell-nid="{ row: infos }">
              {{ infos.nid }}
            </template>
            <template v-slot:cell-mobile="{ row: infos }">
              {{ infos.mobile }}
            </template>
            <template v-slot:cell-email="{ row: infos }">
              {{ infos.email }}
            </template>

            <template v-slot:cell-actions="{ row }">
              <button
                @click="view(row.id)"
                data-bs-toggle="modal"
                data-bs-target="#infos_details"
                class="
                  btn btn-icon btn-bg-light btn-active-color-primary btn-sm
                  me-1
                "
              >
                <i class="fas fa-eye"></i>
              </button>

              <button
                @click="edit(row.id)"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_add_entity_info"
                class="
                  btn btn-icon btn-bg-light btn-active-color-primary btn-sm
                  me-1
                "
              >
                <i class="fas fa-pencil-alt"></i>
              </button>

              <button
                @click="Delete(row.id)"
                class="
                  btn btn-icon btn-bg-light btn-active-color-primary btn-sm
                "
              >
                <i class="fas fa-trash-alt"></i>
              </button>
            </template>
          </Datatable>
        </div>
      </div>
    </div>
  </div>

  <!-- <router-view></router-view> -->
  <EmployeeModal></EmployeeModal>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Datatable from "@/components/kt-datatable/KTDatatable.vue";
import ApiService from "@/core/services/ApiService";
import { useRoute } from "vue-router";
import Swal from "sweetalert2/dist/sweetalert2.js";
import EmployeeModal from "@/components/modals/forms/employee/EmployeeModal.vue";

export default defineComponent({
  name: "profile",
  components: {
    Datatable,
    EmployeeModal,
  },
  setup() {
    const route = useRoute();
    const entityInfoID = route.params.id;
    return { entityInfoID };
  },
  data() {
    return {
      tableHeader: [
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
    searchItems() {
      if (this.search !== "") {
        let results: never[] = [];
        for (let j = 0; j < this.tableData.length; j++) {
          if (this.searchingFunc(this.tableData[j], this.search)) {
            results.push(this.tableData[j]);
          }
        }
        this.tableData.splice(0, this.tableData.length, ...results);
      } else {
        Object.assign(this.tableData, this.lists);
      }
    },

    searchingFunc(obj, value) {
      for (let key in obj) {
        if (!Number.isInteger(obj[key]) && !(typeof obj[key] === "object")) {
          if (obj[key].indexOf(value) != -1) {
            return true;
          }
        }
      }
      return false;
    },

    edit(data) {
      this.emitter.emit("edit-modal-data", data);
    },

    add() {
      this.$router.push({ name: "entity employee", params: { id: 1 } });
    },

    view(id) {
      this.$router.push({
        name: "entityEmployeeProfiles",
        params: { id: id },
      });
    },

    Delete(id) {
      Swal.fire({
        title: "Are you sure you want to delete it?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete!",
      }).then((result) => {
        if (result.isConfirmed) {
          ApiService.delete("employee/newProfile/" + `${id}`)
            .then((response) => {
              this.emitter.emit("infos-updated", true);
              Swal.fire("Deleted!", response.data.message, "success");
            })
            .catch(({ response }) => {
              console.log(response);
            });
        }
      });
    },
  },
});
</script>
