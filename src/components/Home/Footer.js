import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="page-foot bg-gray-darker">
        <div className="shell text-center">
          <div className="range">
            <div className="cell-xs-12">
              <ul className="list-inline list-inline-sm">
                <li>
                  <a href="#">
                    <span className="icon icon-circle icon-xs icon-jungle-green-contrast fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon icon-circle icon-xs icon-jungle-green-contrast fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon icon-circle icon-xs icon-jungle-green-contrast fa-google-plus" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon icon-circle icon-xs icon-jungle-green-contrast fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="cell-xs-12 offset-top-25">
              <p className="rights">
                <a href="index.html" className="brand">
                  Soft App
                </a>
                 © 
                <span id="copyright-year" />
                <span className="separator" />
                <a href="privacy.html" className="link-white">
                  Privacy Policy
                </a>
                {}
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
