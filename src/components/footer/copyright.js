import React from "react";
import {Box, Typography} from "@mui/material";

const Copyright = () => {

    return (
        <Box sx={{padding: 2, backgroundColor: 'background.paper'}}>
            <Typography variant="body2" align="center" sx={{color: 'text.secondary'}}>
                &copy; Ghana Association Of Bankers. All rights reserved Designed and Crafted by the hands Zeus
            </Typography>
        </Box>
    )
}

export default Copyright;
