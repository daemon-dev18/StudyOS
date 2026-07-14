import "./ScheduleCard.css";


function ScheduleCard() {


  const schedule = [

    {
      time: "09:00 AM",
      subject: "HTML Revision"
    },

    {
      time: "11:00 AM",
      subject: "React Learning"
    },

    {
      time: "04:00 PM",
      subject: "Project Work"
    },

    {
      time: "08:00 PM",
      subject: "DSA Practice"
    }

  ];



  return (

    <div className="schedule-card">


      <h2>
        📅 Today's Schedule
      </h2>



      <div className="schedule-list">


        {
          schedule.map((item,index)=>(

            <div 
              className="schedule-item"
              key={index}
            >


              <span>
                {item.time}
              </span>


              <p>
                {item.subject}
              </p>


            </div>

          ))
        }


      </div>



    </div>

  );

}


export default ScheduleCard;