<template>
  <div class="card">
    <div class="card-header border-0 pt-6">
      <!--begin::Card title-->
      <div class="card-title">
        <!--begin::Search-->
        <div class="d-flex align-items-center position-relative my-1">
          <span class="card-label fw-bolder fs-3 mb-1">Entity Type </span>

          <input
            type="text"
            v-model="search"
            @input="searchItems()"
            class="form-control form-control-solid w-250px ps-15"
            placeholder="Search Entity Type "
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
          data-kt-industry-table-toolbar="base"
        >
          <button
            @click="add"
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_add_type"
          >
            <i class="fas fa-plus"></i>
            Add Entity Type
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
        <template v-slot:cell-id="{ row }">
          {{ row.id }}
        </template>
        <template v-slot:cell-name="{ row: industry }">
          {{ industry.name }}
        </template>
        <template v-slot:cell-entity_type_level="{ row: industry }">
          {{ industry.entity_type_level }}
        </template>
        <template v-slot:cell-description="{ row: industry }">
          {{ industry.description }}
        </template>
        <template v-slot:cell-actions="{ row: industry }">
          <button
            @click="view(industry)"
            data-bs-toggle="modal"
            data-bs-target="#industry_details"
            class="
              btn btn-icon
              btn-entity_type_description-light
              btn-active-color-primary btn-sm
              me-1
            "
          >
            <i class="fas fa-eye"></i>
          </button>

          <button
            @click="edit(industry)"
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_add_type"
            class="
              btn btn-icon
              btn-entity_type_description-light
              btn-active-color-primary btn-sm
              me-1
            "
          >
            <i class="fas fa-pencil-alt"></i>
          </button>

          <button
            @click="Delete(industry.id)"
            class="
              btn btn-icon
              btn-entity_type_description-light
              btn-active-color-primary btn-sm
            "
          >
            <i class="fas fa-trash-alt"></i>
          </button>
        </template>
      </Datatable>
    </div>
  </div>

  <div
    class="modal fade"
    id="industry_details"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog mw-650px">
      <div class="modal-content">
        <div class="modal-header" id="kt_modal_add_type_header">
          <h2 class="fw-bolder">Add Entity Type</h2>
          <div
            id="kt_modal_add_type_close"
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
                  <th>Type Name</th>
                  <th>Entity Type level</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="fw-bold">{{ data.name }}</td>
                  <td class="fw-bold">{{ data.entity_type_level }}</td>
                  <td class="fw-bold">{{ data.description }}</td>
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

  <TypeModal></TypeModal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Datatable from "@/components/kt-datatable/KTDatatable.vue";
import TypeModal from "@/components/modals/forms/entity/TypeModal.vue";
import ApiService from "@/core/services/ApiService";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default defineComponent({
  name: "type roles",
  components: {
    Datatable,
    TypeModal,
  },
  data() {
    return {
      tableHeader: [
        {
          name: "ID",
          key: "id",
          sortable: true,
        },
        {
          name: "Type Name",
          key: "name",
          sortable: true,
        },
        {
          name: "Entity Type Level",
          key: "entity_type_level",
          sortable: true,
        },
        {
          name: "Description",
          key: "description",
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
      entityTypes: [],
    };
  },
  async created() {
    await this.getData();
    Object.assign(this.tableData, this.lists);
    this.emitter.on("type-updated", async () => {
      await this.getData();
      Object.assign(this.tableData, this.lists);
    });
  },
  methods: {
    async getData() {
      await ApiService.get("entity/types")
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

    view(industry) {
      this.data = industry;
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
          ApiService.delete("entity/types/" + `${id}`)
            .then((response) => {
              this.emitter.emit("type-updated", true);
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
