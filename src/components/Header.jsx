import "./Header.css";
function Header(props) {

  const {title} = props
  return (
    <nav>
      <h1>{title}</h1>
      <button>Light/Dark</button> 
    </nav>
  );
}
export default Header;
