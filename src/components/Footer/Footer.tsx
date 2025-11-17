import styles from './Footer.module.scss'; // Import the SCSS module

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {currentYear} Gwang-il Jeon. All rights reserved.</p>
        <p>Built with Next.js, Tailwind CSS, Framer Motion.</p>
      </div>
    </footer>
  );
}
