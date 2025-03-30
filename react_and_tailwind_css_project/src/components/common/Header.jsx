import { useRef, useState ,useEffect } from "react";
import { menulists } from "../../assets/Data"
import { CustomNavLinkList } from "./Design"
import { IoSearchOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { Container } from "./Design";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
console.log(menulists);
export const Header = () => {
  
  
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation();
  const menuRef = useRef(null);

  const toggleMenu = ()=>{
    setIsOpen(!isOpen);
  }

  const closeMenuOutSide = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  
  const hadleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenuOutSide);
    window.addEventListener("scroll", hadleScroll);
  
    return () => {
      document.removeEventListener("mousedown", closeMenuOutSide);
      window.removeEventListener("scroll", hadleScroll);
    };
  }, []);
  
  const isHomePage = location.pathname === "/";

  return (
    // className={isHomePage ? `header py-1 bg-primary ${isScrolled ? "scrolled" : ""}` : `header bg-white shadow-s1 ${isScrolled ? "scrolled" : ""}`}>
        
    <>
    <header className={isHomePage ? `header py-1 bg-primary ${ isScrolled ? "scrolled" : ""}` 
    :`header bg-white shadow-s1 ${ isScrolled ? "scrolled" :""} `} >
        <Container>
          <nav className="p-4 flex justify-between items-center relative">
            <div className="flex items-center gap-14">

              {/* Add Image */}
              <div>
                { isHomePage &&  !isScrolled ? <img src="../images/common/BidOut_Logo.jpg" alt="logo" className="h-11" />:<img src="../images/common/BidOut_Logo.jpg" alt="logo" className="h-11" />
                }
              </div>

              <div className="hidden lg:flex items-center justify-between gap-8">
                {menulists.map((list, index) => (
                  <li key={index} className="capitalize list-none">
                    <CustomNavLinkList href={list.path} isActive={location.pathname===list.path} className={`${isScrolled || !isHomePage ? "text-black" :"text-white"}`}>{list.link} </CustomNavLinkList>
                  </li>
                ))}
              </div>
              
            </div>

            <div className="flex items-center gap-8 icons">
              <div className="hidden lg:flex lg:items-center lg:gap-8 text-white">
              <IoSearchOutline size={23} className={`${isScrolled || !isHomePage ? "text-black" :"text-white"}`}/>              
              <CustomNavLinkList href="/seller/login" className={`${isScrolled || !isHomePage ? "text-black" :"text-white"}`}> Become a seller </CustomNavLinkList>
              <CustomNavLinkList href="/login" className={`${isScrolled || !isHomePage ? "text-black" :"text-white"}`}> sign in </CustomNavLinkList>
              <CustomNavLinkList href="/register" className={`${isScrolled || !isHomePage ? "bg-primary text-white" : "bg-white text-primary"} px-8 py-2 rounded-full shadow-md`}> Join </CustomNavLinkList>
              {/* <CustomNavLinkList href="/register" className={`${isScrolled || !isHomePage ? "text-black" :"text-white"}`}> join </CustomNavLinkList> */}
              </div>

              <div className={`icon flex item-center justify-center gap-6 ${isScrolled || !isHomePage ? "text-primary":"text-white"}`}>
                <button onClick={toggleMenu} className="lg:hidden w-10 h-10 flex justify-center items-center bg-black text-white focus:outline-none">
                    {isOpen ? <AiOutlineClose size={24}/>:<AiOutlineMenu size={24}/>}
                </button>
              </div>
            </div>

          
            <div ref={menuRef} className={`lg:flex lg:items-center lg:w-auto w-full p-5 absolute right-0 top-full menu-container ${isOpen ? "open" : "closed"}`}>
                {menulists.map((list, index) => (
                  <li key={index} className="uppercase list-none">
                    <CustomNavLinkList href={list.path} className="text-white">{list.link}
                     </CustomNavLinkList>
                  </li>
                ))}
            </div>

          </nav>
          </Container>

      </header>
    </>
  )
}
