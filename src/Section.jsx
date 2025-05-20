import lady from './image/LADY.png'
import perfume from './image/perfume.jpg'
import perfume1 from './image/perfume1.jpg'
import cream1 from './image/cream1.jpg'
import cream2 from './image/cream2.jpg'
import cream3 from './image/cream3.jpg'
import { useState } from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import skincare from './image/skincare.jpg'
import skincare1 from './image/skincare1.jpg'
import skincare2 from './image/skincare2.jpg'
import skincare3 from './image/skincare3.jpg'

function Section() {
  const slide = [
    { id: 1, img: perfume },
    { id: 2, img: perfume1 },
    { id: 3, img: cream1 },
    { id: 4, img: cream2 },
    { id: 5, img: cream3 },
  ]

  const [slideset, Setslide] = useState(0)

  const nextslide = () => {
    Setslide((prev) => (prev + 1) % (slide.length - 2))
  }

  const prevslide = () => {
    Setslide((prev) => (prev - 1 + slide.length) % (slide.length - 2))
  }

  return (
    <div>
      <div className="bg-[#F77F00] w-[84%] mt-4 h-[250px] lg:h-[450px] mx-auto">
        <div className="flex flex-row justify-between w-[500px] lg:w-full max-w-[1200px] mx-auto">
          <img
            src={lady}
            className="lg:w-[600px] lg:h-[510px] w-[200px] h-[200px]  absolute mt-[59px] lg:top-[-29px]"
          />
          <div className="flex flex-col lg:p-0 p-10 lg:p-15 leading-relaxed mx-auto my-[90px] lg:my-[180px] lg:w-[300px] w-[300px]">
            <h1 className="text-[green] font-bold text-[0.8em] lg:text-[2em] shadoww-sm">
              Natural Cosmetic.
            </h1>
            <p className="text-white lg:text-[1em] text-[0.55em]">
              Embrace your beauty with our organic, chemical-free products that nourish and enhance your skin naturally. Join us in celebrating sustainable beauty!
            </p>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-center p-4 text-[1em] lg:text-[2em] text-[green]">These are what we sell</h1>
        <div className="flex lg:gap-10 relative bg-[rgb(209,215,215)] gap-2 mx-auto justify-center p-2 lg:h-[400px] h-[200px] w-[80%]">
          <div className="flex flex-row absolute justify-between right-2 left-2 top-1/2">
            <FaArrowAltCircleLeft className="text-[green]" onClick={prevslide} />
            <FaArrowAltCircleRight className="text-[green]" onClick={nextslide} />
          </div>
          {slide.slice(slideset, slideset + 3).map((item) => (
            <div key={item.id}>
              <img className="lg:w-[300px] my-12 lg:h-[300px] w-[100px] h-[100px]" src={item.img} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-row-reverse gap-2 justify-between my-auto mx-auto w-[80%] mt-10">
        <img src={skincare} className="lg:w-[400px] md:w-[200px] md:h-[200px] lg:h-[350px] w-[150px] h-[200px]" />
        <div className="lg:my-20   my-10 lg:p-10 ">
          <h className="font-bold text-[0.7em] lg:text-[1.2em]">Natural Cosmetic and Personal Care Products</h>
          <p className="lg:w-[500px] lg:text-[1.0em] text-[0.5em]">
            Embrace your beauty with our organic, chemical-free products that nourish and enhance your skin naturally. Join us in celebrating sustainable beauty!
          </p>
        </div>
      </div>

      <div className="flex flex-row-reverse justify-between gap-2 mx-auto w-[80%] mt-10">
        <p className="lg:w-[500px] lg:my-10 my-2 lg:p-10 md:p-10 lg:text-[1.0em] text-[0.5em]">
          Discover a complete range of natural cosmetic and personal care products <br />
          crafted with pure, eco-friendly ingredients. From skincare to haircare. <br />
          our products are designed to nourish, protect, and enhance your natural <br />
          beauty, while being gentle on the environment. Embrace a clean, <br /> green routine with our all-natural solutions.
        </p>
        <img src={skincare1} className="lg:w-[400px] md:w-[200px] md:h-[200px] lg:h-[350px] w-[150px] h-[200px]" />
      </div>

      <div className="mt-5 flex flex-col">
        <h1 className="text-center p-4 text-[1em] lg:text-[2em] text-[green]">This is what Pure Essence has done</h1>
        <div className="flex -mt-10 flex-row gap-2 mx-auto">
          <img className="lg:w-[300px] md:w-[150px] md:h-[150px] my-12 lg:h-[300px] w-[100px] h-[100px]" src={skincare2} />
          <img className="lg:w-[300px] md:w-[150px] md:h-[150px] my-12 lg:h-[300px] w-[100px] h-[100px]" src={skincare3} />
          <img className="lg:w-[300px] md:w-[150px] md:h-[150px] my-12 lg:h-[300px] w-[100px] h-[100px]" src={skincare} />
        </div>
      </div>

      <div className="mx-auto w-[90%] lg:w-[70%] flex justify-between">
        <div className="flex flex-col gap-2">
          <p className="lg:w-[500px] lg:text-[1.0em] text-[0.6em]"><strong>Address: </strong>No 20, lagos, Nigeria.</p>
          <p className="lg:w-[500px] lg:text-[1.0em] text-[0.6em]"><strong>Phone No:</strong> +234908765443</p>
          <p className="lg:w-[500px] lg:text-[1.0em] text-[0.6em]"><strong>Address</strong>crytotec6666@gmail</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="lg:w-[500px] lg:text-[1.0em] text-[0.6em]">Home</p>
          <p className="lg:w-[500px] lg:text-[1.0em] text-[0.6em]">About Us</p>
          <p className="lg:w-[500px] lg:text-[1.0em] text-[0.6em]">Contact Us</p>
        </div>
        <div className="flex flex-col gap-5">
          <FaFacebook />
          <FaTwitter  />
          <FaInstagram  />
        </div>
      </div>
    </div>
  )
}

export default Section
