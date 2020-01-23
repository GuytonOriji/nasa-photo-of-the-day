 import React from 'react';


 function Footer(){

    

    return (
        <div className='foot'>
            <address>
                <p>&copy;SomeBrand</p>
                <p>State Here</p>
                <p>City Here</p>
                <p>Zip Here</p>
            </address>
            <div>
                <input type="text" name="subscribe" placeholder="Email Here..." />
                <button>subscribe</button>
            </div>
        </div>
    )
 }



 export default Footer;