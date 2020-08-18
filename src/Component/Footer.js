import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-3 mt-4">
              <div className="widget-title">Revolution</div>
              <ul className="list-unstyled footer-list">
                <li>
                  <a href="#header">Home</a>
                </li>
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <li>
                  <a href="#team">Team</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-lg-3 mt-4">
              <div className="widget-title">Useful Links</div>
              <ul className="list-unstyled footer-list">
                <li>
                  <a href="/">Term of Services</a>
                </li>
                <li>
                  <a href="/">Privacy & Policy</a>
                </li>
                <li>
                  <a href="/">Sitemaps</a>
                </li>
                <li>
                  <a href="/">Our Rules</a>
                </li>
                <li>
                  <a href="/">Career</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-lg-3 mt-4">
              <div className="widget-title">Support</div>
              <ul className="list-unstyled footer-list">
                <li>
                  <a href="/">Help Center</a>
                </li>
                <li>
                  <a href="/">Live Chat</a>
                </li>
                <li>
                  <a href="/">Press</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 mt-4">
              <div className="widget-title">Newsletter</div>
              <form className="form subscribe">
                <input
                  placeholder="Your Email"
                  className="form-control mb-3"
                  required=""
                />
                <a href="/" className="btn btn-custom btn-block submit">
                  Subscribe
                </a>
              </form>
            </div>
          </div>

          <div className="border-separator"></div>

          <div className="footer-bottom">
            <div className="d-flex">
              2020 © Revolution Corp
              <div className="ml-auto">
                <ul className="list-socmed list-unstyled m-0">
                  <li>
                    <a href="/">
                      <i className="ion ion-logo-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="ion ion-logo-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="ion ion-logo-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="ion ion-logo-dribbble"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
