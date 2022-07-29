import Layout from "../../components/layout/layout";
import {Box, Container, Grid, Typography} from "@mui/material";
import {GAB_DATA} from "../../utils/data";
import Banner from "../../components/shared/banner";
import banner from "../../assets/images/about.png";
import Council from "../../components/shared/council";

const MembersPage = () => {

    return (
        <Layout>
            <Box>
                <Banner
                    alt="About Page Banner"
                    backgroundImage={banner}
                    title="Who we are"
                />
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
                        {GAB_DATA.MEMBERS.map((council, index) => {
                            return (
                                <Grid key={index} item={true} xs={12} md={4} lg={3}>
                                    <Council council={council}/>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default MembersPage;
