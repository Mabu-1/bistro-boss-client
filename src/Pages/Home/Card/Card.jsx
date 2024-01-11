import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const Card = () => {
    return (
        <section className='mb-12'>
        <SectionTitle
            subHeading={"---Should Try---"}
            heading={"CHEF RECOMMENDS"}

        >

        </SectionTitle>
<div className="flex justify-center">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 " >
        <div className=" max-w-[424px] max-h-[541px]  bg-base-100 shadow-xl">
  <figure><img className="max-h-[300px]" src="https://i.ibb.co/F0S83qc/09.jpg" alt="Salad" /></figure>
  <div className="text-center">
    <h2 className="font-bold text-xl py-2">Caeser Salad</h2>
    <p className="py-3 px-12">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="flex justify-center  py-3 ">
      <button className="btn p-5 bg-[#E8E8E8] text-yellow-600 uppercase border-0 border-b-2 border-yellow-600 hover:bg-black ">add to cart</button>
    </div>
  </div>
</div>
        <div className=" max-w-[424px] max-h-[541px]  bg-base-100 shadow-xl">
  <figure><img className="max-h-[300px]" src="https://i.ibb.co/F0S83qc/09.jpg" alt="Salad" /></figure>
  <div className="text-center">
    <h2 className="font-bold text-xl py-2">Caeser Salad</h2>
    <p className="py-3 px-12">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="flex justify-center  py-3 ">
      <button className="btn p-5 bg-[#E8E8E8] text-yellow-600 uppercase  border-0 border-b-2 border-yellow-600 hover:bg-black ">add to cart</button>
    </div>
  </div>
</div>
        <div className=" max-w-[424px] max-h-[541px]  bg-base-100 shadow-xl">
  <figure><img className="max-h-[300px]" src="https://i.ibb.co/F0S83qc/09.jpg" alt="Salad" /></figure>
  <div className="text-center">
    <h2 className="font-bold text-xl py-2">Caeser Salad</h2>
    <p className="py-3 px-12">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="flex justify-center  py-3 ">
      <button className="btn p-5 bg-[#E8E8E8] text-yellow-600 uppercase border-0 border-b-2 border-yellow-600 hover:bg-black ">add to cart</button>
    </div>
  </div>
</div>
        </div>

</div>
       
    </section>
    );
};

export default Card;