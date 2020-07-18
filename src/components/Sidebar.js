import React from 'react'
import { Link } from 'react-router-dom'


const Sidebar = (props) => {

    return (
<div class="sidebar sidebar-md-show">
  <nav class="sidebar-nav">
    <ul class="nav">
      <li class="nav-title">Orders</li>
      <li class="nav-item">
        <a id="open-orders" class="nav-link" onClick={() => 
          props.filterLicenses("open")}>
          Open Orders
        </a>
      </li>
      <li class="nav-item nav-dropdown">
        <a id="closed-orders" class="nav-link" onClick={() =>
          props.filterLicenses("closed")
          }>
            Closed Orders
        </a>
      </li>
    </ul>
  </nav>
  <button class="sidebar-minimizer brand-minimizer" type="button"></button>
</div>
    )
}

export default Sidebar