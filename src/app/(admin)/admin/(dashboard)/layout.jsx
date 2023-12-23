import React from "react";
import Nav from "../../../../components/adminComponents/Nav";

const layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default layout;
