function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="logo">Trattoria Bella</div>
            <p>Authentic Italian cooking, served with family warmth since 1987.</p>
          </div>
          <div>
            <h4>Visit</h4>
            <a href="#">42 Via Roma, Downtown</a>
            <a href="tel:5551234567">(555) 123-4567</a>
            <a href="mailto:ciao@trattoriabella.com">ciao@trattoriabella.com</a>
          </div>
          <div>
            <h4>Hours</h4>
            <a href="#">Tue–Thu · 5pm – 10pm</a>
            <a href="#">Fri–Sat · 5pm – 11pm</a>
            <a href="#">Sunday · 4pm – 9pm</a>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} Trattoria Bella — Made with amore
        </div>
      </div>
    </footer>
  );
}

export default Footer;
