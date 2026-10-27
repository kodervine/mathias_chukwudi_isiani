import { NAME } from '@/services/data/profile';

const Footer = () => (
  <footer className="border-t border-paper/15 bg-ink py-8 text-center">
    <p className="catalog text-paper/60">
      © {new Date().getFullYear()} {NAME}
    </p>
  </footer>
);

export default Footer;
