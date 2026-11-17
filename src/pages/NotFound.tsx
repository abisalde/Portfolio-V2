export function NotFoundPage() {
  return (
    <section className='flex min-h-[70dvh] flex-col justify-center px-4 py-16 md:px-10'>
      <title>404 | Isaiah Abiodun</title>
      <meta name='robots' content='noindex' />
      <p
        aria-hidden='true'
        className='text-[clamp(8rem,30vw,24rem)] leading-[0.8] font-black condensed'
      >
        404<span className='text-teal'>.</span>
      </p>
      <h1 className='mt-6 font-serif text-4xl italic md:text-6xl'>
        Oh dear. Are you lost?
      </h1>
      <a
        href='/'
        className='mt-8 inline-flex min-h-11 items-center font-semibold underline underline-offset-4'
      >
        Back to the home page
      </a>
    </section>
  );
}
