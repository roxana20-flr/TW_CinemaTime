import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/announcement/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";
import Bottom from "../components/Bottom";
import { mobile } from "../responsive";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { addToCart, decreaseCart, getTotals} from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Home.css";
import cinema from "../images/logo-MyMed.png"
import Newsletter from "../components/Newsletter";

const KEY = process.env.REACT_APP_STRIPE;

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
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
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

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  background-color: white;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

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



const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const history = useNavigate();
  const dispatch = useDispatch();

  const onToken = (token) => {
    setStripeToken(token);
  };
  
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        history.push("/success", {
          stripeData: res.data,
          products: cart, });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, history]);


  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
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


              <Title>ALEGERILE TALE</Title>
        <Top>
        <Link to={`/products/bilete`}>
          <TopButton type="filled">CONTINUA CUMARATURILE</TopButton>
        </Link>
          {/* <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts> */}

<StripeCheckout
              name="Cinematime"
              image={cinema}
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              
          <TopButton type="filled">CHECKOUT NOW</TopButton>
            </StripeCheckout>
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




      <Wrapper>
        <Jos>
          <Info>
          {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Produs:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.cinema} />
                    <ProductSize>
                      <b>Oras:</b> {product.city}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add onClick={() => handleAddToCart(product)}/>
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove onClick={() => handleDecreaseCart(product)}/>
                  </ProductAmountContainer>
                  <ProductPrice>
                     {product.price * product.quantity} Lei
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>{cart.total} lei</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>5.90 lei</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>-5.90 lei</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>{cart.total} lei</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="Cinematime"
              image={cinema}
              billingAddress
              shippingAddress
              description={`Your total is ${cart.total} lei`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Jos>
      </Wrapper>

      <Newsletter />
      <Footer />
      <Bottom/>
    </Container>
  );
};

export default Cart;