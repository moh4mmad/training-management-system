<template>
  <!--begin::Wrapper-->
  <div class="w-100">
    <!--begin::Input group-->
    <!--end::Input group-->
    <div class="fv-row mb-10">
      <!--begin::Label-->
      <label class="fs-6 fw-bold form-label required">Email</label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        name="userEmail"
        class="form-control form-control-lg form-control-solid"
        type="email"
      />
      <!--end::Input-->
      <ErrorMessage
        name="userEmail"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>
    </div>
    <div class="fv-row mb-10">
      <!--begin::Label-->
      <label class="d-flex align-items-center form-label">
        <span class="required">Password</span>

        <i
          class="fas fa-exclamation-circle ms-2 fs-7"
          data-bs-toggle="popover"
          data-bs-trigger="hover"
          data-bs-html="true"
        >
        </i>
      </label>
      <!--end::Label-->
      <!--begin::Input-->
      <Field
        name="password"
        class="form-control form-control-lg form-control-solid"
        type="password"
      />
      <!--end::Input-->
      <ErrorMessage
        name="password"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>
    </div>
    <div class="fv-row mb-10">
      <!--begin::Label-->
      <label class="d-flex align-items-center form-label">
        <span class="required">Confirm Password</span>
        <i
          class="fas fa-exclamation-circle ms-2 fs-7"
          data-bs-toggle="popover"
          data-bs-trigger="hover"
          data-bs-html="true"
        >
        </i>
      </label>
      <!--end::Label-->
      <!--begin::Input-->
      <Field
        name="confirmPassword"
        type="password"
        class="form-control form-control-lg form-control-solid"
      />
      <!--end::Input-->
      <ErrorMessage
        name="confirmPassword"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>
    </div>
    <!--end::Input group-->
  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Field, ErrorMessage } from "vee-validate";

export default defineComponent({
  name: "step-3",
  components: {
    Field,
    ErrorMessage,
  },
});
</script>
