interface LetsChatProps {
  displayImage?: boolean;
}

export const LetsChat = ({ displayImage = false }: LetsChatProps) => {
  return (
    <div className='inline-flex items-center space-x-4'>
      {displayImage && (
        <img
          width='60'
          height='60'
          src='image/isaiah-abiodun@abisalde.jpg'
          alt='Isaiah Abiodun ::: Thumbnail Portfolio'
          className='border-w h-14 w-14 rounded-full border-white'
        />
      )}
      <button
        type='button'
        className='say-hello w-full max-w-40 cursor-pointer text-nowrap rounded-xl  border-0 border-solid px-5  py-1.5 text-2xl font-medium tracking-wider text-white outline outline-2 outline-offset-0  outline-white ring-0 hover:text-nowrap hover:border-2 hover:border-solid hover:stroke-indigo-300 hover:outline-offset-[15px] hover:outline-dark'
      >
        Let's Chat
      </button>
    </div>
  );
};
