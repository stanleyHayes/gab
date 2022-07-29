import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Divider,
    Link,
    Stack,
    Tooltip,
    Typography
} from "@mui/material";
import {KeyboardArrowRight} from "@mui/icons-material";

const Council = ({council}) => {
    const handleDetailClick = () => {
    }
    return (
        <Card elevation={0} sx={{
            height: '100%',
            backgroundColor: 'background.default',
            '&:hover': {
                boxShadow: '20px 20px 60px #bebebe, -20px -20px 60px #ffffff',
                transition: 'all 500ms ease-in-out',
                borderBottomLeftRadius: 32,
                borderBottomRightRadius: 0,
                borderTopLeftRadius: 32,
                borderTopRightRadius: 32,
            }
        }}>
            <CardMedia
                src={council.image}
                component="img"
                sx={{
                    width: '100%',
                    maxHeight: 250,
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    borderTopLeftRadius: 32,
                    borderTopRightRadius: 32,
                }}/>
            <CardContent>
                <Tooltip title={`Visit ${council.bank} website`}>
                    <Link href={council.link} target="_blank" underline="none">
                        <Stack direction="column" spacing={2}>
                            <Typography
                                align="center"
                                variant="body1"
                                sx={{color: 'text.primary'}}>
                                {council.name}
                            </Typography>
                        </Stack>
                    </Link>
                </Tooltip>
            </CardContent>
            <Divider variant="fullWidth" sx={{}}/>
            <CardActions sx={{backgroundColor: 'primary.main'}}>
                <Tooltip title={`View ${council.name}'s profile`}>
                    <Button
                        size="small"
                        sx={{color: 'white', textTransform: 'capitalize'}}
                        onClick={handleDetailClick}
                        fullWidth={true}
                        variant="text"
                        endIcon={<KeyboardArrowRight/>}>
                        View Profile
                    </Button>
                </Tooltip>
            </CardActions>
        </Card>
    )
}

export default Council;
