import React, {useState, useEffect} from 'react';
import axios from 'axios'

const apiUrl = "https://api.imgflip.com/get_memes"




export default function Meme (datas) {
 const [fetchData, fetchSet] = useState([])

 useEffect(() =>{
     axios.get(apiUrl)
     .then(res => fetchSet(res.data.data.memes))
     .catch(err => console.log(err))
 },[]);
 



return (
<div className="Fetched">
{fetchData.map(elements => <div><img src={elements.url}></img></div>)}
</div>

)}