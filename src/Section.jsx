import lady from './image/lady.png';
import LOGO from './image/LOGO.png';
import takecare from './image/takecare.jpg';
import nature from './image/nature.jpg';
import insta from './image/insta.png';
import twit from './image/twit.png';
import face from './image/face.png';
import back from './image/back.jpg';

import {items,care} from './component/Navitem.jsx';


const Section = () => {
  return (
    <div>
    <div className='container hidden inset-0 relative bg-[#F77F00] mt w-full h-[500px]  sm:flex md:flex-row flex-row justify-between items-center'>
     <div className='absolute z-10 left-0 -top-8'>
        <img src={LOGO} className='w-60 h-60 font-bold'/>
    </div>
         <img 
        src={lady} 
        alt="A description of the image" 
        className="mx-auto inline object-cover w-full h-full" 
    />
    <div className='z-10 sm:flex flex-col flex-wrap text-justify  mx-auto justify-between'>
        <h1 className='text-[50px]  font-extrabold text-[#74B72E]'><span className='stroke'>Natural Cosmetic.</span></h1>
       <p className='text-white sm:-w-1/4 -mt-2 text-[20px]'>Embrace your beauty with our organic, chemical-free products that nourish and enhance your skin naturally. Join us in celebrating sustainable beauty!</p>
       <a href='' className='text-white w-[200px] mr-[1px] mt-2 text-center font-bold h-10 shadow-lg bg-[#74B72E] rounded-full text-[23px] transform transition duration-500 hover:bg-white hover:text-[#74B72E]'>
  Download Now
</a>

    </div>
        </div>
        <div className='container sm:hidden inset-0 relative bg-[#F77F00] mt w-full h-[500px]  flex  flex-row justify-between items-center'>
        <div className='z-10 left-4 top-2'>
        <img src={LOGO} className='w-36 h-36 mt-6 left-0 font-bold absolute'/>
        <img 
        src={lady} 
        alt="A description of the image" 
        className="object-cover w-full h-[490px]"/>
    </div>
    <div className='z-10 flex flex-col mx-1 flex-wrap   justify-between'>
        <h1 className='text-[33px]  font-extrabold text-[#74B72E]'><span className='stroke'>Natural Cosmetic.</span></h1>
       <p className='text-white -mt-2 w-10/12 text-[12px] text-justify'>Embrace your beauty with our organic, chemical-free products that nourish and enhance your skin naturally. Join us in celebrating sustainable beauty!</p>
        <a href=''className='text-white w-[200px] mr-[1px] mt text-center font-bold h-10 shadow-lg bg-[#74B72E]  rounded-full text-[23px] transform transition duration-500  hover:bg-white'>Download Now</a>
    </div>
        </div>
        <div className='mt bg-white container'>
      <h1 className='text-center text-[#74B72E] font-bold text-[20px] ml-[10px] md:text-[30px]'>Certified organic & natural ingredients</h1>
    </div>
    <div className='relative container inset-0 flex flex-col-reverse sm:flex-row-reverse justify-between items-center gap-2'>
    <div className='z-10 left-4 top-2'>
        <img 
        src={takecare} 
        alt="A description of the image" 
        className="object-cover w-full h-[490px]"/>
    </div>
    <div className='grid md:grid-rows-2  justify-between -mt-5 mx-auto items-center gap-1'>
        <h1 className='md:text-[30px] md:ml-[100px] ml-[10px] mt-4 text-[20px]  text-[#74B72E] font-bold'>A Full Line of Natural Cosmetic <br/>and Personal Care Products</h1>
        <p className=' text-[#74B72E] md:-mt-4 mt-2  md:ml-[100px] ml-[10px] text-justify text-[10px] md:text-[15px]'>Discover a complete range of natural cosmetic and personal care products <br/> crafted with pure, eco-friendly ingredients. From skincare to haircare.<br/> 
        our products are designed to nourish, protect, and enhance your natural <br/> beauty, while being gentle on the environment. Embrace a clean,<br/>  green routine with our all-natural solutions.</p>
    </div>
    </div>
         <div className='flex mx-auto container justify-center items-center mt'>
            <h1 className='text-[#74B72E] text-center font-bold md:text-[30px] text-[20px]'>Shop Best Selling Organic Skincare <br/> products & Natural Cosmetics</h1>
         </div>
          <h1 className='text-[#74B72E] font-bold mt-4 container text-[20px]'>Top Rated Products</h1>

          <div className='grid grid-cols-3  justify-between items-center gap-2 container mt'>
       {items.map((item, index) => (
        <div key={index} className="">
          <div className="">
        <img src={item.image} alt={item.alt} />
        <h1 className='text-[#74B72E] mt font-bold'>{item.desp}</h1>
      </div>
    </div>
  ))}
</div>
     <div className='container '>
        <h1 className='text-[20px] text-[#74B72E] mt font-bold'>Shop By Categlories</h1>
        </div>
        <div className='grid grid-cols-4 justify-between mt  items-center gap-2'>
        {care.map((item, index) => (
        <div key={index} className="flex mx-[10px]">
          <div className="">
        <img src={item.image} alt={item.alt} />
        <h1 className='text-[#74B72E] mt font-bold'>{item.desp}</h1>
      </div>
    </div>
  ))}
        </div>


        <div className='container relative inset-0 mt-2'>
        <img src={nature} className='object-cover w-full h-[300px] '/>
        <div className='absolute z-10 right-8 top-8 w-[200px] h-[200px] opacity-50 bg-white shadow-md'>
          
        </div>
      </div>



        {/* footer */}
       <div className='relative mt container inset-0 flex flex-col '>
       <img src={back} className='object-cover w-full h-[100px] '/>
       <div className='grid grid-cols-5 justify-between items-center md:gap-10 gap-2 absolute z-10'>
            <div className='-mt-[90px] ml-[10px] flex flex-col gap-1 justify-between items-center'>
            <h1 className='text-[20px] md:text-[30px} text-[#74B72E] font-bold'>Crytotec</h1>
             <div className="flex flex-row justify-between items-center gap-2">
           <a href=""><img src={face}/></a>
           <a href=""><img src={twit}/></a>
           <a href=""><img src={insta}/></a>
             </div>
             </div>
             <div className='right-0 grid grid-row-5 md:mx-20 mx-5 text-[10px] md:text-[20px} justify-between items-center gap-2'>
             <h1 className=' text-[#74B72E] font-bold'><a href="">Product</a></h1>
             <p className=' text-[#74B72E] font-bold'><a href="">Skin Care</a></p>
             <p className=' text-[#74B72E] font-bold'><a href="">Face</a></p>
             <p className=' text-[#74B72E] font-bold'><a href="">Eye Care</a></p>
             <p className=' text-[#74B72E] font-bold'><a href="">Cosmetic</a></p>
             </div>

             <div className='right-0 grid grid-row-5 md:mx-20 mx-5 text-[10px] md:text-[20px} justify-between items-center gap-2'>
             <h1 className=' text-[#74B72E] font-bold'><a href="">About</a></h1>
             <p className=' text-[#74B72E] font-bold'><a href="">Partnership</a></p>
             <p className=' text-[#74B72E] font-bold'><a href="">Store</a></p>
             <p className=' text-[#74B72E] font-bold'><a href="">Return Policy</a></p>
             <p className=' text-[#74B72E] font-bold'><a href="">Contact Us</a></p>
             </div>

             <div className=' right-0 grid text-[10px] md:text-[20px} grid-row-5 md:mx-20 mx-5 justify-between items-center gap-2'>
             <h1 className=' text-[#74B72E] font-bold'><a href="">Products</a></h1>
             <p className=' text-[#74B72E] font-bold'><a href="">Help Desk</a></p>
             <p className=' text-[#74B72E] font-bold'><a href="">Shipping</a></p>
             <p className=' text-[#74B72E] font-bold'><a href="">Sales</a></p>
             </div>

             <div className='right-0 grid grid-row-5 md:mx-20  text-[10px] md:text-[20px} justify-between items-center gap-2'>
             <h1 className=' text-[#74B72E] font-bold'><a href="">Newletters</a></h1>
             <form>
           <input 
           type="text" 
          placeholder="Input Your E-mail" 
        className="bg-[#F77F00] text-white placeholder-white md:text-[8px] text-[5px] h-[10px] md:h-[20px] rounded pl-4 w-[80px] md:w-[100px] mr-4 ring-[#F77F00]"
         />
         </form>

             <p className=' text-[#74B72E] font-bold'><a href="">Eye Care</a></p>
             <p className=' text-[#74B72E] font-bold'><a href="">Cosmetic</a></p>
             </div>

             </div>
            </div>
       
        </div>

  );
};

export default Section;
