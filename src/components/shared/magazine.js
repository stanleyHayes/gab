import {Button, Card, CardActions, CardMedia, Tooltip} from "@mui/material";
import {KeyboardArrowRight} from "@mui/icons-material";
import {Link} from "react-router-dom";

const Magazine = ({magazine}) => {

    return (
        <Link to={`/magazines/${magazine._id}`} style={{textDecoration: 'none'}}>
            <Card elevation={0}>
                <CardMedia
                    src={magazine.cover}
                    sx={{width: '100%', height: '100%'}}
                    component="img"
                />
                <CardActions sx={{backgroundColor: 'primary.main'}}>
                    <Link to={`/magazines/${magazine._id}`} style={{textDecoration: 'none'}}>
                        <Tooltip title={`Read ${magazine.title}`}>
                            <Button
                                size="small"
                                sx={{color: 'white', textTransform: 'capitalize'}}
                                fullWidth={true}
                                variant="text"
                                endIcon={<KeyboardArrowRight/>}>
                                Read Magazine
                            </Button>
                        </Tooltip>
                    </Link>
                </CardActions>
            </Card>
        </Link>
    )
}

export default Magazine;
