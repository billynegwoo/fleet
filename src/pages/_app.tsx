import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { EmployeeProvider } from "~/contexts/EmployeeContext";
import { DeviceProvider } from "~/contexts/DeviceContext";
import { type AppProps } from "next/app";
import { GeistSans } from "geist/font/sans";
import "~/styles/globals.css";
import { Toaster } from 'sonner'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-right" richColors />
      <EmployeeProvider>
        <DeviceProvider>
          <div className={GeistSans.className}>
            <Component {...pageProps} />
          </div>
        </DeviceProvider>
      </EmployeeProvider>
      <ReactQueryDevtools initialIsOpen={false} />{" "}
    </QueryClientProvider>
  );
}
