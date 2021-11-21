<template>
  <!--begin::Navbar-->
  <div class="card mb-5 mb-xxl-8">
    <div class="card-body pt-9 pb-0">
      <!--begin::Details-->
      <div class="d-flex flex-wrap flex-sm-nowrap mb-3">
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
            <div class="d-flex flex-column">
              <div class="d-flex align-items-center mb-2">
                <a class="text-gray-800 text-hover-primary fs-3 fw-bolder me-1"
                  >Training Partner Contracts</a
                >
              </div>
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
              href="#contract_list"
              role="tab"
            >
              Contract List
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: tabIndex === 1 }"
              data-bs-toggle="tab"
              @click="setActiveTab($event)"
              data-tab-index="1"
              href="#add_contract"
              role="tab"
            >
              Add Contract
            </a>
          </li>
          <!--end::Nav item-->
          <!--begin::Nav item-->
        </ul>
      </div>
      <!--begin::Navs-->
    </div>
  </div>
  <!--end::Navbar-->
  <div class="card" v-if="tabIndex === 0">
    <div class="card-body">
      <div class="tab-content" id="kt_tabs">
        <div
          class="tab-pane"
          :class="{ active: tabIndex === 0 }"
          id="contract_list"
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
                  placeholder="Search"
                />
              </div>
              <!--end::Search-->
            </div>
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

  <div class="card" v-if="tabIndex === 1">
    <div class="card-body">
      <!-- file upload starts-->

      <!-- file upload ends-->

      <div class="tab-content pt-3" id="kt_tabs">
        <div
          class="tab-pane"
          :class="{ active: tabIndex === 1 }"
          id="add_contract"
        >
          <Form @submit="formSubmit()" class="form">
            <div class="p-9">
              <div class="row">
                <div class="col-md-4">
                  <label class="d-flex align-items-center form-label">
                    <span>Tranche</span>
                  </label>
                  <el-select
                    class="form-select-solid"
                    placeholder="Select Tranche"
                    name="tranche"
                    filterable
                  >
                    <el-option></el-option>
                  </el-select>
                </div>
                <div class="col-md-4">
                  <label class="d-flex align-items-center form-label">
                    <span>Training Partner</span>
                  </label>
                  <el-select
                    class="form-select-solid"
                    placeholder="Select Training Partner"
                    name="training_partner"
                    filterable
                  >
                    <el-option></el-option>
                  </el-select>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <label class="form-label required">Contact Number</label>
                  <Field
                    type="text"
                    name="contact_number"
                    class="form-control form-control-lg"
                    rows="3"
                  ></Field>
                  <ErrorMessage
                    name="contact_number"
                    class="fv-plugins-message-container invalid-feedback"
                  ></ErrorMessage>
                </div>
                <div class="col-md-6">
                  <label class="form-label required">Contact Name</label>
                  <Field
                    name="contact_name"
                    class="form-control form-control-lg"
                  ></Field>
                  <ErrorMessage
                    name="contact_name"
                    class="fv-plugins-message-container invalid-feedback"
                  ></ErrorMessage>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-4">
                  <label class="form-label required">Sign Date</label>
                  <el-form-item prop="sign_date">
                    <el-date-picker
                      value-format="YYYY-MM-DD"
                      format="DD-MM-YYYY"
                      type="date"
                      name="dob"
                    >
                    </el-date-picker>
                  </el-form-item>
                  <!--end::Input-->
                </div>
                <div class="col-md-4">
                  <label class="form-label required">Start Date</label>
                  <el-form-item prop="start_date">
                    <el-date-picker
                      value-format="YYYY-MM-DD"
                      format="DD-MM-YYYY"
                      type="date"
                      name="dob"
                    >
                    </el-date-picker>
                  </el-form-item>
                  <!--end::Input-->
                </div>
                <div class="col-md-4">
                  <label class="form-label required">End Date</label>

                  <el-form-item prop="end_date">
                    <el-date-picker
                      value-format="YYYY-MM-DD"
                      format="DD-MM-YYYY"
                      type="date"
                      name="dob"
                    >
                    </el-date-picker>
                  </el-form-item>
                  <!--end::Input-->
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-3">
                  <label class="form-label required">
                    <span>Target</span>
                  </label>
                  <Field
                    name="target"
                    class="form-control form-control-lg"
                    value=""
                  />
                </div>
                <div class="col-md-3">
                  <label class="form-label required">
                    <span>Amount</span>
                  </label>
                  <Field
                    name="amount"
                    class="form-control form-control-lg"
                    value=""
                  />
                </div>
                <div class="col-md-3">
                  <label class="form-label required"
                    ><span>Contribution %</span></label
                  >
                  <Field
                    name="contribution"
                    class="form-control form-control-lg"
                    value=""
                  />
                  <ErrorMessage
                    name="contribution"
                    class="fv-plugins-message-container invalid-feedback"
                  ></ErrorMessage>
                </div>
                <div class="col-md-3">
                  <label class="form-label required"
                    ><span>Advance</span></label
                  >
                  <Field
                    name="advance"
                    class="form-control form-control-lg"
                    value=""
                  />
                  <ErrorMessage
                    name="advance"
                    class="fv-plugins-message-container invalid-feedback"
                  ></ErrorMessage>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-4">
                  <label class="form-label required">
                    <span>Min Age</span>
                  </label>
                  <Field
                    name="min_age"
                    class="form-control form-control-lg"
                    value=""
                  />
                </div>
                <div class="col-md-4">
                  <label class="form-label required">
                    <span>Max Age</span>
                  </label>
                  <Field
                    name="max_age"
                    class="form-control form-control-lg"
                    value=""
                  />
                </div>
                <div class="col-md-4">
                  <label class="form-label required"
                    ><span>Grace(M)</span></label
                  >
                  <Field
                    name="grace"
                    class="form-control form-control-lg"
                    value=""
                  />
                  <ErrorMessage
                    name="grace"
                    class="fv-plugins-message-container invalid-feedback"
                  ></ErrorMessage>
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
                      value="1"
                    />
                    <span class="form-check-label fw-bold"> Active </span>
                  </label>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  <label>
                    <span>Status Description</span>
                  </label>
                  <Field
                    name="status_description"
                    class="form-control form-control-lg"
                    value=""
                  />
                </div>
              </div>
            </div>

            <div>
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
                        <inline-svg
                          src="media/icons/duotune/arrows/arr064.svg"
                        />
                      </span>
                    </span>
                    <span v-if="loading" class="indicator-progress">
                      Please wait...
                      <span
                        class="
                          spinner-border spinner-border-sm
                          align-middle
                          ms-2
                        "
                      ></span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </Form>
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
import Swal from "sweetalert2/dist/sweetalert2.js";
import EmployeeModal from "@/components/modals/forms/employee/EmployeeModal.vue";
import { Form, Field, ErrorMessage } from "vee-validate";

