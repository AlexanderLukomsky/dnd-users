import { store } from './store';

export type AppStoreType = ReturnType<typeof store.getState>;
