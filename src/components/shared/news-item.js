import {Button, Card, CardContent, CardMedia, Link, Stack, Typography} from "@mui/material";
import React from "react";


const NewsItem = ({newsItem}) => {
    return (
        <Card
            elevation={0}
            sx={{
                position: 'relative',
                cursor: 'pointer',
                '&:hover': {
                    backgroundColor: 'rgba(14,85,182,0.3)',
                    transition: 'all 500ms 150ms ease-in-out',
                    '& .icon': {
                        right: 50,
                        transition: 'all 500ms ease-in-out',
                    },
                    '& .cover': {
                        transform: 'scale(1.2)',
                        transition: 'all 500ms ease-in-out',
                        backgroundColor: 'rgba(14,85,182,0.3)',
                    },
                    '& .content': {
                        opacity: 1,
                        transition: 'all 500ms ease-in-out',
                    }
                }
            }}>
            <CardMedia
                className="cover"
                src={newsItem.image}
                component="img"
                sx={{
                    width: '100%',
                    height: '100%',
                    zIndex: 1,
                    position: 'absolute',
                    bottom: 0,
                    top: 0,
                    right: 0,
                    left: 0
                }}
            />
            <CardContent className="content" sx={{opacity: 0, zIndex: 1000}}>
                <Stack direction="column" spacing={2}>
                    <Typography variant="body1" sx={{color: 'text.primary'}}>
                        {newsItem.title}
                    </Typography>
                    <Link underline="none" href="https://forum.gab.com.gh">
                        <Button
                            color="secondary"
                            sx={{
                                textTransform: 'capitalize',
                                '&:hover': {
                                    borderBottomLeftRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderTopLeftRadius: 32,
                                    borderTopRightRadius: 32,
                                    transition: 'all 500ms ease-in-out',
                                }
                            }}
                            variant="contained"
                            disableElevation={true}>
                            Read More
                        </Button>
                    </Link>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default NewsItem;
