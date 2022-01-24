import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import ImageArtwork from '../components/ImageArtwork';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className={styles.containerM}>
        <Link href="/">INDEX</Link>
        <div>
          <h1 className={styles.overlay}>JUST ADD CREATIVITY</h1>
          <video className={styles.video} autoPlay playsInLine loop>
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}
