import React from 'react'
import './xclan.css'
import Navbars from './Navbars'
import Footer from './Footer'
import { Col, Row } from 'react-bootstrap'
import Carousal from './Carousal'

function Xclan() {
  return (
    <>
        <div style={{marginTop:''}}>
            <Navbars />
        </div>

	{/* <div class="wrapper" >
		<div class="gallery " style={{marginTop:''}}>
			<ul >
				<li style={{marginTop:'200px'}}><img src="https://cdn.visordown.com/edited-msl-buyers-guide--0048_web.JPG?itok=mr5xrK_5"/></li>
				<li style={{marginTop:'200px'}}><img src="https://www.pngall.com/wp-content/uploads/13/Motocross-Dirt-Bike-PNG-Images.png"/></li>
				<li style={{marginTop:'200px'}}><img src="https://th.bing.com/th/id/R.06841d658a43ec2ba40f8739dd71a738?rik=aVdsIYfv1T89%2bA&riu=http%3a%2f%2fwww.beautifullife.info%2fwp-content%2fuploads%2f2018%2f02%2fgeneral-23.jpg&ehk=GjAo6bohWuICzU43WO%2b%2f7scbo8ZkQyc6gxazxGwfHPg%3d&risl=&pid=ImgRaw&r=0"/></li>
				<li style={{marginTop:'200px'}}><img src="https://cdn1.matadornetwork.com/blogs/1/2019/01/Ride-The-Himalayas-motorcyclist-with-his-bike-in-front-of-a-lake-and-the-mountainscape-1200x852.jpg"/></li>
				<li ><img src="https://wallup.net/wp-content/uploads/2019/09/976591-2017-ktm-350-sx-f-dirtbike-bike-dirt-motorbike-motorcycle-moto-motocross.jpg"/></li>
				<li><img src="https://alchetron.com/cdn/himalayan-motorcycle-6f50e1ae-52f6-49a4-b5d5-2584aece795-resize-750.jpeg"/></li>
				<li><img src="https://i1.wp.com/flinjuryfirm.com/personal-injury-lawyers/blog/wp-content/uploads/2016/01/Young-Man-Riding-Big-Bike-Motorcycle.jpg?fit=1200%2C899&ssl=1"/></li>
				<li><img src="https://cdn.motor1.com/images/mgl/vXQxA/s1/riding-gear-safety-ratings.jpg"/></li>
				<li><img src="https://th.bing.com/th/id/R.b1cc687760f992a27e6250611fca0128?rik=bb524tOFWjJpeg&riu=http%3a%2f%2flwmag.co.za%2fwp-content%2fuploads%2f2014%2f09%2fIMG_7579MX.jpg&ehk=qb1j7FY%2b6JiFvO4aaN1ZN%2fp8h79RdxTjlapHVOwrXns%3d&risl=&pid=ImgRaw&r=0"/></li>
                <li><img src="https://www.marsalisilaw.com/wp-content/uploads/2019/12/Tips-for-Safe-Motorcycling-at-Night-1-scaled.jpg"/></li>
				<li><img src="https://img.freepik.com/premium-photo/cyberpunk-motorbike-ai-generated-image_785551-2.jpg"/></li>
				<li><img src="https://img.freepik.com/premium-photo/man-motorcycle-with-neon-neon-sign-that-says-word_926199-31503.jpg"/></li>

			</ul>
		</div>
		<p class="attribution">Images featured in this demo are the works of <a href="https://d.hatena.ne.jp/koochinko">Mernan Behairi</a>. Inspired by an old post of <a href="https://twitter.com/SohTanaka">@Sohtanaka</a>. It originally uses jQuery. Access original <a href="https://web.archive.org/web/20110323065449/http://www.sohtanaka.com/web-design/fancy-thumbnail-hover-effect-w-jquery/">tutorial</a> and <a href="https://web.archive.org/web/20110323065952/http://www.sohtanaka.com/web-design/examples/image-zoom/">demo</a>.</p>
	</div> */}
    
    <div className='rvs w-100'>
        
        <Row className=' d-flex justify-content-evenly w-100 ms-4 me-2 mb-5' style={{height:'100%'}}>
            <Col sm={12} lg={4} md={6} xl={3} style={{marginTop:'150px'}} >
            <img style={{borderRadius:'30%'}} src="https://cdn.visordown.com/edited-msl-buyers-guide--0048_web.JPG?itok=mr5xrK_5" className='iimg' />
            </Col>
            <Col sm={12} lg={4} md={6} xl={3} style={{marginTop:'150px'}}>
            <img className='iimg' style={{borderRadius:'30%'}} src="https://th.bing.com/th/id/R.f7592b3ccdabf820b4c1cad5e221ec65?rik=Dg%2bJ4VI6M0vIWA&riu=http%3a%2f%2fwww.motosport.com%2fmotoblog%2f2015%2fMud-Riding-Tips-2.jpg&ehk=1jn6zD%2fdVgGG2uAMDO8E%2f9rjto8HIySGnCR1Fj%2bWkRE%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" />
            </Col>
            <Col sm={12} lg={4} md={6} xl={3} style={{marginTop:'150px'}}>
            <img className='iimg' style={{borderRadius:'30%'}} src="https://th.bing.com/th/id/R.06841d658a43ec2ba40f8739dd71a738?rik=aVdsIYfv1T89%2bA&riu=http%3a%2f%2fwww.beautifullife.info%2fwp-content%2fuploads%2f2018%2f02%2fgeneral-23.jpg&ehk=GjAo6bohWuICzU43WO%2b%2f7scbo8ZkQyc6gxazxGwfHPg%3d&risl=&pid=ImgRaw&r=0" />        </Col>
            <Col sm={12} lg={4} md={6} xl={3} style={{marginTop:'150px'}}>
            <img style={{borderRadius:'30%'}} src="https://cdn1.matadornetwork.com/blogs/1/2019/01/Ride-The-Himalayas-motorcyclist-with-his-bike-in-front-of-a-lake-and-the-mountainscape-1200x852.jpg" className='iimg'/>
            </Col>
            <Col sm={12} lg={4} md={6} xl={3} style={{marginTop:'100px'}}>
            <img style={{borderRadius:'30%'}} src="https://i1.wp.com/flinjuryfirm.com/personal-injury-lawyers/blog/wp-content/uploads/2016/01/Young-Man-Riding-Big-Bike-Motorcycle.jpg?fit=1200%2C899&ssl=1" className='iimg'/>
            </Col>
            <Col sm={12} lg={4} md={6} xl={3} style={{marginTop:'100px'}}>
            <img style={{borderRadius:'30%'}} src="https://cdn.motor1.com/images/mgl/vXQxA/s1/riding-gear-safety-ratings.jpg" className='iimg'/>
            </Col>
            <Col sm={12} lg={4} md={6} xl={3} style={{marginTop:'100px'}}>
            <img style={{borderRadius:'30%'}} src="https://th.bing.com/th/id/R.b1cc687760f992a27e6250611fca0128?rik=bb524tOFWjJpeg&riu=http%3a%2f%2flwmag.co.za%2fwp-content%2fuploads%2f2014%2f09%2fIMG_7579MX.jpg&ehk=qb1j7FY%2b6JiFvO4aaN1ZN%2fp8h79RdxTjlapHVOwrXns%3d&risl=&pid=ImgRaw&r=0" className='iimg' />
            </Col>
            <Col sm={12} lg={4} md={6} xl={3} style={{marginTop:'100px'}}>
            <img style={{borderRadius:'30%'}} src="https://www.marsalisilaw.com/wp-content/uploads/2019/12/Tips-for-Safe-Motorcycling-at-Night-1-scaled.jpg" className='iimg'/>
            </Col>
            <Col sm={12} lg={4} md={6} xl={3} style={{marginTop:'100px'}}>
            <img style={{borderRadius:'30%'}} src="https://img.freepik.com/premium-photo/cyberpunk-motorbike-ai-generated-image_785551-2.jpg" className='iimg mb-5'/>
            </Col>
            <Col sm={12} lg={4} md={6} xl={3} style={{marginTop:'100px'}}>
            <img src="https://img.freepik.com/premium-photo/man-motorcycle-with-neon-neon-sign-that-says-word_926199-31503.jpg" className=' mb-5 iimg' style={{borderRadius:'30%'}}/>
            </Col>
        </Row>
    </div>
    <Footer/>
    </>
  )
}

export default Xclan