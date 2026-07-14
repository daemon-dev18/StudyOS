import useLocalStorage from "./useLocalStorage";


function useSessions(){


const [sessions,setSessions] =
useLocalStorage(
"sessions",
[]
);



function addSession(session){


setSessions([

...sessions,

session

]);


}



return {

sessions,

addSession

};


}


export default useSessions;