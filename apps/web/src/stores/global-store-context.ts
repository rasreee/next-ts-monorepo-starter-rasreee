import { createContext, useContext } from 'react';

import { GlobalStore } from './global-store';

export const GlobalStoreContext = createContext<GlobalStore>(new GlobalStore());

export const useGlobalStore = (): GlobalStore => useContext(GlobalStoreContext);
