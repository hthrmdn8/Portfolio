// array navItems is declared with three objects as its 
// elements. Each object represents a navigation item with a title and a path property

const navItems = [
  {
    title: 'About',
    path: '/about'
  },
  {
    title: 'Projects',
    path: '#projects'
  },
  {
    title: 'Contact',
    path: '#contact'
  }
]

function Header() {

  const navItemsList = navItems.map(item => <li key={item.title}><a href={item.path}>{item.title}</a></li>)
    
  // Render the following JSX code:
  return (
    <header>
      <nav>
        <ul>
          {navItemsList}
        </ul>
      </nav>
    </header>
  );
}
// Export the Header component as the default export
export default Header;