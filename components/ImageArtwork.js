import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div className={styles.imageContainer}>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/320px-Image_created_with_a_mobile_phone.png"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className={styles.backdrop} />
    </div>
  );
}
