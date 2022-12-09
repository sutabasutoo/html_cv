// petit bloc en bas de page
import React from "react"
import { homeData } from "../../dummyData"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box'>
            <ul className='flex'>
              <li>Conditions d'utilisation</li>
              <li>Politique de confidentialité</li>
              <li>Favoris</li>
            </ul>
            <p>© 2022 SHUDDER. Tous les droits sont réservés. La duplication et la copie des vidéos et émissions de cette plate-forme sont strictement interdites.</p>
          </div>
          <div className='box'>
            <h3>Suivez-nous !</h3>
            <i className='fab fa-facebook-f'></i>
            <i className='fab fa-twitter'></i>
            <i className='fab fa-github'></i>
            <i className='fab fa-instagram'></i>
          </div>
          <div className='box'>
            <h3>Installez Shudder</h3>
            <div className='img flexSB'>
              <img src='https://img.icons8.com/color/48/000000/apple-app-store--v3.png' />
              <span>App Store</span>
              <img src='https://img.icons8.com/fluency/48/000000/google-play.png' />
              <span>Google Play Store</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
