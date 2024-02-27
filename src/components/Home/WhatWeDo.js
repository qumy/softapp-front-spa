import React from "react";

class WhatWeDo extends React.Component {
  render() {
    return (
      <section className="section-66 section-sm-top-100 section-sm-bottom-90 bg-gray-dark">
        <div className="shell text-center">
          <div className="range">
            <div className="cell-sm-6 cell-md-3">
              <div className="progress-bar-radial-wrap">
                <div
                  data-value={25}
                  data-stroke={25}
                  data-trail={2}
                  data-gradient="#3ec7c2"
                  className="progress-bar-js progress-bar-radial progress-bar-primary"
                />
              </div>
              <h5 className="offset-top-15 offset-sm-top-33">Networking</h5>
            </div>
            <div className="cell-sm-6 cell-md-3 offset-top-50 offset-sm-top-0">
              <div className="progress-bar-radial-wrap">
                <div
                  data-value={50}
                  data-stroke={25}
                  data-trail={2}
                  data-gradient="#3ec7c2"
                  className="progress-bar-js progress-bar-radial progress-bar-primary"
                />
              </div>
              <h5 className="offset-top-15 offset-sm-top-33">Programming</h5>
            </div>
            <div className="cell-sm-6 cell-md-3 offset-top-50 offset-md-top-0">
              <div className="progress-bar-radial-wrap">
                <div
                  data-value={87}
                  data-stroke={25}
                  data-trail={2}
                  data-gradient="#3ec7c2"
                  className="progress-bar-js progress-bar-radial progress-bar-primary"
                />
              </div>
              <h5 className="offset-top-15 offset-sm-top-33">
                Mobile applications
              </h5>
            </div>
            <div className="cell-sm-6 cell-md-3 offset-top-50 offset-md-top-0">
              <div className="progress-bar-radial-wrap">
                <div
                  data-value={75}
                  data-stroke={25}
                  data-trail={2}
                  data-gradient="#3ec7c2"
                  className="progress-bar-js progress-bar-radial progress-bar-primary"
                />
              </div>
              <h5 className="offset-top-15 offset-sm-top-33">
                technical support
              </h5>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default WhatWeDo;
