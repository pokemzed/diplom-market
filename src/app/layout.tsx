import React from "react";
import Providers from "@/app/providers";
import type {Metadata} from "next";
import {APP_TITLE} from "@/constants/general";

export const metadata: Metadata = {
    title: APP_TITLE,
    description:
        'Это Хлеб – место, где рождаются и заказываются торты,' +
        ' пироги, хлеб и прочие вкусности. Это сочетание всего' +
        ' самого вкусного, познавательного и развлекательного.',
    icons: {
        icon: '/favicon.ico',
    },
}

interface IRootLayout {
  children: React.ReactNode,
}

const RootLayout = ({children}:IRootLayout) => {
  return (
      <html lang="ru">
          <body>
              <Providers>
                  {children}
              </Providers>

              {/*yandex metrika*/}
              <script
                  dangerouslySetInnerHTML={{
                      __html: `
                        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                        m[i].l=1*new Date();
                        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                        ym(94748705, "init", {
                            clickmap:true,
                            trackLinks:true,
                            accurateTrackBounce:true
                        });
                      `,
                  }}
              />

              {/*yandex metrika*/}
              <noscript>
                  <div>
                      <img
                          src="https://mc.yandex.ru/watch/94748705"
                          style={{ position: "absolute", left: -9999 }}
                          alt=""
                      />
                  </div>
              </noscript>
          </body>
      </html>
  )
}

export default RootLayout;
