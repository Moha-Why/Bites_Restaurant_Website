import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import menu from '../data/menuItems'

import FoodCard from './FoodCard';
import { useStore } from '../store';


const Slider = ({pervEl, nextEl}) => {
    // console.log(pervEl)
    // console.log(nextEl)
    const menuUpdate = useStore(state => state.menuUpdate)
    const lanValue = useStore(state => state.lanValue)
    const cards = useStore(state => state.menu)
    const topMenu = [...cards].sort((a, b) => {return b.rating - a.rating})
    
    topMenu.length = 6

    useEffect(() => {
        menuUpdate()
    }, [])

  return (
    <>
        {topMenu.length > 0 ? <Swiper
        className={`px-5 ${lanValue ? "" : "[&_.swiper-wrapper]:flex-row-reverse"}`}
        modules={[Navigation]}
        navigation={{
            prevEl: '.prev-btn',
            nextEl: '.next-btn',
        }}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        grabCursor={true}
        breakpoints={{
            320: { slidesPerView: 1 },
            540: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }
      }}
        >
        {topMenu.map(ele => {
            return(
                <SwiperSlide className=''>
                    <FoodCard item={ele}/>
                </SwiperSlide>
            )
        })}            
        </Swiper>: null}
    </>
  )
}

export default Slider
