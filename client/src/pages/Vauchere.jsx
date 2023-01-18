import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Bottom from "../components/Bottom";
import { mobile } from "../responsive";
import "./Home.css";
import Newsletter from "../components/Newsletter";
import { noutati } from "../data";
import { Link } from "react-router-dom";


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;


const Jos = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  margin-right: 15px;
  margin-bottom: 15px;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
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

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;



const Vauchere = () => {


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


              <Title>NOUTĂȚI</Title>


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




      <Wrapper>
        <Jos>
          <Info>
          {noutati.map((item) => (
              <Product>
                <ProductDetail>
                  <Image  src={item.img}/>
                  <Details>
                    <ProductName>
                      <a href={item.link} style={{cursor: "pointer"}} target="_blank" rel="noreferrer">
                      <b>Titlu:</b>{item.titlu}
                      </a> 
                    </ProductName>
                    <ProductId>
                      <b>Decriere:</b> {item.desc}
                    </ProductId>
                  </Details>
                </ProductDetail>
              </Product>
          ))}
          </Info>
          
        </Jos>
      </Wrapper>

      <Newsletter />
      <Footer />
      <Bottom/>
    </Container>
  );
};

export default Vauchere;