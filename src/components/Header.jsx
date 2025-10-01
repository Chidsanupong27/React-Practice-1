import "./Header.css";
import { IoSunnySharp } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
const Header = ({title,theme,setTheme}) => {

  function toggleTheme() {
    if(theme==="light") {
      setTheme("dark")
    }else{
      setTheme("light")
    }
  }
  
  return (
    <nav>
      <h1>{title}</h1>
      <span onClick={toggleTheme}>
          {theme === "light" ? <IoSunnySharp size={35}/> : <IoSunnyOutline size={35}/>}
      </span>
      
    </nav>
  );
}
export default Header;
