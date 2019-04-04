import React from "react";
import { Link, graphql } from "gatsby";
import Script from "react-load-script";

import { TitleAndMetaTags } from "../components/TitleAndMetaTags/TitleAndMetaTags";
import { Section } from "../components/Section/Section";
import { Contact } from "../components/Contact/Contact";
import { Typewriter } from "../components/Typewriter/Typewriter";
import { Banner } from "../components/Banner/Banner";
import { FakeImg } from "../components/FakeImg/FakeImg";

import pulledJerkChicken from "../images/pulled-jerk-chicken.jpg";
import sauceMild from "../images/mildhomepg1.jpg";
import sauceSpicy from "../images/spicyhomepg1.jpg";
import jerkCookout from "../images/Jerk_chicken_july_05.jpg";
import jerkPork from "../images/bbqjerkchicgrill.jpg";
import homeBanner from "../images/banner.jpg";

function handleScriptLoad() {
  if (typeof window !== `undefined` && window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
  window.netlifyIdentity.init();
}

function IndexPage({ data, location }) {
  return (
    <div className="main">
      <Script
        url="https://identity.netlify.com/v1/netlify-identity-widget.js"
        onLoad={() => handleScriptLoad()}
      />
      <TitleAndMetaTags />
      <Banner
        style={{ backgroundSize: "100%", padding: "12.75% 0" }}
        img={homeBanner}
        mobileImg={homeBanner}
      />
      <Section>
        <div className="grid">
          <h1 className="col -block md-push-1 lg-push-2 title">
            Carolina Pacific Foods Inc.
            <br />
            <span className="title-desc">Caybana Moon Sauces</span>
            <Typewriter
              className="title-desc animate"
              texts={["Exotic!", "Bold!", "Sauces!"]}
            />
          </h1>
        </div>

        <div className="grid">
          <div className="col md-10 md-push-1 lg-10 lg-push-2">
            <p className="measure">
              Carolina Pacific Foods strives to bring you quality, authentic and
              exotic, flavorful Caribbean and Latin American sauces under the
              brand name of Caybana Moon. Our sauces are made with clean &amp;
              simple ingredients, and have no artificial colors or flavors.
              Also, our sauces are gluten free, vegan, contain no high fructose
              corn syrup, and no trans fats. Most of our business is from happy
              and satisfied customers and their referrals. We would welcome the
              opportunity to earn your trust and provide you with healthy and
              flavorful sauces that easily transform meat, tofu or vegetables
              into authentic gourmet meals!
            </p>

            <p>
              <Link to="/about" className="button">
                Read our story
              </Link>
            </p>
          </div>
        </div>

        <div className="grid">
          <div className="gallery fake-img-group">
            <div className="col fluid md-7 lg-6 lg-push-1 fake-img-wrapper">
              <FakeImg className="-three-x-two" img={pulledJerkChicken} />
            </div>

            <div className="col fluid md-3 fake-img-wrapper narrow">
              <FakeImg
                className="-two-x-three"
                img={sauceMild}
                style={{ backgroundSize: "contain" }}
              />
            </div>
            <div className="col fluid md-3 fake-img-wrapper narrow">
              <FakeImg
                className="-two-x-three"
                img={sauceSpicy}
                style={{ backgroundSize: "contain" }}
              />
            </div>
          </div>
        </div>
      </Section>

      <Section className="-blue">
        <div className="grid">
          <h1 className="col md-push-1 lg-push-2">
            Craving Exotic and Bold Sauces?
          </h1>
        </div>

        <div className="grid">
          <div className="col md-7 lg-5 md-push-1 lg-push-3">
            <h3 className="measure-wider">Where to Buy!</h3>
            <p className="measure-wider">
              Buy our amazing sauces at these retailers!
            </p>
            <p className="measure-wider">
              <Link to="/stockists" className="button">
                See Stores
              </Link>
            </p>
          </div>
        </div>

        <div className="grid">
          <div className="col fluid md-10 md-push-1 lg-10 lg-push-1">
            <blockquote>
              I was having some friends over for dinner, which usually gets
              complicated because I have friends who are meat-eaters,
              vegetarians, vegans, and pescatarians. It’s a lot of work to cook
              separate foods for all these special diets, but then, I came
              across Caybana Moon Jerk Sauce and Marinade. I followed some of
              their recipes on their Web site, carolinapacificfoods.com, and my
              dinner party was so much easier than in the past. I simply got out
              a bunch of zip-top bags, and put either the mild or spicy Caybana
              Moon Jerk Sauce and Marinade into each bag. Then, I put chicken
              pieces in one bag, tofu and jackfruit in another, and shrimp,
              scallops and fish in the third bag. After marinating them for a
              little while, I baked them in the oven. I served a big tossed
              salad, which everyone could eat, and served a fresh fruit platter
              for dessert. Everybody raved about the Caybana Moon Jerk Sauce and
              Marinade, whether it was the mild or spicy, and for the first
              time, cooking for all these friends with different diets was easy!
              <span> &#8212; Diane A, Malibu, CA</span>
            </blockquote>
          </div>
        </div>
      </Section>

      <Banner img={jerkCookout} mobileImg={jerkCookout} />

      <Section>
        <Contact />
      </Section>
    </div>
  );
}

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query IndexPageQuery {
    allPostcodesJson {
      edges {
        node {
          allowed
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            name
            address
            postcode
          }
        }
      }
    }
  }
`;

export default IndexPage;
