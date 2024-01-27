import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import banner1 from '../../Assets/banner1.jpg'
import banner2 from '../../Assets/banner2.jpg'
import banner3 from '../../Assets/banner3.jpg'
import banner4 from '../../Assets/banner4.jpg'

const Banner = () => {
  return (
    <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="h-[50vh] text-center "
  >
    <SwiperSlide><img src={banner1} alt="" className='w-full h-full' /></SwiperSlide>
    <SwiperSlide><img src={banner2} alt="" className='w-full h-full' /></SwiperSlide>
    <SwiperSlide><img src={banner3} alt="" className='w-full h-full' /></SwiperSlide>
    <SwiperSlide><img src={banner4} alt="" className='w-full h-full' /></SwiperSlide>
    {/* <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
    <SwiperSlide>Slide 5</SwiperSlide>
    <SwiperSlide>Slide 6</SwiperSlide>
    <SwiperSlide>Slide 7</SwiperSlide>
    <SwiperSlide>Slide 8</SwiperSlide>
    <SwiperSlide>Slide 9</SwiperSlide> */}
  </Swiper>
  )
}

export default Banner