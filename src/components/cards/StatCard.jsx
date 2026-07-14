import "./StatCard.css";


function StatCard({icon,title,value}){


return (

<div className="stat-card">


<h2>
{icon}
</h2>


<p>
{title}
</p>


<strong>
{value}
</strong>


</div>

);


}


export default StatCard;