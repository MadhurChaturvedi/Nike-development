import Button from "../Components/Button/Button"
import ShowCard from '../Components/ShowCard/ShowCard';
import { arrowRight } from '../assets/icons';
import { statistics } from '../Constants/';
import { bigShoe1 } from "../assets/images/index";
import { shoes } from "../Constants/";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1);
  return (
    <section id="home" className=" w-full p-2 flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-contain" >
      <div className=" relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 xl:pl-28">
        <p className=" text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className=" text-coral-red inline-block mt-3">Nike</span>
          Shoes
        </h1>
        <p className=" font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arrivals , quality comfort and innovation for you active life.</p>
        <Button label="Show now" iconURL={arrowRight} />
        <div className="flex justify-start items-center flex-wrap w-full mt-20 gap-16">
          {statistics.map((start, item) => (
            <div key={start.label}>
              <p className="text-4xl font-palanquin font-bold">{start.value}</p>
              <p className=" leading-7 font-montserrat text-slate-gray">{start.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className=" relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-center">
        <img src={bigShoeImg} className=" object-contain relative z-10" width={600} height={500} alt="" />
        <div className=" flex sm:gap-6 gap-4 absolute  -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {
            shoes.map((shoes, index) => (
              <div key={index}>
                <ShowCard
                  imgURL={shoes}
                  changeBigShoeImage={(shoe) => setbigShoeImg(shoe)}
                  bigShoeImg={bigShoeImg} />
              </div>
            ))
          }
        </div>
      </div>

    </section>
  )
}

export default Hero
