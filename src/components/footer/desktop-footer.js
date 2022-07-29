import React from "react";
import {Box, CardMedia, Container, Divider, Grid, Stack, Typography} from "@mui/material";
import logo from "./../../assets/images/logo.png";
import ContactLink from "../shared/contact-link";
import {CallOutlined, Facebook, HomeOutlined, LinkedIn, MailOutline, Twitter} from "@mui/icons-material";
import ghana from "./../../assets/images/gab-1.png";

const DesktopFooter = () => {
    return (
        <Box sx={{backgroundColor: 'background.paper', py: 2}}>
            <Container>
                <Grid container={true} spacing={4}>
                    <Grid xs={3} item={true}>
                        <Stack direction="column" spacing={2}>
                            <CardMedia component="img" src={logo}
                                       sx={{width: '100%', objectFit: 'contain', objectPosition: 'center'}}/>
                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                Monday - Friday 8:00AM - 6PM
                            </Typography>
                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                Saturday - Sunday Closed
                            </Typography>
                            <Stack direction="row" spacing={2}>
                                <ContactLink
                                    link="#"
                                    startIcon={<Facebook sx={{
                                        cursor: 'pointer',
                                        color: 'primary.main',
                                        borderTopRightRadius: 32,
                                        borderBottomRightRadius: 32,
                                        borderBottomLeftRadius: 32,
                                        borderTopLeftRadius: 32,
                                        padding: 1,
                                        fontSize: 18,
                                        backgroundColor: 'light.primary'
                                    }}/>}/>
                                <ContactLink link="#" startIcon={<Twitter
                                    sx={{
                                        cursor: 'pointer',
                                        color: 'primary.main',
                                        borderTopRightRadius: 32,
                                        borderBottomRightRadius: 32,
                                        borderBottomLeftRadius: 32,
                                        borderTopLeftRadius: 32,
                                        padding: 1,
                                        fontSize: 18,
                                        backgroundColor: 'light.primary'
                                    }}/>}/>
                                <ContactLink link="#" startIcon={<LinkedIn
                                    sx={{
                                        cursor: 'pointer',
                                        color: 'primary.main',
                                        borderTopRightRadius: 32,
                                        borderBottomRightRadius: 32,
                                        borderBottomLeftRadius: 32,
                                        borderTopLeftRadius: 32,
                                        padding: 1,
                                        fontSize: 18,
                                        backgroundColor: 'light.primary'
                                    }}/>}
                                />
                            </Stack>
                        </Stack>

                    </Grid>
                    <Grid xs={3} item={true}>
                        <Typography variant="h6" sx={{color: 'text.primary'}}>
                            Public
                        </Typography>
                        <Divider variant="fullWidth" sx={{my: 2}}/>

                    </Grid>
                    <Grid xs={3} item={true}>
                        <Typography variant="h6" sx={{color: 'text.primary'}}>
                            Contact Us
                        </Typography>
                        <Divider variant="fullWidth" sx={{my: 2}}/>
                        <ContactLink startIcon={
                            <HomeOutlined
                                sx={{
                                    cursor: 'pointer',
                                    color: 'primary.main',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 32,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 18,
                                    backgroundColor: 'light.primary'
                                }}/>} link="" text="No. 12 Tafawa Balewa Avenue, GH-029-444, North Ridge Accra."/>

                        <Grid container={true} direction="row" spacing={1}>
                            <Grid item={true} xs={12}>
                                <ContactLink startIcon={<CallOutlined
                                    sx={{
                                        cursor: 'pointer',
                                        color: 'primary.main',
                                        borderTopRightRadius: 32,
                                        borderBottomRightRadius: 32,
                                        borderBottomLeftRadius: 32,
                                        borderTopLeftRadius: 32,
                                        padding: 1,
                                        fontSize: 18,
                                        backgroundColor: 'light.primary'
                                    }}/>} link="tel://+2330302667138" text="+233-0302-667-138"/>
                            </Grid>
                            <Grid item={true} xs={12}>
                                <ContactLink startIcon={<CallOutlined
                                    sx={{
                                        cursor: 'pointer',
                                        color: 'primary.main',
                                        borderTopRightRadius: 32,
                                        borderBottomRightRadius: 32,
                                        borderBottomLeftRadius: 32,
                                        borderTopLeftRadius: 32,
                                        padding: 1,
                                        fontSize: 18,
                                        backgroundColor: 'light.primary'
                                    }}/>} link="tel://+2330302670629" text="+233-0302-670-629"/>
                            </Grid>
                            <Grid item={true} xs={12}>
                                <ContactLink startIcon={<CallOutlined
                                    sx={{
                                        cursor: 'pointer',
                                        color: 'primary.main',
                                        borderTopRightRadius: 32,
                                        borderBottomRightRadius: 32,
                                        borderBottomLeftRadius: 32,
                                        borderTopLeftRadius: 32,
                                        padding: 1,
                                        fontSize: 18,
                                        backgroundColor: 'light.primary'
                                    }}/>} link="tel://+233508912091" text="+233-0508-912-091"/>
                            </Grid>
                            <Grid item={true} xs={12}>
                                <ContactLink startIcon={<MailOutline
                                    sx={{
                                        cursor: 'pointer',
                                        color: 'primary.main',
                                        borderTopRightRadius: 32,
                                        borderBottomRightRadius: 32,
                                        borderBottomLeftRadius: 32,
                                        borderTopLeftRadius: 32,
                                        padding: 1,
                                        fontSize: 18,
                                        backgroundColor: 'light.primary'
                                    }}/>} link="mailto://info@gab.com.gh" text="info@gab.com.gh"/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid xs={3} item={true}>
                        <CardMedia
                            component="img"
                            src={ghana}
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                objectPosition: 'center'
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
export default DesktopFooter;
