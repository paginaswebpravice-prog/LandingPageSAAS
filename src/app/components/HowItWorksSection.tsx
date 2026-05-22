// /components/landing/HowItWorksSection/HowItWorksSection.tsx

"use client";

import { motion } from "framer-motion";
import styles from "../styles/HowItWorksSection.module.css";

const steps = [
  {
    number: "01",
    title: "Carga clientes y procesos",
    description:
      "Centraliza información jurídica, cartera y datos operativos desde un solo lugar.",
  },
  {
    number: "02",
    title: "Gestiona seguimientos",
    description:
      "Administra tareas, acuerdos, observaciones y estados de recuperación.",
  },
  {
    number: "03",
    title: "Automatiza operaciones",
    description: "Reduce trabajo manual mediante alertas y flujos organizados.",
  },
  {
    number: "04",
    title: "Analiza resultados",
    description:
      "Visualiza productividad, métricas y desempeño operativo en tiempo real.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className={styles.section}>
      <div className={styles.gridGlow} />

      <div className={styles.container}>
        {/* HEADING */}
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.badge}>Cómo funciona</span>

          <h2 className={styles.title}>
            Un flujo simple para gestionar toda tu operación jurídica.
          </h2>

          <p className={styles.description}>
            Diseñado para que tu equipo tenga control, organización y
            seguimiento en tiempo real sin depender de procesos manuales.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className={styles.card}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
            >
              <div className={styles.top}>
                <div className={styles.number}>{step.number}</div>

                {index !== steps.length - 1 && <div className={styles.line} />}
              </div>

              <div className={styles.content}>
                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
