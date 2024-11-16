import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import ResponsiveAppBar from "./Componentes/navbar";
import dclist from './images/dclist.png';
import UpperComp from "./Componentes/UpperComp";
import CLComp from "./Componentes/CLComp";

//Fonts que deje aqui porque no se si borrarlos o no (Ya venian con el programa)
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>        
      <ResponsiveAppBar/>
      <div style={{ paddingTop: '64px' }}></div>  
      <UpperComp/>
      <CLComp/>
    </>
  );
}
