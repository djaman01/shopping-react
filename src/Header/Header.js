import { Link } from "react-router-dom"
import "./header.css"

import { IoCartOutline } from "react-icons/io5";

import { useMyContext } from "../ContextComp";

export default function Header() {

  const { cartItems } = useMyContext();

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
          <Link to="/dashboard">
            <li>Dashboard</li>
          </Link>


          <Link to='/shopCart'>
            <div className="cart-header">
              <IoCartOutline size={25} />
              <div>
                <span className={cartItems.length === 0 ? '' : 'item-count'}>{cartItems.length === 0 ? "" : cartItems.length}</span>
              </div>
            </div>
          </Link>
        </ul>

      </nav>

    </>
  )
}
