import { Link } from "react-router-dom"
import "./header.css"

import { IoCartOutline } from "react-icons/io5";

import { useMyContext } from "../ContextComp";

export default function Header() {

  const { cartItems } = useMyContext();

  return (
    <>

      <nav className="header-nav">
        <Link to='/'>
          <ul>
            <li><img src="/virtual-store.jpeg" alt="" className="logo-image" /></li>
          </ul>
        </Link>

        <ul>
          <Link to="/">
            <li >Home</li>
          </Link>

          <li role="list" dir="rtl">
            <a role="lisbox">Categories</a>
            <ul role="listbox" >
              <Link to='/products/Chemise'>
                <li>Chemises</li>
              </Link>

              <Link to='/products/Pantalon'>
                <li>Pantalon</li>
              </Link>

              <Link to='/products/Sport'>
                <li>Sport</li>
              </Link>
            </ul>
          </li>

          <Link to="/addProduct">
            <li> Add Product </li>
          </Link>

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
