import { useState, type ReactNode } from 'react';

import { InspectContext } from './inspect-context';

export function InspectProvider({ children }: { children: ReactNode }) {
  const [inspecting, setInspecting] = useState(false);
  const toggleInspecting = () => setInspecting((current) => !current);

  return (
    <InspectContext value={{ inspecting, toggleInspecting }}>
      {children}
    </InspectContext>
  );
}
