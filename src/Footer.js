import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#4dadf7",
        backgroundImage: "url(../asset/bgimage.png)",
        backgroundSize: "300px",
        color: "white",
        width: "100%",
        height: "50px",
        bottom: "0",
        position: "fixed",
        display: "flex",
        alignItems: "center",
        alignContent: "flex-end",
        justifyContent: "center",
        backgroundRepeat: "repeat",
      }}
    >
      <h3>&copy; Suryauday Prakash Mishra, 2023.</h3>
    </footer>
  );
};

export default Footer;
