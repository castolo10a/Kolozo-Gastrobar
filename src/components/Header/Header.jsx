import NavBar from "./NavBar/NavBar";
import Logo from "./Logo/Logo";


export default function Header () {
    
    return (
      <header className='flex items-center justify-between fixed top-0 left-0 right-0 z-50 py-5 px-7 max-h-[4.5rem] shadow-sm px-4 py-2 bg-teal-800'>
        <Logo />
        <NavBar />
      </header>
    )
  }