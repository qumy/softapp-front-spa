import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="page-head">
        {}
        <div className="rd-navbar-wrap">
          <nav
            data-layout="rd-navbar-fixed"
            data-sm-layout="rd-navbar-fixed"
            data-md-device-layout="rd-navbar-fixed"
            data-lg-layout="rd-navbar-static"
            data-lg-device-layout="rd-navbar-static"
            data-stick-up-clone="true"
            data-md-stick-up-offset="120px"
            data-lg-stick-up-offset="120px"
            className="rd-navbar"
          >
            <div className="rd-navbar-inner">
              {}
              <div className="rd-navbar-panel">
                {}
                <button
                  data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                  className="rd-navbar-toggle"
                >
                  <span />
                </button>
                {}
                <a href="index.html" className="rd-navbar-brand">
                  <div className="brand-logo">
                    <span className="icon icon-lg icon-primary fl-puppets-disc33" />
                  </div>
                  <div className="brand-name">
                    <span className="text-white text-bold">Soft</span>
                    <span>App</span>
                  </div>
                </a>
              </div>
              <div className="rd-navbar-nav-wrap">
                {}
                <ul className="rd-navbar-nav">
                  <li className="active">
                    <a href="index.html">Home</a>
                    {}
                    <ul className="rd-navbar-dropdown">
                      <li>
                        <a href="#">History</a>
                      </li>
                      <li>
                        <a href="#">Offers</a>
                      </li>
                      <li>
                        <a href="#">News</a>
                        {}
                        <ul className="rd-navbar-dropdown">
                          <li>
                            <a href="#">Fresh</a>
                          </li>
                          <li>
                            <a href="#">New</a>
                          </li>
                          <li>
                            <a href="404.html">404 Page</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="services.html">Services</a>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="contacts.html">Contacts</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
