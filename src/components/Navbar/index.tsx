import Logo from '../Logo';
import NavIcons from '../NavIcons';

type NavbarProps = {
  productCountNavbar: number;
  onClickNavbar: () => void;
};

const Navbar = ({ onClickNavbar, productCountNavbar }: NavbarProps) => {
  return (
    <nav className="flex w-full py-2 items-center justify-between">
      <Logo onClickLogo={onClickNavbar} />
      <NavIcons productCountNavIcons={productCountNavbar} />
    </nav>
  );
};

export default Navbar;
