import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Addmovies from './Addmovies'

const Moviename = () => {
  var[update,setUpdate]=useState(false)
  var[singleValue,setSingleValue]=useState([])
  var[movies,setmovie]=useState([])
   useEffect (()=>{
    axios.get("http://localhost:3005/movies")
    .then(response => {
      console.log(response.data)
      setmovie(movies = response.data)
    })
    .catch(err => console.log(err))
},[])
const updateValue=(value)=>{
  setSingleValue(value);
  setUpdate(true);
}
  const deletemovie = (moviename) => {
    console.log("delete clicked" + moviename);
    axios.delete("http://localhost:3005/movies/" + moviename)
      .then(response => {
        alert("delete")
        window.location.reload(false)
      })
  }
  var finalJSX=<TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Moviename</TableCell>
          <TableCell>Director</TableCell>
          <TableCell>Language</TableCell>
          <TableCell>Genere</TableCell>
          <TableCell>Releaseyear</TableCell>
          <TableCell>Delete</TableCell>
          <TableCell>Update</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {movies.map((value, index) => {
          return <TableRow>
            <TableCell>{value.moviename}</TableCell>
            <TableCell>{value.director}</TableCell>
            <TableCell>{value.language}</TableCell>
            <TableCell>{value.genere}</TableCell>
            <TableCell>{value.releaseyear}</TableCell>
            <TableCell>
              <Button onClick={() => deletemovie(value.moviename)}>Delete</Button>
            </TableCell>
            <TableCell>
              <Button onClick={()=>updateValue(value)}>Update</Button>
            </TableCell>
          </TableRow>
        })}
      </TableBody>
    </Table>
  </TableContainer>
  if(update)
  finalJSX=<Addmovies data={singleValue} method="put"/>
  return (
    <div>
      {finalJSX}
    </div>
  )
}

export default Moviename
