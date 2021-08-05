import Head from 'next/head';
import styles from './layout.module.css';
import { useState } from 'react';

export default function Layout({ children }) {
  const [msg, setMsg] = useState('puede tener lo que quieras');
  return (
    <>
      <Head>
        <title>Layouts Example</title>
        <h1>soy layout</h1>
        <h6>{msg}</h6>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
}
