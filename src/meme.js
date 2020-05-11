import React, {useState, useEffect} from 'react';
import axios from 'axios'

const apiUrl = "https://api.imgflip.com/get_memes"




export default function Meme () {
 const [fetchData, fetchSet] = useState([])
 const [textInput1, textSet1] = useState()
 const [textSave1, textValue1] = useState(textInput1)
 const [textInput2, textSet2] = useState()
 const [textSave2, textValue2] = useState(textInput2)


 useEffect(() =>{
     axios.get(apiUrl)
     .then(res => fetchSet(res.data.data.memes[0]))
     .catch(err => console.log(err))
 },[]);


const handleSubmit = (event) =>{
textValue1(textInput1)
event.preventDefault();  
textSet1("")
textValue2(textInput2)
event.preventDefault();  
textSet2("")

}  




return (
<div>
<h1>_KnOw yOuR MeMe_</h1>

<div className="Form">
<form>    
<label> 
<textarea placeholder="What goes up!"  cols="60" rows="2" type="text" value={textInput1} onChange={ e => textSet1(e.target.value)}/>
{/* <div><button onClick={handleSubmit1}>Post your Meme</button></div> */}
</label>
</form>
<form>    
<label> 
<textarea  placeholder="Must come down!" cols="60" rows="2" type="text" value={textInput2} onChange={ e => textSet2(e.target.value)}/>
<div><button onClick={handleSubmit}>Post your Meme</button></div>
</label>
</form>
</div>

<div className="Image">
<div className="textform1">{textSave1}</div>

<img src={fetchData.url}/>

<div className="textform2">{textSave2}</div>
</div>


</div>
)}