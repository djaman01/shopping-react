import { Link } from "react-router-dom"
import "./header.css"

import { IoCartOutline } from "react-icons/io5";

export default function Header({ cartItems }) {

  //To scroll to the bottom of the page
  const scrollToBottom = () => {
    console.log("Scrolling to bottom!");
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    })
  }


  return (
    <>

      <nav className="header-nav">
        <Link to='/addAllProduct'>
          <ul>
            <li><img src="/virtual-store.jpeg" alt="" className="logo-image" /></li>
          </ul>
        </Link>

        <ul>
          <li >Home</li>
          <li role="list" dir="rtl">
            <a href="#" aria-haspopup="listbox">Categories</a>
            <ul role="listbox" >
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
            </ul>
          </li>
          <li>about</li>

          <div className="cart-header">
            <IoCartOutline onClick={scrollToBottom} size={25} />
            <div>
              <span>{cartItems.length === 0 ? "" : cartItems.length}</span>
            </div>
          </div>
        </ul>


      </nav>



    </>
  )
}
