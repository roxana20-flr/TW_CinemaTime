import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  position: relative;
  overflow: hidden;
  margin-top: 4vh;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
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
border-radius: 10px;
background: white;
padding: 14px;
width: 17px;
height: 0.5px;
margin-right: 30px;
`;

const Top = styled.div`
position: absolute;
top: 20px;
flex: 1;
display: flex;
margin-top: 10px;
`;

const Bottom = styled.div`
position: absolute;
bottom: 20px;
flex: 1;
display: flex;
margin-bottom: 10px;
`;

const ImgContainer = styled.div`
  height: 20vw;
  flex: 1;
  background-color: black;
  margin-right: 2px;
`;

const Image = styled.img`
  height: 20vw;
`;

const InfoContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Line = styled.div`
  height: 15vw;
  width: 2px;
  background-color: white;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper >
        <Container2>
      <Top>
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
            </Top>
            <Wrapper2 slideIndex={slideIndex}>
        {sliderItems.map((item) => (
            <Slide bg={item.bg} key={item.id} >
              <Center>
              <InfoContainer>

              <Center>
            <ImgContainer>
              <Image src={item.img1} />
            </ImgContainer>
            </Center>

            <Line/>

            <Center>
            <ImgContainer>
              <Image src={item.img2} />
            </ImgContainer>
            </Center>

            <Line/>

            <Center>
            <ImgContainer>
              <Image src={item.img3} />
            </ImgContainer>
            </Center>

            <Line/>

            <Center>
            <ImgContainer>
              <Image src={item.img4} />
            </ImgContainer>
            </Center>

            <Line/>
            
            <Center>
            <ImgContainer>
              <Image src={item.img5} />
            </ImgContainer>
            </Center>
            </InfoContainer></Center>
            
            </Slide>    
        ))}
        </Wrapper2>
        <Bottom>
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
            </Bottom>
            </Container2>
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;