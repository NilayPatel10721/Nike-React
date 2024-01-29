
import clothImage from './images/cloth.jpg';

function Head() {

  return (
    <div className='h-15 w-full relative border-b-2   border-black  top-0 left-0 right-0 '>
    <div className=''>
      <nav className=''>
        <img className=' h-[5.2rem] w-[5rem]  ' src={clothImage} alt='Cloth Image' /> 
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
        <div className=' border-2 border-[#191919] p-1  rounded-full'>
			<li><a className="text-lg text-[#191919] font-semibold  transition-color duration-[400ms]   hover:text-[#fec333] " href="#">LAUNCHES</a></li>
        </div>
            <li><a  className="text-lg text-[#191919] font-semibold transition-color duration-[400ms]   hover:text-[#fec333]" href="#"> SNEAKERS </a></li>

			<li><a className="text-lg text-[#191919] font-semibold transition-color duration-[400ms]     hover:text-[#fec333] " href="#">APPAREL</a></li>
			
			<li><a className="text-lg text-[#191919] font-semibold transition-color duration-[400ms]    hover:text-[#fec333]" href="#">KIDS</a></li>
			
			<li><a className="text-lg text-[#191919] font-semibold transition-color durationduration-[400ms]   hover:text-[#fec333]" href="#">ACCESORIES</a></li>
			
			<li><a className="text-lg text-[#191919] font-semibold  transition-color duration-[400ms]   hover:text-[#fec333]" href="#">CULTURE</a></li>

			<li><a className="text-lg text-[#191919] font-semibold transition-color duration-[400ms]   hover:text-[#fec333]" href="#">BRANDS</a></li>
		</ul>
      </nav>
      </div>
    </div>
  );
}

export default Head;
