import React, { Component } from 'react'
import "./main.scss"
import MainProps from './MainProps'
export default class Main extends Component {
  render() {
    return (
      <>

   
       <main>
       <h2>Yangliklar</h2>

       <section className="main__container">


        <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-10">
               <MainProps
                  rasm="../imgs/diplom.png"
                  title="Markazimiz hodimining katta yutug’i"    
                  paragraph="Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Dolorem quaerat illo eos consequatur numquam at, nostrum veritatis veniam autem maiores atque, dicta, rerum cum maxime facere eveniet eum nobis non..."   
               />
            </div>

            {/* 2 */}

            <div className="col-lg-3 col-md-6 col-sm-10">
               <MainProps
                  rasm="../imgs/majlis.png"
                  title="Markazimiz hodimining katta yutug’i"
                  paragraph="Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Dolorem quaerat illo eos consequatur numquam at, nostrum veritatis veniam autem maiores atque, dicta, rerum cum maxime facere eveniet eum nobis non..."   
               />
            </div>

            {/* 3 */}

            <div className="col-lg-3 col-md-6 col-sm-10">
               <MainProps
                  rasm="../imgs/haykal.png"
                  title="Markazimiz hodimining katta yutug’i"    
                  paragraph="Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Dolorem quaerat illo eos consequatur numquam at, nostrum veritatis veniam autem maiores atque, dicta, rerum cum maxime facere eveniet eum nobis non..."   
               />
            </div>

            {/* 4 */}


            <div className="col-lg-3 col-md-6 col-sm-10">
               <MainProps
                rasm="../imgs/yakudza.png"
                title="Markazimiz hodimining katta yutug’i"
                paragraph="Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Dolorem quaerat illo eos consequatur numquam at, nostrum veritatis veniam autem maiores atque, dicta, rerum cum maxime facere eveniet eum nobis non..."   
               />
            </div>

            {/* 5 */}

            <div className="col-lg-3 col-md-6 col-sm-10">
               <MainProps
                rasm="../imgs/boyoqchi.png"
                title="Markazimiz hodimining katta yutug’i" 
                paragraph="Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Dolorem quaerat illo eos consequatur numquam at, nostrum veritatis veniam autem maiores atque, dicta, rerum cum maxime facere eveniet eum nobis non..."   
               />
            </div>

            {/* 6 */}

            <div className="col-lg-3 col-md-6 col-sm-10">
               <MainProps
                rasm="../imgs/kiber_sport.png"
                title="Markazimiz hodimining katta yutug’i"    
                paragraph="Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Dolorem quaerat illo eos consequatur numquam at, nostrum veritatis veniam autem maiores atque, dicta, rerum cum maxime facere eveniet eum nobis non..."   
               />
            </div>

            {/* 7 */}

            <div className="col-lg-3 col-md-6 col-sm-10">
               <MainProps
                rasm="../imgs/milliy.png"
                title="Markazimiz hodimining katta yutug’i"   
                paragraph="Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Dolorem quaerat illo eos consequatur numquam at, nostrum veritatis veniam autem maiores atque, dicta, rerum cum maxime facere eveniet eum nobis non..."   
               />
            </div>

            {/* 8 */}

            <div className="col-lg-3 col-md-6 col-sm-10">
               <MainProps
                rasm="../imgs/muzey.png"
                title="Markazimiz hodimining katta yutug’i"    
                paragraph="Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Dolorem quaerat illo eos consequatur numquam at, nostrum veritatis veniam autem maiores atque, dicta, rerum cum maxime facere eveniet eum nobis non..."   
               />
            </div>
        </div>


       </section>




       </main>
   

      </>
    )
  }
}
