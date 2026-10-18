import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { welcomeLinesLG, welcomeLinesSM } from "../../constants/welcome";
import w1 from "../../assets/macro-1.jpg"
import w2 from "../../assets/craft-1.jpg"
import { useRef } from "react";

const Welcome = () => {
    const sectionRef = useRef(null);

    const isMobile = useMediaQuery({ maxWidth: 768 });
    const welcomeLines = isMobile ? welcomeLinesSM : welcomeLinesLG;

    useGSAP(() => {
        if (isMobile) {
            gsap.fromTo(".welcome-story img, .welcome-story-copy", {
                y: 36,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                duration: 0.9,
                stagger: 0.14,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".welcome-story",
                    start: "top 82%",
                    once: true,
                },
            });
        } else {
            const story = gsap.timeline({
                scrollTrigger: {
                    trigger: ".welcome-story",
                    start: "top top",
                    end: "+=115%",
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            });

            story.fromTo(".welcome-story-kicker", { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.2 })
                .fromTo(".welcome-watch-pair img", { y: 64, scale: 0.9, opacity: 0 }, {
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    duration: 0.55,
                    stagger: 0.12,
                    ease: "power2.out",
                }, 0)
                .fromTo(".welcome-story-copy p", { clipPath: "inset(0 0 100% 0)", y: 24 }, {
                    clipPath: "inset(0 0 0% 0)",
                    y: 0,
                    duration: 0.55,
                    ease: "power2.out",
                }, 0.16)
                .to(".welcome-watch-pair img:first-child", { y: -18, x: -14, duration: 0.65, ease: "none" }, 0.32)
                .to(".welcome-watch-pair img:last-child", { y: 18, x: 14, duration: 0.65, ease: "none" }, 0.32)
                .fromTo(".welcome-story-rule span", { scaleX: 0 }, { scaleX: 1, duration: 1, ease: "none" }, 0);
        }

        const lines = gsap.utils.toArray(".clip-text-welcome");
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".welcome-section",
                start: "top 75%",
                end: "bottom 75%",
                scrub: true,
                // markers: true
            },
        });

        lines.forEach((line) => {
            tl.to(line, {
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "none",
                stagger: 0.2,
                duration: 1,
            });
        });

    }, { scope: sectionRef });

    return (
        <div ref={sectionRef} className='welcome-section w-full min-h-[120vh] text-[#2A2725] md:px-7 px-6'>
            <div className='flex flex-col gap-2 tracking-[-4] leading-2'>
                <div className="w-full md:w-[86%] md:text-[64px] text-[34px] welcome-line md:pt-20">
                    <div className="w-full welcome-text flex flex-col justify-center items-start">
                        {welcomeLines.map((text, index) => (
                            <span key={index} className="relative block text-darkBrown md:tracking-[-0.010em] tracking-[0.015em]">
                                {text}
                                <span className="clip-text-welcome md:tracking-[-0.010em] tracking-[0.015em]">{text}</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="welcome-story flex md:flex-row flex-col justify-between items-center md:px-[7vw] md:py-16 md:mt-0 mt-10 gap-8">
                <p className="welcome-story-kicker hidden md:block absolute top-[14%] left-[7vw] text-[.68rem] uppercase tracking-[.24em] text-[#81796f]">A lifetime, in time <span className="ml-3 text-[#b1a696]">— 1924 to now</span></p>
                <div className="welcome-watch-pair flex flex-row justify-center items-center gap-3 md:gap-4">
                    <img src={w1} alt="A close-up of a CHRONOS watch" className="md:rounded-[8rem] rounded-[9rem] md:w-[clamp(15rem,21vw,24rem)] w-[42vw] will-change-transform" />
                    <img src={w2} alt="A steel watch catching the light" className="md:rounded-[8rem] rounded-[9rem] md:w-[clamp(15rem,21vw,24rem)] w-[42vw] will-change-transform" />
                </div>
                <div className="welcome-story-copy md:w-[48%] w-full md:mt-0 mt-2">
                    <p className="md:text-[clamp(2rem,3.2vw,3.7rem)] text-[1.4rem] text-[#b1a696] md:leading-[1.08] md:pr-8 font-normal leading-[26px] tracking-[-0.04em]">
                        <span>A watch that is with you through every milestone of your life.</span><br />
                        <span>A watch your grandchildren will one day fasten to their own wrist.</span>
                    </p>
                </div>
                <div className="welcome-story-rule hidden md:block absolute bottom-[13%] left-[7vw] right-[7vw] h-px bg-[#383431]"><span className="block h-full w-full origin-left bg-[#b1a696]"></span></div>
            </div>
        </div>
    );
};

export default Welcome;
