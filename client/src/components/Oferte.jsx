import styled from "styled-components";
import { oferte } from "../data";
import { mobile } from "../responsive";

const Container1 = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 30vw;
    height: 35vw;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  `;
  

const Image = styled.img`
  width: 96%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;


const Center = styled.div`
  flex: 1;
  text-align: center;
`;


const Oferte = () => {

  return (
    <Container1>
      {oferte.map((item) => (
        <Container>
        <Center>
        <Image src={item.img} />
        </Center>
      </Container>
      ))}
    </Container1>
  );
};

export default Oferte;