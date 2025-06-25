
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination, Navigation,Autoplay } from 'swiper/modules';
const Bannerslide = () => {
  return (
   <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper h-[40vh] md:h-[75vh]"
      >
        <SwiperSlide><img src="https://i.postimg.cc/nrZTDDwq/pexels-thomas-balabaud-735585-1579739.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://i.postimg.cc/66rBxxrP/s-l1200.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.postimg.cc/RhM824B2/hp-toptile1-05082025-large.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.postimg.cc/C1MVsztp/pexels-andrew-2123337.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.postimg.cc/135BBXbW/pexels-tobiasbjorkli-2119706.jpg" alt="" /></SwiperSlide>
       
      </Swiper>
    </>
  )
};

export default Bannerslide;
