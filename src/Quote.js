import React from "react";

const Quote = ({ API }) => (
  <figure>
    <img src={API.image} alt={API.character} style={{height:300}}/>
    <figcaption>
      <blockquote>{API.quote}</blockquote>
      <cite>{API.character}</cite>
    </figcaption>
  </figure>
);

export default Quote;
