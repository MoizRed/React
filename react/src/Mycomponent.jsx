import {useEffect, useState} from 'react'
 
function Mycomponent() {

  let data ;
const [name , setName] = useState("null animal name");
const [info , setdescription]  = useState("null animal descriptor");
const [x , setX ] = useState("1")

const update = () =>{
  setName(data.name);
  setdescription(data.description);
  
}
  useEffect( () => {

    const fetchdata = async () => {
      console.log("got the change")
     try{
     const res = await fetch(`https://freetestapi.com/api/v1/animals/${x}`)
          data = await res.json()
           console.log(data)
         }catch(error){console.log(error)}
         
          }
         fetchdata()

   },[x]
  
  )
  
  return (
    <div>
   <p> name : {name} </p>
   <p> info: {info}</p> 

   <button onClick ={ ()=> {

var xx = Math.floor(Math.random() * (50 - 1 + 1)) + 1;

        console.log(xx)
        setX(xx)
        update()
}

}> update </button>
   
    </div>
  ) 
}
export default Mycomponent