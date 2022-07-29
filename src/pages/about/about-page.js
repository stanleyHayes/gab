import Layout from "../../components/layout/layout";
import {Box, Card, CardContent, Container, Grid, Stack, Typography} from "@mui/material";
import vision from "./../../assets/images/vision.png";
import mission from "./../../assets/images/mission.png";
import values from "./../../assets/images/values.png";
import {GAB_DATA} from "../../utils/data";
import Member from "../../components/shared/member";
import Carousel from "react-material-ui-carousel";
import {UTILS} from "../../utils/utils";
import Bank from "../../components/shared/bank";
import Banner from "../../components/shared/banner";
import banner from "./../../assets/images/about.png";
import 'react-multi-carousel/lib/styles.css';

const AboutPage = () => {

    return (
        <Layout>
            <Box>
                <Banner
                    alt="About Page Banner"
                    backgroundImage={banner}
                    title="Who we are"
                />
            </Box>
            <Box sx={{py: 8, backgroundColor: 'background.paper'}}>
                <Container>
                    <Typography align="center" variant="body2" sx={{color: 'text.primary', textTransform: 'uppercase'}}>
                        The Ghana Association of Bankers (GAB) is the country's leading mouthpiece for the universal
                        banking sector, currently representing the interests of 24 member banks.
                    </Typography>
                </Container>
            </Box>

            <Box sx={{py: 4, backgroundColor: 'background.default'}}>
                <Container>
                    <Typography
                        align="center"
                        variant="h5"
                        sx={{color: 'text.primary', textTransform: 'uppercase', mb: 2}}>
                        Who we are
                    </Typography>
                    <Typography align="center" variant="body2" sx={{color: 'text.secondary'}}>
                        {GAB_DATA.PROFILE}
                    </Typography>
                </Container>
            </Box>

            <Box sx={{py: 4, backgroundColor: 'background.paper'}}>
                <Container>
                    <Grid container={true} spacing={4}>
                        <Grid item={true} xs={12} md={4}>
                            <Card elevation={0} sx={{backgroundColor: 'background.paper'}}>
                                <CardContent>
                                    <Stack direction="column" spacing={2}>
                                        <img alt="Vision icon" src={vision}
                                             style={{width: 100, height: 100, marginBottom: 4}}/>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: 'text.primary',
                                                textTransform: 'uppercase',
                                                fontWeight: 500
                                            }}>
                                            Vision
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{color: 'text.secondary'}}>
                                            {GAB_DATA.VISION}
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item={true} xs={12} md={4}>
                            <Card elevation={0} sx={{backgroundColor: 'background.paper'}}>
                                <CardContent>
                                    <Stack direction="column" spacing={2}>
                                        <img alt="Mission icon" src={mission}
                                             style={{width: 100, height: 100, marginBottom: 4}}/>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: 'text.primary',
                                                textTransform: 'uppercase',
                                                fontWeight: 500
                                            }}>
                                            Mission
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{color: 'text.secondary'}}>
                                            {GAB_DATA.MISSION}
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item={true} xs={12} md={4}>
                            <Card elevation={0} sx={{backgroundColor: 'background.paper'}}>
                                <CardContent>
                                    <Stack direction="column" spacing={2}>
                                        <img alt="Core values icon" src={values}
                                             style={{width: 100, height: 100, marginBottom: 4}}/>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: 'text.primary',
                                                textTransform: 'uppercase',
                                                fontWeight: 500
                                            }}>
                                            Core Values
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{color: 'text.secondary'}}>
                                            {GAB_DATA.CORE_VALUES}
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
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
                        Executive Council
                    </Typography>
                    <Grid container={true} spacing={4}>
                        {GAB_DATA.EXECUTIVE_COUNCIL_MEMBERS.map((member, index) => {
                            return (
                                <Grid key={index} item={true} xs={12} md={4} lg={3}>
                                    <Member member={member}/>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            </Box>

            <Box sx={{py: 4, backgroundColor: 'background.paper'}}>
                <Container>
                    <Typography
                        align="center"
                        variant="h5"
                        sx={{color: 'text.primary', textTransform: 'uppercase', mb: 4}}>
                        Our Member Banks
                    </Typography>
                    <Carousel
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        infinite={true}
                        partialVisible={false}
                        keyBoardControl={true}
                        pauseOnHover={true}
                        indicators={false}
                        responsive={UTILS.responsive}>
                        {GAB_DATA.MEMBER_BANKS.map((bank, index) => {
                            return (
                                <Box key={index} sx={{mx: 2, height: '100%', width: 200}}>
                                    <Bank bank={bank}/>
                                </Box>
                            )
                        })}
                    </Carousel>
                </Container>
            </Box>
        </Layout>
    )
}

export default AboutPage;
