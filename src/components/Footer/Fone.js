import React from 'react';
import "./Fone.css"

const Fone = () => {
  return(
    <footer>
      {/* <!-- Footer main --> */}
      <div class="ft-main">
        <div class="ft-main-item">
          <h2 class="ft-title">Stay Updated</h2>
          <p>Get free updates before others do!</p>
          <form>
            <input type="email" name="email" placeholder="Enter email address"/>
            <input type="submit" value="Subscribe"/>
          </form>
        </div>
      </div>
    
      {/* <!-- Footer social --> */}
      <div class="ft-social">
        <ul class="ft-social-list">
          <li><a class="btn btn-primary btn-floating m-1" Style="background-color: #0900ff" href="https://www.facebook.com/" role="button"><i class="fab fa-facebook-f"></i></a></li>
          <li><a class="btn btn-primary btn-floating m-1" Style="background-color: #Ff3f00" href="https://www.google.com/" role="button"><i class="fab fa-google"></i></a></li>
          <li><a class="btn btn-primary btn-floating m-1" Style="background-color: #00a1ff" href="https://twitter.com/Anil_NITT" role="button"><i class="fab fa-twitter"></i></a></li>
          <li><a class="btn btn-primary btn-floating m-1" Style="background-color: #E900ff" href="https://t.co/5QFwESLxOj" role="button"><i class="fab fa-instagram"></i></a></li>
          <li><a class="btn btn-primary btn-floating m-1" Style="background-color: black" href="https://github.com/AnilNITT" role="button"><i class="fab fa-github"></i></a></li>
          <li><a class="btn btn-primary btn-floating m-1" Style="background-color: #0050ff" href="https://www.linkedin.com/in/anil-patidar/" role="button"><i class="fab fa-linkedin-in"></i></a></li>
          <li><a class="btn btn-primary btn-floating m-1" Style="background-color: red" href="https://www.youtube.com/" role="button"><i class="fab fa-youtube"></i></a></li>
        </ul>
      </div>
    
      
      <div class="ft-main">
        <div class="ft-main-item">
          <h2 class="ft-title">About</h2>
          <ul>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Customers</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div class="ft-main-item">
          <h2 class="ft-title">Resources</h2>
          <ul>
            <li><a href="#">Docs</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">eBooks</a></li>
            <li><a href="#">Webinars</a></li>
          </ul>
        </div>
        <div class="ft-main-item">
          <h2 class="ft-title">Contact</h2>
          <ul>
            <li><a href="#">Help</a></li>
            <li><a href="#">Sales</a></li>
            <li><a href="#">Advertise</a></li>
          </ul>
        </div>
      </div>
      {/* <!-- Footer legal --> */}
      {/* <div class="ft-legal">
        <ul class="ft-legal-list">
          <li><a href="#">Terms &amp; Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li>&copy; 2021 by Anil Patidar</li>
        </ul>
      </div> */}


    </footer>
  )
};

export default Fone;
