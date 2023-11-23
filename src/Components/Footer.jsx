import React from 'react'
import './footer.css'
function Footer() {
  return (
    <>
      <footer className="site-footer text-dark mt-5 " style={{backgroundColor:'#00848c'}}>
    
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6 mt-4">
          <h6>About</h6>
          <p className="text-justify">MoviD is a cinima related application that helps better understanding about a movie. And also helps users to post their reviews and ratings</p>
        </div>

        <div className="col-xs-6 col-md-3 mt-4">
          <h6>Technologies</h6>
          <ul className="footer-links">
            <li><a style={{textDecoration:'none'}} className='text-dark' href="https://react.dev/">React</a></li>
            <li><a style={{textDecoration:'none'}} className='text-dark' href="https://www.w3schools.com/js/DEFAULT.asp">Javascript</a></li>
            <li><a style={{textDecoration:'none'}} className='text-dark' href="https://www.npmjs.com/package/json-server">Json Server</a></li>
            <li><a style={{textDecoration:'none'}} className='text-dark' href="https://axios-http.com/docs/intro">Axios Library</a></li>
            <li><a style={{textDecoration:'none'}} className='text-dark' href="https://www.w3schools.com/html/html_css.asp">Html,Css</a></li>
            {/* <li><a style={{textDecoration:'none'}} className='text-danger' href="http://scanfcode.com/category/templates/">Templates</a></li> */}
          </ul>
        </div>

        <div className="col-xs-6 col-md-3 mt-4">
          <h6>Quick Links</h6>
          <ul className="footer-links">
            <li><a style={{textDecoration:'none'}} className='text-dark' href="/">About Us</a></li>
            <li><a style={{textDecoration:'none'}} className='text-dark' href="http://wa.me/919946241459">Contact Us</a></li>
            <li><a style={{textDecoration:'none'}} className='text-dark' href="/home">Home</a></li>
            <li><a style={{textDecoration:'none'}} className='text-dark' href="/">LandingPage</a></li>
            <li><a style={{textDecoration:'none'}} className='text-dark' href="/home/">Reviews</a></li>
          </ul>
        </div>
      </div>
      <hr/>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-6 col-xs-12">
          <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by 
       MuviD
          </p>
        </div>

        <div className="col-md-4 col-sm-6 col-xs-12">
          <ul className="social-icons">
            <li><a style={{textDecoration:'none'}}  className="facebook text-danger" href="#"><i className="fa-brands fa-facebook"></i></a></li>
            <li><a style={{textDecoration:'none'}}  className="twitter text-danger" href="#"><i className="fa-brands fa-twitter"></i></a></li>
            <li><a style={{textDecoration:'none'}}  className="dribbble text-danger" href="#"><i className="fa-brands fa-linkedin"></i></a></li>
            <li><a style={{textDecoration:'none'}}  className="linkedin text-danger" href="#"><i className="fa-brands fa-github"></i></a></li>   
          </ul>
        </div>
      </div>
    </div>
</footer>
    </>
  )
}

export default Footer