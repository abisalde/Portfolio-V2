import { motion } from 'framer-motion';

/**
 *
 * ? Local & Shared Imports
 */
import { PortfolioCard } from '@portfolio-components/PortfolioCard';
import { SEO } from '@portfolio-components/SEO';

export const PortfolioPage = () => {
  return (
    <section className='flex h-full flex-col space-y-4 overflow-hidden px-4 md:space-y-7 md:px-12'>
      <SEO pathname='portfolio' title='My Work | Isaiah Abiodun Portfolio' />
      <h2 className='text-center font-primary text-2xl font-medium text-white md:text-5xl'>
        Portfolio.
      </h2>
      <div></div>
      <div className='portfolio-scroll flex w-full flex-col overflow-y-auto px-4 pb-10 pt-6'>
        <motion.div className='relative grid grid-flow-row grid-cols-1 justify-center gap-9 lg:grid-cols-2'>
          {ArrayPortfolio.map((portfolio) => (
            <PortfolioCard key={portfolio.id} {...portfolio} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ArrayPortfolio = [
  {
    id: 'portfolio--githu-001',
    image: 'image/github-profile.png',
    description: 'GitHub profile compiled with github graphql v2 API',
    techList: 'react - gatsby - graphql - styled components',
    githubLink: 'https://github.com/abisalde/afrihealth-github-challenge',
    liveLink: 'https://abisalde-graphql-profile.netlify.app/',
    title: 'GitHub Profile Preview',
  },
  {
    id: 'portfolio-ear1-challenge',
    image: 'image/ear1-challenge.png',
    description: 'A social media app to connect to influencer and celebrity',
    techList: 'html - css -javascript',
    githubLink: 'https://github.com/abisalde/Ear1-Challenge',
    liveLink: 'https://abisalde.github.io/Ear1-Challenge/',
    title: 'Ear1',
  },
  {
    id: 'portfolio-my-read',
    image: 'image/my-reads.png',
    description:
      'A book shelf to log, track and search for book you intend to read, currently reading, and have read',
    techList: 'react.js - react-router-dom',
    githubLink: 'https://github.com/abisalde/reactnd-myreads',
    liveLink: 'https://reactnd-abisalde-myreads.netlify.app/',
    title: 'My Read',
  },
  {
    id: 'portfolio-would-you-rather',
    image: 'image/wouldyourather.png',
    description:
      'A poll question app where you get to post a question on what you would rather do, answer the questions some users also post and it also includes a Leader board',
    techList: 'react - bootstrap - redux-toolkit - redux-thunk',
    githubLink: 'https://github.com/abisalde/reactnd-would-you-rather',
    liveLink: 'https://abisalde-wyr.vercel.app/',
    title: 'Would You Rather',
  },
  {
    id: 'portfolio-dashboard-display',
    image: 'image/dashboard.png',
    description: 'A sample dashboard to display users',
    techList: 'react - redux - styled-components - font-awesome - lodash',
    githubLink: 'https://github.com/abisalde/working-with-data',
    liveLink: 'https://dashboard-api-data.netlify.app/',
    title: 'Dashboard Display',
  },
  {
    id: 'portfolio-our-wedding',
    image: 'image/wedding-profile.png',
    description: 'A wedding gallery show',
    techList: 'React',
    githubLink: 'https://github.com/abisalde/wedding-ceremony',
    liveLink: 'https://ourwedding2020.netlify.app/',
    title: 'Wedding Profile',
  },
];
