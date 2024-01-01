import "./header.css"
import { FaFacebook } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <div className="top-header">

        <div className="number-mail">
          <p className="number-header">tel: 06-xx-xx-xx-xx</p>
          <p>contact@domain.com</p>
        </div>

        <div className="space-top-header">
          <h1></h1>
        </div>

        <div className="menu-top-header">
          <p className="my-account-header">My Account</p>
          <p className="checkout-header">Checkout</p>
          <p>Cart</p>
        </div>

        <div className="all-top-logos">
          <p className="face-logo-p"><FaFacebook className="face-logo" /></p>
          <p className="twitter-logo-p"><FaTwitter className="twitter-logo" /></p>
          <p><FaInstagram className="insta-logo" /></p>
        </div>

      </div>

      <nav className="header-nav">
        <ul>
          <li><img src="/virtual-store.jpeg" alt="" className="logo-image" /></li>
        </ul>
        <ul>
          <li><input type="search" id="search-header" name="search" placeholder="Search" /></li>

        </ul>
        <ul>
          <li >Home</li>
          <li role="list" dir="rtl">
            <a href="#" aria-haspopup="listbox">Categories</a>
            <ul className="header-dropdown" role="listbox">
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
            </ul>
          </li>
          <li>about</li>
        </ul>
      </nav>



    </>
  )
}
