<template>
  <!--begin::Wrapper-->
  <div class="w-100">
    <!--begin::Heading-->
    <!--end::Heading-->

    <!--begin::Input group-->
    <div class="fv-row mb-10">
      <!--begin::Label-->
      <label class="form-label required">Entity Type</label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        name="entityType"
        class="form-select form-select-lg form-select-solid"
        data-control="select2"
        data-placeholder="Select..."
        data-allow-clear="true"
        data-hide-search="true"
        as="select"
      >
        <option value="" selected disabled>Select Entity Type</option>
        <option value="1">S Corporation</option>
        <option value="1">C Corporation</option>
        <option value="2">Sole Proprietorship</option>
        <option value="3">Non-profit</option>
        <option value="4">Limited Liability</option>
        <option value="5">General Partnership</option>
      </Field>
      <!--end::Input-->
      <ErrorMessage
        name="entityType"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>
    </div>
    <!--end::Input group-->
    <div class="fv-row mb-10">
      <!--begin::Label-->
      <label class="form-label">Parent</label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        name="parentType"
        class="form-select form-select-lg form-select-solid"
        data-control="select2"
        data-placeholder="Select..."
        data-allow-clear="true"
        data-hide-search="true"
        as="select"
      >
        <option></option>
        <option value="1">S Corporation</option>
        <option value="1">C Corporation</option>
        <option value="2">Sole Proprietorship</option>
        <option value="3">Non-profit</option>
        <option value="4">Limited Liability</option>
        <option value="5">General Partnership</option>
      </Field>
      <!--end::Input-->
      <ErrorMessage
        name="parentType"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>
    </div>
    <div class="fv-row mb-10">
      <!--begin::Label-->
      <label class="form-label required">Industry Sector</label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        name="industrySector"
        class="form-select form-select-lg form-select-solid"
        data-control="select2"
        data-placeholder="Select..."
        data-allow-clear="true"
        data-hide-search="true"
        as="select"
      >
        <option></option>
        <option value="1">S Corporation</option>
        <option value="1">C Corporation</option>
        <option value="2">Sole Proprietorship</option>
        <option value="3">Non-profit</option>
        <option value="4">Limited Liability</option>
        <option value="5">General Partnership</option>
      </Field>
      <!--end::Input-->
      <ErrorMessage
        name="industrySector"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>
    </div>
    <div class="fv-row mb-10">
      <!--begin::Label-->
      <label class="d-flex align-items-center form-label">
        <span class="required">Name</span>

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
        name="name"
        class="form-control form-control-lg form-control-solid"
        value=""
      />
      <!--end::Input-->
      <ErrorMessage
        name="name"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>
    </div>
    <div class="fv-row mb-10">
      <!--begin::Label-->
      <label class="d-flex align-items-center form-label">
        <span class="required">Short Name</span>

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
        name="shortName"
        class="form-control form-control-lg form-control-solid"
        value=""
      />
      <!--end::Input-->
      <ErrorMessage
        name="shortName"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>
    </div>
    <div class="fv-row mb-10">
      <!--begin::Label-->
      <label class="d-flex align-items-center form-label">
        <span>Registration Number</span>

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
        name="regNumber"
        class="form-control form-control-lg form-control-solid"
        value=""
      />
      <!--end::Input-->
      <ErrorMessage
        name="regNumber"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>
    </div>
    <div class="fv-row mb-10">
      <!--begin::Label-->
      <label class="d-flex align-items-center form-label">
        <span>Registration Date</span>

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
        name="regDate"
        type="date"
        class="form-control form-control-lg form-control-solid"
        value=""
      />
      <!--end::Input-->
      <ErrorMessage
        name="regDate"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>
    </div>
    <div class="fv-row mb-10">
      <!--begin::Label-->
      <label class="d-flex align-items-center form-label">
        <span>Registration Authority</span>

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
        name="regAuthority"
        class="form-control form-control-lg form-control-solid"
        value=""
      />
      <!--end::Input-->
      <ErrorMessage
        name="regAuthority"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>
    </div>
    <!--begin::Input group-->
    <div class="fv-row mb-10">
      <!--begin::Label-->
      <label class="d-flex align-items-center form-label">
        <span class="required">Telephone</span>

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
        name="telephone"
        class="form-control form-control-lg form-control-solid"
        value=""
      />
      <!--end::Input-->
      <ErrorMessage
        name="telephone"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>
    </div>
    <div class="fv-row mb-10">
      <!--begin::Label-->
      <label class="d-flex align-items-center form-label">
        <span>Fax</span>

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
        name="fax"
        class="form-control form-control-lg form-control-solid"
        value=""
      />
      <!--end::Input-->
      <ErrorMessage
        name="businessDescriptor"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>
    </div>
    <div class="fv-row mb-10">
      <!--begin::Label-->
      <label class="fs-6 fw-bold form-label required">Email</label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        name="email"
        type="email"
        class="form-control form-control-lg form-control-solid"
      />
      <!--end::Input-->
      <ErrorMessage
        name="email"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>
    </div>
    <div class="fv-row mb-10">
      <!--begin::Label-->
      <label class="d-flex align-items-center form-label">
        <span class="required">Web Url</span>

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
        name="webUrl"
        class="form-control form-control-lg form-control-solid"
        value=""
      />
      <!--end::Input-->
      <ErrorMessage
        name="webUrl"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>
    </div>
    <div class="fv-row mb-10">
      <!--begin::Label-->
      <label class="d-flex align-items-center form-label">
        <span>Address</span>

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
        name="address"
        class="form-control form-control-lg form-control-solid"
        value=""
      />
      <!--end::Input-->
      <ErrorMessage
        name="address"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>
    </div>
    <div class="fv-row mb-10">
      <!--begin::Label-->
      <label class="form-label">Division</label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        name="division"
        class="form-select form-select-lg form-select-solid"
        data-control="select2"
        data-placeholder="Select..."
        data-allow-clear="true"
        data-hide-search="true"
        as="select"
      >
        <option></option>
      </Field>
      <!--end::Input-->
      <ErrorMessage
        name="businessType"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>
    </div>
    <div class="fv-row mb-10">
      <!--begin::Label-->
      <label class="form-label">District</label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        name="district"
        class="form-select form-select-lg form-select-solid"
        data-control="select2"
        data-placeholder="Select..."
        data-allow-clear="true"
        data-hide-search="true"
        as="select"
      >
        <option></option>
      </Field>
      <!--end::Input-->
      <ErrorMessage
        name="businessType"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>
    </div>
    <div class="fv-row mb-10">
      <!--begin::Label-->
      <label class="form-label">Sub District</label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        name="subDistrict"
        class="form-select form-select-lg form-select-solid"
        data-control="select2"
        data-placeholder="Select..."
        data-allow-clear="true"
        data-hide-search="true"
        as="select"
      >
        <option></option>
      </Field>
      <!--end::Input-->
      <ErrorMessage
        name="subDistrict"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>
    </div>
    <div class="fv-row mb-10">
      <!--end::Label-->
      <label class="form-label">Post Code</label>
      <!--end::Label-->
      <!--begin::Input-->
      <Field
        type="text"
        name="postcode"
        class="form-control form-control-lg form-control-solid"
        rows="3"
      ></Field>
      <!--end::Input-->
    </div>
    <div class="fv-row mb-10">
      <!--end::Label-->
      <label class="form-label">Description</label>
      <!--end::Label-->
      <!--begin::Input-->
      <Field
        type="textarea"
        name="description"
        class="form-control form-control-lg form-control-solid"
        rows="3"
      ></Field>
      <!--end::Input-->
    </div>
    <div>
      <input type="checkbox" id="activeStatus" name="activeStatus" checked />
      <label for="scales" class="form-label">Active</label>
    </div>
    <div class="fv-row mb-10">
      <!--end::Label-->
      <label class="form-label">Status Description</label>
      <!--end::Label-->
      <!--begin::Input-->
      <Field
        type="textarea"
        name="status"
        class="form-control form-control-lg form-control-solid"
        rows="3"
      ></Field>
      <div class="form-text">
        Add description for inactive status. Leave empty for active entity.
      </div>
      <!--end::Input-->
    </div>
    <!--end::Input group-->
  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Field, ErrorMessage } from "vee-validate";

export default defineComponent({
  name: "step-1",
  components: {
    Field,
    ErrorMessage,
  },
});
</script>
