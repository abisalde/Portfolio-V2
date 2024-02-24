import * as React from 'react';

import { motion } from 'framer-motion';

/**
 *
 * ? Local & Shared Imports
 */
import { LoadingAnimation } from '@portfolio-components/LoadingAnimation';
import { PortfolioCard } from '@portfolio-components/PortfolioCard';
import { SEO } from '@portfolio-components/SEO';

export const PortfolioPage = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const onLoad = () => {
    setIsLoading(false);
  };

  return (
    <section className='flex h-full flex-col space-y-4 overflow-hidden px-4 md:space-y-7 md:px-12'>
      <SEO pathname='portfolio' title='My Work | Isaiah Abiodun Portfolio' />
      <h2 className='text-center font-primary text-2xl font-medium text-white md:text-5xl'>
        Portfolio.
      </h2>
      <div></div>
      <div className='portfolio-scroll flex w-full flex-col overflow-y-auto px-4 pb-10 pt-6'>
        <motion.div className='relative grid grid-flow-row grid-cols-1 justify-center gap-9 lg:grid-cols-2'>
          <div className='relative flex h-[inherit] w-full overflow-hidden rounded-xl  shadow-neu3  hover:shadow-neu2 focus:shadow-neu2'>
            {isLoading && (
              <div className='absolute left-1/2 top-1/2 -translate-x-1/2'>
                <LoadingAnimation variants='small' />
              </div>
            )}
            <iframe
              role='application'
              aria-label='Expo Snack'
              className='inline h-full w-full'
              data-snack-iframe='true'
              width='100%'
              height='100%'
              loading='lazy'
              onLoad={onLoad}
              src='https://snack.expo.dev/embedded/@abisalde/customswitchreactnative?iframeId=281llpd3zh&preview=true&platform=web&theme=dark'
            />
          </div>
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
    liveLink: 'https://githubgraphql.abisalde.dev/',
    title: 'GitHub Profile Preview',
  },
  {
    id: 'portfolio--githu-021',
    image: 'image/copy&paste-editor.png',
    description:
      'Copy & Paste editor using draft.js from meta. Also you can copy and paste an image into this editor',
    techList: 'react.js - next.js - tailwind-css - draft.js',
    githubLink: 'https://github.com/abisalde/mateo-challenge',
    liveLink: 'https://copy-paste-draftjs.vercel.app/',
    title: 'Copy & Paste Editor',
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
    liveLink: 'https://myreads.abisalde.dev/',
    title: 'My Read',
  },
  {
    id: 'portfolio-would-you-rather',
    image: 'image/wouldyourather.png',
    description:
      'A poll question app where you get to post a question on what you would rather do, answer the questions some users also post and it also includes a Leader board',
    techList: 'react.js - bootstrap - redux-toolkit - redux-thunk',
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
