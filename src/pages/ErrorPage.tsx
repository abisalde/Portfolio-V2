export function ErrorPage() {
  return (
    <section className='flex min-h-[70dvh] flex-col justify-center px-4 py-16 md:px-10'>
      <title>Something went wrong | Isaiah Abiodun</title>
      <meta name='robots' content='noindex' />
      <h1 className='font-serif text-4xl italic md:text-6xl'>
        Something went wrong.
      </h1>
      <p className='mt-4 max-w-md text-muted'>
        This page failed to load. Reloading usually fixes it.
      </p>
      <div className='mt-8 flex flex-wrap gap-6'>
        <button
          type='button'
          onClick={() => window.location.reload()}
          className='inline-flex min-h-11 items-center font-semibold underline underline-offset-4'
        >
          Reload the page
        </button>
        <a
          href='/'
          className='inline-flex min-h-11 items-center font-semibold underline underline-offset-4'
        >
          Back to the home page
        </a>
      </div>
    </section>
  );
}
