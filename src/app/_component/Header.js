import Logo from "./Logo";
import Navigation from "./Navigation";
export default function Header() {
    
  return (
    <header className="bg-black fixed top-0 left-0 w-full  text-white p-4 z-50">
      <div className=" container mx-auto flex justify-between ">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}