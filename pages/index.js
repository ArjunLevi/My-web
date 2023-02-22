import Head from "next/head";

import Main from '../components/Main';

import About  from "../components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/contact";


export default function Home() {
  
  
  
  return (

      <div>  
        <Head>      
        <title> Arjun | Blockchain Developer</title>
        <meta name="description" content="I’m a Blockchain web developer " />
        <link rel="icon" href="/assets/navLogo.png" />

        </Head>
        <Main/>
        <About/>
        <Skills/>
        <Contact/>
        
    
        </div>

    
  )
}
