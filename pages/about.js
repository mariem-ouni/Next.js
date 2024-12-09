// pages/about.js
//import styles from '../styles/About.module.css';
import Footer from "./Footer";
import Navbar from "./Navbar";
export default function About() {
  return (
    //<div className={styles.container}>
    <div>
      <Navbar/>
      <h1>À propos de moi</h1>
      <p>Je suis un développeur passionné par la création d'applications web modernes.</p>
      <Footer/>
    </div>
  );
}


