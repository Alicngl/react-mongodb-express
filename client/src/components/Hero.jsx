import React from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
const Hero = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);

  const logOut = () => {
    removeCookie("jwt");
    navigate("/login");
  };
  return (
    <div className="navbar">
      <div className="navitem">
        <a href="/">Home</a>
      </div>
      <div className="navitem">
        <a href="/create">Add Data</a>
      </div>
      <div className="navitem" onClick={logOut}>
        LogOut
      </div>
    </div>
  );
};

export default Hero;
