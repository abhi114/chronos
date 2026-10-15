import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaDribbble } from "react-icons/fa";

import MarqueeText from '../Marquee/MarqueeText';

const Footer = () => {
    return (
        <section className='w-screen h-dvh px-6 mt-10'>
            <p className='text-[.7rem] text-[#eae5dd] choose-subtitle mt-10'>Ready to begin your collection?<br />Reserve one of our CHRONOS<span>®</span> timepieces</p>
            <div>
                <MarqueeText />
            </div>

            <div className='flex justify-between items-center text-2xl mt-14'>
                <h3 className='text-[#b1a696]'>CHRONOS® is a fictional luxury watch<br />
                    maison concept, created to showcase<br />
                    timeless web design.<br /><br />
                    If you would like a similar<br />
                    website for your brand—<a href="#" className='text-[#f4efe7] hover:text-[#c4c1b9] underline'> contact us.</a>
                </h3>

                <div className='flex flex-col justify-center items-end'>
                    <a href="#welcome" className='text-[#f2ede5] text-2xl'>Collections</a>
                    <a href="#welcome" className='text-[#f2ede5] text-2xl'>Atelier</a>
                    <a href="#welcome" className='text-[#f2ede5] text-2xl'>Timepieces</a>
                    <a href="#welcome" className='text-[#f2ede5] text-2xl'>Why CHRONOS®</a>
                    <a href="#welcome" className='text-[#f2ede5] text-2xl'>Complications</a>
                    <a href="#welcome" className='text-[#f2ede5] text-2xl'>Feedback</a>
                </div>
            </div>

            <div className="w-full flex justify-between items-center mt-20">
                <div className="flex justify-center items-center gap-1">
                    <div className='border-[1px] border-[#c4c1b9] rounded-full p-3 text-[#f2ede5]'><FaBehance className="text-xl" /></div>
                    <div className='border-[1px] border-[#c4c1b9] rounded-full p-3 text-[#f2ede5]'><FaInstagram className="text-xl" /></div>
                    <div className='border-[1px] border-[#c4c1b9] rounded-full p-3 text-[#f2ede5]'><CiLinkedin className="text-xl" /></div>
                    <div className='border-[1px] border-[#c4c1b9] rounded-full p-3 text-[#f2ede5]'><FaDribbble className="text-xl" /></div>
                </div>

                <div>
                    <p className="text-[0.8rem] text-[#b1a696] text-right">
                        Meet CHRONOS®—mechanical timepieces,<br />
                        hand-finished in Geneva since 1924.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Footer;