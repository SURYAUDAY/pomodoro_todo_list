import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "#4dadf7",
        backgroundImage: "url(../asset/bgimage.png)",
        backgroundSize: "300px",
        color: "white",
        maxWidth: "100%",
        height: "50px",
        marginBottom: "70px",
        display: "flex",
        alignItems: "center",
        backgroundRepeat: "repeat",
      }}
    >
      <h3 style={{ marginLeft: "10px" }}>Todo-Pomodoro</h3>
    </nav>
  );
};

export default Navbar;
