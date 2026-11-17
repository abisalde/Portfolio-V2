import { styleFacts } from '@/data/profile';

export function StylesPanel() {
  return (
    <figure className='overflow-hidden rounded-sm border border-line bg-surface font-mono text-sm'>
      <div className='flex border-b border-line text-xs'>
        <span className='border-b-2 border-inspect px-4 py-2.5'>Styles</span>
        <span className='px-4 py-2.5 text-muted'>Computed</span>
      </div>
      <pre className='p-5 leading-loose whitespace-pre-wrap'>
        <code>
          <span className='text-inspect'>.isaiah</span> {'{'}
          {styleFacts().map(([property, value]) => (
            <span key={property} className='block pl-4'>
              <span className='text-css-property'>{property}</span>: {value};
            </span>
          ))}
          {'}'}
        </code>
      </pre>
      <figcaption className='sr-only'>
        Facts about Isaiah, written as CSS
      </figcaption>
    </figure>
  );
}
