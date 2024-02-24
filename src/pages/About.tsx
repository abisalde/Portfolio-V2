import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaDatabase,
  FaNode,
} from 'react-icons/fa';
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoMongodb,
  BiLogoAndroid,
  BiLogoGraphql,
  BiLogoRedux,
  BiLogoFigma,
  BiLogoFirebase,
  BiLogoTailwindCss,
  BiLogoVisualStudio,
  BiLogoNetlify,
  BiLogoAws,
  BiLogoWordpress,
} from 'react-icons/bi';

/**
 *
 * ? Local & Shared Imports
 */
import { LetsChat } from '@portfolio-components/LetsChat';
import { SEO } from '@portfolio-components/SEO';

export const AboutPage = () => {
  return (
    <section className='flex h-full flex-col space-y-4 px-5 md:space-y-6 md:px-12'>
      <SEO
        pathname='about'
        title='About Me ::: Isaiah Abiodun | Software Engineer'
      />
      <h2 className='text-center font-primary text-2xl font-medium text-white md:text-5xl'>
        About Me.
      </h2>
      <div className='grid h-full w-full grid-cols-1 md:gap-4 lg:grid-cols-2 lg:gap-8'>
        <div className='flex flex-col  space-y-4 md:space-y-7'>
          <h3 className='text-2xl font-medium text-white md:text-4xl'>
            Hi, I'm <span className='text-slate-400'>Isaiah Abiodun</span>
          </h3>
          <div className='mt-5'>
            <h6 className='mb-3 font-primary text-xl text-slate-400 md:text-3xl'>
              Who am I &amp; What I do
            </h6>
            <ul className='flex flex-col gap-4'>
              {dataArray.map(({ id, text }) => (
                <li className='inline-flex items-start space-x-4' key={id}>
                  <img
                    width={60}
                    height={60}
                    src='image/code-image.png'
                    className='h-9 w-9 rounded-full ring-0'
                  />
                  <p className='text-sm font-medium text-white md:text-xl'>
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className='relative'>
            <LetsChat displayImage={true} />
          </div>
        </div>
        <div className='hidden lg:block'>
          <h5 className='mb-9 text-center text-3xl font-medium  text-white'>
            Skills & Tools
          </h5>
          <div className='mx-auto grid w-1/2 grid-cols-4 gap-5'>
            <FaHtml5 className='text-slate-400' size={50} />
            <FaCss3Alt className='text-slate-400' size={50} />
            <BiLogoJavascript className='text-slate-400' size={50} />
            <FaReact className='text-slate-400' size={50} />
            <BiLogoAndroid className='text-slate-400' size={50} />
            <BiLogoGraphql className='text-slate-400' size={50} />
            <BiLogoMongodb className='text-slate-400' size={50} />
            <FaNode className='text-slate-400' size={50} />
            <BiLogoTypescript className='text-slate-400' size={50} />
            <FaSass className='text-slate-400' size={50} />
            <FaDatabase className='text-slate-400' size={50} />
            <BiLogoRedux className='text-slate-400' size={50} />
            <BiLogoFigma className='text-slate-400' size={50} />
            <BiLogoFirebase className='text-slate-400' size={50} />
            <BiLogoTailwindCss className='text-slate-400' size={50} />
            <BiLogoVisualStudio className='text-slate-400' size={50} />
            <BiLogoNetlify className='text-slate-400' size={50} />
            <BiLogoAws className='text-slate-400' size={50} />
            <BiLogoWordpress className='text-slate-400' size={50} />
          </div>
        </div>
      </div>
    </section>
  );
};

const dataArray = [
  {
    id: 'about-me-001',
    text: 'I am a frontend engineer with over 5 years of hands on experience developing Mobile and Web Applications.',
  },
  {
    id: 'about-me-102',
    text: 'I am a graduate of Engineering with good understanding about Engineering principles and concepts.',
  },
  {
    id: 'about-me-203',
    text: 'I build Progressive Web Applications ( PWA ) in normal and SPA Stacks',
  },
  {
    id: 'about-me-405',
    text: 'I integrate third party services efficiently such as REST API / GraphQL / Firebase',
  },
  {
    id: 'about-me-104',
    text: 'I love what I do by crafting pixel perfect UI visualizations.',
  },
];
