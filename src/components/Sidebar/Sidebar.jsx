import { NavLink } from "react-router-dom";
import "./Sidebar.css";


function Sidebar() {


  const menuItems = [

    {
      name:"Dashboard",
      icon:"🏠",
      path:"/"
    },

    {
      name:"Study",
      icon:"📚",
      path:"/study"
    },

    {
      name:"Tasks",
      icon:"✅",
      path:"/tasks"
    },

    {
      name:"Planner",
      icon:"📅",
      path:"/planner"
    },

    {
      name:"Notes",
      icon:"📝",
      path:"/notes"
    },


  ];



  const focusItems = [

    {
      name:"Dhyan Mode",
      icon:"🧘",
      path:"/focus"
    },

    {
      name:"Trinetra Mode",
      icon:"👁️",
      path:"/trinetra"
    }

  ];



  const extraItems = [

    {
      name:"Analytics",
      icon:"📊",
      path:"/analytics"
    },

    {
      name:"History",
      icon:"📜",
      path:"/history"
    },

    {
      name:"Achievements",
      icon:"🏆",
      path:"/achievements"
    },

    {
      name:"Settings",
      icon:"⚙️",
      path:"/settings"
    }

  ];



  function renderItems(items){


    return items.map((item)=>(


      <NavLink

        key={item.name}

        to={item.path}

        className={({isActive}) =>
          isActive
          ? "sidebar-link active"
          : "sidebar-link"
        }

      >

        <span>
          {item.icon}
        </span>


        {item.name}


      </NavLink>


    ));


  }



  return (

    <aside className="sidebar">


      <div className="logo">

        🧠 StudyOS

      </div>



      <div className="menu">

        {renderItems(menuItems)}


      </div>



      <div className="section-title">

        Focus

      </div>


      <div className="menu">

        {renderItems(focusItems)}

      </div>



      <div className="section-title">

        Progress

      </div>


      <div className="menu">

        {renderItems(extraItems)}

      </div>


    </aside>

  );

}


export default Sidebar;