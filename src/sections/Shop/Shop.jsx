import './Shop.css'
import { Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import data from '../../constants/swiper.json'
import { RiHeartLine, RiShoppingCartLine, RiEyeLine } from "react-icons/ri";
import { swiperSettings } from '../../constants';
import 'swiper/css';

const Shop = () => {
  return (
    <section id="shop">
      <div className="shop-container container">
      <div className="title">
        <h2>New Arrivals</h2>
      </div>
      <Swiper {...swiperSettings}>
  <SwiperButtons />
  {data.map((card, i) => (
    <SwiperSlide key={i}>
      <div className="item-card">
        <img src={card.imgURL} alt="" className="item-img" />
        <h4>{card.name}</h4>
        <p>{card.category}</p>

        {/* Price */}
        <div className="price">
          <span>{card.price}</span>
          <span>{card.old}</span>
        </div>

        {/* Card Buttons */}
        <div className="card-buttons">
          <button className="btn">View Details</button>
          <button className="btn">Add to cart</button>
        </div>

        <div className="card-icons">
          <a href=""><RiHeartLine/></a>
          <a href=""><RiEyeLine/></a>
          <a href=""><RiShoppingCartLine/></a>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

      </div>
    </section>
  )
}

export default Shop

const SwiperButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="swiper-buttons">
      <button className="btn" onClick={() => swiper.slidePrev()}>&lt;</button>
      <button className="btn" onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};