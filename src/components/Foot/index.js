import React from "react"
// styles
import "./Foot.css"
// bootstrap components
import { Container } from "react-bootstrap"
// image routes
import VAI from "./images/VAI_member.jpg"
import ALI from "./images/artlinks-logo.jpg"

function Foot() {
  return (
    <div className="foot-container">
      <Container>
        <div className="foot-grid">
          <div>
            <div className="foot-name">Maeve O'Byrne</div>
            <p className="foot-body">
              Artist based in County Wexford.
              <br />
              Member of Visual Artists Ireland.
              <br />
              Member of Artlinks.
            </p>
          </div>

          <div className="foot-marks">
            <img
              src={VAI}
              alt="Visual Artists Ireland member"
              className="foot-mark"
            />
            <img src={ALI} alt="Artlinks member" className="foot-mark" />
          </div>

          <div className="foot-contact">
            <div>
              <div className="foot-label">Email</div>
              <a href="mailto:maeveobyrne1961@gmail.com">
                maeveobyrne1961@gmail.com
              </a>
            </div>
            <div>
              <div className="foot-label">Call</div>
              <a href="tel:00353872843571">+353 87 284 3571</a>
            </div>
          </div>
        </div>

        <div className="foot-rule">
          <span>{new Date().getFullYear()} © Maeve O'Byrne</span>
          <span>All Rights Reserved</span>
        </div>
      </Container>
    </div>
  )
}

export default Foot
