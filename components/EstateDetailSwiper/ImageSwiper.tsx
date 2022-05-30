import React, { useRef, useState } from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Props {
  images: string[];
}

const ImageSwiper: React.FC<Props> = ({ images }) => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation]}
        navigation={true}
        className="mySwiper"
      >
        {images.map((image: string, i: number) => (
          <SwiperSlide key={i}>
            <Image
              w="500px"
              src={image}
              alt={i + ""}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ImageSwiper;