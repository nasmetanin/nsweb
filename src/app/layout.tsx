import '@/styles/globals.css'
import { Geologica } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const geologica = Geologica({
  weight: ['300', '500', '700'],
  display: 'swap',
  style: ['normal'],
  subsets: ['latin-ext']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (

    <html lang="en" className={geologica.className}>
      <body>
        <Header />

        {children}

        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `(function(c,l,a,r,i,t,y){
              c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "l164l9m7bb");`}}
        />
        <SpeedInsights />
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
