import React from "react";

import i from "../../assets/images/home-2-568x642.png";

class WhyChooseUs extends React.Component {
  render() {
    return (
      <section className="section-66 section-sm-top-87 section-sm-bottom-100">
        <div className="shell">
          <div className="range range-sm-center text-center">
            <div className="cell-sm-11">
              <h3>Why choose us</h3>
              <p className="big">
                We are focused on providing integrated solutions and services to
                customers around the world. Putting our clients’ interests
                first, we work hard to exceed your expectations.
              </p>
            </div>
          </div>
        </div>
        <div className="shell-wide">
          <div className="range range-xs-center offset-top-40 offset-md-top-75">
            <div className="cell-sm-10 cell-md-12">
              <div className="range range-xs-center">
                <div className="cell-sm-8 cell-md-4 cell-md-push-2">
                  <figure className="image-wrap-variant-2">
                    <img src={i} alt width={568} height={642} />
                  </figure>
                </div>
                <div className="cell-xs-10 cell-sm-6 cell-md-4 offset-top-40 offset-md-top-50 cell-md-push-1">
                  <div className="inset-md-right-15 inset-xl-right-60">
                    <ul className="list-xl">
                      <li>
                        <article className="icon-box icon-box-right">
                          <div className="box-left">
                            <span className="icon icon-primary icon-md fl-puppets-padlock75" />
                          </div>
                          <div className="box-body">
                            <h5>
                              <a href="#">FREE</a>
                            </h5>
                            <p>
                              All our apps are distributed online for free, so
                              you don’t have to pay anything to anyone else to
                              use them.
                            </p>
                          </div>
                        </article>
                      </li>
                      <li>
                        <article className="icon-box icon-box-right">
                          <div className="box-left">
                            <span className="icon icon-primary icon-md fl-puppets-paper-plane" />
                          </div>
                          <div className="box-body">
                            <h5>
                              <a href="#">GET SMARTER</a>
                            </h5>
                            <p>
                              We design our apps with the end user in mind. They
                              also perfectly fit for increasing your technical
                              awareness.
                            </p>
                          </div>
                        </article>
                      </li>
                      <li>
                        <article className="icon-box icon-box-right">
                          <div className="box-left">
                            <span className="icon icon-primary icon-sm fl-puppets-telesales" />
                          </div>
                          <div className="box-body">
                            <h5>
                              <a href="#">CUSTOMER SERVICE</a>
                            </h5>
                            <p>
                              Have a question regarding our apps? Contact our
                              customer service department to have it answered
                              today!
                            </p>
                          </div>
                        </article>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="cell-xs-10 cell-sm-6 cell-md-4 offset-top-40 offset-md-top-50 cell-md-push-3">
                  <div className="inset-md-left-15 inset-xl-left-60">
                    <ul className="list-xl">
                      <li>
                        <article className="icon-box">
                          <div className="box-left">
                            <span className="icon icon-primary icon-sm fl-puppets-thumb56" />
                          </div>
                          <div className="box-body">
                            <h5>
                              <a href="#">GREAT usability</a>
                            </h5>
                            <p>
                              We pay a lot of attention to providing a high
                              level of usability to make sure your goals are met
                              by using our products.
                            </p>
                          </div>
                        </article>
                      </li>
                      <li>
                        <article className="icon-box">
                          <div className="box-left">
                            <span className="icon icon-primary icon-sm fl-puppets-science28 " />
                          </div>
                          <div className="box-body">
                            <h5>
                              <a href="#">SOCIAL</a>
                            </h5>
                            <p>
                              Social apps play a great role for many users
                              nowadays, that’s why we are also oriented to this
                              type of applications.
                            </p>
                          </div>
                        </article>
                      </li>
                      <li>
                        <article className="icon-box">
                          <div className="box-left">
                            <span className="icon icon-primary icon-sm fl-puppets-stormy5" />
                          </div>
                          <div className="box-body">
                            <h5>
                              <a href="#">AMAZING STYLE</a>
                            </h5>
                            <p>
                              Want your smartphone to look stylish? There isn’t
                              anything better than apps developed and designed
                              by our company!
                            </p>
                          </div>
                        </article>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default WhyChooseUs;
