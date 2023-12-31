import { Link } from "react-router-dom";
import img from "../../../assets/logo.png";
import {  FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
    <div>
        <img src={img} alt="" className="w-24" />
        <p>Copyright © 2023 - All right reserved by Kamrul Hasan Jaman</p>
    </div> 
    <div>
      <span className="footer-title text-xl text-black">Services</span> 
        <Link to="/" className="link link-hover" >Home</Link>
        <Link to="/instructors" className="link link-hover">Instructors</Link>
        <Link to="/classes" className="link link-hover">Classes</Link>     
    </div> 
    <div>
      <span className="footer-title text-xl text-black">Contact</span> 
      <p><span className="underline decoration-0 decoration-wavy">Email:</span> <span className="link link-hover">kamrulhasanjaman79@gmail.com</span></p>
      <p><span className="underline decoration-0 decoration-wavy">Address:</span> Feni, Bangaldesh</p>
    </div> 
    <div>
      <span className="footer-title text-xl text-black">Social</span> 
      <div className="text-2xl flex gap-7">
      <FaTwitter ></FaTwitter>
      <FaFacebookF></FaFacebookF>
      <FaInstagram></FaInstagram>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
