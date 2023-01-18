import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@material-ui/icons";
  import styled from "styled-components";
  import { Link} from "react-router-dom";
  import { addProduct} from "../redux/favoriteRedux";
import { useDispatch} from "react-redux";
import { useEffect, useState } from "react";
  
  const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
  `;
  
  const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  
    &:hover ${Info}{
      opacity: 1;
    }
  `;
  
  const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: absolute;
  `;
  
  const Image = styled.img`
    height: 75%;
    z-index: 2;
  `;
  
  const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.1);
    }
  `;

  const Title = styled.div`
  color: white;
`;

const Price = styled.div`
color: white;
`;

const Informati = styled.div`
  
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
  
  const Product = ({ item }) => {
    
    const [product, setProduct] = useState({});
    const quantity=1;
    const dispatch = useDispatch();
  
    useEffect(() => {
      const getProduct = async () => {
        try {
          setProduct(item);
        } catch {}
      };
      getProduct();
    });

    const handleClick = () => {
      dispatch(
        addProduct({ ...product, quantity})
    );
    };


    

    return (
      <Container>
        <Circle />
        <Center>
        <Image src={item.img} />
        <Informati>
          <Title>{item.title}</Title>
          <Price>{item.price} lei</Price>
        </Informati>
        </Center>
        <Info>
          <Icon>
          <Link to={`/cart`}>
          <ShoppingCartOutlined />
            </Link>
          </Icon>
          <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
            </Link>
          </Icon>
          {/* {item.products.map((product) => ( */}
          <Icon onClick={handleClick}>
            <FavoriteBorderOutlined />
          </Icon>
          {/* ))}   */}
        </Info>
      </Container>
    );
  };
  
  export default Product;