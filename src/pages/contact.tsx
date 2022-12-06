import * as React from "react";
import { motion } from "framer-motion";

import type { HeadFC } from "gatsby";
import { TwitterTimelineEmbed } from "react-twitter-embed";

/**
 * ? Local Imports
 */
import { Header, LinkType } from "@portfolio-components/header";
import { SEO } from "@portfolio-components/seo";

const Contact: React.FC = ({ transitionStatus, entry }: any) => {
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> & React.ChangeEvent<HTMLTextAreaElement>) => {
    e.persist();
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.persist();
    e.stopPropagation();

    // if(values.email === "")
  };

  return (
    <>
      <Header view={LinkType.Contact} />
      {typeof window !== "undefined" && (
        <motion.div
          className="flex sm:flex-row xs:flex-col flex-nowrap justify-between w-full h-full mx-auto sm:px-10 xs:px-4 py-2"
          initial={entry.state}
          animate={transitionStatus === "exiting" ? { x: -window.innerWidth } : { x: 0 }}
          transition={{
            duration: 2.5,
          }}
        >
          <div className="p-4 sm:w-[45%] xs:hidden sm:block">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName={"abisalde"}
              options={{ height: 200, width: window.screen.width }}
              autoHeight={false}
              borderColor="#fff"
              key={"twitter-em"}
              noFooter={true}
            />
          </div>
          <div className="form-wrapper p-4 flex flex-col sm:w-[45%] xs:w-full h-full">
            <form className=" flex flex-col w-full max-w-[550px] justify-center m-auto" onSubmit={handleSubmit}>
              <h3 className="sm:text-2xl xs:text-md dark:text-primary-main font-display mb-4">Contact Form</h3>
              <input
                aria-label="Your name"
                className="appearance-none rounded-full shadow-neu1 leading-5 px-8 py-4 bg-transparent border-0 outline-none placeholder:text-main-text focus:ring-1 focus:ring-rose-100 focus:outline-none focus:border-rose-100"
                onChange={handleChange}
                placeholder="Your name"
                name="name"
                required
                type="text"
                value={values.name}
              />
              <input
                aria-label="Email address"
                className="appearance-none rounded-full shadow-neu1 leading-5 px-8 py-4 bg-transparent border-0 my-4 outline-none placeholder:text-main-text focus:ring-1 focus:ring-rose-100 focus:outline-none focus:border-rose-100"
                onChange={handleChange}
                placeholder="Email Address"
                name="email"
                required
                type="email"
                value={values.email}
              />
              <input
                aria-label="Subject"
                className="appearance-none rounded-full shadow-neu1 leading-5 px-8 py-4 bg-transparent border-0 mb-4 outline-none placeholder:text-main-text focus:ring-1 focus:ring-rose-100 focus:outline-none focus:border-rose-100"
                onChange={handleChange}
                placeholder="Subject"
                name="subject"
                required
                type="text"
                value={values.subject}
              />
              <textarea
                aria-label="Message"
                className="appearance-none rounded-md shadow-neu1 leading-5 px-8 py-4 bg-transparent border-0 mb-4 outline-none placeholder:text-main-text focus:ring-1 focus:ring-rose-100 focus:outline-none focus:border-rose-100 resize-none h-36 scroll-smooth scrollbar-hide"
                onChange={handleChange}
                placeholder="Let me know...."
                name="message"
                required
                value={values.message}
              />

              <button
                type="submit"
                className="w-[170px] ease-in-out transition duration-200 transform hover:scale-100 leading-5 rounded-full uppercase bg-background shadow-neu2 tracking-widest px-8 py-4 cursor-pointer dark:text-primary-main font-display hover:transition-all hover:ease-in-out mt-4"
              >
                Submit
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Contact;

export const Head: HeadFC = () => <SEO pathname={`/${LinkType.Contact}`} title="Contact Me" />;
