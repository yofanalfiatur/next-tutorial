import "@/styles/globals.css";
import AppShell from "@/components/layouts/AppShell";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppShell>
      <Component {...pageProps} />;
    </AppShell>
  );
}
