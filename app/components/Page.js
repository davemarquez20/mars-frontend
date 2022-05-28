import React, { useEffect } from "react";
import Container from "./Container";

const Page = (props) => {
  useEffect(() => {
    document.title = `${props.title} | M.A.R.S.`;
    window.scrollTo(0, 0);
  }, [props.title]);

  return <Container wide={props.wide}>{props.children}</Container>;
};

export default Page;
