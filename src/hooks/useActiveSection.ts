import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

export function useActiveSection(sectionIds: readonly string[]) {
  const { pathname } = useLocation();
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );

    for (const id of sectionIds) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, [sectionIds, pathname]);

  return activeId;
}
