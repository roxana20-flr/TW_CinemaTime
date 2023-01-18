import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Bottom from "../components/Bottom";
import { mobile } from "../responsive";
import { Link, useLocation } from "react-router-dom";
import "./Home.css";
import { logout } from "../redux/userRedux";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../requestMethods";



const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  align-items: center;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "white" : "transparent"};
  color: ${(props) => props.type === "black" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  margin: 0px 10px;
  color: white;
  font-size: 5vw;
`;

const Jos = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;



const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;


const Container3 = styled.div`
width: 100%;
  height: 40vh;
  display: flex;
  position: relative;
  overflow: hidden;
  margin-top: 4vh;
  ${mobile({ display: "none" })}
`;

const Wrapper3 = styled.div`
  background-color: black;
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Wrapper2 = styled.div`
  background-color: black;
  height: 70%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  align-items: center;
  justify-content: space-between;
`;


const Container2 = styled.div`
margin-top:2vh;
width: 100vw;
height: 93%;
display: flex;
align-items: center;
background-color: black;
`;

const Slide = styled.div`
  width: 100vw;
  height: 70%;
  display: flex;
  align-items: center;
  background-color: black;
  justify-content: space-between;
`;

const Oval = styled.div`
border-radius: 7px;
background: white;
padding: 10px;
width: 14px;
height: 0.5px;
margin-right: 30px;
`;

const Top2 = styled.div`
position: absolute;
top: 20px;
flex: 1;
display: flex;
margin-top: 10px;
`;

const Jos2 = styled.div`
position: absolute;
bottom: 20px;
flex: 1;
display: flex;
margin-bottom: 10px;
`;


const InfoContainer = styled.div`
align-items: center;
justify-content: space-between;
color: white;
`;




const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Product = styled.div`
  margin-right: 15px;
  margin-bottom: 15px;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span`
font-size: 3vw;
margin-bottom: 10px;
color: white;
`;

const Info = styled.div`
  flex: 1;
`;



const User = () => {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user.currentUser);


    const handleClick = () => {
        dispatch(
          logout()
      );
      };
  
  return (
    <Container className="home">
      <Announcement />
      <Navbar />



      <Container3>
      <Wrapper3 >
        <Container2>
      <Top2>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
            </Top2>
            <Wrapper2 >
            <Slide>
              <Center>
              <InfoContainer>

                <TopText>
                    Salutari {user.username}!
                </TopText>

        <Top>
        <Link to="/">
          <TopButton type="filled" onClick={handleClick}>LOGOUT</TopButton>
        </Link>
        </Top>


            </InfoContainer>
            </Center>
            
            </Slide>  
        </Wrapper2>
        <Jos2>
            <Oval/>
            <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
            </Jos2>
            </Container2>
      </Wrapper3>
      </Container3>


      <Center>
              <InfoContainer>

              <Product>
                <ProductDetail>
                  <Details>
                    <ProductName>
                      <b>Nume:</b> {user.username}
                    </ProductName>
                    <ProductName>
                      <b>Email:</b> {user.email}
                    </ProductName>
                    <ProductName>
                      <b>Tara:</b> {user.tara}
                    </ProductName>
                    <ProductName>
                      <b>Oras:</b> {user.oras}
                    </ProductName>
                    <ProductName>
                      <b>Data Nastere:</b> {user.dataNastere}
                    </ProductName>
                  </Details>
                </ProductDetail>
              </Product>


            </InfoContainer>
            </Center>

      

      <Footer />
      <Bottom/>
    </Container>
  );
};

export default User;