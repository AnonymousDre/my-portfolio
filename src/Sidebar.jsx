function Sidebar() {
  return (
    <div className="sidebar">
      {/* Top logo */}
      <div className="icon">
        <img src="/assets/logo.png" alt="logo" /> {/*change to text*/}
      </div>

      {/* Centered links */}
      <ul className="sections">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/awards">Awards</a></li>
        <li><a href="/certificates">Certificates</a></li>
        <li><a href="/faqs">FAQs</a></li>
      </ul>

      {/* Bottom socials */}
      <div className="socials">
        <img src="/assets/gblogo.png" alt="GitHub" />
        <img src="/assets/lnlogo.png" alt="LinkedIn" />
      </div>
    </div>
  );
}

export default Sidebar;