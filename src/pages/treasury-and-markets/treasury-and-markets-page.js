import Layout from "../../components/layout/layout";
import {Box, Container, Grid, Typography} from "@mui/material";
import Banner from "../../components/shared/banner";
import banner from "../../assets/images/about.png";
import {GAB_DATA} from "../../utils/data";
import Media from "../../components/shared/media";
import Magazine from "../../components/shared/magazine";

const TreasuryAndMarketsPage = () => {

    return (
        <Layout>
            <Box>
                <Banner
                    alt="Our Magazines"
                    backgroundImage={banner}
                    title="Our Magazines"
                />
            </Box>
            <Box sx={{py: 4, backgroundColor: 'background.default'}}>
                <Container>
                    <Typography
                        align="center"
                        variant="h5"
                        sx={{color: 'text.primary', textTransform: 'uppercase', mb: 2}}>
                        Our Magazines
                    </Typography>
                    <Grid container={true} spacing={4}>
                        {GAB_DATA.MAGAZINES.map((magazine, index) => {
                            return (
                                <Grid key={index} item={true} xs={12} md={6} lg={4}>
                                    <Magazine magazine={magazine}/>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default TreasuryAndMarketsPage;
