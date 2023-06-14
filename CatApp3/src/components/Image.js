import React from "react";

const Image = ({ url, id, tags, date }) => (
  <li>
    <img src={url} key={id} tags={tags} date={date} />
  </li>
);

export default Image;
