function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p className="copy">&copy; Copyright {currentYear}</p>
    </footer>
  );
}

export default Footer;
