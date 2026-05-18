import Logo from '../Logo';

const Footer = () => {
  return (
    <footer className="bg-tertiary py-8">
      <div className="max-w-7xl mx-auto px-24 text-center">
        <div className="flex justify-center mb-4">
          <Logo isOnFooter={true} />
        </div>
        <p className="mb-2">&copy; 2026 Boutique. All rights reserved.</p>
        <p className="text-sm">
          <a href="#" className="hover:text-primary px-3">
            Privacy
          </a>
          |
          <a href="#" className="hover:text-primary px-3">
            Terms
          </a>
          |
          <a href="#" className="hover:text-primary px-3">
            Contact
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
