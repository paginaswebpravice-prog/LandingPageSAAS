// /components/landing/DashboardSection/DashboardSection.tsx

"use client";

import { motion } from "framer-motion";
import styles from "../styles/DashboardSection.module.css";

export default function DashboardSection() {
  return (
    <section className={styles.section}>
      <div className={styles.glow} />

      <div className={styles.container}>
        {/* LEFT */}
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.badge}>Dashboard inteligente</span>

          <h2 className={styles.title}>
            Controla toda tu operación jurídica y de cartera desde un solo
            panel.
          </h2>

          <p className={styles.description}>
            Visualiza métricas, seguimientos, acuerdos y procesos en tiempo real
            con una experiencia moderna diseñada para operaciones jurídicas de
            alto volumen.
          </p>

          <div className={styles.features}>
            <div className={styles.featureItem}>
              <div className={styles.featureDot} />
              <span>KPIs y métricas en tiempo real</span>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureDot} />
              <span>Pipeline operativo de cartera</span>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureDot} />
              <span>Seguimientos y tareas centralizadas</span>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureDot} />
              <span>Visualización de productividad</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.dashboard}>
            {/* TOP BAR */}
            <div className={styles.topbar}>
              <div className={styles.topbarLeft}>
                <span />
                <span />
                <span />
              </div>

              <p>Panel Analítico</p>
            </div>

            {/* STATS */}
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <span>Recuperación mensual</span>
                <strong>$248M</strong>

                <div className={styles.progress}>
                  <div
                    className={styles.progressFill}
                    style={{ width: "78%" }}
                  />
                </div>
              </div>

              <div className={styles.statCard}>
                <span>Acuerdos cumplidos</span>
                <strong>82%</strong>

                <div className={styles.progress}>
                  <div
                    className={styles.progressFill}
                    style={{ width: "82%" }}
                  />
                </div>
              </div>
            </div>

            {/* TABLE */}
            <div className={styles.table}>
              <div className={styles.tableHeader}>
                <span>Cliente</span>
                <span>Estado</span>
                <span>Gestor</span>
              </div>

              <div className={styles.tableRow}>
                <p>Clínica Central</p>

                <div className={styles.statusActive}>Activo</div>

                <span>Laura M.</span>
              </div>

              <div className={styles.tableRow}>
                <p>Grupo Salud IPS</p>

                <div className={styles.statusPending}>Seguimiento</div>

                <span>Daniel R.</span>
              </div>

              <div className={styles.tableRow}>
                <p>Financiera Nova</p>

                <div className={styles.statusClosed}>Recuperado</div>

                <span>Camilo T.</span>
              </div>
            </div>

            {/* BOTTOM ANALYTICS */}
            <div className={styles.analytics}>
              <div className={styles.analyticsCard}>
                <span>Procesos activos</span>

                <strong>1.204</strong>
              </div>

              <div className={styles.analyticsCard}>
                <span>Seguimientos hoy</span>

                <strong>94</strong>
              </div>

              <div className={styles.analyticsCard}>
                <span>Pagos registrados</span>

                <strong>312</strong>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
