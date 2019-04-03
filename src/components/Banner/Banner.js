import React from "react";

import { FakeImg } from "../FakeImg/FakeImg";

export function Banner({ style, img, mobileImg }) {
  return (
    <div className="banner">
      <FakeImg
        className="banner-img -small -three-x-two"
        img={mobileImg}
        style={style}
      />
      <FakeImg
        className="banner-img -medium -sixteen-x-seven"
        img={img}
        style={style}
      />
    </div>
  );
}
