import React from "react";
import { Link } from "gatsby";

import bbqChicken from "../images/20180702_211656.jpg";
import { TitleAndMetaTags } from "../components/TitleAndMetaTags/TitleAndMetaTags";
import { Section } from "../components/Section/Section";
import { Contact } from "../components/Contact/Contact";
import { FakeImg } from "../components/FakeImg/FakeImg";

function StoryPage() {
  return (
    <div className="main">
      <TitleAndMetaTags title="Story" pathname="story" />
      <Section>
        <div className="grid">
          <h1 className="col -block md-push-1 lg-push-2 title">What's Jerk?</h1>
        </div>
        <div className="grid">
          <div className="col fluid md-7 md-push-1 lg-6 lg-push-2">
            <FakeImg
              className="-square"
              img={bbqChicken}
              style={{ transform: "rotate(90deg)" }}
            />
          </div>
        </div>
        <div className="grid">
          <div className="col md-8 lg-6 lg-push-2">
            <p className="measure-wider">
              Jerk cuisine is a way to season and grill, BBQ, smoke, bake, slow
              cook, or pressure cook meat, seafood, vegetables, jackfruit or
              tofu. It has roots in Peru, Africa, and Jamaica, and is now
              popular not only throughout the Caribbean, but now has a global
              presence as well. There are probably as many different recipes for
              jerk sauces and marinades as there are recipes for hot sauces and
              barbecue sauces in the United States. Most jerk sauce and marinade
              recipes contain many Caribbean ingredients such as Scotch Bonnet
              or habanero peppers, pimento seeds (allspice) and exotic Caribbean
              spices.
            </p>
            <p className="measure-wider">
              The word jerk started as a noun and then became a verb as in
              "Jerking" which involved poking holes in the meat, seafood,
              vegetables, jackfruit or tofu so the ingredients and spices could
              permeate the foods. Jamaican historians say the name Jerk also may
              have come from immersing the meat, seafood, vegetables, jackfruit
              or tofu in the marinade, or from the way the old-timers would jerk
              a piece of meat from a roast being smoked and grilled.
            </p>
            <p>
              <Link to="/ingredients" className="button">
                Ingredients
              </Link>
            </p>
          </div>
        </div>
      </Section>

      <Section className="-white">
        <Contact />
      </Section>
    </div>
  );
}

export default StoryPage;
