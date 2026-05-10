import { useEffect, useState } from 'react';

type LogoProps = {
  onClickLogo?: () => void;
  isOnFooter?: boolean;
};

const Logo = ({ onClickLogo, isOnFooter = false }: LogoProps) => {
  const [screenSize, setScreenSize] = useState<boolean>(false);

  useEffect(() => {
    const getScreenSize = () => {
      if (window.innerWidth <= 768) {
        setScreenSize(true);
      } else {
        setScreenSize(false);
      }
    };

    window.addEventListener('resize', getScreenSize);
    getScreenSize();

    return () => window.removeEventListener('resize', getScreenSize);
  }, [screenSize]);

  return (
    <div
      className="flex items-center text-gray- font-logo cursor-pointer"
      onClick={onClickLogo}
    >
      <img src="logo.svg" className="h-14 w-14"></img>
      <p className="inline-block -ml-7 text-3xl">
        Boutique
        {!isOnFooter && !screenSize && (
          <span className="font-logo_secondary text-tertiary">කඩේ</span>
        )}
      </p>
    </div>
  );
};

export default Logo;
