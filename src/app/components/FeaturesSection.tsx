// /components/landing/FeaturesSection/FeaturesSection.tsx

"use client";

import { motion } from "framer-motion";
import styles from "../styles/FeaturesSection.module.css";

const features = [
  {
    title: "Gestión de cartera",
    description:
      "Centraliza clientes, estados de deuda, acuerdos y seguimiento de recuperación.",
  },
  {
    title: "Procesos jurídicos",
    description:
      "Administra actuaciones, etapas y control de procesos desde una sola plataforma.",
  },
  {
    title: "Acuerdos de pago",
    description:
      "Gestiona cuotas, vencimientos, pagos realizados y compromisos activos.",
  },
  {
    title: "Seguimiento operativo",
    description:
      "Controla llamadas, tareas, observaciones y actividades del equipo jurídico.",
  },
  {
    title: "Métricas y reportes",
    description:
      "Visualiza productividad, recuperación y desempeño operativo en tiempo real.",
  },
  {
    title: "Alertas automáticas",
    description:
      "Evita olvidos y mejora tiempos de respuesta con notificaciones inteligentes.",
  },
];

export default function FeaturesSection() {
  return (
    <section className={styles.section} id="funcionalidades">
      <div className={styles.container}>
        {/* HEADING */}
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.badge}>Funcionalidades</span>

          <h2 className={styles.title}>
            Todo lo que necesitas para gestionar cartera y procesos jurídicos.
          </h2>

          <p className={styles.description}>
            Diseñado para firmas legales, equipos jurídicos y operaciones de
            cobranza que necesitan control, automatización y visibilidad total.
          </p>
        </motion.div>

        {/* GRID */}
        <div className={styles.grid}>
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
            >
              <div className={styles.icon}>
                <span />
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <div className={styles.cardGlow} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
