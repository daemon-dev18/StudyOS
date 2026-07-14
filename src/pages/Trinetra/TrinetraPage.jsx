import "./TrinetraPage.css";

import { useRef, useState } from "react";


function TrinetraPage(){


const videoRef = useRef(null);

const [cameraOn,setCameraOn] = useState(false);



async function startCamera(){


try{


const stream = await navigator.mediaDevices.getUserMedia({

video:true

});



videoRef.current.srcObject = stream;


setCameraOn(true);



}catch(error){


alert("Camera permission required");


}



}





function stopCamera(){


const stream = videoRef.current.srcObject;


if(stream){


stream.getTracks().forEach(track=>track.stop());


}


videoRef.current.srcObject=null;


setCameraOn(false);


}






return (

<div className="trinetra-page">


<div className="trinetra-container">



<h1>
👁️ त्रिनेत्र Mode
</h1>



<p>
Smart camera based focus tracking
</p>




<div className="camera-box">


<video

ref={videoRef}

autoPlay

playsInline

className="camera-video"

/>



{
!cameraOn &&

<div className="camera-placeholder">

Camera Off

</div>

}



</div>






<div className="tracking-status">


<h3>
Status
</h3>


<p>

{
cameraOn
?
"🟢 Monitoring Focus"
:
"⚪ Camera Not Started"

}

</p>



</div>







{

cameraOn ?

<button onClick={stopCamera}>

Stop Camera

</button>


:

<button onClick={startCamera}>

Start Camera

</button>


}





</div>


</div>

);


}


export default TrinetraPage;