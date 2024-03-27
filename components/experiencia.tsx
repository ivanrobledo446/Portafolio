import Image from "next/image";
import styles from "../styles/experiencia.module.css";
import stylesGrid from "../styles/grid.module.css";

export default function Experiencia() {
  return (
    <main id="experiencia">
      <div className={`contenedor ${styles.exp}`}>
        <Image
          className={styles.imagen}
          alt="pc"
          src="/img/pc.jpg"
          width={600}
          height={40}
        />
        <div
          className={`${stylesGrid.grid} ${styles.borde} ${styles.contenido}`}
        >
          <div>
            <Image
              className={styles.img}
              alt="diseño"
              src="/img/diseño.svg"
              width={60}
              height={60}
            />

            <h1>Diseño</h1>
            <p>
              Me gusta la simplicidad, el diseño limpio y la comunicación
              directa del producto.
            </p>

            <h3>Cosas que diseño:</h3>
            <p>UX, UI, Web, Apps, Logos</p>

            <h3>Herramientas de diseño:</h3>
            <p>Figma, Canva</p>
          </div>

          <div>
            <Image
              className={styles.img}
              alt="diseño"
              src="/img/front.svg"
              width={60}
              height={60}
            />

            <h1>Desarrollo FrontEnd</h1>
            <p>Me gusta codear desde cero y disfruto dar vida a las páginas.</p>

            <h3>Lenguajes que se:</h3>
            <p>HTML, CSS, JavaScript, React, Git</p>

            <h3>Herramientas de desarrollo:</h3>
            <p>Node.js, MongoDB, Netlify, Strapi, GitHub</p>
          </div>
        </div>
      </div>
    </main>
  );
}