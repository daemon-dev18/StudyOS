import "./Navbar.css";


function Navbar(){

  return(

    <nav className="navbar">


      <div className="navbar-left">

        <h2>
          Welcome back 👋
        </h2>

        <p>
          Ready to conquer your goals today?
        </p>

      </div>



      <div className="navbar-right">


        <div className="streak">

          🔥 7 Day Streak

        </div>



        <div className="profile">

          K

        </div>


      </div>


    </nav>

  );

}


export default Navbar;