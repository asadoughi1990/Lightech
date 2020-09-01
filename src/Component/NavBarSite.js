import React, { Component } from "react";
import Sticky from "./Sticky";

export default class NavBarSite extends Component {
  render() {
    return (
      <React.Fragment>
        <Sticky></Sticky>

        <section
          id="header"
          className="height-half"
          data-image="assets/images/header.jpg"
        >
          <div className="overlay-bg"></div>
          <div className="d-table w-100 h-100">
            <div className="d-table-cell align-middle">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h1 className="header-title mt-4">
                      Wir sind Ihre
                      <br />
                      Autobeleuchtungslösung
                    </h1>
                    <p className="header-description mt-3">
                      Mit der Unterstützung unserer technischen und technischen
                      Fähigkeiten
                      <br />
                      bieten wir die besten Lösungen im Bereich der
                      industriellen Produktion
                    </p>
                    <a href="/" className="btn btn-custom btn-round mt-3">
                      Mehr erfahren
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
