export const STUDY_EASING = 'cubic-bezier(.22,.61,.36,1)';

export const studies = {
  spring: {
    label: 'Spring',
    duration: 700,
    note: 'A little energy. A soft landing.',
    frames: [
      { transform: 'translateY(0) rotate(0deg)' },
      { transform: 'translateY(-44px) rotate(-14deg)', offset: 0.3 },
      { transform: 'translateY(12px) rotate(5deg)', offset: 0.58 },
      { transform: 'translateY(-6px) rotate(-2deg)', offset: 0.8 },
      { transform: 'translateY(0) rotate(0deg)' },
    ],
  },
  glide: {
    label: 'Glide',
    duration: 900,
    note: 'Steady, smooth, and a little more deliberate.',
    frames: [
      { transform: 'translateX(0) rotate(0deg)' },
      { transform: 'translateX(42px) rotate(12deg)', offset: 0.5 },
      { transform: 'translateX(0) rotate(0deg)' },
    ],
  },
  snap: {
    label: 'Snap',
    duration: 230,
    note: 'A clear response. Right when you need it.',
    frames: [
      { transform: 'rotate(0deg) scale(1)' },
      { transform: 'rotate(90deg) scale(.88)', offset: 0.45 },
      { transform: 'rotate(90deg) scale(1)' },
    ],
  },
};

export type StudyName = keyof typeof studies;

export const studyNames = Object.keys(studies) as StudyName[];
