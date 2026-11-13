import { createContext, useContext } from 'react';

export const ActiveSectionContext = createContext({ active: null, setActive: () => {} });

/** Devuelve `{ active, setActive }` con el id de la sección visible. */
export const useActiveSection = () => useContext(ActiveSectionContext);
