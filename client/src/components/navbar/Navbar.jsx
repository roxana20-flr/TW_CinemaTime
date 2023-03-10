import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined, FavoriteBorderOutlined, PersonOutlineOutlined } from "@material-ui/icons";
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cinema from "../../images/logo-MyMed.png";
import "./Navbar.css";
import { useState, useRef } from "react";
import { useOnHoverOutside } from "./../hooks/UseOnHoverOutside";
import Menu from "./../menu/Menu";



const Navbar = () => {
  const quantity1 = useSelector(state=>state.cart.quantity)
  const quantity2 = useSelector(state=>state.favorite.quantity)
  const user = useSelector((state) => state.user.currentUser);

  const dropdownRef = useRef(null); // Create a reference for dropdown container
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  // Function to close dropdown
  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  useOnHoverOutside(dropdownRef, closeHoverMenu); // Call the hook

  
  return (
    <div id="navbar-container">
      <div id="navbar-wrapper">
        <div className="navbar-left">
        <Link to={`/`}>
          <img className="navbar-image" src={cinema}></img>
        </Link>
        </div>
        <div className="navbar-center">
        <Link style={{textDecoration: 'none', color: "black"}}  to={`/products/bilete`}>
          <h1 className="navbar-logo">MEDICI</h1>
          </Link>
        </div>
        <div className="navbar-line"/>
        <div className="navbar-center">
          <Link style={{textDecoration: 'none', color: "black"}}  to={`/oferte`}>
          <h1 className="navbar-logo">NOUTĂȚI</h1>
          </Link>
        </div>
        <div className="navbar-center">
          <Link style={{textDecoration: 'none', color: "black"}}  to={`/vauchere`}>
          <h1 className="navbar-logo">EDUCAȚIE</h1>
          </Link>
        </div>
        <div className="navbar-center">
          <Link style={{textDecoration: 'none', color: "black"}}  to={`/vauchere`}>
          <h1 className="navbar-logo">ARHIVĂ</h1>
          </Link>
        </div>
        <div className="navbar-right">
          {/* <MenuItem>REGISTER</MenuItem> */}
          <Link to="/cart">
          <div className="navbar-menu-item">
            <SearchOutlinedIcon/>
          </div>
          </Link>

          <div className="navbar-menu-item" ref={dropdownRef}>
            <PersonOutlineOutlinedIcon onMouseOver={() => setMenuDropDownOpen(true)}/>
            {isMenuDropDownOpen && <Menu />}
          {/* {user ? 
          <Link to="/user">
              <PersonOutlineOutlined  />
              </Link> 
              : 
              <Link to="/login" className="navbar-link">
              <div className="navbar-signin">LOGIN</div>
              </Link>} */}
          </div>

          <Link to="/cart">
          <div className="navbar-menu-item" id="navbar-cart">
            <Badge badgeContent={quantity1} color="primary">
            <MedicalServicesOutlinedIcon/>
            {/* <LocalHospitalOutlinedIcon/> */}
            </Badge>
          </div>
          </Link>

          {/* <Link to="/favorite">
          <div className="navbar-menu-item">
            <Badge badgeContent={quantity2} color="primary">
            <FavoriteBorderOutlinedIcon/>
            </Badge>
          </div>
          </Link> */}

        </div>
      </div>
    </div>
  );
};

export default Navbar;