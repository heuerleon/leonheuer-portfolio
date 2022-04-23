import React from "react";
import Layout from "../components/layout";

const Legal = () => {
  return (
    <Layout>
      <section className="padding-section alt-section-dark adjust-to-nav">
        <div className="row">
          <div className="column-centered">
            <h1>Legal notice</h1>
            <p className="warning-message">
              <i className="fas fa-info-circle"></i> Note that the content of
              this site is only available in German as of now.
            </p>
            <p>
              <a href="/">Home</a> / <a href="/legal-notice">Legal-Notice</a>
            </p>
          </div>
        </div>
      </section>

      <section className="padding-section">
        <div className="container">
          <div className="row">
            <div className="column-left">
              <h1>Impressum</h1>

              <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
              <p>
                Leon Heuer
                <br />
                Am Brahmberg 25
                <br />
                23611 Bad Schwartau
              </p>

              <h2>Kontakt</h2>
              <p>
                Telefon: +49 176 66058083
                <br />
                E-Mail: leon(at)heuer.ovh
              </p>

              <p>
                Quelle: <a href="https://www.e-recht24.de">eRecht24</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Legal;
