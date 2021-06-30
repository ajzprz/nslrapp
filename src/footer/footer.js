import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
       <div>
    <div className="main-footer">
        <div className="container">
        <div className="row justify-content-md-center text-center ">
        <div className="col-md-3 col-sm-6 p-3">
        <h4>Quick Links</h4>
            <ul>
            <li> <a href="/home">Home</a></li>
            <li> <a href="/background">Background</a></li>
            <li> <a href="/services">Our Services</a></li>
            <li> <a href="/contribute">Contribute</a></li>
            </ul>
        </div>
        <div className="col-md-3 col-sm-6 p-3">
        <h4 >Social</h4>
            <ul>
            <li> <a href="www.facebook.com">Facebook</a></li>
            <li> <a href="linkedin.com">LinkedIn</a></li>           
            <li> <a href="twitter.com">Twitter</a></li>
            <li> <a href="youtube.com">Youtube</a></li>    
                    </ul>
        </div>
        <div className="col-md-3 col-sm-6 p-3">
            <h4 >Contact Us</h4>
            <ul>
                <li>9841264170</li>
                <li>01-6634766</li>
                <li>Thimi, Bhaktapur </li>
                <li>Nepal</li>
            </ul>
            </div>
        </div>

        <div className="footer-bottom text-sm">
            <p className="text-center">
                &copy;{new Date().getFullYear()} NSLRS - All Rights Reserved
            </p>
        </div>
     </div>
     </div>
    </div>
        
    )
}

export default Footer
