import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Providers } from "./providers";
import { AuthProvider } from "./admin/context/AuthContext";
import "./globals.css";
import { QueryProvider } from "./utils/QueryProvider";

export const metadata: Metadata = {
  title: "eTus - Media Solutions",
  description:
    "Professional media equipment for filmmakers and content creators",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="/assets/vendors/bootstrap/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendors/nice-select/css/nice-select.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendors/fontawesome/css/all.min.css"
        />
        <link rel="stylesheet" href="/assets/vendors/animate/animate.min.css" />
        <link
          rel="stylesheet"
          href="/assets/vendors/meanmenu/css/meanmenu.css"
        />
        <link rel="stylesheet" href="/assets/vendors/jarallax/jarallax.css" />
        <link
          rel="stylesheet"
          href="/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendors/swiftcart-icons/style.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendors/owl-carousel/css/owl.carousel.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendors/owl-carousel/css/owl.theme.default.min.css"
        />
        <link rel="stylesheet" href="/assets/vendors/jquery-ui/jquery-ui.css" />
        <link
          rel="stylesheet"
          href="/assets/vendors/glightbox/css/glightbox.min.css"
        />
        <link rel="stylesheet" href="/assets/vendors/spacing/spacing.css" />
        <link rel="stylesheet" href="/assets/css/swiftcart.css" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          <AuthProvider>
            <QueryProvider>{children}</QueryProvider>
          </AuthProvider>
        </Providers>
        <Script
          src="/assets/vendors/jquery/jquery-3.7.0.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/assets/vendors/bootstrap/js/bootstrap.bundle.min.js" />
        <Script src="/assets/vendors/nice-select/js/nice-select.js" />
        <Script src="/assets/vendors/wow/wow.js" />
        <Script src="/assets/vendors/meanmenu/js/meanmenu.js" />
        <Script src="/assets/vendors/jarallax/jarallax.min.js" />
        <Script src="/assets/vendors/jquery-ui/jquery-ui.js" />
        <Script src="/assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js" />
        <Script src="/assets/vendors/jquery-appear/jquery.appear.min.js" />
        <Script src="/assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js" />
        <Script src="/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js" />
        <Script src="/assets/vendors/jquery-validate/jquery.validate.min.js" />
        <Script src="/assets/vendors/nouislider/nouislider.min.js" />
        <Script src="/assets/vendors/tiny-slider/tiny-slider.js" />
        <Script src="/assets/vendors/wnumb/wNumb.min.js" />
        <Script src="/assets/vendors/owl-carousel/js/owl.carousel.min.js" />
        <Script src="/assets/vendors/swiper/js/swiper.min.js" />
        <Script src="/assets/vendors/imagesloaded/imagesloaded.min.js" />
        <Script src="/assets/vendors/isotope/isotope.js" />
        <Script src="/assets/vendors/countdown/countdown.min.js" />
        <Script src="/assets/vendors/jquery-circleType/jquery.circleType.js" />
        <Script src="/assets/vendors/jquery-lettering/jquery.lettering.min.js" />
        <Script src="/assets/vendors/ion.rangeSlider/ion.rangeSlider.min.js" />
        <Script src="/assets/vendors/jquery-ui/jquery-ui.js" />
        <Script src="/assets/vendors/glightbox/js/glightbox.min.js" />
        <Script src="https://unpkg.com/splitting/dist/splitting.min.js" />
        <Script src="https://unpkg.com/scroll-out/dist/scroll-out.min.js" />

        <Script src="/assets/js/swiftcart.js" />
      </body>
    </html>
  );
}
