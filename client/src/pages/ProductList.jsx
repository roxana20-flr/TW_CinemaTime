import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Bottom from "../components/Bottom";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useState } from "react";
import "./Home.css";
import { categories } from "../data";

const Container = styled.div``;

const Container3 = styled.div`
width: 100%;
  height: 40vh;
  display: flex;
  position: relative;
  overflow: hidden;
  margin-top: 4vh;
  ${mobile({ display: "none" })}
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
border-radius: 7px;
background: white;
padding: 10px;
width: 14px;
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

const Jos = styled.div`
position: absolute;
bottom: 20px;
flex: 1;
display: flex;
margin-bottom: 10px;
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

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
align-items: center;
`;

const Filter = styled.div`
margin-left: 5vw;
display: flex;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  color: white;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 5vw;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;


const ProductList = () => {
  const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");
  
    const handleFilters = (e) => {
      const value = e.target.value;
      setFilters({
        ...filters,
        [e.target.name]: value,
      });
    };


  return (
    <Container className="home">
      <Announcement />
      <Navbar item={categories.cat} key={categories.id}/>
      <Container3>
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
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
              <Oval/>
            </Top>
            <Wrapper2 >
            <Slide>
              <Center>
              <InfoContainer>


              
      <FilterContainer>
        <Center>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="cinema" onChange={handleFilters}>
            <Option disabled >
              Cinema
            </Option>
            {/* Timisoara */}
            <Option>Cinema City Iulius Town Timisoara</Option>
            <Option>Cinema City Timisoara</Option>
            <Option>Cinematograf Victoria Timisoara</Option>
            {/* Bucuresti */}
            <Option>Cinema Europa Bucuresti</Option>
            <Option>Happy Cinema Bucuresti</Option>
            <Option>Cinema City Bucuresti</Option>
            <Option>Cinema Union Bucuresti</Option>
            <Option>Movieplex Bucuresti</Option>
            <Option>Cinematograf Victoria Bucuresti</Option>
            <Option>Hollywood Multiplex Bucuresti</Option>
            <Option>Cinema Elvira Popescu Bucuresti</Option>
            <Option>Cinema City Mega Mall Bucuresti</Option>
            {/* Arad */}
            <Option>Cinema City Atrium Mall Arad</Option>
            <Option>Cinema Arta Arad</Option>
            <Option>Cinema "Solidaritatea" Arad</Option>
            {/* Cluj */}
            <Option>Cinema Florin Piersic Cluj</Option>
            <Option>Cinema City Cluj</Option>
            <Option>Cinema ARTA Cluj</Option>
            <Option>Cinema Victoria Cluj</Option>
            <Option>Cinema Mărăști Cluj</Option>
            <Option>Cinema Dacia Cluj</Option>
            {/* Iasi */}
            <Option>Cinema City Iasi</Option>
            <Option>Cinema Ateneu Iasi</Option>
          </Select>
          <Select name="city" onChange={handleFilters}>
            <Option disabled >
              City
            </Option>
            <Option>Timisoara</Option>
            <Option>Arad</Option>
            <Option>Cluj</Option>
            <Option>Bucuresti</Option>
            <Option>Iasi</Option>
          </Select>
        </Filter>
        </Center>
        <Center>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
          <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
        </Center>
      </FilterContainer>



            </InfoContainer>
            </Center>
            
            </Slide>  
        </Wrapper2>
        <Jos>
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
            </Jos>
            </Container2>
      </Wrapper>
      </Container3>
      <Products cat={cat} filters={filters} sort={sort}/>
      <Newsletter />
      <Footer />
      <Bottom/>
    </Container>
  );
};

export default ProductList;