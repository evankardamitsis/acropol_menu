import React from 'react'
import logo from '../images/logo.jpeg'
import Image from 'next/image'


const Header = () => {
  return (
    <div className="header">
            {/* <Image
                src={logo}
                alt="Acropol Hotel Logo"
                width="80px"
                height="80px"
                layout='intrinsic'
                className='logo'
            />  */}
        <h1>
            Menu
            <style jsx>{`
                h1 {
                    margin: 0;
                    grid-column-start: 2;
                    /* padding: 20px; */
                    font-family: "Proxima Nova", sans-serif;
                    font-weight: 300;
                    font-size: 5rem;
                    text-align:center;
                    text-transform: uppercase;
                    margin-top:2rem;
                }
                @media(max-width: 414px){
                    h1{
                        text-align:center;
                    }
                }
     `}</style>  
        </h1>
        <h2>Room Service
        <style jsx>{`
                h2 {
                    margin: 0;
                    grid-column-start: 2;
                    /* padding: 20px; */
                    font-family: "Proxima Nova", sans-serif;
                    font-weight: 300;
                    font-size: 2rem;
                    text-align:center;
                    margin-bottom:2rem;
                    letter-spacing: 0.15rem;
                }
                @media(max-width: 414px){
                    h2{
                        text-align:center;
                    }
                }
     `}</style>  
        </h2>
    </div>
  )
}

export default Header