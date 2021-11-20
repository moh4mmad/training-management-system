<template>
  <Form @submit="formSubmit()" class="form">
    <div class="card mb-5 mb-xl-10">
      <div
        class="card-header border-0 cursor-pointer"
        role="button"
        data-bs-toggle="collapse"
        data-bs-target="#employee_information"
        aria-expanded="true"
        aria-controls="form"
      >
        <div class="card-title m-0">
          <h3 class="fw-bolder m-0">Training Partner Contracts</h3>
        </div>
      </div>
      <div id="employee_information" class="collapse show">
        <div class="collapse show">
          <div class="card-body border-top p-9">
            <div class="row">
              <div class="col-md-4">
                <label class="d-flex align-items-center form-label">
                  <span>Tranche</span>
                </label>
                <el-select
                  class="form-select-solid"
                  placeholder="Select Tranche"
                  name="tranche"
                  filterable
                >
                  <el-option></el-option>
                </el-select>
              </div>
              <div class="col-md-4">
                <label class="d-flex align-items-center form-label">
                  <span>Training Partner</span>
                </label>
                <el-select
                  class="form-select-solid"
                  placeholder="Select Training Partner"
                  name="training_partner"
                  filterable
                >
                  <el-option></el-option>
                </el-select>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <label class="form-label required">Contact Number</label>
                <Field
                  type="text"
                  name="contact_number"
                  class="form-control form-control-lg"
                  rows="3"
                ></Field>
                <ErrorMessage
                  name="contact_number"
                  class="fv-plugins-message-container invalid-feedback"
                ></ErrorMessage>
              </div>
              <div class="col-md-6">
                <label class="form-label required">Contact Name</label>
                <Field
                  name="contact_name"
                  class="form-control form-control-lg"
                ></Field>
                <ErrorMessage
                  name="contact_name"
                  class="fv-plugins-message-container invalid-feedback"
                ></ErrorMessage>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-4">
                <label class="form-label required">Sign Date</label>
                <el-form-item prop="sign_date">
                  <el-date-picker
                    value-format="YYYY-MM-DD"
                    format="DD-MM-YYYY"
                    type="date"
                    name="dob"
                  >
                  </el-date-picker>
                </el-form-item>
                <!--end::Input-->
              </div>
              <div class="col-md-4">
                <label class="form-label required">Start Date</label>
                <el-form-item prop="start_date">
                  <el-date-picker
                    value-format="YYYY-MM-DD"
                    format="DD-MM-YYYY"
                    type="date"
                    name="dob"
                  >
                  </el-date-picker>
                </el-form-item>
                <!--end::Input-->
              </div>
              <div class="col-md-4">
                <label class="form-label required">End Date</label>

                <el-form-item prop="end_date">
                  <el-date-picker
                    value-format="YYYY-MM-DD"
                    format="DD-MM-YYYY"
                    type="date"
                    name="dob"
                  >
                  </el-date-picker>
                </el-form-item>
                <!--end::Input-->
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-3">
                <label class="form-label required">
                  <span>Target</span>
                </label>
                <Field
                  name="target"
                  class="form-control form-control-lg"
                  value=""
                />
              </div>
              <div class="col-md-3">
                <label class="form-label required">
                  <span>Amount</span>
                </label>
                <Field
                  name="amount"
                  class="form-control form-control-lg"
                  value=""
                />
              </div>
              <div class="col-md-3">
                <label class="form-label required"
                  ><span>Contribution %</span></label
                >
                <Field
                  name="contribution"
                  class="form-control form-control-lg"
                  value=""
                />
                <ErrorMessage
                  name="contribution"
                  class="fv-plugins-message-container invalid-feedback"
                ></ErrorMessage>
              </div>
              <div class="col-md-3">
                <label class="form-label required"><span>Advance</span></label>
                <Field
                  name="advance"
                  class="form-control form-control-lg"
                  value=""
                />
                <ErrorMessage
                  name="advance"
                  class="fv-plugins-message-container invalid-feedback"
                ></ErrorMessage>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-4">
                <label class="form-label required">
                  <span>Min Age</span>
                </label>
                <Field
                  name="min_age"
                  class="form-control form-control-lg"
                  value=""
                />
              </div>
              <div class="col-md-4">
                <label class="form-label required">
                  <span>Max Age</span>
                </label>
                <Field
                  name="max_age"
                  class="form-control form-control-lg"
                  value=""
                />
              </div>
              <div class="col-md-4">
                <label class="form-label required"><span>Grace(M)</span></label>
                <Field
                  name="grace"
                  class="form-control form-control-lg"
                  value=""
                />
                <ErrorMessage
                  name="grace"
                  class="fv-plugins-message-container invalid-feedback"
                ></ErrorMessage>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <label
                  class="
                    form-check form-switch form-check-custom form-check-solid
                  "
                >
                  <Field
                    type="checkbox"
                    class="form-check-input"
                    name="active_status"
                    value="1"
                  />
                  <span class="form-check-label fw-bold"> Active </span>
                </label>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <label>
                  <span>Status Description</span>
                </label>
                <Field
                  name="status_description"
                  class="form-control form-control-lg"
                  value=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card-body">
      <div class="d-flex">
        <div>
          <button
            :data-kt-indicator="loading ? 'on' : null"
            class="btn btn-lg btn-primary"
            type="submit"
            @click="formSubmit()"
          >
            <span v-if="!loading" class="indicator-label">
              Submit
              <span class="svg-icon svg-icon-3 ms-2 me-0">
                <inline-svg src="media/icons/duotune/arrows/arr064.svg" />
              </span>
            </span>
            <span v-if="loading" class="indicator-progress">
              Please wait...
              <span
                class="spinner-border spinner-border-sm align-middle ms-2"
              ></span>
            </span>
          </button>
        </div>
      </div>
    </div>
  </Form>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";

export default defineComponent({
  name: "kt-horizontal-wizard",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
});
</script>
