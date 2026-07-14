import "./GoalCard.css";


function GoalCard(){

  return (

    <div className="goal-card">

      <h2>
        🎯 Today's Mission
      </h2>


      <div className="goal-item">
        ☐ Complete React Hooks
      </div>


      <div className="goal-item">
        ☐ Practice JavaScript
      </div>


      <div className="goal-item">
        ☑ Revise HTML
      </div>


    </div>

  );

}


export default GoalCard;