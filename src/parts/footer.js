import React from "react";

import Button from "elements/button";
import IconText from "parts/iconText";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto" style={{width:380}}>
            <IconText />
            <p className="brand-tagline">
              We kaboom your beauty holiday instantly and memorable
            </p>
          </div>
          <div className="col mr-5">
            <h6 className="mt-2">For Beginers</h6>
            <ul className="list-group lust-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  Register
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Start Booking a Room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/payments">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col mr-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group lust-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/career">
                  Our Career
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Terms & Condition
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-3">
          <h6 className="mt-2">Connect Us</h6>
            <ul className="list-group lust-group-flush">
              <li className="list-group-item">
                <Button isExternal type="link" href="mailto:support@staycation.id">
                  support@staycation.id
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="tel:+6281219441511">
                  +62 812 1944 1511
                </Button>
              </li>
              <li className="list-group-item">
                <span>Staycation, kemang, Jakarta</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
            <div className="col text-center copyrights">
                Copyright 2021 All right reserved Staycation
            </div>
        </div>
      </div>
    </footer>
  );
}
