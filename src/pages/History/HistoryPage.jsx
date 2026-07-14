import "./HistoryPage.css";

import useSessions from "../../hooks/useSessions";


function HistoryPage(){


const { sessions } = useSessions();



return (

<div className="history-page">


<h1>
📜 Study History
</h1>



<p className="history-subtitle">
Your focus journey so far
</p>




<div className="history-list">


{
sessions.length === 0 ? (

<div className="empty-history">

No sessions completed yet 🚀

</div>


) : (


sessions.map((session,index)=>(


<div 
className="history-card"
key={index}
>


<h2>
📚 {session.topic}
</h2>


<div>

⏱️ {session.duration} min

</div>


<p>

🕒 {session.date}

</p>



</div>


))


)

}



</div>



</div>

);


}


export default HistoryPage;