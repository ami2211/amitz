import { Typography ,TextField ,Button } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Addmovies = (props) => {
  var[addmovies,setmovie]= useState(props.data)

  const handlechange =(e)=>{
    const {name, value}=e.target
    setmovie({...addmovies,[name]:value})
    console.log(addmovies)
  }
  const savedata=()=>{
    console.log("Button clicked")
    console.log(addmovies);
    if(props.method==="post"){
      
    axios.post("http://localhost:3005/movies",addmovies)
    .then(response=>{
      console.log(response.data)
      alert("Sucesfully added")
    })
    .catch(error=>{
      alert("faild")
    })}
    
    else if(props.method=="put"){
    axios.put("http://localhost:3005/movies/"+addmovies.moviename,addmovies)
    .then((response)=>{
      console.log("put data"+response.data)
      alert("success")
      window.location.reload(false);
    })
    .catch((err)=>{
      console.log(err)
    })}

  }
  return (    
    <div>
<Typography>Add Movies</Typography><br></br>
<br></br>
<TextField  label="moviename" variant="outlined" name='moviename' value={addmovies.moviename} onChange={handlechange}/><br>
</br><br></br>
<TextField  label="Director" variant="outlined" name='director'value={addmovies.director} onChange={handlechange} /><br></br>
<br></br>
<TextField  label="Language" variant="outlined" name='language'value={addmovies.language} onChange={handlechange}/>
<br></br>
<br></br>
<TextField  label="Genere" variant="outlined" name='genere'value={addmovies.genere} onChange={handlechange}/>
<br></br>
<br></br>
<TextField  label="Release year" variant="outlined" name='releaseyear'value={addmovies.releaseyear} onChange={handlechange}/>
<br></br>
<br></br>
<Button variant='contained' onClick={savedata}>SUBMIT</Button>
    </div>
  )
}
export default Addmovies
