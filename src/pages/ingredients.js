import React from "react";

import { TitleAndMetaTags } from "../components/TitleAndMetaTags/TitleAndMetaTags";
import { Section } from "../components/Section/Section";
import { Contact } from "../components/Contact/Contact";
import { FakeImg } from "../components/FakeImg/FakeImg";

import mildLabel from "../images/mildlabel.jpg";
import spicyLabel from "../images/spicylabel.jpg";

function IngredientsPage() {
  return (
    <div className="main">
      <TitleAndMetaTags title="Ingredients" pathname="ingredients" />
      <Section>
        <div className="grid">
          <h1 className="col -block md-push-1 lg-push-2 title">Ingredients.</h1>
        </div>

        <div className="grid">
          <div className="col fluid md-10 lg-10 lg-push-1">
            <FakeImg
              className="-three-x-two -label"
              img={mildLabel}
              style={{ backgroundSize: "contain" }}
            />
          </div>
          <div className="col fluid md-10 lg-10 lg-push-1">
            <FakeImg
              className="-three-x-two -label"
              img={spicyLabel}
              style={{ backgroundSize: "contain" }}
            />
          </div>
        </div>
      </Section>

      <Section className="-white">
        <Contact />
      </Section>
    </div>
  );
}

export default IngredientsPage;
