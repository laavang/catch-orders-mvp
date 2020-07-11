import React from 'react'
const Sidebar = () => {

    return (
<div class="sidebar sidebar-md-show">
  <nav class="sidebar-nav">
    <ul class="nav">
      <li class="nav-title">Orders</li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="nav-icon cui-speedometer"></i> Open Orders
        </a>
      </li>
      <li class="nav-item nav-dropdown">
        <a class="nav-link nav-dropdown-toggle" href="#">
          <i class="nav-icon cui-puzzle"></i> Closed Orders
        </a>
      </li>
    </ul>
  </nav>
  <button class="sidebar-minimizer brand-minimizer" type="button"></button>
</div>
    )
}

export default Sidebar