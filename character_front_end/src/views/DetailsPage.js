import React, { useState, useEffect } from 'react';
import {Grid,Container,Box,TextField ,AppBar,Toolbar,Typography,Card,CardContent,CardMedia,BottomNavigation,Chip, Button,CircularProgress,CardActions,Badge} from '@mui/material';

export default function DetailsPage(props) {
    const [info, setInfo] = useState('');
    const [data,setData]=useState(''); 
    useEffect(()=> {
        fetch(
            "https://rickandmortyapi.com/api/character/"+props.match.params.id)
                        .then((res) => res.json())
                        .then((json) => {
                            console.log(json)
                           setData(json)
                        })
    }, []) 

  return (
    <>
        <Container maxWidth="md" className='container'>
        <Grid container spacing={5} className='container'>
            <Grid item sm={12} md={4} lg={4}>
                <img src={data.image}/> 
            </Grid>
            <Grid item sm={12} md={8} lg={8}>
            <table>
                <tbody>
                    <tr>
                        <td style={{padding:'15px'}}>
                            <Typography variant="h5" component="h5">
                                Name
                            </Typography>
                        </td>
                        <td style={{padding:'15px'}}>
                            <Typography variant="h5" component="h5">
                                {data.name}
                            </Typography>
                        </td>
                    </tr>
                    <tr>
                        <td style={{padding:'15px'}}>
                            <Typography variant="h5" component="h5">
                                Status
                            </Typography>
                        </td>
                        <td style={{padding:'15px'}}>
                            <Typography variant="h5" component="h5">
                                {data.status}
                            </Typography>
                        </td>
                    </tr>
                    <tr>
                        <td style={{padding:'15px'}}>
                            <Typography variant="h5" component="h5">
                            Species
                            </Typography>
                        </td>
                        <td style={{padding:'15px'}}>
                            <Typography variant="h5" component="h5">
                                {data.species}
                            </Typography>
                        </td>
                    </tr>
                    <tr>
                        <td style={{padding:'15px'}}>
                            <Typography variant="h5" component="h5">
                            Gender
                            </Typography>
                        </td>
                        <td style={{padding:'15px'}}>
                            <Typography variant="h5" component="h5">
                                {data.gender}
                            </Typography>
                        </td>
                    </tr>
                    <tr>
                        <td style={{padding:'15px'}}>
                            <Typography variant="h5" component="h5">
                            Location
                            </Typography>
                        </td>
                        <td style={{padding:'15px'}}>
                            <Typography variant="h5" component="h5">
                                {data.location && data.location.name}
                            </Typography>
                        </td>
                    </tr>
                    <tr>
                        <td style={{padding:'15px'}}>
                            <Typography variant="h5" component="h5">
                            Created
                            </Typography>
                        </td>
                        <td style={{padding:'15px'}}>
                            <Typography variant="h5" component="h5">
                                {data.created}
                            </Typography>
                        </td>
                    </tr>
                </tbody>
                
            </table>
            </Grid>
        </Grid>
            
        </Container>
    </>
  )
}
