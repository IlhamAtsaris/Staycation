import React from "react";

import ReactHtmlParser from "react-html-parser";
export default function PageDetailDescription({ data }) {
  return (
    <main>
      <h4>About the place</h4>
      <div style={{ marginTop: 40 }}>{ReactHtmlParser(data.description)}</div>
      <div className="row" style={{ marginTop: 40 }}>
          {data.features.map((feature, index) => {
              return (
                <div
                  key={`feature-${index}`}
                  className="col-3"
                  style={{ marginBottom: 20 }}
                >
                  <img
                    width="38"
                    className="d-block mb-2"
                    src={feature.imageUrl}
                    alt={feature.name}
                  />{" "}
                  <span>{feature.qty}</span>{" "}
                  <span className="text-gray-500 font-weight-light">
                    {feature.name}
                  </span>
                </div>
              );
            })}
      </div>
    </main>
  );
}
