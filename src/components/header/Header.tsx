import Link from "next/link";
import Logo from "public/logo.svg";
import HartIcon from "public/heart-icon.svg";
import ShoppingCartIcon from "public/shopping-cart-icon.svg";
import DarkThemeIcon from "public/dark-theme-icon.svg";
//TODO remove each icon to it's own file to achieve solid
const Header = () => {
  return (
    <header className="container sticky top-0 flex justify-between pt-2">
      <Link href="/" className="flex items-center gap-x-1">
        <Logo alt="logo" className="w-10 sm:w-12" />
        <span className="font-extrabold">All-One</span>
      </Link>
      <ul className="flex items-center gap-x-5 [&>li]:w-7">
        <li>
          <HartIcon className="" />
        </li>
        <li>
          <DarkThemeIcon />
        </li>
        <li>
          <ShoppingCartIcon />
        </li>
      </ul>
    </header>
  );
};

export default Header;
