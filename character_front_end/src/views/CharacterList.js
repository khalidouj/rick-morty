import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {Grid,Container,Box,TextField ,AppBar,Toolbar,Typography,Card,CardContent,CardMedia,BottomNavigation,Chip, Button,CircularProgress,CardActions,Badge} from '@mui/material';
import { Link } from 'react-router-dom';

export default function CharacterList() {
    
    const [characters, setCharacters] = useState(''); 
    const [info, setInfo] = useState('');
    const [currentPage,setCurrentpage]=useState(1); 
    const [loading,setLoading]=useState(false);
    const [searchKey, setSearchKey] = useState('');

    useEffect(()=> {
        fetch(
            "https://rickandmortyapi.com/api/character")
                        .then((res) => res.json())
                        .then((json) => {
                            console.log(json)
                            setCharacters(json.results)
                            setInfo(json.info)
                        })
    }, [])

    const previousFunction =()=>{
        setCurrentpage(currentPage-1)
        loadNextPage(currentPage-1)
    }

    const nextFunction=  () =>{
         setCurrentpage(currentPage+1)
        loadNextPage(currentPage+1)
    }

    const searchFunction = (e) => {
        setSearchKey(e.target.value)
        e.preventDefault()
    }

    const loadNextPage=(pageNum)=>{
        setLoading(true);
        fetch(
            "https://rickandmortyapi.com/api/character?page="+pageNum)
                        .then((res) => res.json())
                        .then((json) => {
                            console.log(json)
                            setCharacters(json.results)
                            setInfo(json.info)
                        })
                        setLoading(false);
    }

    return (
        <>
            {!loading ? 
            <Container  maxWidth="xl" className='container'>
                <div className='leftFeild'>
                    <TextField
                        onChange={searchFunction}
                        label="Search input"
                        InputProps={{
                            type: 'search',
                        }}
                    />
                </div>
                
                <Grid container spacing={2} className='container'>
                     
                         {characters && characters.filter(char=> char.name.toLowerCase().includes(searchKey.toLowerCase())).map((row)=>(
                                <Grid item sm={12} md={6} lg={4}>
                                <Card sx={{ display: 'flex' }} className='card'>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 151 }}
                                    image={row.image}
                                    alt="Live from space album cover"
                                />
                                <Box sx={{  flexDirection: 'column' }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h6">
                                        {row.name}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        {row.species}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        {row.status}
                                    </Typography>
                                    
                                    

                                   
                                    </CardContent>
                                    
                                    <Box sx={{  alignItems: 'right', pl: 2, pb: 1 }}>
                                        <Link to={"details/"+row.id} >view more</Link>
                                        
                                        
                                    
                                    </Box>
                                </Box>  
                                
                                </Card>  
                                </Grid>
                         ))}
                              
                    
                    
                </Grid>
                <BottomNavigation
                    showLabels
                    // value={value}
                    // onChange={(event, newValue) => {
                    // setValue(newValue);
                    // }}
                >
                    <Button onClick={previousFunction} disabled={currentPage === 1 ? true:false}><u>Previous</u> </Button>
                    <Button disabled>Page {currentPage} of {info.pages} </Button>
                    <Button onClick={nextFunction} disabled={ currentPage === info.pages ? true:false}><u>Next</u> </Button>
                   
                </BottomNavigation>
                
            </Container>
            :
            <div className='center'>
            <CircularProgress />
          </div>
    }
        </>
    )
}
