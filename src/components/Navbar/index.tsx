import Logo from '../Logo';
import NavIcons from '../NavIcons';

type NavbarProps = {
  onClickNavbar: () => void;
};

const Navbar = ({ onClickNavbar }: NavbarProps) => {
  return (
    <nav className="flex w-full py-2 items-center justify-between">
      <Logo onClickLogo={onClickNavbar} />
      <NavIcons />
    </nav>
  );
};

export default Navbar;
