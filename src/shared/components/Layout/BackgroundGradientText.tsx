import * as React from 'react';

export const BackgroundGradientText: React.FC = () => {
  const [text] = React.useState<string>(newTextArray);

  return (
    <div className='absolute -z-0 h-full w-full text-wrap'>
      <div className='bg-gradient-to-r from-dark to-black font-primary text-base tracking-wider text-white opacity-5'>
        {text}
      </div>
    </div>
  );
};

const newTextArray = Array.from({ length: 100000 }, (_, i) =>
  i % 2 === 0 ? '0' : '1',
).join(' ');
