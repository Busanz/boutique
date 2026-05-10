const NavIcons = () => {
  return (
    <div className="flex text-gray-100space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--text)"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-shopping-cart-icon lucide-shopping-cart p-2"
      >
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--text)"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-moon-icon lucide-moon p-2"
      >
        <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
      </svg>
    </div>
  );
};

export default NavIcons;
