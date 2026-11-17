import { useRef, useState } from 'react';

import { STUDY_EASING, studies, studyNames, type StudyName } from './studies';

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function MotionStudy() {
  const objectRef = useRef<HTMLButtonElement>(null);
  const animationRef = useRef<Animation | null>(null);
  const [selected, setSelected] = useState<StudyName>('spring');
  const [note, setNote] = useState('Good interfaces have a little give.');

  const play = (name: StudyName) => {
    const study = studies[name];
    animationRef.current?.cancel();

    if (prefersReducedMotion()) {
      setNote(`${study.label}: reduced motion is on, so it stays still.`);
      return;
    }
    setNote(study.note);
    animationRef.current =
      objectRef.current?.animate(study.frames, {
        duration: study.duration,
        easing: STUDY_EASING,
      }) ?? null;
  };

  const choose = (name: StudyName) => {
    setSelected(name);
    play(name);
  };

  return (
    <section
      aria-labelledby='study-title'
      className='rounded-sm border border-on-ink-line bg-ink-raised p-5'
    >
      <div className='flex items-center justify-between font-mono text-xs text-on-ink-muted'>
        <h2 id='study-title'>A little interaction study</h2>
        <span aria-hidden='true' className='text-xl'>
          ↙
        </span>
      </div>

      <div className='relative mt-4 grid h-64 place-items-center'>
        <span
          aria-hidden='true'
          className='absolute size-44 rounded-full border border-dashed border-on-ink-line'
        />
        <button
          ref={objectRef}
          type='button'
          onClick={() => play(selected)}
          aria-label='Replay the animation'
          className='relative grid size-20 place-items-center rounded-full bg-mint text-3xl text-ink'
        >
          <span aria-hidden='true'>↗</span>
        </button>
        <p
          aria-live='polite'
          className='absolute bottom-0 text-center text-xs text-on-ink-muted'
        >
          {note}
        </p>
      </div>

      <div className='mt-5 flex items-center justify-between gap-3 border-t border-on-ink-line pt-4'>
        <div role='group' aria-label='Animation style' className='flex gap-1'>
          {studyNames.map((name) => (
            <button
              key={name}
              type='button'
              aria-pressed={selected === name}
              onClick={() => choose(name)}
              className='min-h-11 rounded-sm px-3 text-sm text-on-ink-muted hover:text-paper aria-pressed:bg-paper aria-pressed:text-ink'
            >
              {studies[name].label}
            </button>
          ))}
        </div>
        <button
          type='button'
          onClick={() => play(selected)}
          aria-label='Replay animation'
          className='grid size-11 place-items-center rounded-sm text-2xl text-on-ink-muted hover:text-paper'
        >
          <span aria-hidden='true'>↻</span>
        </button>
      </div>
      <p className='mt-3 text-xs text-on-ink-muted'>
        Try a different feel. It&rsquo;s all in the details.
      </p>
    </section>
  );
}
