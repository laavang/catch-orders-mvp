import React from 'react'


const Sidebar = (props) => {

  let focus = "red !important";

    return (
<div className="sidebar sidebar-md-show">
  <nav className="sidebar-nav">
    <ul className="nav">
      <li className="nav-title">Orders</li>
      <li className="nav-item" style={{backgroundColor:{focus}}}>
        <a id="open-orders" className="nav-link" onClick={() => 
          props.filterLicenses("open")}>
          Open Orders
        </a>
      </li>
      <li className="nav-item nav-dropdown" style={{backgroundColor:{focus}}}>
        <a id="closed-orders" className="nav-link" onClick={() =>
          props.filterLicenses("closed")
          }>
            Closed Orders
        </a>
      </li>
    </ul>
  </nav>
  <button className="sidebar-minimizer brand-minimizer" type="button"></button>
</div>
    )
}

export default Sidebar