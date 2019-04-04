import React from "react";
import { graphql } from "gatsby";

import { TitleAndMetaTags } from "../../components/TitleAndMetaTags/TitleAndMetaTags";
import { Section } from "../../components/Section/Section";
import { Contact } from "../../components/Contact/Contact";
import { FakeImg } from "../../components/FakeImg/FakeImg";

import { createGroupedArray } from "../../utils/createGroupedArray";

import sauce from "../../images/sauce-mild.jpg";

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
              . Distributors welcome.
            </p>
          </div>
        </div>

        <div className="grid">
          <div className="col fluid md-7 md-push-1 lg-6 lg-push-2">
            <FakeImg className="-three-x-two" img={sauce} />
          </div>
        </div>
      </Section>

      <Contact />
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
            title
            name
            area
            address
            postcode
          }
        }
      }
    }
  }
`;
