import {Card, CardContent, CardMedia, Stack, Typography} from "@mui/material";

const Member = ({member}) => {
    return (
        <Card
            elevation={0}
            sx={{
                backgroundColor: 'background.paper',
                position: 'relative',
                height: 300,
                '&:hover': {
                    boxShadow: '20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff',
                    transition: 'all 500ms ease-in-out',
                    borderBottomLeftRadius: 32,
                    borderBottomRightRadius: 0,
                    borderTopLeftRadius: 32,
                    borderTopRightRadius: 32,
                    '&: .content': {

                    }
                }
            }}>
            <CardMedia
                src={member.image}
                component="img"
                sx={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top'}}/>
            <CardContent className="content" sx={{position: 'absolute'}}>
                <Stack direction="column" spacing={2}>
                    <Typography
                        align="center"
                        variant="body1"
                        sx={{color: 'text.primary'}}>
                        {member.name}
                    </Typography>
                    <Typography
                        align="center"
                        variant="body2"
                        sx={{
                            color: 'text.secondary',
                            textTransform: 'uppercase'
                        }}>
                        {member.position}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Member;
