import * as React from "react";
import { css } from "@emotion/react";
import MyButton from "@kimbaudi/testreacttslib";

const IndexPage = () => {
  return (
    <main>
      <button
        css={css`
          background-color: red;
          color: white;
          padding: 7px 14px;
          &:hover {
            background-color: purple;
          }
        `}
      >
        Button
      </button>
      <MyButton />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
