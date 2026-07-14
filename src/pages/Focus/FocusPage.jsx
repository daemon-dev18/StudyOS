import "./FocusPage.css";

import { useState, useEffect } from "react";

import useLocalStorage from "../../hooks/useLocalStorage";
import useSessions from "../../hooks/useSessions";


function FocusPage(){


const [duration,setDuration] = useState(25);

const [topic,setTopic] = useState("");

const [seconds,setSeconds] = useState(25*60);

const [running,setRunning] = useState(false);



const [focusMinutes,setFocusMinutes] =
useLocalStorage(
"focusMinutes",
0
);



const { addSession } = useSessions();





useEffect(()=>{


let timer;


if(running){


timer=setInterval(()=>{


setSeconds((prev)=>{


if(prev<=1){


setRunning(false);



setFocusMinutes(
focusMinutes + duration
);



addSession({

topic: topic || "Untitled Session",

duration: duration,

date: new Date().toLocaleString()

});



return duration*60;


}



return prev-1;


});


},1000);



}



return ()=>clearInterval(timer);



},[running]);







function changeDuration(value){


setDuration(value);

setSeconds(value*60);


}






function formatTime(){


const minutes=Math.floor(seconds/60);

const secs=seconds%60;


return `${minutes
.toString()
.padStart(2,"0")}:${secs
.toString()
.padStart(2,"0")}`;


}





return(


<div className="focus-page">



<div className="focus-container">



<h1>
🧘 ध्यान Mode
</h1>



<p>
Deep focus. No distractions.
</p>




<input

className="topic-input"

placeholder="What are you studying?"

value={topic}

onChange={(e)=>setTopic(e.target.value)}

/>





<div className="duration-buttons">


{
[15,25,45,60].map((time)=>(

<button

key={time}

onClick={()=>changeDuration(time)}

>

{time} min

</button>


))
}


</div>






<div className="timer">

{formatTime()}

</div>





<div className="focus-buttons">


<button

onClick={()=>setRunning(true)}

>

Start

</button>




<button

onClick={()=>setRunning(false)}

>

Pause

</button>




<button

onClick={()=>{

setRunning(false);

setSeconds(duration*60);

}}

>

Reset

</button>



</div>




</div>



</div>


);


}


export default FocusPage;