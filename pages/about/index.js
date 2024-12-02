import React, { useState } from "react";
import { motion } from "framer-motion";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

// data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: "awards",
    info: [
      { title: "Webby Awards - Honoree", stage: "2011 - 2012" },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "experience",
    info: [
      { title: "UX/UI Designer - XYZ Company", stage: "2012 - 2023" },
      { title: "Web Developer - ABC Agency", stage: "2010 - 2012" },
      { title: "Intern - DEF Corporation", stage: "2008 - 2010" },
    ],
  },
  {
    title: "credentials",
    info: [
      { title: "Web Development - ABC University, LA, CA", stage: "2011" },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* Avatar Image */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      {/* Content */}
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <h2>
            Captivating <span>stories</span>birth magnificent designs
          </h2>
          <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            Excepteur Lorem do consectetur ipsum tempor nisi. Commodo
            reprehenderit nulla ex nostrud cillum et eu fugiat cillum
            consectetur anim sint ut dolor. Est consequat aliquip aliqua aute do
            amet. Reprehenderit non ad do elit in commodo. Aute aute Lorem
            officia in officia.
          </p>
          {/* counters */}
          <div>
            <div>
            {/* experience */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
            <div className="text-2xl xl:text-4l font-extrabold text-accent mb-2">
              <CountUp start={0} end={10} duration={5} />
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">years of experience</div>
            </div>
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
            clients
            <div className="text-2xl xl:text-4l font-extrabold text-accent mb-2">
              <CountUp start={0} end={250} duration={5} />
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">years of experience</div>
            </div>
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
            <div className="text-2xl xl:text-4l font-extrabold text-accent mb-2">
              <CountUp start={0} end={250} duration={5} />
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">years of experience</div>
            </div>
            </div>
          </div>
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>
        {/* Details */}
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px] bg-pink-400/10 py-2 xl:py-6 gap-y-2 xl:gap-y-4 items-center xl:items-start">
          {aboutData[index].info.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className="mb-4 flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
            >
              {/* Title */}
              <div className="font-light mb-2 md:mb-0">{item.title}</div>
              {item.stage && (
                <>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                </>
              )}
              {/* Icons */}
              {item.icons && (
                <div className="flex gap-x-4">
                  {item.icons.map((icon, iconIndex) => (
                    <div key={iconIndex} className="text-2xl">
                      {icon}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
