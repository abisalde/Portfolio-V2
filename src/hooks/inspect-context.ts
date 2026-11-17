import { createContext, useContext } from 'react';

export const InspectContext = createContext({
  inspecting: false,
  toggleInspecting: () => {},
});

export const useInspect = () => useContext(InspectContext);
