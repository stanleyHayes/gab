import {Button, Container, Divider, Stack, Toolbar} from "@mui/material";
import logo from "./../../assets/images/logo.png";
import {useSelector} from "react-redux";
import {selectUI} from "../../redux/features/ui/ui-slice";
import React from "react";
import NavLink from "../shared/nav-link";
import {Link} from "react-router-dom";

const DesktopHeader = () => {

    const {activePath} = useSelector(selectUI);

    return (
        <Toolbar variant="regular">
            <Container maxWidth="xl">
                <Stack
                    divider={<Divider variant="fullWidth" light={true}/>}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center">
                    <Stack spacing={2} direction="row" alignItems="center">
                        <Link to="/" style={{textDecoration: 'none'}}>
                            <img
                                src={logo}
                                style={{objectFit: 'contain', objectPosition: 'center'}}
                                alt="Ghana Association of Bankers Logo"
                            />
                        </Link>
                    </Stack>

                    <Stack direction="row" alignItems="center" spacing={3}>
                        <NavLink label="Home" path="/" active={activePath === '/'}/>
                        <NavLink label="About" path="/about"
                                 active={activePath === '/about'}/>
                        <NavLink label="Members" path="/members" active={activePath === '/members'}/>
                        <NavLink
                            label="Treasury & Markets"
                            path="/treasury-and-markets"
                            active={activePath === '/treasury-and-markets'}
                        />
                        <NavLink label="News" path="/news" active={activePath === '/news'}/>
                        <NavLink label="Gallery" path="/gallery" active={activePath === '/gallery'}/>
                        <NavLink label="Contact" path="/contact" active={activePath === '/contact'}/>
                    </Stack>

                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Link style={{textDecoration: 'none'}} to="/auth/login">
                            <Button
                                color="secondary"
                                fullWidth={true}
                                sx={{
                                    textTransform: 'capitalize',
                                    '&:hover': {
                                        borderBottomLeftRadius: 32,
                                        borderBottomRightRadius: 0,
                                        borderTopLeftRadius: 32,
                                        borderTopRightRadius: 32,
                                        transition: 'all 500ms ease-in-out',
                                    }
                                }}
                                variant="contained"
                                disableElevation={true}>
                                Login
                            </Button>
                        </Link>
                    </Stack>
                </Stack>
            </Container>
        </Toolbar>
    )
}


export default DesktopHeader;
