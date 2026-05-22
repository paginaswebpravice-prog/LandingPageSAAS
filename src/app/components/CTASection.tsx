"use client";

import { motion } from "framer-motion";
import styles from "../styles/CTASection.module.css";

export default function CTASection() {
  return (
    <section className={styles.section}>
      <div className={styles.glowOne} />
      <div className={styles.glowTwo} />

      <div className={styles.container}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* TOP */}
          <div className={styles.top}>
            <span className={styles.badge}>Solicita una demo</span>

            <h2 className={styles.title}>
              Lleva tu operación jurídica al siguiente nivel.
            </h2>

            <p className={styles.description}>
              Descubre cómo nuestra plataforma puede ayudarte a centralizar
              cartera, automatizar seguimientos y optimizar procesos jurídicos
              desde un solo lugar.
            </p>
          </div>

          {/* ACTIONS */}
          <div className={styles.actions}>
            <button className={styles.primaryBtn}>Agendar demo</button>

            <button className={styles.secondaryBtn}>Hablar por WhatsApp</button>
          </div>

          {/* STATS */}
          <div className={styles.stats}>
            <div className={styles.statCard}>
              <strong>+4.200</strong>

              <span>Procesos gestionados</span>
            </div>

            <div className={styles.statCard}>
              <strong>99%</strong>

              <span>Disponibilidad</span>
            </div>

            <div className={styles.statCard}>
              <strong>+38%</strong>

              <span>Mayor productividad</span>
            </div>
          </div>

          {/* BACKGROUND EFFECT */}
          <div className={styles.innerGlow} />
        </motion.div>
      </div>
    </section>
  );
}
