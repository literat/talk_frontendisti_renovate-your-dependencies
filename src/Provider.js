import React from "react";
import { useDeck } from "mdx-deck";

const Provider = ({ children }) => {
  const { index, length } = useDeck();

  return (
    <>
      {children}

      <div
        css={{
          position: "absolute",
          width: "92vw",
          bottom: "1em",
          display: "flex",
          margin: "0 50px",
          justifyContent: "space-between",
          fontFamily: "Source Sans Pro,sans-serif",
          color: "#003e7e"
        }}
      >
        <span>10. 3. 2021 | &#123;f&#125; Frontendisti.cz</span>
        {index > 0 ? (<span>{index}/{length-1}</span>) : null}
        <a
          css={{ color: "#0fbdcd", textDecoration: "none" }}
          href="https://twitter.com/tomaslitera"
        >
          @tomaslitera
        </a>
      </div>

      <div
        css={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0
        }}
      >
        <div
          css={{
            background: "#0fbdcd",
            height: 3,
            width: `${(100 * (index + 1)) / length}%`
          }}
        />
      </div>
    </>
  );
};

export default Provider;
