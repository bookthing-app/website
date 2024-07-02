import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const Footer = () => (
  <footer className="flex flex-col gap-8 justify-center items-center p-4 py-8">
    <div className="flex flex-col justify-center items-center gap-2">
      <span className="text-center font-medium">Чи підходить це мені?</span>
      <div className="flex items-center gap-2">
        <Link href="/beauty" className="font-medium cursor-pointer">
          Послуги краси
        </Link>
        •
        <Link href="/sport" className="font-medium cursor-pointer">
          Тренування та спорт
        </Link>
        {/* •
        <Link href="/consulting" className="font-medium cursor-pointer">
          Консультації
        </Link> */}
      </div>
    </div>
    <div className="flex flex-col gap-2 justify-center items-center">
      <div className="flex items-center gap-4">
        <Link
          href="https://bkth.link/fb"
          className="flex items-center gap-2 cursor-pointer"
        >
          <FontAwesomeIcon icon={faFacebook} className="size-6" />
          <span className="font-medium cursor-pointer">Facebook</span>
        </Link>
        <Link
          href="https://bkth.link/instagram"
          className="flex items-center gap-2 cursor-pointer"
        >
          <FontAwesomeIcon icon={faInstagram} className="size-6" />
          <span className="font-medium cursor-pointer">Instagram</span>
        </Link>
      </div>
      <span className="font-medium">
        &copy; {new Date().getFullYear()} bookthing
      </span>
    </div>
  </footer>
);
