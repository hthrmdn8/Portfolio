import { useContext, useEffect, useState } from "react";

const navItems = [
  {
    title: 'Home',
    path: '/home'
  },
  {
    title: 'About',
    path: '/about'
  }
  // Add the rest of the nav
]

function Header() {


  const navItemsList = navItems.map(item => <li key={item.title}><a href={item.path}>{item.title}</a></li>)

  return (
    <header >
      <nav>
        <ul>
          {/* <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li> */}
          {navItemsList}
        </ul>
      </nav>
    </header>
  );
}

export default Header;