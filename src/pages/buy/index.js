import React from "react";
import { graphql } from "gatsby";

import { TitleAndMetaTags } from "../../components/TitleAndMetaTags/TitleAndMetaTags";
import { Section } from "../../components/Section/Section";
import { Contact } from "../../components/Contact/Contact";
import { FakeImg } from "../../components/FakeImg/FakeImg";

import { createGroupedArray } from "../../utils/createGroupedArray";

import twins from "../../images/twins.jpg";

function Shop({ className, shop }) {
  return (
    <div className={`col sm-10 md-3 ${className}`}>
      <div>
        <h3>{shop.name}</h3>
        <address>
          {shop.address}
          <br />
          {shop.area} {shop.postcode}
        </address>
        {shop.url && (
          <a
            className="faded"
            href={shop.url}
            target="_blank"
            style={{ display: "block" }}
          >
            {shop.webpage}
          </a>
        )}
        <a href={`mailto: ${shop.email}`} style={{ display: "block" }}>
          {shop.email}
        </a>
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${
            shop.postcode
          }`}
          className="small faded"
          target="_blank"
        >
          View on map
        </a>
      </div>
    </div>
  );
}

function ShopsPage({ data }) {
  const groupedData = createGroupedArray(data.allMarkdownRemark.edges, 3);

  return (
    <div className="main" style={{ marginBottom: "24px" }}>
      <TitleAndMetaTags title="Shops" pathname="shops" />
      <Section>
        <div className="grid">
          <h1 className="col -block md-push-1 lg-push-2 title">
            Where to buy
            <br />
            <span className="sub-title">
              our delicious
              <br />
              sauces.
            </span>
          </h1>
        </div>

        {groupedData.map((group, index) => (
          <div key={`group-${index}`} className="grid shops-list">
            {group.map(({ node }, index) => (
              <Shop
                key={node.frontmatter.name}
                shop={node.frontmatter}
                className={index === 0 ? "md-push-2 lg-push-3" : ""}
              />
            ))}
          </div>
        ))}
      </Section>

      <Section className="-blue shops-interest">
        <div className="grid">
          <h2 className="h1 col md-push-1 lg-push-2">
            Interested in stocking?
          </h2>
        </div>

        <div className="grid">
          <div className="col md-7 lg-5 md-push-1 lg-push-3">
            <p className="measure-wider">
              We're currently growing our network of retailers. If you're
              interested in stocking our product at your store, please email us
              at{" "}
              <a href="mailto:carolinapacific@protonmail.com">
                carolinapacific@protonmail.com
              </a>
              .<br />
              Distributors welcome.
            </p>
          </div>
        </div>

        <div className="grid">
          <div className="col fluid md-7 md-push-1 lg-6 lg-push-2">
            <FakeImg
              className="-three-x-two"
              img={twins}
              style={{ backgroundSize: "contain" }}
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid">
          <h2 className="h1 col" style={{ textAlign: "center", width: "100%" }}>
            Reviews
          </h2>
        </div>
        <div className="grid">
          <div className="col md-12 lg-12">
            <blockquote>
              I was having some friends over for dinner, which usually gets
              complicated because I have friends who are meat-eaters,
              vegetarians, vegans, and pescatarians. It’s a lot of work to cook
              separate foods for all these special diets, but then, I came
              across Caybana Moon Jerk Sauce and Marinade. I followed some of
              their recipes on their Web site, and my dinner party was so much
              easier than in the past. I simply got out a bunch of zip-top bags,
              and put either the mild or spicy Caybana Moon Jerk Sauce and
              Marinade into each bag. Then, I put chicken pieces in one bag,
              tofu and jackfruit in another, and shrimp, scallops and fish in
              the third bag. After marinating them for a little while, I baked
              them in the oven. I served a big tossed salad, which everyone
              could eat, and served a fresh fruit platter for dessert. Everybody
              raved about the Caybana Moon Jerk Sauce and Marinade, whether it
              was the mild or spicy, and for the first time, cooking for all
              these friends with different diets was easy!
              <span> &#8212; Diane A., Malibu, CA</span>
            </blockquote>
          </div>
          <div className="col md-12 lg-12">
            <blockquote>
              There is nothing better than a Caybana Moon Spicy Jerk Sauce and
              Marinade Grilled Shrimp Po' Boy. So, easy!!! Simply simmer some
              shelled, fresh shrimp in your sauce until done, and slice a nice
              fresh French bread roll almost in half, lengthwise. Put your spicy
              jerk shrimp on the roll along with some shredded lettuce, tomato
              slices, and Caybana Moon Spicy Jerk Sauce and Marinade mixed with
              a little mayonnaise. For my fried Po’Boy, I marinate about 1 1/2
              pounds shelled, fresh shrimp in some Caybana Moon Spicy Jerk Sauce
              and Marinade for about 15 minutes. Dip marinated shrimp into about
              a cup of buttermilk, and dredge through a coating mix of about 1
              1/2 cups all-purpose flour and 1 cup cornmeal with a little salt
              sprinkled into the mix. Fry over medium high heat in a high smoke
              point oil, like coconut oil or avocado oil. Layer the fried shrimp
              onto your sliced French bread roll, with shredded lettuce, juicy
              tomato slices, mild onion slices, and a half and half mixture of
              Caybana Moon Spicy Jerk Sauce and Marinade and mayonnaise. Sorry
              for the long review, but I just couldn’t help myself. Both these
              Po’ Boys are so yummy!!!
              <span> &#8212; Nora B., New Orleans, Louisiana</span>
            </blockquote>
          </div>
          <div className="col md-12 lg-12">
            <blockquote>
              I marinated some sirloin steaks in your Caybana Moon Mild Jerk
              Sauce and Marinade for about 4 hours, and then cooked them on the
              grill. I served them with corn-on-the-cobb, and a big baked potato
              with butter, sour cream, shredded cheese and bacon. I served some
              fresh Caybana Moon Mild Jerk Sauce and Marinade on the side as a
              steak dipping sauce, and this added such a nice flavor to my
              steaks! The flavorful Caribbean spices from your sauce really made
              our steaks super tasty, and very moist and tender! Definitely
              going to make this meal again. It was a big hit!!!
              <span> &#8212; Kirk D., Des Moines, IA</span>
            </blockquote>
          </div>
          <div className="col md-12 lg-12">
            <blockquote>
              I took some live Maryland Blue Crabs, put them in a big pot with a
              good quality beer in the bottom, and layered the crabs with some
              of your Caybana Moon Spicy Jerk Sauce and Marinade. I steamed them
              for around 45 minutes. I served them with corn-on-the-cobb and
              potato salad, and I served fresh Caybana Moon Spicy Jerk Sauce and
              Marinade on the side as a dipping sauce! Everyone liked this spicy
              Caribbean alternative to the usual Chesapeake Bay seasoning!
              <span> &#8212; Keith W., Salisbury, MD</span>
            </blockquote>
          </div>
          <div className="col md-12 lg-12">
            <blockquote>
              I mixed some Caybana Moon Spicy Jerk Sauce and Marinade with equal
              parts mayonnaise, and dipped my fried fish and hush puppies into
              it. Very tasty!
              <span> &#8212; Wyatt J., Rock Hill, SC</span>
            </blockquote>
          </div>
        </div>
      </Section>

      <Section className="-white">
        <Contact />
      </Section>
    </div>
  );
}

export default ShopsPage;

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query ShopsQuery {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___postcode] }) {
      edges {
        node {
          frontmatter {
            address
            area
            email
            name
            postcode
            url
            title
            webpage
          }
        }
      }
    }
  }
`;
