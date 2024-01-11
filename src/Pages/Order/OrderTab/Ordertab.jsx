
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import FoodCard from '../../../components/FoodCard/FoodCard';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import "./OrderTab.css";
SwiperCore.use([Pagination]);

const OrderTab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  // Split the items into groups of 3 for small devices and 5 for larger devices
  const itemsGrouped = [];
  const itemsPerSlide = window.innerWidth < 468 ? 3 : 6;

  for (let i = 0; i < items.length; i += itemsPerSlide) {
    itemsGrouped.push(items.slice(i, i + itemsPerSlide));
  }

  return (
    <div className=''>
      <Swiper pagination={pagination} className="mt-10">
        {itemsGrouped.map((group, index) => (
          <SwiperSlide key={index} className=''>
            <div className={window.innerWidth < 468 ? 'grid md:grid-cols-3 gap-10' : 'grid md:grid-cols-3 gap-10'}>
              {group.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OrderTab;
