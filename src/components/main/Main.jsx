import React from 'react'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import FirstSection from './homeelements/FirstSection';
import TopCategory from './homeelements/TopCategory';
import FruitBox from './homeelements/FruitBox';
import Reviews from './homeelements/Reviews';
import FreshestProducts from './homeelements/FreshestProducts';
import Categories from './homeelements/Categories';
import Advertisements from './homeelements/Advertisements';
import DeliveryMethods from './homeelements/DeliveryMethods';


function Main() {
    return (
        <>
            <FirstSection />

            <TopCategory />

            <FruitBox />

            <FreshestProducts />

            <Categories />

            <Advertisements />

            <DeliveryMethods />

            <Reviews />
        </>
    )
}

export default Main