import React from "react";
import { TextField, Button, Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

const Search = ({ searchTerm, setSearchTerm, onAddClick }) => {
    return (

        <Box
            style={{ display: "flex",
                justifyContent: "flex-end",
                width:"100%",
                alignItems:"center",
                gridColumnGap:"20px",
                marginBottom:"10px",
                marginTop:"15px",
            }}
        >

            <TextField
                className="search"
                variant="outlined"
                size="small"
                placeholder="search.."
                value={searchTerm}
                onChange={(e) => setSearchTerm (e.target.value)}
                InputProps={{endAdornment: <SearchIcon style={{marginRight: 0}} />,}}
                
            />

            <Box className="buttonContainer">
                <Button variant="contained" 
                // color="rgb(0,0,139)"
                className="primary-button"
                 startIcon={<AddIcon />} onClick={onAddClick}> 
                    Add
                </Button>  
            </Box>

        </Box>
    );
};

export default Search;