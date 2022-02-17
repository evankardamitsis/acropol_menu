import React from 'react'

const Header = () => {
  return (
    <div>
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