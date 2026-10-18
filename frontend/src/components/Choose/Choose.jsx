import { useGSAP } from "@gsap/react";
import gsap, { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { chooseLinesLG, chooseLinesSM } from "../../constants/welcome";
import { useRef } from "react";

const Choose = () => {
    const sectionRef = useRef(null);

    const isMobD = useMediaQuery({
        query: "(max-width:768px)",
    });
    const chooseLines = isMobD ? chooseLinesSM : chooseLinesLG;

    useGSAP(() => {

        gsap.fromTo(".choose-description, .choose-principle", {
            y: 28,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.09,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".choose-details",
                start: "top 88%",
                once: true,
            },
        });

        const lines = gsap.utils.toArray(".choose-title-clip");

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".choose-section",
                start: "top 75%",
                end: "bottom 100%",
                scrub: true,
                // markers: true,
            },
        });

        tl.from(".choose-subtitle", {
            yPercent: 100,
            opacity: 0,
            ease: "power1.inOut"
        });

        // Animate the div height
        if (!isMobD) {
            tl.fromTo(
                ".title-part",
                { height: "10vh" },
                { height: `${isMobD ? "22vh" : "50vh"}`, ease: "none" }
            );
        }

        // Animate text reveal — run *at the same time*
        tl.to(
            lines,
            {
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "none",
                stagger: 0.2,
                duration: 1,
            },
            "<" // 👈 runs at the same time as the previous animation
        );

        if (!isMobD) {
            tl.from(".choose-sec", {
                yPercent: 100,
                duration: 1,
            }, "<");
        }
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="choose-section w-full min-h-dvh p-8 pt-10 max-md:px-5 max-md:py-8">
            <p className='text-[.7rem] text-[#eae5dd] choose-subtitle'>Discover the CHRONOS<span>®</span> Collections</p>
            <div className="lg:mt-10 mt-7 title-part origin-bottom ">
                {
                    chooseLines.map((line, index) => (
                        <h1 key={index} className={`choose-heading text-[#f4efe7] lg:text-[9.5rem] text-[3rem] leading-[0.9]`} font-medium tracking-tighter choose-title>
                            <span className={`choose-title-break ${index == 1 ? "lg:pb-3 pb-2" : ""}`}>{line}<span className={`choose-title-clip ${index == 1 ? "lg:pb-3 pb-2" : ""}`}>{line}</span></span>
                        </h1>
                    ))
                }
            </div>
            <div className="choose-sec choose-details w-full flex lg:flex-row flex-col justify-center items-start gap-10 lg:mt-0 max-md:gap-8 max-md:pb-10">
                <div className='choose-description lg:w-1/2 w-full text-[#b1a696] lg:text-[2rem] text-[1rem] md:leading-[1.1] lg:mt-0 mt-8 lg:pr-16'>
                    <p>You can choose one of three signature timepieces in our collection. Each of our watches meets the highest quality and meets the standards adjusted to your needs. Choose the one you like.</p>
                </div>
                <div className='lg:w-1/2 w-full'>
                    <div className=" lg:w-[30%] w-[60%]">
                        <p className="text-[.7rem] text-[#eae5dd]">Every CHRONOS® timepiece—is built
                            on the same principles:</p>
                    </div>
                    <div className="flex flex-1 flex-wrap justify-start items-start gap-2 mt-8 max-md:mt-5 max-md:gap-2">
                        <div className="choose-principle border-[1px] border-[#b1a696] text-[#b1a696] lg:text-[2rem] text-[1rem] px-[20px] py-[4px] rounded-full max-md:px-4 max-md:py-2">
                            Swiss-Made
                        </div>
                        <div className="choose-principle border-[1px] border-[#f4efe7] text-[#f4efe7] lg:text-[2rem] text-[1rem] px-[20px] py-[4px] rounded-full max-md:px-4 max-md:py-2">
                            In-House Movements
                        </div>
                        <div className="choose-principle border-[1px] border-[#b1a696] text-[#b1a696] lg:text-[2rem] text-[1rem] px-[20px] py-[4px] rounded-full max-md:px-4 max-md:py-2">
                            Sapphire
                        </div>
                        <div className="choose-principle border-[1px] border-[#f4efe7] text-[#f4efe7] lg:text-[2rem] text-[1rem] px-[20px] py-[4px] rounded-full max-md:px-4 max-md:py-2">
                            Hand-Finished
                        </div>
                        <div className="choose-principle border-[1px] border-[#b1a696] text-[#b1a696] lg:text-[2rem] text-[1rem] px-[20px] py-[4px] rounded-full max-md:px-4 max-md:py-2">
                            300m Water Resistance
                        </div>
                        <div className="choose-principle border-[1px] border-[#f4efe7] text-[#f4efe7] lg:text-[2rem] text-[1rem] px-[20px] py-[4px] rounded-full max-md:px-4 max-md:py-2">
                            Exhibition Caseback
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Choose;
