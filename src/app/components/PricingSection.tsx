"use client";

import { motion } from "framer-motion";
import styles from "../styles/PricingSection.module.css";

const plans = [
  {
    name: "Starter",
    price: "$99",
    description:
      "Ideal para firmas pequeñas que desean organizar su operación.",
    features: [
      "Gestión de cartera",
      "Seguimiento de procesos",
      "Dashboard operativo",
      "Usuarios limitados",
      "Soporte estándar",
    ],
    highlight: false,
  },
  {
    name: "Professional",
    price: "$249",
    description:
      "Perfecto para equipos jurídicos y operaciones de cobranza en crecimiento.",
    features: [
      "Todo lo del plan Starter",
      "Automatizaciones",
      "Reportes avanzados",
      "Múltiples usuarios",
      "Alertas inteligentes",
      "Soporte prioritario",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description:
      "Para operaciones de alto volumen con necesidades personalizadas.",
    features: [
      "Infraestructura escalable",
      "Integraciones personalizadas",
      "Implementación dedicada",
      "Capacitación empresarial",
      "Soporte premium",
    ],
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section className={styles.section} id="planes">
      <div className={styles.glow} />

      <div className={styles.container}>
        {/* HEADING */}
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.badge}>Planes</span>

          <h2 className={styles.title}>
            Elige el plan ideal para tu operación jurídica.
          </h2>

          <p className={styles.description}>
            Escala tu firma o equipo de cobranza con una plataforma flexible y
            diseñada para operaciones modernas.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className={styles.grid}>
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`${styles.card} ${
                plan.highlight ? styles.highlight : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
            >
              {plan.highlight && (
                <div className={styles.popular}>Más popular</div>
              )}

              <h3>{plan.name}</h3>

              <div className={styles.priceWrapper}>
                <strong>{plan.price}</strong>

                {plan.price !== "Custom" && <span>/mes</span>}
              </div>

              <p className={styles.planDescription}>{plan.description}</p>

              <div className={styles.features}>
                {plan.features.map((feature) => (
                  <div key={feature} className={styles.featureItem}>
                    <div className={styles.check} />

                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className={styles.button}>Solicitar demo</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
