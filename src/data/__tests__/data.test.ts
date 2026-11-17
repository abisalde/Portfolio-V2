import { describe, expect, test } from 'vitest';

import { styleFacts, yearsOfExperience } from '../profile';
import { featuredProjects, indexEntries } from '../projects';

const allLinks = [...featuredProjects, ...indexEntries].flatMap(
  (project) => project.links,
);
const PRIVATE_REPOSITORIES = ['github.com/abisalde/garama'];

describe('GIVEN the project data', () => {
  describe('WHEN listing every project link', () => {
    test('THEN it is expected that every link uses https', () => {
      for (const link of allLinks) expect(link.href).toMatch(/^https:\/\//);
    });

    test('THEN it is expected that no link points at a private repository', () => {
      for (const link of allLinks) {
        for (const repository of PRIVATE_REPOSITORIES)
          expect(link.href).not.toContain(repository);
      }
    });
  });
});

describe('GIVEN yearsOfExperience', () => {
  describe('WHEN the year is 2026', () => {
    test('THEN it is expected to count from 2018', () => {
      expect(yearsOfExperience(new Date(2026, 10, 17))).toBe(8);
    });
  });

  describe('WHEN the styles panel facts are built', () => {
    test('THEN it is expected to use the same count', () => {
      const facts = Object.fromEntries(styleFacts(new Date(2030, 0, 1)));

      expect(facts.experience).toBe('12+ years');
    });
  });
});
