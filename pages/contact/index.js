//components
import Circles from "/components/Circles";

//icons
import { BsArrowRight } from "react-icons/bs";

//framer
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px] bg-pink-500/10 p-6 rounded-lg">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="Name"
                className="input w-full py-3 px-4 rounded-md bg-white/10 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <input
                type="email"
                placeholder="Email"
                className="input w-full py-3 px-4 rounded-md bg-white/10 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="input w-full py-3 px-4 rounded-md bg-white/10 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <textarea
              placeholder="Message"
              className="textarea w-full py-3 px-4 rounded-md bg-white/10 focus:outline-none focus:ring-2 focus:ring-accent"
            ></textarea>
            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 py-3 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group relative">
              <span className="transition-all duration-500 group-hover:-translate-y-[120%] group-hover:opacity-0">
                Let's Talk
              </span>
              <BsArrowRight className="absolute text-[22px] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
