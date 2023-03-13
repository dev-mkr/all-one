import Link from "next/link";
import Logo from "public/logo.svg";

const Header = () => {
  return (
    <header className="container sticky top-0 flex justify-between pt-2">
      <Link href="/" className="flex items-center">
        <Logo alt="logo" className="w-8 sm:w-12" />
        <span className="font-bold">All-One</span>
      </Link>
      <ul className="flex items-center gap-x-5">
        <li>loved</li>
        <li>cart</li>
        <li>switch</li>
      </ul>
    </header>
  );
};

export default Header;
