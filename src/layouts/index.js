import React from "react";
import Helmet from "react-helmet";
import ReactGA from "react-ga";

import { Nav } from "../components/Nav/Nav";
import "../_sass/index.scss";

const faviconSizes = [16, 32, 64];

export default class Layout extends React.Component {
  componentDidMount() {
    const { location } = this.props;
    ReactGA.initialize("UA-88250609-1");
    ReactGA.pageview(location.pathname + location.search);
  }

  componentDidUpdate() {
    const { location } = this.props;
    ReactGA.pageview(location.pathname + location.search);
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat"
            rel="stylesheet"
          />
          {faviconSizes.map(size => (
            <link
              rel="icon"
              type="image/png"
              href={`/social/${size}x${size}.png`}
              sizes={`${size}x${size}`}
              key={`${size}x${size}`}
            />
          ))}
        </Helmet>
        <Nav />
        {children}
      </div>
    );
  }
}
