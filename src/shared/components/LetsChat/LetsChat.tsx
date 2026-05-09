import { Link } from 'react-router-dom';

interface LetsChatProps {
  displayImage?: boolean;
}

export const LetsChat = ({ displayImage = false }: LetsChatProps) => {
  return (
    <div className='inline-flex items-center space-x-4'>
      {displayImage && (
        <img
          width='56'
          height='56'
          src='/image/isaiah-abiodun@abisalde56x56.webp'
          alt='Isaiah Abiodun ::: Thumbnail Portfolio'
          className='border-w h-14 w-14 rounded-full border-white'
        />
      )}
      <Link to='/lets-chat' relative='path'>
        <button
          type='button'
          className='say-hello text hover:outline-dark w-full max-w-46 cursor-pointer rounded-xl border-0 border-solid px-8 py-2 text-2xl font-medium tracking-wider text-nowrap whitespace-nowrap text-white ring-0 outline outline-2 outline-offset-0 outline-white hover:border-2 hover:border-solid hover:stroke-indigo-300 hover:text-nowrap hover:outline-offset-15'
        >
          Let's Chat
        </button>
      </Link>
    </div>
  );
};
