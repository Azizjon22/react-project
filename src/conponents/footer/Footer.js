import React, { Component } from 'react'
import "./footer.scss"
import "./footer.css"

export default class Footer extends Component {
  render() {
    return (
      <>


        <footer className="footer__footer">

          <section className="footer__footer__section">

            <div className="footer__footer__cards">

            <div className="footer__section__cards__card card1">
              <div className="logoo"> <img src='../imgs/flogo.png' alt='logo'/></div>
              <h3>Biz haqimizda</h3>
              <p>biz iste'dodli talabalar va noyob startapni birlashtirishga yordam berishni xohlaymiz</p>
            </div>


            <div className="footer__footer__cards__card card2">
              <h3>Markaz</h3>
              <p>markaz haqda</p>
              <p>markaz bolmi</p>
              <p>markaz tuzlahi</p>
            </div>


            <div className="footer__footer__cards__card card3">
              <h3>Xizmatlar</h3>
              <p>veb dasturlaw xizmati</p>
              <p>mobil ilovalar ishlab chqish</p>
              <p>audit xizmat</p>
              <p>mobile dasturlash xizmaati</p>
              <p>BPR xizmati</p>
              <p>Texnik hujjat ishlab chqish xizmati</p>
              <p>infografik tayyorlash xizmati</p>
            </div>



            <div className="footer__footer__cards__card card4">
              <h3>Bizning manzil</h3>
              <p>Toshkent shahar,chilonzor tumani Kotta qani kochasi 7uy. 100105</p>
              <h4>pochda indeksi</h4>
              <p>100105</p>

              <div className="instaa">
                
                <div className="instaa__instaa">
                <a href='tel:'>+998(95) 100-10-66</a>
                  <img src='../imgs/insta.svg' alt=''/>
                  <img src='../imgs/insta.svg' alt=''/>
                  <img src='../imgs/insta.svg' alt=''/>
                </div>
              </div>
              
            </div>


            </div>

          </section>

        </footer>
        
      </>
    )
  }
}
