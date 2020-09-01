import React, { Component } from "react";

class Services extends Component {
  render() {
    return (
      <section className="section bg-gray" id="services">
        <div className="container text-center">
          <h1 className="section-title"> Dienstleistungen </h1>
          <p className="section-subtitle">
            Wir haben möglicherweise keine breite Palette von Dienstleistungen,
            aber wir sind auf diese kurzen und nützlichen Dienstleistungen
            spezialisiert
          </p>

          <div className="row mt-5">
            <div className="col-md-6">
              <div className="service-box text-center">
                <h4 className="service-title">
                  <img src="assets/images/s1.jpeg" height="35" alt="Service 1" />
                  Organisieren
                </h4>
                <p className="service-description mb-0">
                Wir organisieren alle Schritte zum Einrichten von Produktionslinien für Sie
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-box text-center">
                <h4 className="service-title">
                <img src="assets/images/s2.jpeg" height="35" alt="Service 2" />
                  Überwachung
                </h4>
                <p className="service-description mb-0">
                Nach der Organisation sind wir immer für die Überwachung verantwortlich
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-box text-center">
                <h4 className="service-title">
                <img src="assets/images/s3.jpeg" height="35" alt="Service 3" />
                  Performance
                </h4>
                <p className="service-description mb-0">
                Auf Wunsch setzen wir das Projekt auch um
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-box text-center">
                <h4 className="service-title">
                <img src="assets/images/s4.jpeg" height="35" alt="Service 4" />
                  Zertifikat
                </h4>
                <p className="service-description mb-0">
                Ausstellung eines Qualitätszertifikats aus Deutschland
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
