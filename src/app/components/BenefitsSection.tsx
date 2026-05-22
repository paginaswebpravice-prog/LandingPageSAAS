// /components/landing/BenefitsSection/BenefitsSection.tsx

"use client";

import { motion } from "framer-motion";
import styles from "../styles/BenefitsSection.module.css";

const benefits = [
  {
    number: "01",
    title: "Reduce tiempos operativos",
    description:
      "Automatiza seguimientos y centraliza tareas para mejorar la productividad del equipo.",
  },
  {
    number: "02",
    title: "Mayor control de cartera",
    description:
      "Visualiza acuerdos, pagos y estados de recuperación desde un solo panel.",
  },
  {
    number: "03",
    title: "Centralización total",
    description:
      "Gestiona clientes, procesos y actividades sin depender de múltiples herramientas.",
  },
  {
    number: "04",
    title: "Escala tu operación",
    description:
      "Administra grandes volúmenes de procesos jurídicos de manera organizada y eficiente.",
  },
];

export default function BenefitsSection() {
  return (
    <section className={styles.section} id="beneficios">
      <div className={styles.backgroundGlow} />

      <div className={styles.container}>
        {/* LEFT */}
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.badge}>Beneficios</span>

          <h2 className={styles.title}>
            Más control, menos desorden operativo.
          </h2>

          <p className={styles.description}>
            Optimiza la recuperación de cartera y mejora la gestión jurídica con
            una plataforma diseñada para operaciones modernas y escalables.
          </p>

          <div className={styles.stats}>
            <div className={styles.statCard}>
              <strong>+38%</strong>
              <span>Mayor productividad</span>
            </div>

            <div className={styles.statCard}>
              <strong>-52%</strong>
              <span>Menos tareas manuales</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <div className={styles.right}>
          {benefits.map((item, index) => (
            <motion.div
              key={item.number}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <div className={styles.number}>{item.number}</div>

              <div className={styles.cardContent}>
                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
