import '@/styles/globals.css'
import { Geologica } from 'next/font/google'
import Header from '@/components/header'

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
      </body>
    </html>
  )
}
