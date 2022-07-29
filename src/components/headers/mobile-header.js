import {Box, Stack, Toolbar} from "@mui/material";
import {Menu} from "@mui/icons-material";
import {useDispatch} from "react-redux";
import {openDrawer} from "../../redux/features/ui/ui-slice";
import React from "react";
import logo from "./../../assets/images/rsz_11logo.png";

const MobileHeader = () => {

    const dispatch = useDispatch();

    return (
        <Toolbar variant="regular">
            <Stack
                sx={{width: '100%'}}
                direction="row"
                alignItems="center"
                spacing={3}
                justifyContent="flex-start">
                <Menu
                    onClick={() => dispatch(openDrawer())}
                    sx={{
                        cursor: 'pointer',
                        color: 'primary.main',
                        borderTopRightRadius: 32,
                        borderBottomRightRadius: 0,
                        borderBottomLeftRadius: 32,
                        borderTopLeftRadius: 32,
                        padding: 0.5,
                        fontSize: 20,
                        backgroundColor: 'white'
                    }}/>
                <Box>
                    <img
                        src={logo}
                        style={{objectFit: 'contain', objectPosition: 'center', height: '92%'}}
                        alt="Ghana Association of Bankers Logo"
                    />
                </Box>
            </Stack>
        </Toolbar>
    )
}

export default MobileHeader;
