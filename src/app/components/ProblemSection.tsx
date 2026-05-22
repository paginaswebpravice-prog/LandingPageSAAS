// /components/landing/ProblemSection/ProblemSection.tsx

"use client";

import { motion } from "framer-motion";
import styles from "../styles/ProblemSection.module.css";

const problems = [
  {
    title: "Información dispersa",
    description:
      "Centraliza clientes, cartera y procesos jurídicos en un solo lugar.",
  },
  {
    title: "Seguimientos manuales",
    description: "Reduce tareas repetitivas y evita perder tiempo operativo.",
  },
  {
    title: "Procesos desorganizados",
    description:
      "Controla cada etapa jurídica desde un dashboard centralizado.",
  },
  {
    title: "Falta de visibilidad",
    description: "Obtén métricas y reportes en tiempo real sobre tu operación.",
  },
];

export default function ProblemSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.badge}>Problemas operativos</span>

          <h2 className={styles.title}>
            ¿Tu operación aún depende de Excel, llamadas y seguimientos
            manuales?
          </h2>

          <p className={styles.description}>
            La mayoría de equipos jurídicos y de cobranza pierden tiempo usando
            múltiples herramientas desconectadas. Centraliza toda la operación
            desde una sola plataforma.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {problems.map((item, index) => (
            <motion.div
              key={item.title}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
            >
              <div className={styles.icon}>
                <span />
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
