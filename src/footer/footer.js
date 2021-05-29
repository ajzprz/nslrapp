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
            <li> <a href="#">Home</a></li>
            <li> <a href="#">Background</a></li>
            <li> <a href="#">Our Services</a></li>
            <li> <a href="#">Contribute</a></li>
            </ul>
        </div>
        <div className="col-md-3 col-sm-6 p-3">
        <h4 >Social</h4>
            <ul>
            <li> <a href="#">Facebook</a></li>
            <li> <a href="#">LinkedIn</a></li>           
            <li> <a href="#">Twitter</a></li>
            <li> <a href="#">Youtube</a></li>    
                    </ul>
        </div>
        <div className="col-md-3 col-sm-6 p-3">
            <h4 >Contact Us</h4>
            <ul>
                <li>lorem</li>
                <li>lorem</li>
                <li>loerem</li>
                <li>lorem</li>
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
