import React from "react";

const Footer = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <p className="text-white mx-auto">
        Christopher Ortiz Montero - &copy; {new Date().getFullYear()}
      </p>
    </nav>
  );
};

export default Footer;
