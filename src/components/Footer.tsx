import tenmediaLogo from "../assets/tenmedia-logo.png";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center py-8 px-12 bg-[#00010C] text-white">
      <img
        src={tenmediaLogo.src}
        alt="TenMedia Logo"
        className="max-w-[200px] w-[75%]"
      />
      <p className="text-[#C6C9D8]">© 2023 TenMedia. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
