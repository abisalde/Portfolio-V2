export function Footer() {
  return (
    <footer className='flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-on-ink-line bg-ink px-4 py-6 font-mono text-xs text-on-ink-muted md:px-10'>
      <p>© {new Date().getFullYear()} Isaiah Abiodun</p>
      <p>Set in Archivo &amp; Instrument Serif. Built with intention.</p>
      <a
        href='#main'
        className='inline-flex min-h-11 items-center hover:text-paper'
      >
        Back to top ↑
      </a>
    </footer>
  );
}
