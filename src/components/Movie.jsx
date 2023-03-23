import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';

import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import axios from 'axios';
import { Button, TableBody, TableRow } from '@mui/material';
import Addmovie from './Addmovie';

const Movie = () => {
    var [update, setUpdate]=useState(false)
    var [singleValue, setSinglevalue] = useState([])
    var [movie, setmovie] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3005/movies")
            .then(response => {
                console.log(response.data)
                setmovie(movie = response.data)
            })
            .catch(err => console.log(err))
    }, [])
     const updatemovie = (value)=>{
        setSinglevalue(value);
        setUpdate(true);
     }
     const deletemovie = (id) => {
        console.log("Delete clicked" + id);
          axios.delete("http://localhost:3005/movies/"+id)
           .then(response=> {
            alert("Successfully deleted");
            window.location.reload(false)
          })
        }
    var finalJSX = <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>id</TableCell>
                    <TableCell>name</TableCell>
                    <TableCell>director</TableCell>
                    <TableCell>language</TableCell>
                    <TableCell>genere</TableCell>
                    <TableCell>release year</TableCell>
                    <TableCell>Delete</TableCell>
                    <TableCell>Update</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {movie.map((value, index) => {
                    return <TableRow>
                        <TableCell>{value.id}</TableCell>
                        <TableCell>{value.name}</TableCell>
                        <TableCell>{value.director}</TableCell>
                        <TableCell>{value.language}</TableCell>
                        <TableCell>{value.genere}</TableCell>
                        <TableCell>{value.releaseyear}</TableCell>
                        <TableCell>
                            <Button color='success' onClick={() => deletemovie(value.id)}>Delete</Button>
                        </TableCell>
                        <TableCell>
                            <Button color='error' onClick={() => updatemovie(value)}>Update</Button>
                        </TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
    </TableContainer>
    if (update)
    finalJSX = <Addmovie data={singleValue} method="put"/>
    return (
        <div>
           <br></br>
           <br></br>
           <br></br> 
           {finalJSX}
        </div>
        )
    }

export default Movie
