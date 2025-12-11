const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/"><h1>A+L</h1></a>
      <div className="links">
        <a href="/venue">Venue</a>
        <a href="/program">Program</a>
        <a href="/rsvp" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>RSVP</a>
      </div>
    </nav>
  );
}
 
export default Navbar;