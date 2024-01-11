import  { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft  } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { Navigation } from 'swiper/modules';
const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5001/reviews")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    return (
        <section className="my-20">
            <SectionTitle
                subHeading="What Our Client Say"
                heading={"Testimonials"}
            ></SectionTitle>
            <Swiper  navigation={true} modules={[Navigation]} className="mySwiper">

{
    reviews.map(review => <SwiperSlide
        key={review._id}
    >
        <div className="flex flex-col items-center mx-24 my-16">
        <FaQuoteLeft className="text-7xl"/>

            <Rating 
            style={{maxWidth:180}}
            value={review.rating}
            readOnly
            >

            </Rating>
            <p className="py-8">{review.details}</p>
            <h3 className="text-2xl text-orange-400">{review.name}</h3>
        </div>
    </SwiperSlide>)
}
</Swiper>
           
        </section>
    );
};

export default Testimonials;