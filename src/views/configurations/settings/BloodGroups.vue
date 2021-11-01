<template>
  <div class="card">
    <div class="card-header border-0 pt-6">
      <!--begin::Card title-->
      <div class="card-title">
        <!--begin::Search-->
        <div class="d-flex align-items-center position-relative my-1">
          <span class="card-label fw-bolder fs-3 mb-1">Blood Groups</span>

          <input
            type="text"
            v-model="search"
            @input="searchItems()"
            class="form-control form-control-solid w-250px ps-15"
            placeholder="Search Blood Group"
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
          data-kt-customer-table-toolbar="base"
        >
          <!--begin::Export-->
          <button
            type="button"
            class="btn btn-light-primary me-3"
            data-bs-toggle="modal"
            data-bs-target="#kt_customers_export_modal"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotune/arrows/arr078.svg" />
            </span>
            Export
          </button>
          <!--end::Export-->
          <!--begin::Add customer-->
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_add_customer"
          >
            <i class="fas fa-plus"></i>
            Add Blood Group
          </button>
          <!--end::Add customer-->
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
        <template v-slot:cell-code="{ row: customer }">
          {{ customer.code }}
        </template>
        <template v-slot:cell-bg="{ row: customer }">
          {{ customer.bg }}
        </template>
        <template v-slot:cell-actions="{ row: customer }">
          <a
            :href="customer.id"
            class="
              btn btn-icon btn-bg-light btn-active-color-primary btn-sm
              me-1
            "
          >
            <i class="fas fa-eye"></i>
          </a>

          <a
            href="#"
            class="
              btn btn-icon btn-bg-light btn-active-color-primary btn-sm
              me-1
            "
          >
            <i class="fas fa-pencil-alt"></i>
          </a>

          <a
            href="#"
            class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
          >
            <i class="fas fa-trash-alt"></i>
          </a>
        </template>
      </Datatable>
    </div>
  </div>

  <ExportCustomerModal></ExportCustomerModal>
  <AddCustomerModal></AddCustomerModal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Datatable from "@/components/kt-datatable/KTDatatable.vue";
import ExportCustomerModal from "@/components/modals/forms/settings/ExportCustomerModal.vue";
import AddCustomerModal from "@/components/modals/forms/settings/AddCustomerModal.vue";
import ApiService from "@/core/services/ApiService";

export default defineComponent({
  name: "blood groups",
  components: {
    Datatable,
    ExportCustomerModal,
    AddCustomerModal,
  },
  data() {
    return {
      tableHeader: [
        {
          name: "Code",
          key: "code",
          sortable: true,
        },
        {
          name: "Blood Group",
          key: "bg",
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
      oldData: [],
    };
  },
  async created() {
    await this.getData();
    Object.assign(this.tableData, this.lists);
  },
  methods: {
    async getData() {
      await ApiService.get("configurations/blood_groups")
        .then((response) => {
          this.lists = response.data;
          this.oldData = response.data;
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
        Object.assign(this.tableData, this.oldData);
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
  },
});
</script>
