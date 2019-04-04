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

        <div className="grid" style={{ maxWidth: "100%" }}>
          <div className="col fluid md-7 md-push-1 lg-6 lg-push-2">
            <FakeImg className="-three-x-two -label" img={mildLabel} />
          </div>
          <div className="col fluid md-7 md-push-1 lg-6 lg-push-2">
            <FakeImg className="-three-x-two -label" img={spicyLabel} />
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
