import Layout from "../../components/layout/layout";
import {Box, Container, Grid, Typography} from "@mui/material";
import Banner from "../../components/shared/banner";
import banner from "../../assets/images/about.png";
import {GAB_DATA} from "../../utils/data";
import Member from "../../components/shared/member";
import Media from "../../components/shared/media";

const GalleryPage = () => {

    return (
        <Layout>
            <Box>
                <Banner
                    alt="About Page Banner"
                    backgroundImage={banner}
                    title="GAB Gallery"
                />
            </Box>
            <Box sx={{py: 4, backgroundColor: 'background.default'}}>
                <Container>
                    <Typography
                        align="center"
                        variant="h5"
                        sx={{color: 'text.primary', textTransform: 'uppercase', mb: 2}}>
                        GAB Gallery
                    </Typography>
                    <Grid container={true} spacing={4}>
                        {GAB_DATA.GALLERY.map((media, index) => {
                            return (
                                <Grid key={index} item={true} xs={12} md={6}>
                                    <Media media={media}/>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default GalleryPage;
