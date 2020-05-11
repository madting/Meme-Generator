import React, {useState, useEffect} from 'react';
import axios from 'axios'

const apiUrl = "https://api.imgflip.com/get_memes"




export default function Meme () {
 const [fetchData, fetchSet] = useState([])
 const [textInput1, textSet1] = useState("")
 const [textSave1, textValue1] = useState()
 const [textInput2, textSet2] = useState()
 const [textSave2, textValue2] = useState(textInput2)


 useEffect(() =>{
     axios.get(apiUrl)
     .then(res => fetchSet(res.data.data.memes[0]))
     .catch(err => console.log(err))
 },[]);

const handleSubmit1 = (event) =>{
textValue1(textInput1)
event.preventDefault();  
textSet1("")

}  



return (
<div>
<h1>Meme Generator</h1>
<div>{textSave1}</div>
<div className="Form">
<form onClick={handleSubmit1}>    
<label> This is your upper text
<textarea type="text" value={textInput1} onChange={ e => textSet1(e.target.value)}/>
</label>
</form>
</div>
<div className="Fetched">
<img src={fetchData.url}></img>
</div>
</div>
)}