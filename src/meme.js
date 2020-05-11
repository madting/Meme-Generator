import React, {useState, useEffect} from 'react';
import axios from 'axios'

const apiUrl = "https://api.imgflip.com/get_memes"




export default function Meme () {
 const [fetchData, fetchSet] = useState([])

 useEffect(() =>{
     axios.get(apiUrl)
     .then(res => fetchSet(res.data.data.memes[0]))
     .catch(err => console.log(err))
 },[]);
 



return (
<div className="Fetched">
<img src={fetchData.url}></img>
</div>

)}