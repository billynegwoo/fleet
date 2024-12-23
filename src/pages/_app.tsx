import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { EmployeeProvider } from "~/contexts/EmployeeContext";
import { DeviceProvider } from "~/contexts/DeviceContext";
import { ThemeProvider } from "~/contexts/ThemeContext";
import { type AppProps } from "next/app";
import { GeistSans } from "geist/font/sans";
import { ToasterWithTheme } from "~/components/ui/toaster";
import "~/styles/globals.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      refetchOnReconnect: true,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${GeistSans.variable} font-sans`}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <EmployeeProvider>
            <DeviceProvider>
              <Component {...pageProps} />
              <ToasterWithTheme />
            </DeviceProvider>
          </EmployeeProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  );
}
