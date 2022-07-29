import {Box, Stack, Toolbar, Typography} from "@mui/material";
import {Menu} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {openDrawer} from "../../redux/features/ui/ui-slice";
import logo from "../../assets/images/logo.png";
import React from "react";

const MobileHeader = () => {

    const dispatch = useDispatch();

    return (
        <Toolbar variant="regular">
            <Stack
                sx={{width: '100%'}}
                direction="row"
                alignItems="center"
                justifyContent="space-between">
                <Stack
                    spacing={2}
                    direction="row"
                    alignItems="center"
                    justifyContent="flex-start">
                    <Menu
                        onClick={() => dispatch(openDrawer())}
                        sx={{
                            cursor: 'pointer',
                            color: 'secondary.main',
                            borderTopRightRadius: 32,
                            borderBottomRightRadius: 0,
                            borderBottomLeftRadius: 32,
                            borderTopLeftRadius: 32,
                            padding: 0.5,
                            fontSize: 20,
                            backgroundColor: 'light.secondary'
                        }}/>
                    <Box>
                        <Link to="/" style={{textDecoration: 'none'}}>
                            <img
                                src={logo}
                                style={{objectFit: 'contain', objectPosition: 'center', height:  100}}
                                alt="Ghana Association of Bankers Logo"
                            />
                        </Link>
                    </Box>
                </Stack>
            </Stack>
        </Toolbar>
    )
}

export default MobileHeader;
