import styles from "../styles/sobremi.module.css";

export default function Sobremi() {
  return (
    <main id="sobremi">
      <div className={`contenedor ${styles.sobremi}`}>
        <h1>Diseñador y Desarrollador FrontEnd</h1>
        <p className={styles.parrafo}>
          Diseño y creo páginas simples, lindas y únicas
        </p>

        <div className={styles.descripcion}>
          <p>
            Programador junior con sólidos conocimientos en lenguajes de
            programación como JavaScript, HTML y CSS, así como experiencia
            práctica en el desarrollo de páginas web.
          </p>
          <p>
            Soy un aprendiz rápido y proactivo que busca continuar creciendo
            profesionalmente en un entorno colaborativo y dinámico.
          </p>
          <p>
            Mi objetivo es contribuir de manera significativa al éxito de
            proyectos innovadores mientras sigo ampliando mis habilidades
            técnicas y mi conocimiento en el campo de la programación.
          </p>
        </div>
      </div>
    </main>
  );
}