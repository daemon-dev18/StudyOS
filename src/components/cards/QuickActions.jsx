import "./QuickActions.css";


function QuickActions(){


const actions=[

"➕ Add Task",

"📚 Study",

"📝 Notes",

"🧘 Focus"

];


return(

<div className="quick-card">


<h2>
⚡ Quick Actions
</h2>


<div className="quick-list">


{
actions.map((action,index)=>(

<button key={index}>

{action}

</button>

))
}


</div>


</div>

);


}


export default QuickActions;