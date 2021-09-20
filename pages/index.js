import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ab et
          sunt ullam. Eveniet obcaecati perferendis esse dolores nemo qui
          corporis voluptates odit et, nesciunt labore vero possimus, cum
          reprehenderit.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          minus obcaecati vel earum fugiat! Labore voluptates hic dolor, eaque
          architecto ullam fugit rerum modi ad, minima ipsa velit sapiente
          laboriosam.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
