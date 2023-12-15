import tenmediaLogo from "../assets/tenmedia-logo.png";

const Footer = () => {
  return (
    <footer className="py-8 px-12 bg-[#00010C] text-white">
      <img src={tenmediaLogo.src} alt="TenMedia Logo" className="w-[200px]" />
    </footer>
  );
};

export default Footer;
