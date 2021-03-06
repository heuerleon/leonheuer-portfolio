import React from "react";
import Layout from "../components/layout";

const ErrorPage = () => {
  return (
    <Layout>
      <section className="full-height alt-section-dark y-axis-centered simple-bg">
        <div className="row y-axis-centered x-axis-centered">
          <div className="column-centered">
            <h1>404. This page does not exist.</h1>
            <p>
              <a href="/">Return to home</a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ErrorPage;
