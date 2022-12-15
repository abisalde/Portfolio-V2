import * as React from "react";
import type { HeadFC } from "gatsby";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { Spinner } from "flowbite-react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
/**
 * ? Local Imports
 */
import { Header, LinkType } from "@portfolio-components/header";
import { SEO } from "@portfolio-components/seo";
import { useFormState } from "@hooks";

const Contact: React.FC = ({ transitionStatus, entry }: any) => {
  const form = React.createRef<HTMLFormElement>();

  const submit = async () => {
    await emailjs
      .sendForm(
        process.env.EMAIL_SERVICE_ID as string,
        process.env.EMAIL_TEMPLATE_ID as string,
        form.current as HTMLFormElement,
        process.env.PUBLIC_KEY as string,
      )
      .then(
        (result) => {
          toast.success(`${result.text}: Thank you for contacting @Abisalde 🤗`);
        },
        (error) => {
          toast.error(`${error.text}: Error from sending your message 😐`);
        },
      );
  };

  const { errors, handleChange, handleSubmit, values } = useFormState({ submit });

  function MyMapComponent({ center, zoom }: { center: google.maps.LatLngLiteral; zoom: number }) {
    const ref = React.createRef<HTMLDivElement>();

    React.useEffect(() => {
      new window.google.maps.Map(ref.current as HTMLDivElement, {
        center,
        zoom,
      });
    });

    return <div ref={ref} id="map" />;
  }

  const render = (status: Status): React.ReactElement => {
    if (status === Status.LOADING) return <h3>{status} ..</h3>;
    if (status === Status.FAILURE) return <h3>{status} ...</h3>;
    return <></>;
  };

  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 4;

  return (
    <>
      <Header view={LinkType.Contact} />
      {typeof window !== "undefined" && (
        <div className="flex sm:flex-row xs:flex-col flex-nowrap justify-between w-full h-full mx-auto sm:px-10 xs:px-4 py-2">
          <div className="p-4 sm:w-[45%] xs:hidden sm:block h-full">
            <div className="flex flex-col w-full max-w-[650px] justify-center m-auto my-8 h-full">
              <React.Suspense fallback={<Spinner aria-label="Loading Twitter Profile" color="success" size="lg" />}>
                {/* <div className="w-auto p-6"> */}
                {/* <div className="block text-center m-auto p-6"> */}
                <Wrapper apiKey={process.env.MAP_API_KEY as string} render={render}>
                  <MyMapComponent center={center} zoom={zoom} />
                </Wrapper>
                {/* </div> */}
                {/* </div> */}
              </React.Suspense>
              <div className="flex flex-row flex-wrap justify-center items-center max-w-sm m-auto my-4">
                <a
                  href="https://linkedin.com/in/abisalde"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="px-2"
                >
                  <FaLinkedinIn fontSize={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="form-wrapper p-4 flex flex-col sm:w-[45%] xs:w-full h-full">
            <form
              className="flex flex-col w-full max-w-[550px] justify-center m-auto"
              onSubmit={handleSubmit}
              ref={form}
            >
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
              {errors && errors.name ? (
                <p className="text-[13px] font-sans2 text-red-700 dark:text-red-200 leading-2 my-1 mx-2">
                  {errors.name}
                </p>
              ) : null}
              <div className="my-2" />
              <input
                aria-label="Email address"
                className="appearance-none rounded-full shadow-neu1 leading-5 px-8 py-4 bg-transparent border-0 outline-none placeholder:text-main-text focus:ring-1 focus:ring-rose-100 focus:outline-none focus:border-rose-100"
                onChange={handleChange}
                placeholder="Email Address"
                name="email"
                required
                type="email"
                value={values.email}
              />
              {errors && errors.email ? (
                <p className="text-[13px] font-sans2 text-red-700 dark:text-red-200 leading-2 my-1 mx-2">
                  {errors.email}
                </p>
              ) : null}
              <div className="my-2" />
              <input
                aria-label="Subject"
                className="appearance-none rounded-full shadow-neu1 leading-5 px-8 py-4 bg-transparent border-0 outline-none placeholder:text-main-text focus:ring-1 focus:ring-rose-100 focus:outline-none focus:border-rose-100"
                onChange={handleChange}
                placeholder="Subject"
                name="subject"
                required
                type="text"
                value={values.subject}
              />
              {errors && errors.subject ? (
                <p className="text-[13px] font-sans2 text-red-700 dark:text-red-200 leading-2 my-1 mx-2">
                  {errors.subject}
                </p>
              ) : null}
              <div className="my-2" />
              <textarea
                aria-label="Message"
                className="appearance-none rounded-md shadow-neu1 leading-5 px-8 py-4 bg-transparent border-0 outline-none placeholder:text-main-text focus:ring-1 focus:ring-rose-100 focus:outline-none focus:border-rose-100 resize-none h-36 scroll-smooth scrollbar-hide"
                onChange={handleChange}
                placeholder="Let me know...."
                name="message"
                required
                value={values.message}
              />
              {errors && errors.message ? (
                <p className="text-[13px] font-sans2 text-red-700 dark:text-red-200 leading-2 my-1 mx-2">
                  {errors.message}
                </p>
              ) : null}
              <div className="my-2" />
              <button
                type="submit"
                className="w-[170px] ease-in-out transition duration-200 transform hover:scale-100 leading-5 rounded-full uppercase bg-background shadow-neu2 tracking-widest px-8 py-4 cursor-pointer dark:text-primary-main font-display hover:transition-all hover:ease-in-out mt-4"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;

export const Head: HeadFC = () => <SEO pathname={`/${LinkType.Contact}`} title="Contact Me" />;
