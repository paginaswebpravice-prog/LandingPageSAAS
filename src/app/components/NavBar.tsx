// /components/layout/Navbar/Navbar.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../styles/NavBar.module.css";

export default function Navbar() {
  return (
    <motion.header
      className={styles.navbar}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className={styles.container}>
        {/* LOGO */}
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <span />
          </div>

          <div className={styles.logoText}>
            <strong>LexFlow</strong>
            <p>Gestión Jurídica</p>
          </div>
        </Link>

        {/* NAVIGATION */}
        <nav className={styles.nav}>
          <Link href="#funcionalidades">Funcionalidades</Link>

          <Link href="#beneficios">Beneficios</Link>

          <Link href="#planes">Planes</Link>

          <Link href="#contacto">Contacto</Link>
        </nav>

        {/* CTA */}
        <div className={styles.actions}>
          <button className={styles.demoBtn}>Solicitar demo</button>
        </div>
      </div>
    </motion.header>
  );
}
