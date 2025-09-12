import "@/styles/globals.css";
import { Geologica } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { CLARITY_SCRIPT } from "@/core/misc";

const geologica = Geologica({
  weight: ["300", "500", "700"],
  display: "swap",
  style: ["normal"],
  subsets: ["latin-ext"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geologica.className}>
      <body>
        <Header />

        {children}

        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: CLARITY_SCRIPT,
          }}
        />
        <SpeedInsights />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
