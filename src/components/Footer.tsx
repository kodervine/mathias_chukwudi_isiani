import { NAME } from '@/services/data/profile';

const Footer = () => (
  <footer className="bg-ink pb-8 text-center">
    <p className="catalog text-paper/40">
      © {new Date().getFullYear()} {NAME}
    </p>
  </footer>
);

export default Footer;
