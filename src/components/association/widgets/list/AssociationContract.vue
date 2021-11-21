<template>
  <!--begin::List Widget 8-->
  <div class="card mb-5 mb-xl-10">
    <!--begin::Label-->
    <div class="card-body">
      <div class="row">
        <div class="col-md-3">
          <label class="fs-6 fw-bold mb-2">
            <span>Entity Type</span>
          </label>
          <!--end::Label-->

          <!--begin::Input-->
          <el-form-item prop="entity_type_id">
            <el-select
              class="form-select-solid"
              placeholder="Select Entity Type"
              v-model="formData.entity_type_id"
              @change="filterEntity()"
              filterable
            >
              <el-option
                v-for="types in entityTypes"
                :key="types.id"
                :label="types.name"
                :value="types.id"
                >{{ types.name }}</el-option
              >
            </el-select>
          </el-form-item>
        </div>
        <div class="col-md-6">
          <label class="fs-6 fw-bold mb-2">
            <span>Tranche</span>
          </label>
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <!--begin::Header-->
    <div class="card-header align-items-center border-0 mt-4">
      <h3 class="card-title align-items-start flex-column">
        <span class="fw-bolder text-dark">Entity List</span>
      </h3>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body pt-3">
      <template v-for="(item, index) in lists" :key="index">
        <!--begin::Item-->
        <div
          :class="{ 'mb-7': lists.length - 1 !== index }"
          class="d-flex align-items-sm-center"
        >
          <!--begin::Symbol-->
          <div class="symbol symbol-60px symbol-2by3 me-4">
            <span class="fw-bold d-block pt-1"
              ><i class="fa fa-university fa-4x" aria-hidden="true"></i
            ></span>
          </div>
          <!--end::Symbol-->

          <!--begin::Content-->
          <div
            class="
              d-flex
              flex-row-fluid
              align-items-center
              flex-wrap
              my-lg-0
              me-2
            "
          >
            <!--begin::Title-->
            <div class="flex-grow-1 my-lg-0 my-2 me-2">
              <router-link
                :to="{ name: 'single entity', params: { id: item.id } }"
                class="text-gray-800 fw-bolder text-hover-primary fs-3"
                >{{ item.entity_short_name }}</router-link
              >

              <span class="fw-bold d-block pt-1"
                ><i class="fas fa-envelope-open mr-2"></i>
                {{ item.email }}</span
              >
              <span class="fw-bold d-block pt-1"
                ><i class="fa fa-phone-square" aria-hidden="true"></i>
                {{ item.telephone }}</span
              >
              <span class="d fw-bold d-block pt-1"
                >Active: {{ item.active_status == 1 ? "Yes" : "No" }}</span
              >
            </div>
            <!--end::Title-->

            <!--begin::Section-->
            <div class="d-flex align-items-center">
              <router-link
                class="
                  btn btn-icon btn-bg-light btn-active-color-primary btn-sm
                  me-1
                "
                :to="{ name: 'single entity', params: { id: item.id } }"
                ><i class="fas fa-eye"></i
              ></router-link>

              <button
                @click="edit(item)"
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
                @click="Delete(item.id)"
                class="
                  btn btn-icon btn-bg-light btn-active-color-primary btn-sm
                "
              >
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
            <!--end::Section-->
          </div>
          <!--end::Content-->
        </div>
        <!--end::Item-->
      </template>
    </div>
    <!--end::Body-->
  </div>
  <!--end::List Widget 8-->
  <EntityModal></EntityModal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ApiService from "@/core/services/ApiService";
import Swal from "sweetalert2/dist/sweetalert2.js";
import EntityModal from "@/components/modals/forms/entity/EntityModal.vue";

export default defineComponent({
  name: "kt-widget-6",
  components: {
    EntityModal,
  },
  props: {
    widgetClasses: String,
  },
  data() {
    return {
      lists: [],
      tableData: [],
      data: {},
      entityTypes: [],
      formData: {
        entity_type_id: "",
      },
    };
  },
  async created() {
    await this.getData();
    await this.getTypes();
    this.emitter.on("infos-updated", async () => {
      await this.getData();
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
    async getTypes() {
      await ApiService.get("entity/types")
        .then((response) => {
          this.entityTypes = response.data;
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },
    async filterEntity() {
      await ApiService.get(
        "entity/infos?entity_type=" + this.formData.entity_type_id
      )
        .then((response) => {
          this.lists = response.data;
        })
        .catch(({ response }) => {
          console.log(response);
        });
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
