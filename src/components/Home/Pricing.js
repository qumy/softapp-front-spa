import React from "react";

class Pricing extends React.Component {
  render() {
    return (
      <section className="section-66 section-sm-top-95 section-sm-bottom-100 bg-gray-lighter">
        <div className="shell">
          <div className="range text-center">
            <div className="cell-xs-12">
              <h3>Pricing Packages</h3>
            </div>
          </div>
          <div className="range range-sm-center offset-top-40">
            <div className="cell-sm-6 cell-md-4">
              <article className="pricing-box">
                <div className="pricing-box-header">
                  <h5>Starter</h5>
                </div>
                <div className="pricing-box-price">
                  <p className="price">$ 19.99</p>
                </div>
                <div className="pricing-box-body">
                  <ul className="list-marked">
                    <li>Customization</li>
                    <li>Feedback System</li>
                    <li className="disabled">Personal Design</li>
                    <li className="disabled">24/7 Support</li>
                  </ul>
                </div>
                <div className="pricing-box-footer">
                  <a href="#" className="btn btn-primary">
                    learn more
                  </a>
                </div>
              </article>
            </div>
            <div className="cell-sm-6 cell-md-4 offset-top-40 offset-sm-top-0">
              <article className="pricing-box">
                <div className="pricing-box-header">
                  <h5>Normal</h5>
                </div>
                <div className="pricing-box-price">
                  <p className="price">$ 29.99</p>
                </div>
                <div className="pricing-box-body">
                  <ul className="list-marked">
                    <li>Customization</li>
                    <li>Feedback System</li>
                    <li>Personal Design</li>
                    <li className="disabled">24/7 Support</li>
                  </ul>
                </div>
                <div className="pricing-box-footer">
                  <a href="#" className="btn btn-primary">
                    learn more
                  </a>
                </div>
              </article>
            </div>
            <div className="cell-sm-6 cell-md-4 offset-top-40 offset-md-top-0">
              <article className="pricing-box">
                <div className="pricing-box-header">
                  <h5>Premium</h5>
                </div>
                <div className="pricing-box-price">
                  <p className="price">$ 49.99</p>
                </div>
                <div className="pricing-box-body">
                  <ul className="list-marked">
                    <li>Customization</li>
                    <li>Feedback System</li>
                    <li>Personal Design</li>
                    <li>24/7 Support</li>
                  </ul>
                </div>
                <div className="pricing-box-footer">
                  <a href="#" className="btn btn-primary">
                    learn more
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Pricing;
