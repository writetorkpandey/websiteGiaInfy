import React from "react";

export default function Aboutus() {
  return (
    <div>

    {/* Start of About Us content */}

      <div class="container py-5 bg-light ">
        <h2 class="display-8">About us page</h2>
        <div class="card-body abtp">
        A global leader in next-generation eduction
        555555555555555555555555
          55555555555555555555555555555555555555555555555555555555555555555555555555555
          666666666666666666666666666666666 6666666666
          66666666666666666666666666666666666666666666666666666666666666666666666
          66666666666666666666666666
          6666666666666666666666666666666666666666666666666666
          66666666666666666666666666 66666666666666666666
        </div>
      </div>

      {/* Start of team content */}

        <div class="container bg-light">
          <div class="row">
            <h2 class="display-8 font-weight-light">Our team</h2>
           </div>

          <div class="row text-center">
            {/* <!-- Team item--> */}
            <div class="col-xl-3 col-sm-6 mb-5">
              <div class="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png"
                  alt=""
                  width="100"
                  class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 class="mb-0">Manuella Nevoresky</h5>
                <span class="small text-uppercase text-muted">
                  CEO - Founder
                </span>
              </div>
            </div>
            {/* <!-- End--> */}

            {/* <!-- Team item--> */}
            <div class="col-xl-3 col-sm-6 mb-5">
              <div class="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png"
                  alt=""
                  width="100"
                  class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 class="mb-0">Samuel Hardy</h5>
                <span class="small text-uppercase text-muted">Principal</span>
              </div>
            </div>
            {/* <!-- End--> */}

            {/* <!-- Team item--> */}
            <div class="col-xl-3 col-sm-6 mb-5">
              <div class="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png"
                  alt=""
                  width="100"
                  class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 class="mb-0">Tom Sunderland</h5>
                <span class="small text-uppercase text-muted">Director1</span>
              </div>
            </div>
            {/* <!-- End--> */}

            {/* <!-- Team item--> */}
            <div class="col-xl-3 col-sm-6 mb-5">
              <div class="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png"
                  alt=""
                  width="100"
                  class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 class="mb-0">John Tarly</h5>
                <span class="small text-uppercase text-muted">Director2</span>
              </div>
            </div>
            {/* <!-- End--> */}
          </div>
        </div>
    </div>
  );
}
