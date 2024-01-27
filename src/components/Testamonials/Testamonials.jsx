import "./Testamonials.css";
import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import Logo from "/portfolio web/src/assets/react.svg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import axios from "axios";
// import { data } from "autoprefixer";

const Testamonials = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const [Data, setData] = useState([]);
  const [image, setImage] = useState([]);

  // user details api
  const apifnc = async () => {
    try {
      const { data } = await axios(
        "https://jsonplaceholder.typicode.com/users/"
      );
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  // random image api
  const random = async () => {
    try {
      const { data } = await axios("https://randomuser.me/api/0.8/?results=10");
      setImage(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    apifnc();
    random();
  }, []);

  useEffect(() => {}, [Data, image]);

  return (
    <>
      <h1 className="my-expertise">Testimonials</h1>
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
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper">
        {Data.map((e) => (
          <SwiperSlide key={e.id}>
            <div className="swiper-flex">
              <div className="swipe-left">
                {image[e.id] && (
                  <img
                    key={image[e.id].user.picture.medium}
                    src={image[e.id].user.picture.medium}
                    alt=""
                  />
                )}
              </div>
              <div className="swipe-right">
                <p>{e.name}</p>
                <p>{e.address.city}</p>
                <p>{e.company.name}</p>
                <p>{e.phone}</p>
                <p>{e.email}</p>
                <p>{e.website}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default Testamonials;
