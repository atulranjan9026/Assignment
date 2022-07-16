import React from "react";
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';

const App = () => {

   return (
      <>
    
         <div className="container-fluid">
            <div class="d-flex justify-content-center mb-4" > <img src="https://res.cloudinary.com/dg89ed6qm/image/upload/c_scale,h_112/v1657859384/new%20photo/logo_cwchkl.png" alt="myPic" className="card__img" />
            </div>

            <div className="row ">
               <div className="col-md-4 col-sm-12 mt-2">
                  <img class="img-fluid" src="https://res.cloudinary.com/dg89ed6qm/image/upload/v1657859383/new%20photo/1_ezypiq.png" alt="im" />
               </div>

               <div className="col-md-8 col-sm-12">

                  <div className="row">
                     <h6 class="fs-6   "> <b> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</b></h6>
                  </div>
                  <div className="row ms-3">
                     <h6><span>&#8226;</span> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</h6>
                     <h6><span>&#8226;</span> C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </h6>
                  </div>
                  <div className="row "> <img class="img-fluid" src="https://res.cloudinary.com/dg89ed6qm/image/upload/c_scale,h_316/v1657859384/new%20photo/2_mrtv14.png" alt="im" />
                     <h6>Government of India has awarded the <b>"National Energy Conservation Award 2018".</b> Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</h6>
                  </div>
               </div>
            </div>

            <div className="row text-center" >
               <div>
                 <p> <b>  INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </b> </p>
               </div>

               <div >
                  <img class="img-fluid " src="https://res.cloudinary.com/dg89ed6qm/image/upload/c_scale,h_443/v1657859385/new%20photo/3_eeksuy.png" alt="tol" />
                  <p className="text-center" > Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
                 <hr className="hr" />
                  
               </div>

               <div>
                  <p className="text-center" > <b> C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b></p>
                  <p className="justify-content" >  CHEMICALS & PROCESS 
                   <span style={{color:"red"}}> | </span>
                  POWER <span style={{color:"red"}}> | </span> WATER & WASTE WATER <span style={{color:"red"}}> | </span> OILS & GAS <span style={{color:"red"}}> | </span> PHARMA <span style={{color:"red"}}> | </span> SUGARS & DISTILLERIES <span style={{color:"red"}}> | </span> PAPER & PULP <span style={{color:"red"}}> | </span> MARINE & DEFENCE <span style={{color:"red"}}> | </span> METAL & MINING <span style={{color:"red"}}> | </span> FOOD & BEVERAGE <span style={{color:"red"}}> | </span> PETROCHEMICAL & REFINERIES<span style={{color:"red"}}> | </span> SOLAR <span style={{color:"red"}}> | </span> BUILDING <span style={{color:"red"}}> | </span> HVAC <span style={{color:"red"}}> | </span> FIRE FIGHTING<span style={{color:"red"}}> | </span> AGRICULTURE & RESIDENTIAL</p>
               </div>
            </div>

            <div className=" row bg-danger text-light   mx-1 mb-2 pt-4 pb-3" >
               
               <div className="col-4   pl-1" ><p className="text-center"> <CallRoundedIcon/><sub> Toll free 1800 200 1234 </sub>  </p></div>

               <div className="col-4  " ><p className="text-center"><FacebookSharpIcon/><sub> www.facebook.com/cripumps</sub></p></div>
               
               <div className="col-4  " ><p className="text-center"><LanguageSharpIcon/><sub> www.cripump.
               com</sub>
               <a href="https://www.crigroups.com/"></a></p></div>
            </div>

         </div>
      </>
   )
};

export default App;



