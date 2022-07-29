import {Card, CardMedia} from "@mui/material";

const Media = ({media}) => {
    return (
        <Card elevation={0} sx={{height: '100%'}}>
            <CardMedia
                component={media.mimeType}
                sx={{}}
                src={media.file}
                controls={true}
            />
        </Card>
    )
}

export default Media;
