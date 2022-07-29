import {Link, Stack, Typography} from "@mui/material";

const ContactLink = ({startIcon, text, link}) => {
    return (
        <Link underline="none" href={link}>
            <Stack justifyContent="space-between" alignItems="center" direction="row" spacing={2}>
                <Stack spacing={3} direction="row" alignItems="center">
                    {startIcon}
                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                        {text}
                    </Typography>
                </Stack>
            </Stack>
        </Link>
    )

}
export default ContactLink;
