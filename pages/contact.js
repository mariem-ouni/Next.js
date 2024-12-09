// pages/contact.js
//import styles from '../styles/Home.module.css';
import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "./Contact.module.css"

export default function Contact() {
  return (
     <div>
      <Navbar/>
    
    <div className={styles.container}>
   
    
      <h1 className={styles.titel}>Contactez-moi</h1>
      <form className={styles.form}>
        <input className={styles.input } type="text" placeholder="Votre nom" />
        <input className={styles.input } type="email" placeholder="Votre email" />
        <textarea className={styles.input }  placeholder="Votre message"></textarea>
        <button className={styles.input }  type="submit">Envoyer</button>
      </form>
     
    </div>
    <Footer/>
    </div>
  );
}



