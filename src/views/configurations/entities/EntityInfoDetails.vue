<template>
  <div class="card">
    <div class="card-header border-0 pt-6">
      <!--begin::Card title-->
      <div class="card-title">
        <!--begin::Search-->
        <div class="d-flex align-items-center position-relative my-1">
          <span class="card-label fw-bolder fs-3 mb-1"
            >Entity Info Details</span
          >

          <input
            type="text"
            v-model="search"
            @input="searchItems()"
            class="form-control form-control-solid w-250px ps-15"
            placeholder="Search Entity Info Details"
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
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_add_customer"
          >
            <i class="fas fa-plus"></i>
            Add Entity Info Details
          </button>
        </div>
      </div>
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

  <InfoDetailModal></InfoDetailModal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Datatable from "@/components/kt-datatable/KTDatatable.vue";
import InfoDetailModal from "@/components/modals/forms/entity/InfoDetailModal.vue";
import ApiService from "@/core/services/ApiService";

export default defineComponent({
  name: "customers-listing",
  components: {
    Datatable,
    InfoDetailModal,
  },
  data: function () {
    return {
      tableData: {},
      tableHeader: [
        {
          name: "Code",
          key: "code",
          sortable: true,
        },
        {
          name: "entity info details",
          key: "einfodetails",
          sortable: true,
        },
        {
          name: "Actions",
          key: "actions",
          sortable: false,
        },
      ],
    };
  },
  created() {
    this.getData();
  },
  // setup() {
  //   const checkedCustomers = ref([]);

  //   const tableData = ref<Array<ICustomer>>(customers);
  //   const initCustomers = ref<Array<ICustomer>>([]);

  //   onMounted(() => {
  //     MenuComponent.reinitialization();
  //     setCurrentPageBreadcrumbs("Customers Listing", ["Apps", "Customers"]);
  //     initCustomers.value.splice(0, tableData.value.length, ...tableData.value);
  //   });

  //   const search = ref<string>("");
  //   const searchItems = () => {
  //     tableData.value.splice(0, tableData.value.length, ...initCustomers.value);
  //     if (search.value !== "") {
  //       let results: Array<ICustomer> = [];
  //       for (let j = 0; j < tableData.value.length; j++) {
  //         if (searchingFunc(tableData.value[j], search.value)) {
  //           results.push(tableData.value[j]);
  //         }
  //       }
  //       tableData.value.splice(0, tableData.value.length, ...results);
  //     }
  //   };

  //   const searchingFunc = (obj, value): boolean => {
  //     for (let key in obj) {
  //       if (!Number.isInteger(obj[key]) && !(typeof obj[key] === "object")) {
  //         if (obj[key].indexOf(value) != -1) {
  //           return true;
  //         }
  //       }
  //     }
  //     return false;
  //   };

  //   return;
  // },
  methods: {
    getData() {
      ApiService.get("entity/info_details")
        .then((response) => {
          this.tableData = response;
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },
  },
});
</script>
