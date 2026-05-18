import Logo from '../Logo';
import NavIcons from '../NavIcons';
import type { ProductType } from '../../utils/types';

type NavbarProps = {
  productCountNavbar: number;
  onClickNavbar: () => void;
  cartProductsNavbar: ProductType[];
  removeFromCartNavbar: (id: number) => void;
  onSetThemeNavbar: (theme: boolean) => void;
  isDarkNavbar: boolean;
};

const Navbar = ({
  onClickNavbar,
  productCountNavbar,
  cartProductsNavbar,
  removeFromCartNavbar,
  onSetThemeNavbar,
  isDarkNavbar,
}: NavbarProps) => {
  return (
    <nav className="flex w-full py-2 items-center justify-between">
      <Logo onClickLogo={onClickNavbar} />
      <NavIcons
        productCountNavIcons={productCountNavbar}
        cartProductsNavIcons={cartProductsNavbar}
        removeFromCartNavIcons={removeFromCartNavbar}
        onSetThemeNavIcons={onSetThemeNavbar}
        isDarkNavIcons={isDarkNavbar}
      />
    </nav>
  );
};

export default Navbar;
