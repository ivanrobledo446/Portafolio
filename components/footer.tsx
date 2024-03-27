import Link from "next/link";
import Image from "next/image";
import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor`}>
        <nav className={styles.navegacion}>
          <Link href="#sobremi">Sobre mi</Link>

          <Link href="#experiencia">Experiencia</Link>

          <Link href="#proyectos">Proyectos</Link>
        </nav>

        <div className={styles.imagen}>
          <Link href={`https://www.instagram.com/ivanrobledo446/`}>
            <Image
              alt="Instagram"
              src="/img/footer/instagram.svg"
              width={20}
              height={20}
            />
          </Link>
          <Link href={`https://github.com/ivanrobledo446`}>
            <Image
              alt="GitHub"
              src="/img/footer/github.svg"
              width={20}
              height={20}
            />
          </Link>
          <Link href={`https://www.linkedin.com/in/ivan-robledo-3994a0291/`}>
            <Image
              alt="LinkedIn"
              src="/img/footer/linkedin.svg"
              width={20}
              height={20}
            />
          </Link>
        </div>

        <p className={styles.descripcion}>
          Diseñado en <Link href={`https://www.figma.com/`}>Figma</Link> y
          codificado en{" "}
          <Link href={`https://code.visualstudio.com/`}>Visual Studio</Link>.{" "}
          Construido con <Link href={`https://nextjs.org/`}>Next.js</Link> ,
          implementado con <Link href={`https://vercel.com/`}>Vercel</Link>.
        </p>
      </div>
    </footer>
  );
}
