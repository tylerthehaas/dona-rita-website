import React from "react";
import { Link } from "gatsby";

import { BurgerIcon } from "../../icons/BurgerIcon";
import { CrossIcon } from "../../icons/CrossIcon";

export class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpened: false };
  }

  handleClose = () => this.setState({ isOpened: false });
  handleOpen = () => this.setState({ isOpened: true });

  renderLinks = (links, onClick) => {
    return links.map(link => (
      <Link key={link.to} to={link.to} title={link.name} onClick={onClick}>
        {link.name}
      </Link>
    ));
  };

  render() {
    const links = [
      { name: "Home", to: "/" },
      { name: "What's Jerk?", to: "/whats-jerk" },
      { name: "About", to: "/about" },
      { name: "Recipes", to: "/recipes" },
      { name: "Ingredients", to: "/ingredients" },
      { name: "Buy", to: "/buy" }
    ];
    return (
      <div className="grid">
        <a
          className="mobile-menu -open"
          onClick={this.handleOpen}
          role="button"
          tabIndex={0}
        >
          <BurgerIcon />
        </a>

        <nav
          id="mobile-nav"
          className={`main-nav -mobile ${
            this.state.isOpened ? "is-opened" : null
          }`}
        >
          <a
            className="mobile-menu -close"
            onClick={this.handleClose}
            role="button"
            tabIndex={0}
          >
            <CrossIcon />
          </a>
          {this.renderLinks(links, this.handleClose)}
        </nav>
        <nav className="main-nav -desktop col md-9 md-push-2">
          {this.renderLinks(links)}
        </nav>
      </div>
    );
  }
}
