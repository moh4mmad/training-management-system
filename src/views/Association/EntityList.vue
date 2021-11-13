<template>
  <div class="row g-5 g-xl-8">
    <div class="col-xl-6"></div>
  </div>
  <!--begin::Row-->
  <div class="row g-5 g-xl-12">
    <div class="col-xl-12">
      <EntityList widget-classes="card-xl-stretch mb-5 mb-xl-8"></EntityList>
    </div>
  </div>
  <!--end::Row-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import EntityList from "@/components/association/widgets/list/EntityList.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import { MenuComponent } from "@/assets/ts/components";

export default defineComponent({
  name: "widgets-lists",
  components: {
    EntityList,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Lists", ["Widgets"]);

      MenuComponent.reinitialization();
    });
  },
  data() {
    return {};
  },
  methods: {},
});
</script>
