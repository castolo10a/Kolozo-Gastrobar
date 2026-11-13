import { FaFacebookF, FaInstagram, FaTripadvisor } from 'react-icons/fa';
import { site } from '@/config/site';

const icons = {
  instagram: FaInstagram,
  facebook: FaFacebookF,
  tripadvisor: FaTripadvisor,
};

export default function SocialLinks({ className = '' }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {site.socials.map(({ id, label, href }) => {
        const Icon = icons[id];
        return (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 opacity-80 transition hover:border-brand hover:text-brand hover:opacity-100"
            >
              <Icon size={16} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
