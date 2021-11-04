<template>
  <div class="card">
    <div class="card-header border-0 pt-6">
      <!--begin::Card title-->
      <div class="card-title">
        <!--begin::Search-->
        <div class="d-flex align-items-center position-relative my-1">
          <span class="card-label fw-bolder fs-3 mb-1">Entity Infos</span>

          <input
            type="text"
            v-model="search"
            @input="searchItems()"
            class="form-control form-control-solid w-250px ps-15"
            placeholder="Search Entity Infos"
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
          data-kt-infoDetails-table-toolbar="base"
        >
          <button
            @click="add"
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_add_info_details"
          >
            <i class="fas fa-plus"></i>
            Add Entity Info Details
          </button>
        </div>
      </div>
      <!--end::Card toolbar-->
    </div>
    <div class="card-body pt-0">
      <Datatable
        :table-data="tableData"
        :table-header="tableHeader"
        :enable-items-per-page-dropdown="true"
      >
        <template v-slot:cell-sl="{ row }">
          {{ row.id }}
        </template>
        <template v-slot:cell-no="{ row: infoDetails }">
          {{ infoDetails.room_no }}
        </template>
        <template v-slot:cell-location="{ row: infoDetails }">
          {{ infoDetails.room_location }}
        </template>
        <template v-slot:cell-capacity="{ row: infoDetails }">
          {{ infoDetails.room_capacity }}
        </template>
        <template v-slot:cell-equipement="{ row: infoDetails }">
          {{ infoDetails.room_equipment }}
        </template>

        <template v-slot:cell-actions="{ row: infoDetails }">
          <button
            @click="view(infoDetails)"
            data-bs-toggle="modal"
            data-bs-target="#infoDetails_details"
            class="
              btn btn-icon btn-bg-light btn-active-color-primary btn-sm
              me-1
            "
          >
            <i class="fas fa-eye"></i>
          </button>

          <button
            @click="edit(infoDetails)"
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_add_info_details"
            class="
              btn btn-icon btn-bg-light btn-active-color-primary btn-sm
              me-1
            "
          >
            <i class="fas fa-pencil-alt"></i>
          </button>

          <button
            @click="Delete(infoDetails.id)"
            class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
          >
            <i class="fas fa-trash-alt"></i>
          </button>
        </template>
      </Datatable>
    </div>
  </div>

  <div
    class="modal fade"
    id="infoDetails_details"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog mw-650px">
      <div class="modal-content">
        <div class="modal-header" id="kt_modal_add_info_details_header">
          <h2 class="fw-bolder">Add Entity Info Details</h2>
          <div
            id="kt_modal_add_info_details_close"
            data-bs-dismiss="modal"
            class="btn btn-icon btn-sm btn-active-icon-primary"
          >
            <span class="svg-icon svg-icon-1">
              <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
            </span>
          </div>
        </div>
        <div class="modal-body py-10 px-lg-17">
          <div class="table-responsive mt-5">
            <table
              class="
                table table-row-dashed table-row-gray-300
                align-middle
                gs-0
                gy-4
              "
            >
              <thead>
                <tr class="border-0">
                  <th>Room Number</th>
                  <th>Room Location</th>
                  <th>Room Capacity</th>
                  <th>Room Equipment</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="fw-bold">{{ data.room_no }}</td>
                  <td class="fw-bold">{{ data.room_location }}</td>
                  <td class="fw-bold">{{ data.room_capacity }}</td>
                  <td class="fw-bold">{{ data.room_equipment }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>

  <InfoDetailModal></InfoDetailModal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Datatable from "@/components/kt-datatable/KTDatatable.vue";
import InfoDetailModal from "@/components/modals/forms/entity/InfoDetailModal.vue";
import ApiService from "@/core/services/ApiService";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default defineComponent({
  name: "entity info",
  components: {
    Datatable,
    InfoDetailModal,
  },
  data() {
    return {
      tableHeader: [
        {
          name: "sl",
          key: "sl",
          sortable: true,
        },
        {
          name: "Room No",
          key: "no",
          sortable: true,
        },
        {
          name: "Room Location",
          key: "location",
          sortable: true,
        },
        {
          name: "Room Capacity",
          key: "capacity",
          sortable: true,
        },
        {
          name: "Room Equipment",
          key: "equipement",
          sortable: true,
        },
        {
          name: "Actions",
          key: "actions",
          sortable: false,
        },
      ],
      lists: [],
      search: "",
      tableData: [],
      data: {},
    };
  },
  async created() {
    await this.getData();
    Object.assign(this.tableData, this.lists);
    this.emitter.on("infoDetails-updated", async () => {
      await this.getData();
      Object.assign(this.tableData, this.lists);
    });
  },
  methods: {
    async getData() {
      await ApiService.get("entity/info_details")
        .then((response) => {
          this.lists = response.data;
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
      this.emitter.emit("add-modal-data", true);
    },

    view(infoDetails) {
      this.data = infoDetails;
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
          ApiService.delete("entity/info_details/" + `${id}`)
            .then((response) => {
              this.emitter.emit("infoDetails-updated", true);
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
