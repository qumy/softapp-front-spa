import React from "react";

class Simple extends React.Component {
  render() {
    return (
      <section className="section-66 section-sm-top-87 section-sm-bottom-95 bg-gray-dark text-center">
        <div className="shell">
          <div className="range range-sm-center">
            <div className="cell-sm-10">
              <h3>Simple. Stunning. Smart.</h3>
              <p className="big">
                Welcome to the leading company on the market! Our success is
                driven by the highest quality customer service. We can meet the
                requirements even of the whimsical clients; there are no complex
                tasks for us! Thanks for your choice!
              </p>
            </div>
          </div>
          <div className="range range-sm-center offset-top-50 offset-sm-top-75">
            <div className="cell-sm-6 cell-md-4">
              <article className="box-custom">
                <span className="icon icon-xl icon-white fl-puppets-telephone113" />
                <h5>
                  <a href="#">Fully Responsive</a>
                </h5>
                <p>
                  Our apps have fully responsive interface and design that allow
                  our users to run our products on any modern device or gadget,
                  with all their functions available on any platform.
                </p>
              </article>
            </div>
            <div className="cell-sm-6 cell-md-4 offset-top-45 offset-sm-top-0">
              <article className="box-custom">
                <span className="icon icon-xl icon-white fl-puppets-light102" />
                <h5>
                  <a href="#">unique design</a>
                </h5>
                <p>
                  With so many mobile apps being released in such a short period
                  of time, our designers manage to create really catchy and
                  unique designs for our products to stand out.
                </p>
              </article>
            </div>
            <div className="cell-sm-6 cell-md-4 offset-top-45 offset-md-top-0">
              <article className="box-custom">
                <span className="icon icon-xl icon-white fl-puppets-circular-clock" />
                <h5>
                  <a href="#">24/7 support</a>
                </h5>
                <p>
                  Soft App support center provides full support and essential
                  maintenance to ensure issues you may have are eliminated early
                  and you get the maximum comfort from using our apps.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Simple;
