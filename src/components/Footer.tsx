import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gold-border-top py-8">
      <div className="container mx-auto px-6 text-center space-y-3">

        {/* Brand Name */}
        <p className="font-display text-lg text-gold-gradient font-semibold">
          Kali Edits & VFX
        </p>

        {/* Copyright */}
        <p className="text-muted-foreground text-sm font-body">
          © {new Date().getFullYear()} Kali Edits & VFX. All rights reserved.
        </p>

        {/* Made by Section */}
        <div className="flex justify-center items-center gap-1 text-sm font-body text-muted-foreground">
          Made with
          <Heart className="inline h-4 w-4 text-red-500 mx-1" />
          by
          <a
            href="https://staffarc.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-orange-600 hover:underline"
          >
            <img
              src="https://www.staffarc.in/images/Staffarc-logo.png"
              alt="StaffArc logo"
              className="h-5 w-5 object-contain"
            />
            StaffArc
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
