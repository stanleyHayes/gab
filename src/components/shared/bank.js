import {Card, CardMedia} from "@mui/material";

const Bank = ({bank}) => {
    return (
        <Card variant="outlined" elevation={0} sx={{height: 100, borderWidth: 2}}>
            <CardMedia
                component="img"
                sx={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center'}}
                src={bank.image}
            />
        </Card>
    )
}

export default Bank;
