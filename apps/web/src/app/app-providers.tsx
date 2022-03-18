import { fetcher } from '@ijancleaning/utils';
import { SWRConfig } from 'swr';

import { AuthProvider } from '@/auth/auth-provider';
import { GlobalStoreProvider } from '@/stores/global-store-provider';

export const AppProviders: React.FC = ({ children }) => {
  return (
    <SWRConfig value={{ fetcher }}>
      <GlobalStoreProvider>
        <AuthProvider>{children}</AuthProvider>
      </GlobalStoreProvider>
    </SWRConfig>
  );
};
