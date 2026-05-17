import Logo from '../Logo';
import NavIcons from '../NavIcons';
import type { ProductType } from '../../utils/types';

type NavbarProps = {
  productCountNavbar: number;
  onClickNavbar: () => void;
  cartProductsNavbar: ProductType[];
  removeFromCartNavbar: (id: number) => void;
};

const Navbar = ({
  onClickNavbar,
  productCountNavbar,
  cartProductsNavbar,
  removeFromCartNavbar,
}: NavbarProps) => {
  return (
    <nav className="flex w-full py-2 items-center justify-between">
      <Logo onClickLogo={onClickNavbar} />
      <NavIcons
        productCountNavIcons={productCountNavbar}
        cartProductsNavIcons={cartProductsNavbar}
        removeFromCartNavIcons={removeFromCartNavbar}
      />
    </nav>
  );
};

export default Navbar;
