<template>
  <!--begin::Wrapper-->
  <div class="w-100">
    <!--begin::Heading-->
    <!--end::Heading-->

    <!--begin::Input group-->
    <!--begin::Input group-->
    <div class="row">
      <div class="col-md-6">
        <!--end::Label-->
        <label class="form-label required">Name</label>
        <!--end::Label-->
        <!--begin::Input-->
        <Field
          v-model="employee.name"
          type="text"
          name="name"
          class="form-control form-control-lg"
          rows="3"
        ></Field>
        <ErrorMessage
          name="name"
          class="fv-plugins-message-container invalid-feedback"
        ></ErrorMessage>
        <!--end::Input-->
      </div>
      <div class="col-md-6">
        <label class="form-label required">Designation</label>
        <!--end::Label-->
        <!--begin::Input-->
        <Field
          v-model="employee.designation"
          name="designation"
          class="form-control form-control-lg"
        ></Field>
        <ErrorMessage
          name="designation"
          class="fv-plugins-message-container invalid-feedback"
        ></ErrorMessage>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <label class="form-label required">Date of birth</label>

        <el-form-item prop="date">
          <el-date-picker
            v-model="employee.dob"
            value-format="YYYY-MM-DD"
            format="DD-MM-YYYY"
            type="date"
            name="dob"
          >
          </el-date-picker>
        </el-form-item>
        <ErrorMessage
          name="dob"
          class="fv-plugins-message-container invalid-feedback"
        ></ErrorMessage>
        <!--end::Input-->
      </div>
      <div class="col-md-6">
        <label>
          <span>National ID</span>
        </label>
        <!--end::Label-->

        <!--begin::Input-->
        <Field
          v-model="employee.nid"
          name="nid"
          class="form-control form-control-lg"
          value=""
        />
      </div>
    </div>

    <div class="fv-row mb-10">
      <!--end::Label-->
      <label class="form-label required">Date of Birth</label>
      <!--end::Label-->
      <!--begin::Input-->
      <Field
        type="date"
        name="dob"
        class="form-control form-control-lg"
        rows="3"
      ></Field>
      <ErrorMessage
        name="dob"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>
      <!--end::Input-->
    </div>
    <div class="fv-row mb-10">
      <!--begin::Label-->
      <label class="d-flex align-items-center form-label">
        <span>National ID</span>

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
      <Field name="nid" class="form-control form-control-lg" value="" />
      <!--end::Input-->
    </div>
    <div class="fv-row mb-10">
      <!--begin::Label-->
      <label class="d-flex align-items-center form-label">
        <span>Passport</span>

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
      <Field name="fax" class="form-control form-control-lg" value="" />
      <!--end::Input-->
    </div>
    <div class="fv-row mb-0">
      <!--begin::Label-->
      <label class="fs-6 fw-bold form-label">Driving License</label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        name="drivingLicense"
        class="form-control form-control-lg"
        value=""
      />
      <!--end::Input-->
    </div>
    <div class="fv-row mb-10">
      <!--begin::Label-->
      <label class="d-flex align-items-center form-label">
        <span class="required">Mobile</span>

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
      <Field name="mobile" class="form-control form-control-lg" value="" />
      <!--end::Input-->
      <ErrorMessage
        name="mobile"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>
    </div>
    <div class="fv-row mb-10">
      <!--begin::Label-->
      <label class="d-flex align-items-center form-label">
        <span class="required">Email</span>

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
        name="employeeEmail"
        class="form-control form-control-lg"
        type="email"
      />
      <!--end::Input-->
      <ErrorMessage
        name="employeeEmail"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>
    </div>
    <div class="fv-row mb-10">
      <!--begin::Label-->
      <label class="form-label required">Gender</label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        name="gender"
        class="form-select form-select-lg"
        data-control="select2"
        data-placeholder="Select..."
        data-allow-clear="true"
        data-hide-search="true"
        as="select"
      >
        <option></option>
        <option value="1">Male</option>
        <option value="2">Female</option>
        <option value="3">Other</option>
      </Field>
      <!--end::Input-->
      <ErrorMessage
        name="gender"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>
    </div>
    <div class="fv-row mb-10">
      <!--begin::Label-->
      <label class="form-label">Religion</label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        name="religion"
        class="form-select form-select-lg"
        data-control="select2"
        data-placeholder="Select..."
        data-allow-clear="true"
        data-hide-search="true"
        as="select"
      >
        <option></option>
      </Field>
      <!--end::Input-->
    </div>
    <div class="fv-row mb-10">
      <!--begin::Label-->
      <label class="d-flex align-items-center form-label">
        <span>Present Address</span>

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
      <Field name="presentAddress" class="form-control form-control-lg" />
      <!--end::Input-->
    </div>
    <div class="fv-row mb-10">
      <!--begin::Label-->
      <label class="form-label required">Present District</label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        name="presentDistrict"
        class="form-select form-select-lg"
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
        name="presentDistrict"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>
    </div>
    <div class="fv-row mb-10">
      <!--begin::Label-->
      <label class="d-flex align-items-center form-label">
        <span>Parmanent Address</span>

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
        name="parmanentAddress"
        class="form-control form-control-lg"
        value=""
      />
      <!--end::Input-->
    </div>
    <div class="fv-row mb-10">
      <!--begin::Label-->
      <label class="form-label">Parmanent District</label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        name="paramanentDistrict"
        class="form-select form-select-lg"
        data-control="select2"
        data-placeholder="Select..."
        data-allow-clear="true"
        data-hide-search="true"
        as="select"
      >
        <option></option>
      </Field>
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
  name: "step-2",
  components: {
    Field,
    ErrorMessage,
  },
});
</script>
