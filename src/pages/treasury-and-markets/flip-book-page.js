import Layout from "../../components/layout/layout";
import {useParams} from "react-router";
import {useEffect, useRef, useState} from "react";
import {Box, Button, Container, Divider, Grid, Typography} from "@mui/material";
import {GAB_DATA} from "../../utils/data";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material";
import {Document, Page} from "react-pdf";
import HTMLFlipBook from "react-pageflip";

const FlipBookPage = () => {
    const ref = useRef();
    const {magazineID} = useParams();
    const [page, setPage] = useState(1);
    const [numPages, setNumPages] = useState(100);
    const [magazine, setMagazine] = useState(null);

    const onDocumentLoadSuccess = ({numPages}) => {
        setNumPages(numPages);
    }
    useEffect(() => {
        const magazine = GAB_DATA.MAGAZINES.find(magazine => magazine._id === magazineID);
        if (magazine) setMagazine(magazine);
    }, [magazineID]);

    const handlePreviousClick = () => {
        if (page > 1) {
            setPage(page => page - 1);
            if(ref){
                ref.getPageFlip().flipNext();
            }
        }
    }

    const handleNextClick = () => {
        if (page < numPages) {
            setPage(page => page + 1);
            if(ref){
                ref.getPageFlip().flipNext();
            }
        }
    }

    const handleFlip = data => {
        console.log(data);
    }

    return (
        <Layout>
            <Box sx={{py: 4}}>
                <Container>
                    <Typography
                        align="center"
                        variant="h4"
                        sx={{color: 'text.primary', textTransform: 'uppercase', mb: 4}}>
                        {magazine?.title}
                    </Typography>

                    <Typography align="center" variant="h4" sx={{color: 'text.primary', textTransform: 'uppercase'}}>
                        {`${page} of ${numPages}`}
                    </Typography>

                    <Divider variant="fullWidth" sx={{my: 4}}/>

                    <HTMLFlipBook
                        ref={ref}
                        maxShadowOpacity={0.5}
                        onFlip={handleFlip}
                        maxWidth="100vw"
                        autoSize={true}
                        drawShadow={true}
                        showCover={true}
                        mobileScrollSupport={true}
                        showPageCorners={true}
                        useMouseEvents={true}
                        size="stretch"
                        startZIndex={0}
                        width={500}
                        flippingTime={3000}
                        height={500}>
                        <h1>Hello</h1>
                        <h1>HI</h1>
                        <h1>WOSSOP</h1>
                        <h1>CRAP</h1>
                        <h1>Alright</h1>
                        <h1>Hello</h1>
                        <h1>HI</h1>
                        <h1>WOSSOP</h1>
                        <h1>CRAP</h1>
                        <h1>Alright</h1>
                        {/*<Document file={magazine?.file} onLoadSuccess={onDocumentLoadSuccess}>*/}
                        {/*    <Page pageNumber={page}/>*/}
                        {/*</Document>*/}
                    </HTMLFlipBook>

                    <Grid container={true} spacing={2} justifyContent="center" alignItems="center">
                        <Grid item={true} xs={12} md="auto">
                            <Button
                                disabled={page === 2}
                                fullWidth={true}
                                onClick={handlePreviousClick}
                                color="secondary"
                                startIcon={<KeyboardArrowLeft/>}
                                variant="outlined" size="large"
                                sx={{textTransform: 'capitalize'}}>
                                Previous
                            </Button>
                        </Grid>
                        <Grid item={true} xs={12} md="auto">
                            <Button
                                disabled={page === numPages}
                                fullWidth={true}
                                onClick={handleNextClick}
                                color="primary"
                                endIcon={<KeyboardArrowRight/>}
                                variant="contained"
                                disableElevation={true}
                                size="large"
                                sx={{textTransform: 'capitalize'}}>
                                Flip
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default FlipBookPage;
