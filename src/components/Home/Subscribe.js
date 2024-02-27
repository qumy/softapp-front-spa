import React from "react";

class Subscribe extends React.Component {
  render() {
    return (
      <section className="section-66 section-md-top-87 section-md-bottom-90">
        <div className="shell text-center">
          <div className="range">
            <div className="cell-xs-12">
              <h3 className="text-primary">Subscribe to our newsletter</h3>
              <p className="big">
                Get useful tips, app updates and resources straight into your
                inbox.
              </p>
              <div className="max-width-1 block-centered offset-top-45">
                {}
                <form
                  data-form-output="form-output-global"
                  data-form-type="subscribe"
                  method="post"
                  action="bat/rd-mailform.php"
                  className="rd-mailform rd-mailform-inline"
                >
                  <div className="form-group">
                    <label htmlFor="subscribe-email" className="form-label">
                      Enter your email:
                    </label>
                    <input
                      id="subscribe-email"
                      type="email"
                      name="email"
                      data-constraints="@Email @Required"
                      className="form-control"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Subscribe;
