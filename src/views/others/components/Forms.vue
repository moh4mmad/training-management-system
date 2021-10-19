<template>
  <div class="row m-0 page-title-wrapper d-md-flex align-items-md-center">
    <div class="col-md-6">
      <div class="title py-2">
        <h4 class="mb-0 font-weight-bold">
          <i class="fas fa-list mr-3"></i>ড্রাগ এন্ড ড্রপ
        </h4>
      </div>
    </div>
  </div>
  <div class="px-3">
    <div class="row">
      <div class="col-md-6">
        <div class="card rounded-0 mt-5">
          <h5 class="rounded-0 card-header bg-light py-3 px-5">
            বেসিক ইনপুট ফর্মস
          </h5>
          <div class="card-body p-5">
            <div class="form-group">
              <label>টেক্সট ইনপুট</label>
              <input
                type="text"
                class="form-control rounded-0"
                placeholder="টেক্সট ইনপুট"
              />
            </div>
            <div class="form-group">
              <label>ইমেল এড্রেস</label>
              <input
                type="email"
                class="form-control rounded-0"
                placeholder="ইমেল এড্রেস"
              />
            </div>
            <div class="form-group">
              <label>পাসওয়ার্ড</label>
              <input
                type="password"
                class="form-control rounded-0"
                placeholder="পাসওয়ার্ড"
              />
            </div>
            <div class="form-group">
              <label>সিলেক্ট অপশন</label>
              <select class="form-control rounded-0" id="exampleSelect1">
                <option>১</option>
                <option>২</option>
                <option>৩</option>
                <option>৪</option>
                <option>৫</option>
              </select>
            </div>
            <div class="form-group">
              <label>সিলেক্ট অপশন</label>
              <select class="form-control rounded-0" id="kt_select2_1">
                <option>১</option>
                <option>২</option>
                <option>৩</option>
                <option>৪</option>
                <option>৫</option>
              </select>
            </div>
            <div class="form-group">
              <label>চেক বক্স</label>
              <div class="checkbox-inline">
                <label class="checkbox">
                  <input type="checkbox" name="Checkboxes2" />
                  <span></span>অপশন ১
                </label>
                <label class="checkbox">
                  <input type="checkbox" name="Checkboxes2" />
                  <span></span>অপশন ২
                </label>
                <label class="checkbox">
                  <input type="checkbox" name="Checkboxes2" />
                  <span></span>অপশন ৩
                </label>
              </div>
            </div>
            <div class="form-group">
              <div class="checkbox-list">
                <label class="checkbox">
                  <input type="checkbox" name="Checkboxes4" />
                  <span></span>অপশন ১</label
                >
                <label class="checkbox">
                  <input type="checkbox" checked="checked" name="Checkboxes4" />
                  <span></span>অপশন ২</label
                >
                <label class="checkbox checkbox-disabled">
                  <input
                    type="checkbox"
                    disabled="disabled"
                    name="Checkboxes4"
                  />
                  <span></span>অপশন ৩</label
                >
              </div>
            </div>
            <div class="form-group">
              <label>রেডিও বাটন</label>
              <div class="radio-list">
                <label class="radio">
                  <input type="radio" name="radios1" />
                  <span></span>অপশন ১</label
                >
                <label class="radio radio-disabled">
                  <input type="radio" checked="checked" name="radios1" />
                  <span></span>অপশন ২</label
                >
                <label class="radio">
                  <input type="radio" checked="checked" name="radios1" />
                  <span></span>অপশন ৩</label
                >
              </div>
              <div class="radio-inline">
                <label class="radio">
                  <input type="radio" name="radios2" />
                  <span></span>Option 1</label
                >
                <label class="radio">
                  <input type="radio" name="radios2" />
                  <span></span>Option 2</label
                >
                <label class="radio">
                  <input type="radio" name="radios2" />
                  <span></span>Option 3</label
                >
              </div>
            </div>
            <div class="text-right">
              <button type="reset" class="btn btn-primary mr-2 btn-square">
                <i class="fad fa-save"></i> সংরক্ষন করুন
              </button>
              <button type="reset" class="btn btn-danger btn-square">
                <i class="fa fa-times"></i> বাতিল করুন
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card rounded-0 mt-5">
          <h5 class="rounded-0 card-header bg-light py-3 px-5">
            HTML5 ইনপুট ফর্মস
          </h5>
          <div class="card-body p-5">
            <div class="form-group">
              <input
                class="form-control rounded-0"
                type="text"
                value="টেক্সট"
                id=""
              />
            </div>
            <div class="form-group">
              <input
                class="form-control rounded-0"
                type="search"
                value="সার্চ ইনপুট"
                id=""
              />
            </div>
            <div class="form-group">
              <input
                class="form-control rounded-0"
                type="email"
                value="ইমেইল ইনপুট"
                id=""
              />
            </div>
            <div class="form-group">
              <input
                class="form-control rounded-0"
                type="url"
                value="ইউ য়ার এল ইনপুট"
                id=""
              />
            </div>
            <div class="form-group">
              <input
                class="form-control rounded-0"
                type="tel"
                value="1-(555)-555-5555"
                id=""
              />
            </div>
            <div class="form-group">
              <input
                class="form-control rounded-0"
                type="number"
                value="1"
                id=""
              />
            </div>
            <div class="form-group">
              <input
                class="form-control rounded-0"
                type="datetime-local"
                value="টাইম এন্ড ডেট"
                id=""
              />
            </div>
            <div class="form-group">
              <input
                class="form-control rounded-0"
                type="date"
                value="ডেট"
                id=""
              />
            </div>
            <div class="form-group">
              <input
                class="form-control rounded-0"
                type="month"
                value="মাস"
                id=""
              />
            </div>
            <div class="form-group">
              <input
                class="form-control rounded-0"
                type="week"
                value="সপ্তাহ"
                id=""
              />
            </div>
            <div class="form-group">
              <input
                class="form-control rounded-0"
                type="time"
                value="টাইম"
                id=""
              />
            </div>
            <div class="form-group">
              <input
                class="form-control rounded-0"
                type="color"
                value="#563d7c"
                id=""
              />
            </div>
            <div class="form-group">
              <input class="form-control rounded-0" type="range" id="" />
            </div>
            <div class="text-right">
              <button type="reset" class="btn btn-success mr-2 btn-square">
                <i class="fad fa-save"></i> সংরক্ষন করুন
              </button>
              <button type="reset" class="btn btn-danger btn-square">
                <i class="fa fa-times"></i> বাতিল করুন
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
