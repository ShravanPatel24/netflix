import styles from "@/app/styles/navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import Logo from "../../../public/logo.png";

const Header = () => {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href="/">
          <Image src={Logo} alt="Logo" width={140} height={40}></Image>
        </Link>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
