import React from "react";

import i from "../../assets/images/home-3-1123x732.png";

class Features extends React.Component {
  render() {
    return (
      <section className="section-top-66 section-md-top-115 bg-primary">
        <div className="shell">
          <div className="range range-sm-center range-md-reverse">
            <div className="cell-md-6 offset-top-0">
              <h3 className="text-white">Amazing Features</h3>
              <p className="big">
                Not all modern apps are made equal but our products have a lot
                of features that you may find useful.
              </p>
              <div className="range offset-top-40">
                <div className="cell-sm-6 cell-md-12">
                  <div className="icon-box-variant-2">
                    <div className="unit unit-horizontal unit-spacing-sm">
                      <div className="unit-left">
                        <span className="icon icon-sm icon-gray-dark fl-puppets-chart6" />
                      </div>
                      <div className="unit-body">
                        <h5>Beautiful, modern design</h5>
                        <p>
                          Our apps offer our customers responsive and functional
                          design that looks beautiful and modern in comparison
                          with many other products on the market of free apps.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cell-sm-6 cell-md-12 offset-top-45 offset-sm-top-0 offset-md-top-45">
                  <div className="icon-box-variant-2">
                    <div className="unit unit-horizontal unit-spacing-sm">
                      <div className="unit-left">
                        <span className="icon icon-sm icon-gray-dark fl-puppets-nut1" />
                      </div>
                      <div className="unit-body">
                        <h5>Easy to set up</h5>
                        <p>
                          If you are looking for a specific app with a feature
                          of extensive customization, our apps can become your
                          perfect choice. From changing the look of the
                          interface to installing new modules, we got you
                          covered.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cell-md-6 offset-top-40 offset-md-top-0">
              <figure className="image-wrap-variant-3">
                <img src={i} alt width={1123} height={732} />
              </figure>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Features;
