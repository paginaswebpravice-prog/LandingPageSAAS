// /components/landing/Hero/Hero.tsx

"use client";

import { motion } from "framer-motion";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundGlow} />
      <div className={styles.grid} />

      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.badge}>
            Plataforma SaaS para cartera y procesos jurídicos
          </div>

          <h1 className={styles.title}>
            Centraliza el recaudo de cartera y la gestión jurídica en una sola
            plataforma.
          </h1>

          <p className={styles.description}>
            Gestiona procesos, acuerdos de pago, clientes y seguimientos desde
            un sistema moderno diseñado para firmas legales y equipos de
            cobranza.
          </p>

          <div className={styles.actions}>
            <button className={styles.primaryBtn}>Solicitar demo</button>

            <button className={styles.secondaryBtn}>Ver plataforma</button>
          </div>

          <div className={styles.stats}>
            <div className={styles.statCard}>
              <strong>+12M</strong>
              <span>Recuperación gestionada</span>
            </div>

            <div className={styles.statCard}>
              <strong>+4.200</strong>
              <span>Procesos administrados</span>
            </div>

            <div className={styles.statCard}>
              <strong>99%</strong>
              <span>Disponibilidad</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
        >
          <div className={styles.dashboard}>
            <div className={styles.dashboardHeader}>
              <div className={styles.headerDots}>
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.dot} />
              </div>

              <p>Dashboard Operativo</p>
            </div>

            <div className={styles.metricsGrid}>
              <div className={styles.metricCard}>
                <span>Cartera recuperada</span>
                <strong>$1.240M</strong>
              </div>

              <div className={styles.metricCard}>
                <span>Acuerdos activos</span>
                <strong>328</strong>
              </div>

              <div className={styles.metricCard}>
                <span>Procesos abiertos</span>
                <strong>1.204</strong>
              </div>

              <div className={styles.metricCard}>
                <span>Seguimientos hoy</span>
                <strong>94</strong>
              </div>
            </div>

            <div className={styles.pipeline}>
              <div className={styles.pipelineHeader}>
                <h3>Pipeline de cartera</h3>
              </div>

              <div className={styles.pipelineGrid}>
                <div className={styles.pipelineColumn}>
                  <span>Pendiente</span>
                  <strong>248</strong>
                </div>

                <div className={styles.pipelineColumn}>
                  <span>Contactado</span>
                  <strong>193</strong>
                </div>

                <div className={styles.pipelineColumn}>
                  <span>Acuerdo</span>
                  <strong>81</strong>
                </div>

                <div className={styles.pipelineColumn}>
                  <span>Jurídico</span>
                  <strong>57</strong>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