export default defineComponent({
  name: "association_contract",
  components: {
    Datatable,
    EmployeeModal,
    Form,
    Field,
    ErrorMessage,
  },
  setup() {
    const entityInfoID = 5;
    return { entityInfoID };
  },

  data() {
    return {
      tableHeader: [
        {
          name: "Training Partner",
          key: "training_partner",
          sortable: true,
        },
        {
          name: "Tranche",
          key: "tranche",
          sortable: true,
        },
        {
          name: "Contract Number",
          key: "contract_number",
          sortable: true,
        },
        {
          name: "Contract Name",
          key: "contract_name",
          sortable: false,
        },
        {
          name: "Sign Date",
          key: "sign_date",
          sortable: false,
        },
        {
          name: "Start",
          key: "start",
          sortable: false,
        },
        {
          name: "End",
          key: "end",
          sortable: false,
        },
        {
          name: "Training Target",
          key: "end",
          sortable: false,
        },
        {
          name: "Contract Amount",
          key: "contract_amount",
          sortable: false,
        },
        {
          name: "Attachment",
          key: "attachment",
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
    await this.getEntity();
    Object.assign(this.tableData, this.lists);
  },
  methods: {
    setActiveTab(event) {
      this.tabIndex = parseInt(event.target.getAttribute("data-tab-index"));
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
      this.$router.push({
        name: "entity employee",
        params: {
          id: 1,
        },
      });
    },

    view(id) {
      this.$router.push({
        name: "entityEmployeeProfiles",
        params: {
          entity: this.entityInfoID,
          id: id,
        },
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
