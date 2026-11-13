import { useMemo, useState } from 'react';
import { ActiveSectionContext } from './activeSection';

export default function ActiveSectionProvider({ children }) {
  const [active, setActive] = useState(null);
  const value = useMemo(() => ({ active, setActive }), [active]);

  return <ActiveSectionContext.Provider value={value}>{children}</ActiveSectionContext.Provider>;
}
