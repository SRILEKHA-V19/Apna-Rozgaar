import React from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';


const NavMenu = (props) => {
  return (
      <div >
          <br /><br /><br />
          <Link to={'/choseSignupOption'} class="weekly-table-container p-col-12">Register</Link>
          <br /><br /><br />
          <Link to={'/choseLoginOption'} class="weekly-table-container p-col-12">Login</Link>
          <br /><br /><br /><br /><br /><br /><br />
          <div id="headline-of-of">
            <h3> <center> Instructions: </center> </h3> <br />
            <p> <small> 1. Click on Register if New User or Login for Existing User </small> </p>
            <p> <small> 2. Select language of choice </small> </p>
            <p> <small> 3. Enter details </small> </p>
            <p> <small> 4. Click on Sign Up or Register </small> </p>
            <p> <small> 5. Now you can successfully apply for jobs </small> </p>  
          </div>
          <br/><br/><br/><br/>
          <p id="helpline"> <center> Helpline Number: 1800-1234-567 </center> </p>
      </div>
  );
}

export default NavMenu;