import React from "react";
import Fade from "react-reveal/Fade";
import Star from "elements/Star";
import Button from "elements/button";

import TestimonyAccent from "assets/images/testimonial-landingpages-frame.jpg";

function Testimony({ data }) {
  return (
    <section className="container">
      <div className="row align-items-center" style={{ marginBottom: 100 }}>
        <div className="col-auto" style={{ marginRight: 60 }}>
          <Fade left>
            <div
              className="testimonial-hero"
              style={{ margin: `30px 0 0 30px` }}
            >
              <img
                className="position-absolute"
                src={data.imageUrl}
                alt="Testimonial"
                style={{ zIndex: 1 }}
              />
              <img
                className="position-absolute"
                src={TestimonyAccent}
                alt="Testimonial frame"
                style={{ margin: `-30px 0 0 -30px` }}
              />
            </div>
          </Fade>
        </div>
        <div className="col">
          <Fade right>
            <h4 style={{ marginBottom: 40 }}>{data.name}</h4>
            <Star value={data.rate} width={35} height={35} spacing={4}></Star>
            <h5 className="h3 font-weight-light line-height-2 my-3">
              {data.content}
            </h5>
            <span className="text-gray-500">
              {data.familyName}, {data.familyOccupation}
            </span>
            <div>
              <Button
                className="btn px-5"
                style={{ marginTop: 40 }}
                hasShadow
                isPrimary
                type="link"
                href={`/testimonial/${data._id}`}
              >
                Read Their Story
              </Button>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default Testimony;
