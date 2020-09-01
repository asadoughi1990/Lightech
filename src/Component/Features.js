import React, { Component } from "react";

class Features extends Component {
  render() {
    return (
      <section className="section" id="features">
        <div className="container text-center">
          <h1 className="section-title"> Eigenschaften </h1>
          <p className="section-subtitle">
            Unsere Hauptkompetenz liegt in der Entwicklung von
            Konstruktionsprozessen, die sich auf elektronische Komponenten,
            insbesondere LEDs, konzentrieren
          </p>
          <div className="mt-5">
            <div className="row feature">
              <div className="col-md-6 feature-img">
                <img
                  src="assets/images/f-img3.jpg"
                  className="img-fluid mb-5 mb-md-0"
                  alt="handshake"
                />
              </div>
              <div className="col-md-6 feature-detail">
                <h2 className="feature-title">
                  Beteiligung an der Einrichtung von Lichtlabors
                </h2>
                <p className="feature-description">
                  Wir stehen Ihnen zur Seite, um leichte Subspezialitätslabors
                  in der Automobilindustrie entsprechend Ihren Anforderungen
                  einzurichten und zu überwachen.
                </p>
              </div>
            </div>

            <div className="row feature">
              <div className="col-md-6 feature-img feature-right">
                <img
                  src="assets/images/f-img2.jpg"
                  className="img-fluid mb-5 mb-md-0"
                  alt="sibiloo"
                />
              </div>
              <div className="col-md-6 feature-detail">
                <h2 className="feature-title">Probenahme</h2>
                <p className="feature-description">
                  Zusätzlich zum Entwerfen von technischen Tests können Sie auch
                  Muster von von Lichtern entworfenen Platten für erste Tests
                  verwenden.
                </p>
              </div>
            </div>

            <div className="row feature">
              <div className="col-md-6 feature-img">
                <img
                  src="assets/images/f-img4.jpg"
                  className="img-fluid mb-5 mb-md-0"
                  alt="switches"
                />
              </div>
              <div className="col-md-6 feature-detail">
                <h2 className="feature-title">Überwachen Sie mit uns</h2>
                <p className="feature-description">
                  Wir werden ihre Produktions- und Qualitätskontrollprozesse
                  immer nach Genehmigung unserer Lieferanten überwachen
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Features;
