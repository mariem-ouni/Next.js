
import Navbar from "./Navbar"

import Footer from "./Footer"
 
export default function Home() {
  return (
    <div>
      <Navbar/>
      <h1>Bienvenue sur mon Portfolio !</h1>
      <img
        src='/photo1.jpg'
        alt="Photo de profil de mariem"
        width={300}
        height={300}
      />
      <Footer/> 
    </div>
  );
}