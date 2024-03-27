import Image from "next/image";
import Link from "next/link";
import styles from "../styles/header.module.css";

export default function Header() {
  return (
    <div className={styles.fixed}>
      <header className={styles.header}>
        <div className={`contenedor ${styles.barra}`}>
          <Link href="/">
            <Image alt="logo" src="/img/logo.png" width={125} height={100} />
          </Link>

          <nav className={styles.navegacion}>
            <Link href="#sobremi">Sobre mi</Link>

            <Link href="#experiencia">Experiencia</Link>

            <Link href="#proyectos">Proyectos</Link>
          </nav>
        </div>
      </header>
    </div>
  );
}