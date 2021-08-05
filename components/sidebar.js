import Link from 'next/link'
import styles from './sidebar.module.css'
import { useState } from 'react';
export default function Sidebar() {
  const [msg, setMsg] = useState('soy el estado de Sidebar');
  return (
    <nav className={styles.nav}>
      <h2> soy sidebar</h2>
      <h6>{msg}</h6>
      <input className={styles.input} placeholder="Search..." />
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </nav>
  )
}
