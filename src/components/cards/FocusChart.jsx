import "./FocusChart.css";


function FocusChart(){


const data=[

{
day:"Mon",
hours:2
},

{
day:"Tue",
hours:3
},

{
day:"Wed",
hours:1
},

{
day:"Thu",
hours:2.5
},

{
day:"Fri",
hours:4
},

{
day:"Sat",
hours:1.5
},

{
day:"Sun",
hours:2.5
}

];



return(

<div className="focus-chart">


<h2>
📊 Weekly Focus
</h2>



<div className="chart">


{
data.map((item,index)=>(


<div
className="chart-row"
key={index}
>


<span>
{item.day}
</span>



<div className="bar">


<div
style={{
width:`${item.hours*25}%`
}}
></div>


</div>



<p>
{item.hours}h
</p>



</div>


))
}


</div>



</div>

);


}


export default FocusChart;