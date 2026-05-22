"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../styles/Footer.module.css";

const links = [
  {
    title: "Producto",
    items: ["Funcionalidades", "Beneficios", "Planes", "Demo"],
  },
  {
    title: "Soluciones",
    items: [
      "Gestión de cartera",
      "Procesos jurídicos",
      "Automatización",
      "Reportes",
    ],
  },
  {
    title: "Empresa",
    items: ["Nosotros", "Contacto", "Soporte", "Privacidad"],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.glow} />

      <div className={styles.container}>
        {/* TOP */}
        <div className={styles.top}>
          {/* BRAND */}
          <motion.div
            className={styles.brand}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className={styles.logo}>
              LexFlow
            </Link>

            <p className={styles.description}>
              Plataforma SaaS para firmas de abogados y equipos jurídicos
              enfocados en gestión de cartera, seguimiento operativo y procesos
              legales.
            </p>

            <div className={styles.socials}>
              <a href="#">IG</a>

              <a href="#">FB</a>

              <a href="#">LN</a>
            </div>
          </motion.div>

          {/* LINKS */}
          <div className={styles.linksGrid}>
            {links.map((group, index) => (
              <motion.div
                key={group.title}
                className={styles.linkColumn}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <h3>{group.title}</h3>

                <div className={styles.linkList}>
                  {group.items.map((item) => (
                    <a href="#" key={item}>
                      {item}
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* DIVIDER */}
        <div className={styles.divider} />

        {/* BOTTOM */}
        <div className={styles.bottom}>
          <p>© 2026 LexFlow. Todos los derechos reservados.</p>

          <div className={styles.bottomLinks}>
            <a href="#">Términos</a>

            <a href="#">Privacidad</a>

            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
