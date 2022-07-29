import {Box, Typography} from "@mui/material";

const Banner = ({backgroundImage, title, alt}) => {

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: {xs: '50vh', md: '50vh', lg: '50vh'},
                backgroundColor: 'rgba(255, 255, 255, .35)',
            }}
            pt={4}
            pb={4}>
            <Box sx={{
                zIndex: 10,
                position: 'absolute',
                width: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                bottom: 0,
                left: 0,
                right: 0,
                top: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: "center"
            }}>
                <Box>
                    <Typography
                        mb={5}
                        sx={{color: 'white'}}
                        variant="h4"
                        align="center">
                        {title}
                    </Typography>
                </Box>
            </Box>
            <img alt={alt} src={backgroundImage} style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                top: 0,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                objectPosition: 'center',
                objectFit: 'cover',
                height: '100%',
                width: '100%'
            }}/>
        </Box>
    )
}

export default Banner;
