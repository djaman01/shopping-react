import "./header.css"

export default function Header() {
  return (
    <>

      <nav className="header-nav">
        <ul>
          <li><img src="/virtual-store.jpeg" alt="" className="logo-image" /></li>
        </ul>

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
