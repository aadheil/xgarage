import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
function Carousal() {
    const [index, setIndex] = useState(0);
    const [indexx, setIndexx] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

    const handleSelects = (selectedIndexx) => {
        setIndexx(selectedIndexx);
      };
  return (
    <div className='mt-5 mb-5 d-flex  justify-content-evenly row'>
       <div className='car-1 col-lg-6 mb-5' >
        <h2 className='text-center fw-bolder mb-4'>Adventure Bikes</h2>
         <Carousel activeIndex={index} style={{width:'95%'}} onSelect={handleSelect}>
           <Carousel.Item>
             <img style={{height:'400px',width:'100%'}} src='https://mcn-images.bauersecure.com/pagefiles/676760/africa_twin_as_out.jpg' text="First slide" />
             <Carousel.Caption>
               <h3 className=''>Honda Africa Twin</h3>
               <a href='https://www.hondabigwing.in/africatwin/#copy' style={{textDecoration:'none'}} target='_blank'>See full details</a>
             </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item>
           <img style={{height:'400px',width:'100%'}} src='https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1bqSRp.img?w=600&h=337&m=4&q=99' text="First slide" />
             <Carousel.Caption>
               <h3>Xpulse Rally Edition</h3>
               <a href='https://www.heromotocorp.com/en-in/motorcycles/performance/xpulse-200-4v.html' style={{textDecoration:'none'}} target='_blank'>See full details</a>
             </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item>
           <img style={{height:'400px',width:'100%'}} src='https://bikeadvice.in/wp-content/uploads/2023/11/Royal-Enfield-Himalayan-452-Pic.jpg' text="First slide" />
             <Carousel.Caption>
               <h3>RE Himalayan</h3>
               <a href='https://www.royalenfield.com/in/en/motorcycles/himalayan/' style={{textDecoration:'none'}} target='_blank'>See full details</a>

             </Carousel.Caption>
           </Carousel.Item>
         </Carousel>
       </div>

       <div className='car-1 col-lg-6 ' >
       <h2 className='text-center fw-bolder mb-4'>Premium Bikes</h2>

         <Carousel activeIndex={indexx} style={{width:'95%'}} onSelect={handleSelects}>
           <Carousel.Item>
             <img style={{height:'400px',width:'100%'}} src='https://cdn.visordown.com/edited-msl-buyers-guide--0048_web.JPG?itok=mr5xrK_5' text="First slide" />
             <Carousel.Caption>
               <h3>kawasaki versys 650</h3>
               <a href='https://kawasaki-india.com/bikes/versys-650/' style={{textDecoration:'none'}} target='_blank'>See full details</a>
             </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item>
           <img style={{height:'400px',width:'100%'}} src='https://www.motoo.com.br/fotos/2020/6/960_720/triumph1_17062020_14204_960_720.jpg' text="First slide" />
             <Carousel.Caption>
               <h3>Triumph Tiger 900</h3>
               <a href='https://www.triumphmotorcycles.in/motorcycles/adventure/tiger-900' style={{textDecoration:'none'}} target='_blank'>See full details</a>
             </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item>
           <img style={{height:'400px',width:'100%'}} src='https://rustsports.com/wp-content/uploads/2020/03/P90322916_highRes_bmw-r-1250-gs-hp-09--scaled.jpg' text="First slide" />
             <Carousel.Caption>
               <h3>BMW R 1250 GS</h3>
               <a href='https://www.bmw-motorrad.in/en/models/adventure/r1250gs.html' style={{textDecoration:'none'}} target='_blank'>See full details</a>

             </Carousel.Caption>
           </Carousel.Item>
         </Carousel>
       </div>

      
    </div>
  )
}

export default Carousal