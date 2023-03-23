import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Addmovie = (props) => {
  var [movie, setmovie] = useState(props.data)
  console.log("add page props"+props.data)

  const handleChange = (e) => {
    const { name, value } = e.target
    setmovie({ ...movie, [name]: value })
    console.log(movie)
  }
  const saveData = () => {
    console.log("Button clicked") 
    if (props.method === 'post') {
       axios.post("http://localhost:3005/movies/",movie)
      .then(response => {
        alert("Successfully added")
      })
      .catch(error  => {
        alert("Failed")
      })
    } else if (props.method ==="put") {
        axios.put("http://localhost:3005/movies/" + movie.id, movie)
           .then((response) => {
              console.log("put data" + response.data)
              alert("Success")
              window.location.reload(false);
      })
      .catch((err) => {
        console.log(err)
      })
     }
    }
  return (
    <div>
      <br></br>
      <Typography variant='h2'>Add Movies </Typography>
      <TextField label='id' variant='outlined' name='id' value={movie.id} onChange={handleChange} />
      <br></br>
      <br></br>
      <TextField label='name' variant='outlined' name='name' value={movie.name} onChange={handleChange} />
      <br></br>
      <br></br>
      <TextField label='director' variant='outlined' name='director' value={movie.director} onChange={handleChange} />
      <br></br>
      <br></br>
      <TextField label='language' variant='outlined' name='grade' value={movie.grade} onChange={handleChange} />
      <br></br>
      <br></br>
      <TextField label='genere' variant='outlined' name='genere' value={movie.genere} onChange={handleChange} />
      <br></br>
      <br></br>
      <TextField label='releasedyear' variant='outlined' name='releasedyear' value={movie.releasedyear} onChange={handleChange} />
      <br></br>
      <br></br>
      <Button variant='contained' color='secondary' onClick={saveData}>SUBMIT</Button>
    </div>
  )
}

export default Addmovie