import React from "react";

import i from "../../assets/images/home-1-800x659.png";

class Welcome extends React.Component {
  render() {
    return (
      <section className="section-top-30 section-md-top-66 bg-primary">
        <div className="shell">
          <div className="range range-sm-center range-sm-middle range-sm-reverse">
            <div className="cell-sm-6">
              <div className="section-sm-bottom-60 section-md-bottom-90">
                <div className="brand-inline h2">
                  <span className="text-white text-bold">Soft</span>
                  <span>App</span>
                </div>
                <h3>Innovative solutions</h3>
                <p className="big offset-top-12">
                  Innovative solutions delivering a product, which includes
                  tomorrow’s technology – already today!
                </p>
                <ul className="list-bordered list-bordered-jungle-green">
                  <li>
                    <a
                      href="#"
                      className="icon icon-lg icon-jungle-green fa-android"
                    />
                  </li>
                  <li>
                    <a
                      href="#"
                      className="icon icon-lg icon-jungle-green fa-apple"
                    />
                  </li>
                  <li>
                    <a
                      href="#"
                      className="icon icon-lg icon-jungle-green fa-windows"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="cell-sm-6 offset-top-40 offset-md-top-0">
              <figure className="image-wrap-variant-1">
                <img src={i} alt width={800} height={659} />
              </figure>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Welcome;
