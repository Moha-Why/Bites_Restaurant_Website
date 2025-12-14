import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)
import {useOutletContext} from 'react-router-dom'

const Contact = () => {
  const lanValue = useOutletContext()
  console.log(lanValue)

  return (
    <>
      <div className="whatsapp w-full  lg:h-[80vh] flex flex-col-reverse md:flex-row-reverse justify-center items-center">
        <div className="image w-full md:w-5/12">
          <img src="/whatsapp.png" alt="" />
        </div>
        <a href="https://whatsapp.com" className='w-full md:w-5/12 mt-8 md:mt-0 flex justify-center relative'>
          <div className="icon hidden md:block">
            <FontAwesomeIcon icon="fa-solid fa-arrow-left" className='absolute hidden md:block animate-pulseRL text-5xl -left-5 top-1/2 -translate-y-1/2 text-green-300'/>
          </div>
          <div className="icon md:hidden absolute bottom-0 left-1/2">
            <FontAwesomeIcon icon="fa-solid fa-arrow-down" className='animate-bounce text-5xl left-1/2 translate-y-full -translate-x-1/2 text-green-300'/>
          </div>
          <button className="button bg-[#25D366] hover:bg-green-600 shadow-[0_0_10px_0_#25D366] hover:shadow-[0_0_15px_0_#25D366] transition duration-300 px-5 py-2 rounded-lg text-2xl text-gray-100 flex items-center justify-between">
            {lanValue ? "أتصل" : "Use"} Whatsapp
            <FontAwesomeIcon icon="fa-brands fa-whatsapp" size='2xl' className='text-gray-100'/>
          </button>
        </a>
      </div>

      <div className="contactInfo w-full px-5 py-8 bg-linear-to-r from-[#fff6e7] to-[#fff8ef] text-gray-100 flex flex-col sm:flex-row justify-center items-center gap-5">
        <div className="dataSection w-full sm:w-1/3 flex flex-col justify-center items-center">
          <FontAwesomeIcon icon="fa-solid fa-phone" className='mb-5 text-button' size='2xl' />
          <h1 className='mb-5 text-2xl text-text'>{lanValue ? "رقم التلفون:" : "Phone num:"}</h1>
          <h3 className='mb-5 text-xl text-para'>01013121403</h3>
        </div>        
        <div className="dataSection w-full sm:w-1/3 flex flex-col justify-center text-center items-center">
          <FontAwesomeIcon icon="fa-solid fa-house" className='mb-5 text-button' size='2xl' />
          <h1 className='mb-5 text-2xl text-text'>{lanValue ? "العنوان:" : "Address:"}</h1>
          <h3 className='mb-5 text-xl text-para'>مدينه السادات-المنطقه العاشره-شارع الحديد</h3>
        </div>        
        <div className="dataSection w-full sm:w-1/3 flex flex-col justify-center items-center">
          <FontAwesomeIcon icon="fa-solid fa-envelope" className='mb-5 text-button' size='2xl' />
          <h1 className='mb-5 text-2xl text-text'>Email</h1>
          <h3 className='mb-5 text-xl text-para'>FitMaker@gmail.com</h3>
        </div>
      </div>

      <div className="map flex flex-col-reverse md:flex-row-reverse items-center">
        <div className="mapIframe w-full md:w-1/2 p-8">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6886.0989336763205!2d30.545656051073887!3d30.349544024687006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1764895394954!5m2!1sen!2seg" width="100%" className='h-[300px] md:h-[450px]' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="context w-full md:w-1/2 flex flex-col justify-evenly items-center">
          <h1 className='mb-8 mt-5 text-4xl text-text'>{lanValue ? "تعالى لينا مباشره و كلمنا" : "Come visit us!"}</h1>
          <a href="https://maps.app.goo.gl/i8WLGC4cPiwUf3A38">
            <button className='bg-blue-700 hover:bg-blue-800 text-gray-100 relative group transition px-5 py-3 text-2xl rounded-xl pointer cursor-pointer'>
              Google maps
              <FontAwesomeIcon icon="fa-solid fa-location-dot" />
              <FontAwesomeIcon icon="fa-solid fa-arrow-pointer" className='absolute rotate-70 text-blue-300 left-0 -bottom-1/2 md:-left-[10%] md:-bottom-full group-hover:left-0 group-hover:-bottom-6/12 -translate-1/2 transition-all duration-300' />
            </button>
          </a>
        </div>
      </div>
    </>
  )
}

export default Contact
