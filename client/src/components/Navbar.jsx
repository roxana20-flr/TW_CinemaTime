import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined, FavoriteBorderOutlined, PersonOutlineOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cinema from "../images/cinema.png"

const Container = styled.div`
  height: 80px;
  background-color: white;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 25px;
  ${mobile({ fontSize: "20px" })}
`;

const Line = styled.div`
  height: 30px;
  width: 2px;
  background-color: black;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: black;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Image = styled.img`
  height: 50px;
`;

const Navbar = () => {
  const quantity1 = useSelector(state=>state.cart.quantity)
  const quantity2 = useSelector(state=>state.favorite.quantity)
  const user = useSelector((state) => state.user.currentUser);
  console.log("user nav")
  console.log(user)
  
  return (
    <Container>
      <Wrapper>
        <Left>
        <Link to={`/`}>
          <Image src={cinema}></Image>
        </Link>
        </Left>
        <Center>
        <Link style={{textDecoration: 'none', color: "black"}}  to={`/products/bilete`}>
          <Logo>Bilete</Logo>
          </Link>
        </Center>
        <Line/>
        <Center>
          <Link style={{textDecoration: 'none', color: "black"}}  to={`/oferte`}>
          <Logo>Oferte</Logo>
          </Link>
        </Center>
        <Line/>
        <Center>
          <Link style={{textDecoration: 'none', color: "black"}}  to={`/vauchere`}>
          <Logo>Noutăți</Logo>
          </Link>
        </Center>
        <Right>
          {/* <MenuItem>REGISTER</MenuItem> */}
          <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity1} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
          <Link to="/favorite">
          <MenuItem>
            <Badge badgeContent={quantity2} color="primary">
            <FavoriteBorderOutlined />
            </Badge>
          </MenuItem>
          </Link>

          <MenuItem>
          {user ? 
          <Link to="/user">
              <PersonOutlineOutlined  />
              </Link> 
              : 
              <Link to="/login">
              <MenuItem>SIGN IN</MenuItem>
              </Link>}
          </MenuItem>

        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;