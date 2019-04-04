import React from "react";

import bbqChickenWaiter from "../images/bbqjerkchic-waiter.jpg";
import bbqChicken from "../images/bbqchicken.jpg";
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
          <h1 className="col -block md-push-1 lg-push-2 title">
            This is our story.
            <br />
            <span className="sub-title">A family adventure.</span>
          </h1>
        </div>
        <div className="grid">
          <div className="col fluid md-7 md-push-1 lg-6 lg-push-2">
            <FakeImg className="-square" img={bbqChickenWaiter} />
          </div>
        </div>
        <div className="grid">
          <div className="col fluid md-7 md-push-1 lg-6 lg-push-2">
            <h2>Our Love for Jerk Sauce</h2>
          </div>

          <div className="col fluid md-7 md-push-1 lg-6 lg-push-2">
            <p className="measure">
              Our family has traveled throughout the Caribbean, for over 20
              years, and love to explore different cultures through their foods.
              We came across jerk chicken on one of our earliest trips, and fell
              in love with it. Jerk sauce in the Caribbean is like hot sauce or
              barbecue sauce in the United States. Here in the United States,
              there are hot sauce and barbecue festivals and contests, and in
              the Caribbean, there are jerk festivals and contests, where jerk
              aficionados search for new, exciting jerk sauces. Jerk has a
              dedicated, international following for sure.
            </p>
          </div>
        </div>
      </Section>

      <Section className="-white">
        <div className="grid">
          <div className="col fluid md-7 md-push-1 lg-6 lg-push-2">
            <h2>A Labor of Love</h2>
          </div>
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
          <div className="col fluid md-7 md-push-1 lg-6 lg-push-2">
            <p className="measure">
              During our travels, we tasted fiery hot jerk chicken, sweet and
              savory jerk chicken, and every kind of jerk chicken on the jerk
              spectrum that you could ever imagine. After searching many
              different Caribbean cultures for jerk recipes, and comparing over
              50 recipes, I made my first attempt at making my own jerk sauce. I
              tried varying amounts of Caribbean spices and ingredients, in an
              attempt to create the best jerk sauce out there. There was a lot
              of trial and error, but I eventually got the recipe right!!! I’ve
              spent 15 years developing Caybana Moon Jerk Sauce and marinade! It
              has truly been a labor of love.
            </p>

            <p className="measure">
              There are few sauces in the world with this much flavor, and the
              level of heat varies from recipe to recipe. Here, at Caybana Moon,
              we have developed a mild and a spicy Caribbean jerk sauce and
              marinade. It is the most delicious sauce I have ever eaten! Our
              best advertising has been from our happy and satisfied customers!
              We hope you will enjoy it as much as we do.
            </p>
          </div>
        </div>
      </Section>

      <Contact />
    </div>
  );
}

export default StoryPage;
