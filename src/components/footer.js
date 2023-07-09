import footerLogo from "../images/logo.png"


function Footer() {
  const footerOptions = ["Contact", "FAQ", "Blog", "API Documentation"];

  return (
    <div className="bg-red-300 pt-10 pb-16 px-16 flex items-start rounded-lg">
      <div className="flex-1">
        <img
          src={footerLogo}
          alt="icon"
          className="aspect-video min-w-20 w-40"
        />
        <p className="text-black mt-2 font-medium text-xs">© 2023 QSAVIO. All rights reserved</p>
      </div>
      <div className="flex items-center text-lg text-black min-gap-4 gap-10">
        {footerOptions.map((option) => (
          <button>{option}</button>
        ))}
      </div>
    </div>
  );
}

export default Footer;
