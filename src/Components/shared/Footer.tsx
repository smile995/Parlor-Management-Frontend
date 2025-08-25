
const Footer = () => {
  return (
    <footer className="footer grid grid-cols-2 md:grid-cols-4 bg-[#f63e7b] text-white lg:p-10 p-4 md:p-6">
      <aside>

        <p>
          H#000 (0th Floor), Road #00,
          <br />
          New DOHS, Mohakhali, Dhaka, Bangladesh
        </p>
      </aside>
      <nav>
        <h6 className="font-semibold text-xl ">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="font-semibold text-xl">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="font-semibold text-xl">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
