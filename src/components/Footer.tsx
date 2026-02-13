const Footer = () => {
  return (
    <footer className="gold-border-top py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="font-display text-lg text-gold-gradient font-semibold mb-2">Kali Edits & VFX</p>
        <p className="text-muted-foreground text-sm font-body">
          © {new Date().getFullYear()} Kali Edits & VFX. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
