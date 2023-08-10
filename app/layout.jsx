import Head from 'next/head';
import style from '../styles/globals.css';
import { META_THEME_COLOR } from '../constents/constents';
import {Kumbh_Sans} from 'next/font/google'

const kumbh_sans = Kumbh_Sans({
  weight: ["300", "400", "700"],
  variable: "--kumbh-sans",
  subsets : ["latin"]
})


export const metadata = {
  title: 'e-commerce',
  themeColor: META_THEME_COLOR
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={kumbh_sans.className}>
      <body>{children}</body>
    </html>
  );
}
