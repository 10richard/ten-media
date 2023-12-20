import tenmediaLogo from "../assets/tenmedia-logo.png";

const Footer = () => {
  return (
    <footer className="flex max-[540px]:grid max-[540px]:justify-center justify-between items-center gap-5 py-8 min-[580px]:px-12 px-5 bg-[#00010C] text-white">
      <div>
        <a href="#">
          <img
            src={tenmediaLogo.src}
            className="max-w-[200px] w-[75%] mx-auto"
            alt="TenMedia logo"
          />
        </a>
      </div>
      <p className="text-[#C6C9D8]">© 2023 TenMedia. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
