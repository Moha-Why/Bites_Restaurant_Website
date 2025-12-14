import landingImg from '../assets/Group 3.png'
import { Link, useOutletContext } from 'react-router'
import items from '../data/landingItems'
import Slider from '../components/Slider'
import { useRef } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)


const Home = () => {
  const lanValue = useOutletContext()
  const prevEl = useRef(null)
  const nextEl = useRef(null)

  return (
    <>
      <main>
        <div className={`landing flex ${lanValue ? "items-end" : "items-start"} gap-5 md:gap-0 ${lanValue ? "flex-col-reverse md:flex-row" : "flex-col-reverse md:flex-row-reverse"} md:items-center p-5 justify-end`}>
          <div className="landing-photo relative w-[85%] md:w-[47.5%] aspect-square bg-linear-to-r from-[#fff6e7] to-[#fff8ef] rounded-full flex p-5 items-center justify-end">
            <img src="/food.png" className='absolute w-5/6 left-0 bottom-[5%] drop-shadow-[-5px_10px_10px] drop-shadow-text/35' alt="" />
            <div className="circle ml-[6%] w-full h-full py-5 pr-5 rounded-full border-2 border-text/10">
              <div className="circle  w-full h-full rounded-full border-2 border-text/10"></div>
            </div>
            <ul className='items-list flex flex-col gap-5 absolute right-0 translate-x-1/2'>
              {items.map((ele, index) => {
                return (
                  <li key={index} className={`bg-white font-bold rounded-full flex ${lanValue ? "flex-row-reverse" : ""} items-center px-2 gap-3 py-1 shadow`}>
                    <img src={ele.imgURL} className='w-8 h-8 rounded-full' alt={ele.textEn} />
                    {lanValue ? ele.textAr : ele.textEn}
                  </li> 
                )
              })}       
            </ul>
          </div>
          <div className="landing-text w-full md:w-[47.5%] px-5 flex flex-col gap-8">
            <h1 className='text-text font-bold text-5xl'>{lanValue ? "نقدّم لك الطعم اللي على مزاجك." : "We serve the taste you love"} <img src="/hearts.png" className='w-10 inline-block' alt="" /></h1>
            <p className='text-para'>{lanValue ? "نحن نقدّم لك طعامًا لذيذًا بطريقة سهلة ومريحة، مع خدمة طلبات أونلاين بسيطة وسريعة. مع تجربة سلسة من لحظة فتح الموقع وحتى وصول طلبك. هدفنا أن تستمتع بوجبتك بدون أي تعقيد، فقط خطوات قليلة وتصل النكهة التي تحبها إلى بابك." :
              "We bring you delicious food in a simple and convenient way, giving you a smooth journey from opening the website to receiving your order. Our goal is to let you enjoy your meal without any hassle—just a few clicks, and the taste you love arrives right at your door."}
            </p>
            <Link to={"/menu"} className='bg-button shadow-2xl hover:saturate-150 hover:scale-105 transition duration-300 text-2xl py-2 cursor-pointer text-center text-text rounded-full'><button >{lanValue ? "استكشف الطعام" : "Explore Food"}</button></Link>
          </div>
        </div>
        {/* Start popular dishes */}
        <div className="popular-dishes">
          <div className={`head flex flex-col gap-5 items-center md:flex-row justify-between ${lanValue ? 'md:flex-row-reverse' : ""} px-10`}>
            <h2 className='text-4xl font-bold'>{lanValue ? "الاكلات المشهوره" : "Popular dishes"}</h2>
            <div className={`swipe-buttons flex ${lanValue ? "flex-row-reverse" : ""} gap-5`}>
              <button className="next-btn w-12 h-12 cursor-pointer rounded-full border-2 border-button flex justify-center items-center hover:bg-button transition duration-300" ref={prevEl}><FontAwesomeIcon icon="fa-solid fa-arrow-left" /></button>
              <button className="prev-btn w-12 h-12 cursor-pointer rounded-full border-2 border-button flex justify-center items-center hover:bg-button transition duration-300" ref={nextEl}><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></button>
            </div>
          </div>
          <div className="dishes p-5">
            <Slider pervEl={prevEl} nextEl={nextEl}/>
          </div>
        </div>
        {/* Start About */}
        <section className={`about flex flex-col-reverse ${lanValue ? "md:flex-row" : "md:flex-row-reverse"} items-center justify-center gap-8 p-5`}>
          <div className="context w-full md:w-[40%] flex flex-col gap-8">
            <h2 className='text-4xl font-bold text-text'>{lanValue ? "احنا مش مجرد مططعم عادى" : "We Are More Than A Normal Restaurant"}</h2>
            <p className='text-para'>{lanValue 
            ? "نحن مطعم يختص بتقديم الوجبات السريعة وخيارات الطعام المريحة، بالإضافة إلى مجموعة من المشروبات والوجبات الخفيفة. يرتكز المفهوم على السرعة والكفاءة، مما يتيح للزبائن خدمة فورية دون التضحية بالنكهة." 
            : "We are the type of restaurant that specializes in serving quick meals and convenient food options, along with a variety of drinks and small snacks. The concept focuses on speed and efficiency, offering customers fast service without compromising on taste."}</p>
              <div className="restaurant-icons w-full grid grid-cols-2 gap-5">
                <div className={`icon font-bold flex gap-2 items-center`}>
                  <div className={`image w-12 h-12 flex justify-center items-center bg-white border-2 rounded-full border-button border-dashed`}>
                    <img src="/homeAbout/order.png" className='w-8 h-8' alt="" />
                  </div>
                  {lanValue ? "الطلب عبر النت" : "Online Order"}
                </div>
                <div className={`icon font-bold flex gap-2 items-center`}>
                  <div className={`image w-12 h-12 flex justify-center items-center bg-white border-2 rounded-full border-button border-dashed`}>
                    <img src="/homeAbout/food.png" className='w-8 h-8' alt="" />
                  </div>
                  {lanValue ? "أكل فى غايه اللذه" : "Very Delicious Food"}
                </div>
                <div className={`icon font-bold flex gap-2 items-center`}>
                  <div className={`image w-12 h-12 flex justify-center items-center bg-white border-2 rounded-full border-button border-dashed`}>
                    <img src="/homeAbout/kitchen.png" className='w-8 h-8' alt="" />
                  </div>
                  {lanValue ? "مطابخ على أعلى نظافه" : "Spotless kitchens"}
                </div>
                <div className={`icon font-bold flex gap-2 items-center`}>
                  <div className={`image w-12 h-12 flex justify-center items-center bg-white border-2 rounded-full border-button border-dashed`}>
                    <img src="/homeAbout/chef.png" className='w-8 h-8' alt="" />
                  </div>
                  {lanValue ? "طباخين قمه" : "Top Chefs"}
                </div>
              </div>
              <Link className='px-6 py-3 bg-button w-fit font-semibold rounded-full'><button>{lanValue ? "اتواصل معانا" : "Contact Us"}</button></Link>
          </div>
          <div className="image w-[80%] md:w-[40%] relative">
            <img src="homeAbout/chefTwo.png" className='w-full h-full' alt="" />
            <img src="homeAbout/tofu.png" className='absolute w-32 -bottom-[5%] -left-[15%]' alt="" />
            <img src="homeAbout/veggies.png" className='absolute w-32 -top-[10%] -right-[5%]' alt="" />
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
