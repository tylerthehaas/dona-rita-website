import React from "react";

import { FakeImg } from "../FakeImg/FakeImg";

export default function Recipe({ img, title, children, imgStyles = {} }) {
  return (
    <div className="grid">
      <div className="col fluid md-6 md-push-1 lg-6 lg-push-2">
        <h2>{title}</h2>
        {img && (
          <FakeImg className="-three-x-two" img={img} style={imgStyles} />
        )}
        <span className="measure">{children}</span>
      </div>
    </div>
  );
}
