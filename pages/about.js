import React from 'react';
import Image from "next/image";

const About = ()=>{
    return(
        <div className="about">

            <img src="/images/ade.jpeg"/>
           <div className="about__details">
               <p>Hello, my name is Adeola Adekoyejo...</p>
               <p>This is a movie app created with nextjs, react and axios</p>
           </div>
        </div>
    )
}
export default About;