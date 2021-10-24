<template>
  <div class="card">
    <div class="card-header border-0 pt-6">
      <!--begin::Card title-->
      <div class="card-title">
        <!--begin::Search-->
        <div class="d-flex align-items-center position-relative my-1">
          <span class="card-label fw-bolder fs-3 mb-1">Entity Types</span>

          <input
            type="text"
            v-model="search"
            @input="searchItems()"
            class="form-control form-control-solid w-250px ps-15"
            placeholder="Search Entity Type"
          />
        </div>
        <!--end::Search-->
      </div>
      <!--begin::Card title-->
      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <!--begin::Toolbar-->
        <div
          v-if="checkedCustomers.length === 0"
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
            Add Entity Type
          </button>
          <!--end::Add customer-->
        </div>
        <!--end::Toolbar-->
        <!--begin::Group actions-->
        <div
          v-else
          class="d-flex justify-content-end align-items-center"
          data-kt-customer-table-toolbar="selected"
        >
          <div class="fw-bolder me-5">
            <span class="me-2">{{ checkedCustomers.length }}</span
            >Selected
          </div>
          <button
            type="button"
            class="btn btn-danger"
            @click="deleteFewCustomers()"
          >
            Delete Selected
          </button>
        </div>
        <!--end::Group actions-->
        <!--begin::Group actions-->
        <div
          class="d-flex justify-content-end align-items-center d-none"
          data-kt-customer-table-toolbar="selected"
        >
          <div class="fw-bolder me-5">
            <span
              class="me-2"
              data-kt-customer-table-select="selected_count"
            ></span
            >Selected
          </div>
          <button
            type="button"
            class="btn btn-danger"
            data-kt-customer-table-select="delete_selected"
          >
            Delete Selected
          </button>
        </div>
        <!--end::Group actions-->
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
import { defineComponent, ref, onMounted } from "vue";
import Datatable from "@/components/kt-datatable/KTDatatable.vue";
import ExportCustomerModal from "@/components/modals/forms/ExportCustomerModal.vue";
import AddCustomerModal from "@/components/modals/forms/AddCustomerModal.vue";
import { MenuComponent } from "@/assets/ts/components";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import customers from "@/core/data/customers";
import { ICustomer } from "@/core/data/customers";
import ApiService from "@/core/services/ApiService";

export default defineComponent({
  name: "customers-listing",
  components: {
    Datatable,
    ExportCustomerModal,
    AddCustomerModal,
  },
  setup() {
    const checkedCustomers = ref([]);
    const tableHeader = ref([
      {
        name: "Code",
        key: "code",
        sortable: true,
      },
      {
        name: "Entity Type",
        key: "etype",
        sortable: true,
      },
      {
        name: "Actions",
        key: "actions",
        sortable: false,
      },
    ]);

    const tableData = ref<Array<ICustomer>>(customers);
    const initCustomers = ref<Array<ICustomer>>([]);

    onMounted(() => {
      MenuComponent.reinitialization();
      setCurrentPageBreadcrumbs("Customers Listing", ["Apps", "Customers"]);
      initCustomers.value.splice(0, tableData.value.length, ...tableData.value);
      getData();
    });

    const getData = () => {
      ApiService.get("configurations/blood_groups")
        .then(({ data }) => {
          console.log(data);
        })
        .catch(({ response }) => {
          console.log(response);
        });
    };

    const deleteFewCustomers = () => {
      checkedCustomers.value.forEach((item) => {
        deleteCustomer(item);
      });
      checkedCustomers.value.length = 0;
    };

    const deleteCustomer = (id) => {
      for (let i = 0; i < tableData.value.length; i++) {
        if (tableData.value[i].id === id) {
          tableData.value.splice(i, 1);
        }
      }
    };

    const search = ref<string>("");
    const searchItems = () => {
      tableData.value.splice(0, tableData.value.length, ...initCustomers.value);
      if (search.value !== "") {
        let results: Array<ICustomer> = [];
        for (let j = 0; j < tableData.value.length; j++) {
          if (searchingFunc(tableData.value[j], search.value)) {
            results.push(tableData.value[j]);
          }
        }
        tableData.value.splice(0, tableData.value.length, ...results);
      }
    };

    const searchingFunc = (obj, value): boolean => {
      for (let key in obj) {
        if (!Number.isInteger(obj[key]) && !(typeof obj[key] === "object")) {
          if (obj[key].indexOf(value) != -1) {
            return true;
          }
        }
      }
      return false;
    };

    return {
      tableData,
      tableHeader,
      deleteCustomer,
      search,
      searchItems,
      checkedCustomers,
      deleteFewCustomers,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      ApiService.get("configurations/blood_groups")
        .then(({ data }) => {
          console.log(data);
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },
  },
});
</script>
