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
          data-kt-infos-table-toolbar="base"
        >
          <button
            @click="add"
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_add_entity_info"
          >
            <i class="fas fa-plus"></i>
            Add Entity Info
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
        <template v-slot:cell-entity_name="{ row: infos }">
          {{ infos.entity_name }}
        </template>
        <template v-slot:cell-entity_sub_type="{ row: infos }">
          {{ infos.entity_sub_type }}
        </template>
        <template v-slot:cell-registration_number="{ row: infos }">
          {{ infos.registration_number }}
        </template>
        <template v-slot:cell-registration_authority="{ row: infos }">
          {{ infos.registration_authority }}
        </template>

        <template v-slot:cell-actions="{ row: infos }">
          <button
            @click="view(infos)"
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
            @click="edit(infos)"
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
            @click="Delete(infos.id)"
            class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
          >
            <i class="fas fa-trash-alt"></i>
          </button>
        </template>
      </Datatable>
    </div>
  </div>

  <div class="modal fade" id="infos_details" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog mw-650px">
      <div class="modal-content">
        <div class="modal-header" id="kt_modal_add_entity_info_header">
          <h2 class="fw-bolder">Add Entity Info</h2>
          <div
            id="kt_modal_add_entity_info_close"
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
                  <th>Registration Number</th>
                  <th>Registration Authority</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="fw-bold">{{ data.registration_number }}</td>
                  <td class="fw-bold">{{ data.registration_authority }}</td>
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

  <InfoModal></InfoModal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Datatable from "@/components/kt-datatable/KTDatatable.vue";
import InfoModal from "@/components/modals/forms/entity/InfoModal.vue";
import ApiService from "@/core/services/ApiService";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default defineComponent({
  name: "entity info",
  components: {
    Datatable,
    InfoModal,
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
          name: "Entity Name",
          key: "entity_name",
          sortable: true,
        },
        {
          name: "Entity Sub Type",
          key: "entity_sub_type",
          sortable: true,
        },
        {
          name: "Registration_number",
          key: "registration_number",
          sortable: true,
        },
        {
          name: "Registration_authority",
          key: "registration_authority",
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
    this.emitter.on("infos-updated", async () => {
      await this.getData();
      Object.assign(this.tableData, this.lists);
    });
  },
  methods: {
    async getData() {
      await ApiService.get("entity/infos")
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

    view(infos) {
      this.data = infos;
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
          ApiService.delete("entity/infos/" + `${id}`)
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
