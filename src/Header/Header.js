import { Link } from "react-router-dom"
import "./header.css"

export default function Header() {
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
        </ul>
      </nav>



    </>
  )
}
