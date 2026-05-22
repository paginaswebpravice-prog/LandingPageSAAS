"use client";

import { motion } from "framer-motion";
import styles from "../styles/TestimonialSection.module.css";

const testimonials = [
  {
    name: "Carlos Méndez",
    role: "Director Jurídico",
    company: "Grupo Legal Asociados",
    testimonial:
      "La plataforma nos permitió organizar toda la operación de cartera y mejorar el seguimiento de procesos en tiempo real.",
  },
  {
    name: "Laura Rodríguez",
    role: "Coordinadora de Cobranza",
    company: "Nova Recovery",
    testimonial:
      "Reducimos tareas manuales y ahora tenemos visibilidad total del estado operativo de cada cliente.",
  },
  {
    name: "Andrés Herrera",
    role: "Socio Fundador",
    company: "Lex & Partners",
    testimonial:
      "La implementación fue rápida y el impacto operativo se sintió desde las primeras semanas.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className={styles.section}>
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
          <span className={styles.badge}>Testimonios</span>

          <h2 className={styles.title}>
            Equipos jurídicos que ya optimizan su operación con nuestra
            plataforma.
          </h2>

          <p className={styles.description}>
            Firmas legales y equipos de cobranza utilizan la plataforma para
            mejorar control, productividad y seguimiento operativo.
          </p>
        </motion.div>

        {/* TESTIMONIALS */}
        <div className={styles.grid}>
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
            >
              <div className={styles.quote}>"</div>

              <p className={styles.testimonial}>{item.testimonial}</p>

              <div className={styles.user}>
                <div className={styles.avatar}>{item.name.charAt(0)}</div>

                <div className={styles.userInfo}>
                  <strong>{item.name}</strong>

                  <span>{item.role}</span>

                  <p>{item.company}</p>
                </div>
              </div>

              <div className={styles.cardGlow} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
