import React from 'react'
import Announcement from "../components/announcement/Announcement";
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from "../components/navbar/Navbar";
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/slider/Slider'
import Bottom from "../components/Bottom";
import "./Home.css";




const Home = () => {
  return (
    <div className="home">
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
        <Bottom/>
    </div>
  )
}

export default Home