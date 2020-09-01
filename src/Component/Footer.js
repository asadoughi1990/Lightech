import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-3 mt-4">
              <div className="widget-title">Lightech</div>
              <ul className="list-unstyled footer-list">
                <li>
                  <a href="#header">Zuhause</a>
                </li>
                <li>
                  <a href="#features">Eigenschaften</a>
                </li>
                <li>
                  <a href="#services">Dienstleistungen</a>
                </li>
                <li>
                  <a href="#team">Mannschaft</a>
                </li>
                {/* <li>
                  <a href="#contact">Contact</a>
                </li> */}
              </ul>
            </div>
            <div className="col-md-4 col-lg-3 mt-4">
              <div className="widget-title">Nützliche Links</div>
              <ul className="list-unstyled footer-list">
                <li>
                  <a href="/">Laufzeit der Dienstleistungen</a>
                </li>
                <li>
                  <a href="/">Datenschutz-Bestimmungen</a>
                </li>
                <li>
                  <a href="/">Sitemaps</a>
                </li>
                <li>
                  <a href="/">Unsere Regeln</a>
                </li>
                {/* <li>
                  <a href="/">Career</a>
                </li> */}
              </ul>
            </div>
            <div className="col-md-4 col-lg-3 mt-4">
              <div className="widget-title">Unterstützung</div>
              <ul className="list-unstyled footer-list">
                <li>
                  <a href="/">Hilfezentrum</a>
                </li>
                <li>
                  <a href="/">Live Chat</a>
                </li>
                <li>
                  <a href="/">Drücken Sie</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 mt-4">
              <div className="widget-title">Newsletter</div>
              <form className="form subscribe">
                <input
                  placeholder="Deine E-Mail"
                  className="form-control mb-3"
                  required=""
                />
                <a href="/" className="btn btn-custom btn-block submit">
                  Abonnieren
                </a>
              </form>
            </div>
          </div>

          <div className="border-separator"></div>

          <div className="footer-bottom">
            <div className="d-flex">
              2020 © Lightech Corp
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
