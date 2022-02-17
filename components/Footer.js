import React from 'react'
import Image from 'next/image'
import logo from '../images/logo.jpeg'
import Link from 'next/link'


const Footer = () => {
  return (
    <div className='footer'>
       <Image
      src={logo}
      alt="Acropol Hotel Logo"
      width="80px"
      height="80px"
      layout="fixed"
      className='logo'
    /> 
    <p> 71 Pentelis Avenue, 152 33, Chalandri, Athens, Greece | +30 210 68 26 650 | <Link href="mailto:info@acropol.gr">info@acropol.gr </Link> | <Link href="http://www.acropol.gr/">www.acropol.gr</Link> </p>
    <style jsx>{`
          .footer {
            color: #202021;
            background: white;
            padding: 10px;
            max-width: 100%;
            overflow: hidden;
            display: flex;
            justify-content:center; 
            align-items: end;
            grid-column-start: auto;
            font-family: "Proxima Nova", sans-serif;
          }
          @media (max-width: 390px){
           .footer > p{
                font-size: 0.7rem;
                align-items:center;
              }
          }
          .logo{
              width: 120px;
          }
        `}</style>
    </div>
  )
}

export default Footer