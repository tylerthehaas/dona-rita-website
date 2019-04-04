import React from "react";

export function Contact() {
  return (
    <div>
      <div className="grid">
        <h3 className="col md-push-1 lg-push-2">Contact us</h3>
      </div>

      <div className="grid">
        <div className="col sm-12 md-5 lg-3 md-push-1 lg-push-3 contact">
          drop us a line at
          <a
            href="mailto:carolinapacificfoods@protonmail.com"
            className="contact-link"
          >
            carolinapacificfoods@protonmail.com
          </a>
          <span className="contact-or">
            <span>or</span>
          </span>
          write us at
          <address className="contact">
            <span className="contact-address">
              Carolina Pacific Foods, Inc.
            </span>
            1706 Front Street #724
            <br />
            Lynden, WA 98264
          </address>
        </div>

        <div className="col fluid md-3 lg-2 md-push-1 lg-push-2 button-group">
          <a href="https://twitter.com/CaybanaM" className="button -block">
            Twitter
          </a>
          <a href="https://facebook.com/CaybanaMoon" className="button -block">
            Facebook
          </a>
        </div>
      </div>
    </div>
  );
}
