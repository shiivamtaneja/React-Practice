import React, { useState} from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';


export default function SimpleBottomNavigation() {
    const [value, setValue] = useState(0);

    const navigate = useNavigate();


    return (
        <Box sx={{ 
            width: "100%",
            position: "fixed",
            bottom: "0",
            zIndex: 100,
        }}
        >
            <BottomNavigation
                sx={{backgroundColor: '#2d313a'}}
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}>

                <BottomNavigationAction style={{color: "white"}} label="Trending" icon={<WhatshotIcon />} onClick={()=>{
                    navigate('/')
                }} />
                <BottomNavigationAction style={{color: "white"}} label="Movies" icon={<MovieIcon />} onClick={()=>{
                    navigate('/movies')
                }}  />
                <BottomNavigationAction style={{color: "white"}} label="TV Series" icon={<TvIcon />} onClick={()=>{
                    navigate('/tv-series')
                }}  />
                <BottomNavigationAction style={{color: "white"}} label="Search" icon={<SearchIcon />} onClick={()=>{
                    navigate('/search')
                }}  />
            </BottomNavigation>
        </Box>
    );
}