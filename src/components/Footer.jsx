import logo from "../Logo.svg";
function Footer() {
  return (
    <footer>
      <main>
        <img src={logo} alt='' />
        <div className='text-box' id='tb-1'>
          <h3>Doormat NavHomepageigation</h3>
          <h4>
            Home
            <br />
            About
            <br />
            Menu
            <br />
            Reservations
            <br />
            Order Online
            <br />
            Login
          </h4>
        </div>
        <div className='text-box' id='tb-2'>
          <h3>Contact</h3>
          <h4>
            Adress
            <br />
            phone number
            <br />
            email
          </h4>
        </div>
        <div className='text-box' id='tb-3'>
          <h3>Social Media Links</h3>
          <h4>
            Adress
            <br />
            phone number
            <br />
            email
          </h4>
        </div>
      </main>
    </footer>
  );
}

export default Footer;
