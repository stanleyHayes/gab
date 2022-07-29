import Layout from "../../components/layout/layout";
import {Box, Button, CardMedia, Container, Grid, Link, Stack, Typography} from "@mui/material";
import banner from "./../../assets/images/banner.jpg";
import Overlay from "../../components/shared/overlay";
import logo from "../../assets/images/gab-3.png";

import pressRelease from "../../assets/images/press release.jpg";
import guidelines from "../../assets/images/GAB COVID 19 Guidelines for Banks-1.jpg";
import address4 from "../../assets/images/address4.jpeg";
import safe from "../../assets/images/377279.png";
import post2 from "../../assets/images/post2.png";

import React from "react";
import {GAB_DATA} from "../../utils/data";
import Council from "../../components/shared/council";
import NewsItem from "../../components/shared/news-item";

const HomePage = () => {

    return (
        <Layout>
            <Overlay
                children={
                    <Box sx={{height: '100%', display: 'flex', alignItems: 'center'}}>
                        <Container>
                            <Grid container={true} spacing={4} alignItems="center" justifyContent="flex-end">
                                <Grid item={true} xs={12} md={6}>
                                    <Stack direction="column" spacing={1}>
                                        <Stack direction="row" spacing={1} alignItems="center">
                                            <Typography variant="h3" sx={{color: 'white'}}>
                                                GAB
                                            </Typography>
                                            <Typography variant="h3" sx={{color: 'secondary.main'}}>
                                                NOTICE
                                            </Typography>
                                        </Stack>

                                        <Typography variant="h6" sx={{color: 'white'}}>
                                            THE GHANA REFERENCE RATE FOR JULY 2022 IS 23.66%. EFFECTIVE JULY 06, 2022.
                                        </Typography>
                                        <Typography variant="body1" sx={{color: 'white'}}>
                                            SIGNED JOHN AWUAH
                                        </Typography>
                                        <Typography variant="body1" sx={{color: 'white'}}>
                                            CHIEF EXECUTIVE OFFICER (GAB)
                                        </Typography>
                                        <CardMedia
                                            component="img" src={logo}
                                            sx={{
                                                width: 250,
                                                height: 'auto',
                                                maxWidth: '100%',
                                                objectFit: 'contain',
                                                objectPosition: 'center'
                                            }}/>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>}
                image={banner}
                backgroundColor="#000000"
            />
            <Box sx={{py: 4, backgroundColor: 'background.paper'}}>
                <Container>
                    <Typography
                        align="center"
                        variant="h5"
                        sx={{color: 'text.primary', textTransform: 'uppercase', mb: 2}}>
                        Important Notice
                    </Typography>
                    <Grid container={true} spacing={4}>
                        <Grid item={true} xs={12} md={4}>
                            <CardMedia src={pressRelease} sx={{width: '100%', height: '100%'}} component="img"/>
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            <CardMedia src={guidelines} sx={{width: '100%', height: '100%'}} component="img"/>
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            <CardMedia src={safe} sx={{width: '100%', height: '100%'}} component="img"/>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box sx={{py: 4, backgroundColor: 'background.default'}}>
                <Container>
                    <Typography
                        align="center"
                        variant="h5"
                        sx={{color: 'text.primary', textTransform: 'uppercase', mb: 2}}>
                        Important Notice
                    </Typography>
                    <Grid container={true} spacing={4}>
                        <Grid item={true} xs={12} md={9}>
                            <Grid container={true} spacing={2}>
                                <Grid item={true} xs={12} md={4}>
                                    <CardMedia
                                        src={post2}
                                        sx={{width: '100%', height: '100%', objectFit: 'contain'}}
                                        component="img"
                                    />
                                </Grid>
                                <Grid item={true} xs={12} md={8}>
                                    <Typography
                                        variant="body1"
                                        sx={{color: 'text.primary', textTransform: 'uppercase', mb: 2}}>
                                        AMID MULTIPLE CRISES, WORLD BANK GROUP REFOCUSES PROGRAMS AND INCREASES
                                        FINANCING TO $74 BILLION IN
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{color: 'text.primary', mb: 4}}>
                                        WASHINGTON, July 10, 2020 - As people in developing countries around the world
                                        faced multiple crises, including the COVID-19 pandemic, the World Bank Group
                                        worked to respond quickly with technical and policy advice, and scaled up
                                        financing targeted to the poor and towards improving development outcomes.
                                    </Typography>

                                    <Link underline="none" href="https://forum.gab.com.gh">
                                        <Button
                                            color="secondary"
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
                                            Read More
                                        </Button>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item={true} xs={12} md={3}>
                            <CardMedia
                                src={address4}
                                sx={{width: '100%', height: '100%'}}
                                component="img"
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box sx={{py: 4, backgroundColor: 'background.default'}}>
                <Container>
                    <Typography
                        align="center"
                        variant="h5"
                        sx={{color: 'text.primary', textTransform: 'uppercase', mb: 2}}>
                        Latest News
                    </Typography>
                    <Grid container={true} spacing={4}>
                        {GAB_DATA.NEWS.map((newsItem, index) => {
                            return (
                                <Grid key={index} item={true} xs={12} md={4} lg={3}>
                                    <NewsItem newsItem={newsItem}/>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default HomePage;
