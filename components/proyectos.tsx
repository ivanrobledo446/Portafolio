import Image from "next/image";
import Link from "next/link";
import styles from "../styles/proyectos.module.css";

export default function Proyectos() {
  return (
    <main id="proyectos">
      <div className={`contenedor ${styles.proyectos}`}>
        <h1>Mis Primeros Proyectos</h1>
        <p className={styles.descripcionTitulo}>
          Me gusta hacer proyectos propios en donde eh utilizado diferentes
          lenguajes y frameworks para crear, diseñar y construir mis páginas.
        </p>

        <div className={` ${styles.padre} ${styles.borde} ${styles.contenido}`}>
          <div className={`${styles.hijo} ${styles.contenido}`}>
            <Link href={`https://veterinaria-react-red.vercel.app/`}>
              <h1>Veterinaria</h1>
              <Image
                alt="proyecto1"
                src="/img/proyectos/proyecto1.png"
                width={250}
                height={250}
              />
            </Link>
            <div>
              <p className={styles.descripcion}>
                Permite a los usuarios añadir información detallada sobre
                pacientes y gestionarlos. Los datos se almacenan de forma segura
                en el Local Storage del navegador y se presentan visualmente en
                el lado derecho de la pantalla. La interfaz también ofrece la
                capacidad de eliminar y editar registros, para la gestión de
                pacientes.
              </p>
            </div>
          </div>

          <div className={`${styles.hijo} ${styles.contenido}`}>
            <Link href={`https://control-gastos-react-teal.vercel.app/`}>
              <h1>Control de Gastos</h1>
              <Image
                alt="proyecto2"
                src="/img/proyectos/proyecto2.png"
                width={250}
                height={250}
              />
            </Link>
            <div>
              <p className={styles.descripcion}>
                Permite gestionar gastos para controlar finanzas personales. Los
                usuarios pueden establecer un presupuesto, agregar gastos
                asignados a categorías y visualizar el presupuesto inicial,
                disponible y gastado. Además, la aplicación facilita la edición
                y eliminación de gastos para una experiencia de usuario
                completa.
              </p>
            </div>
          </div>

          <div className={`${styles.hijo} ${styles.contenido}`}>
            <Link href={`https://criptos-react-five.vercel.app/`}>
              <h1>Cotizador Cripto</h1>
              <Image
                alt="proyecto3"
                src="/img/proyectos/proyecto3.png"
                width={250}
                height={250}
              />
            </Link>
            <div>
              <p className={styles.descripcion}>
                Permite a los usuarios seleccionar una moneda base y elegir una
                criptomoneda de entre las diez más utilizadas. Utilizando una
                API, la aplicación consume información en tiempo real para
                proporcionar una cotización precisa y actualizada del precio de
                la criptomoneda seleccionada. Esta herramienta ofrece una manera
                fácil y rápida para los usuarios interesados en conocer el valor
                actual de las principales criptomonedas en relación con su
                moneda base.
              </p>
            </div>
          </div>

          <div className={`${styles.hijo} ${styles.contenido}`}>
            <Link href={`https://guitar-la-next-js-murex.vercel.app/`}>
              <h1>Ecommerce Guitarras</h1>
              <Image
                alt="proyecto5"
                src="/img/proyectos/proyecto5.png"
                width={250}
                height={250}
              />
            </Link>
            <div>
              <p className={styles.descripcion}>
                Página web Ecommerce especializada en la venta de guitarras y
                cursos. El mismo tiene secciones como nosotros, cursos y una
                sección de tienda, donde los usuarios pueden explorar y
                seleccionar guitarras. Cada guitarra presenta descripciones
                detalladas, precios e imágenes. La funcionalidad clave permite a
                los usuarios agregar las guitarras deseadas a un carrito de
                compras. La interfaz intuitiva brinda una experiencia completa y
                atractiva para los amantes de la música.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}