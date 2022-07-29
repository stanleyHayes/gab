import Layout from "../../components/layout/layout";
import {
    Alert,
    AlertTitle,
    Box,
    Card,
    CardContent,
    CircularProgress,
    Container,
    FormControl,
    FormHelperText,
    Grid,
    InputAdornment,
    InputLabel,
    LinearProgress,
    Link,
    OutlinedInput,
    Stack,
    Typography
} from "@mui/material";
import Banner from "../../components/shared/banner";
import banner from "../../assets/images/about.png";
import {CallOutlined, HomeOutlined, MailOutline, PersonOutline} from "@mui/icons-material";
import contactLogo from "./../../assets/images/contact-us.png";
import {useDispatch, useSelector} from "react-redux";
import {MESSAGE_ACTION_CREATORS, selectMessage} from "../../redux/features/message/message-slice";
import {useSnackbar} from "notistack";
import {useFormik} from "formik";
import * as yup from "yup";
import "yup-phone";
import {LoadingButton} from "@mui/lab";
import Map from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

const ContactPage = () => {

    const dispatch = useDispatch();

    const {messageLoading, messageError, messageMessage} = useSelector(selectMessage);
    const {enqueueSnackbar} = useSnackbar();

    const showMessage = (message, options) => {
        enqueueSnackbar(message, options);
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            subject: '',
            email: '',
            phone: '',
            message: '',
        },
        onSubmit: (values, {resetForm, setSubmitting}) => {
            dispatch(MESSAGE_ACTION_CREATORS.sendMessage({values, resetForm, showMessage, setSubmitting}));
        },
        validateOnBlur: true,
        validateOnChange: true,
        validationSchema: yup.object({
            email: yup.string().email('Invalid email').required('email required'),
            name: yup.string().required('name required'),
            phone: yup.string().phone('Invalid phone').required('phone required'),
            subject: yup.string().required('subject required'),
            message: yup.string().required('Message required'),
        })
    });

    return (
        <Layout>
            <Box>
                <Banner
                    alt="About Page Banner"
                    backgroundImage={banner}
                    title="Contact Us"
                />
            </Box>
            <Box sx={{py: 4, backgroundColor: 'background.paper'}}>
                <Container>
                    <Typography
                        align="center"
                        variant="h5"
                        sx={{color: 'text.primary', textTransform: 'uppercase', mb: 2}}>
                        Contact Details
                    </Typography>
                    <Grid container={true} spacing={4}>
                        <Grid item={true} xs={12} md={4}>
                            <Card elevation={0} sx={{
                                height: '100%',
                                backgroundColor: 'background.paper',
                                '&:hover': {
                                    boxShadow: '20px 20px 60px #bebebe, -20px -20px 60px #ffffff',
                                    transition: 'all 500ms ease-in-out',
                                    borderBottomLeftRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderTopLeftRadius: 32,
                                    borderTopRightRadius: 32,
                                }
                            }}>
                                <CardContent>
                                    <Stack direction="column" spacing={1}>
                                        <Stack direction="row" justifyContent="center">
                                            <HomeOutlined
                                                sx={{
                                                    cursor: 'pointer',
                                                    color: 'primary.main',
                                                    borderTopRightRadius: 32,
                                                    borderBottomRightRadius: 32,
                                                    borderBottomLeftRadius: 32,
                                                    borderTopLeftRadius: 32,
                                                    padding: 1,
                                                    fontSize: 18,
                                                    backgroundColor: 'light.primary'
                                                }}
                                            />
                                        </Stack>

                                        <Typography
                                            align="center"
                                            variant="body1"
                                            sx={{color: 'text.primary', textTransform: 'uppercase'}}>
                                            Address
                                        </Typography>
                                        <Typography
                                            align="center"
                                            variant="body2"
                                            sx={{color: 'text.secondary'}}>
                                            No. 12 Tafawa Balewa Avenue, GH-029-444, North Ridge Accra.
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            <Card elevation={0} sx={{
                                height: '100%',
                                backgroundColor: 'background.paper',
                                '&:hover': {
                                    boxShadow: '20px 20px 60px #bebebe, -20px -20px 60px #ffffff',
                                    transition: 'all 500ms ease-in-out',
                                    borderBottomLeftRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderTopLeftRadius: 32,
                                    borderTopRightRadius: 32,
                                }
                            }}>
                                <CardContent>
                                    <Stack direction="column" spacing={1}>
                                        <Stack direction="row" justifyContent="center">
                                            <CallOutlined
                                                sx={{
                                                    cursor: 'pointer',
                                                    color: 'primary.main',
                                                    borderTopRightRadius: 32,
                                                    borderBottomRightRadius: 32,
                                                    borderBottomLeftRadius: 32,
                                                    borderTopLeftRadius: 32,
                                                    padding: 1,
                                                    fontSize: 18,
                                                    backgroundColor: 'light.primary'
                                                }}
                                            />
                                        </Stack>

                                        <Typography
                                            align="center"
                                            variant="body1"
                                            sx={{color: 'text.primary', textTransform: 'uppercase'}}>
                                            Phone
                                        </Typography>
                                        <Link href="tel://+2330302670629" underline="none" target="_blank">
                                            <Typography
                                                align="center"
                                                variant="body2"
                                                sx={{color: 'text.secondary'}}>
                                                +233-0302-670-629
                                            </Typography>
                                        </Link>
                                        <Link href="tel://+2330302670629" underline="none" target="_blank">
                                            <Typography
                                                align="center"
                                                variant="body2"
                                                sx={{color: 'text.secondary'}}>
                                                +233-0302-670-629
                                            </Typography>
                                        </Link>
                                        <Link href="tel://+2330302670629" underline="none" target="_blank">
                                            <Typography
                                                align="center"
                                                variant="body2"
                                                sx={{color: 'text.secondary'}}>
                                                +233-0302-670-629
                                            </Typography>
                                        </Link>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            <Card elevation={0} sx={{
                                height: '100%',
                                backgroundColor: 'background.paper',
                                '&:hover': {
                                    boxShadow: '20px 20px 60px #bebebe, -20px -20px 60px #ffffff',
                                    transition: 'all 500ms ease-in-out',
                                    borderBottomLeftRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderTopLeftRadius: 32,
                                    borderTopRightRadius: 32,
                                }
                            }}>
                                <CardContent>
                                    <Stack direction="column" spacing={1}>
                                        <Stack direction="row" justifyContent="center">
                                            <MailOutline
                                                sx={{
                                                    cursor: 'pointer',
                                                    color: 'primary.main',
                                                    borderTopRightRadius: 32,
                                                    borderBottomRightRadius: 32,
                                                    borderBottomLeftRadius: 32,
                                                    borderTopLeftRadius: 32,
                                                    padding: 1,
                                                    fontSize: 18,
                                                    backgroundColor: 'light.primary'
                                                }}
                                            />
                                        </Stack>

                                        <Typography
                                            align="center"
                                            variant="body1"
                                            sx={{color: 'text.primary', textTransform: 'uppercase'}}>
                                            Email
                                        </Typography>
                                        <Link href="mailto://info@gab.com" underline="none" target="_blank">
                                            <Typography
                                                align="center"
                                                variant="body2"
                                                sx={{color: 'text.secondary'}}>
                                                info@gab.com
                                            </Typography>
                                        </Link>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box sx={{py: 4, backgroundColor: 'background.default'}}>
                <Container>
                    <Typography variant="h4" sx={{color: 'text.primary', fontWeight: 'bold', mb: 2}}>
                        Send us an Email
                    </Typography>
                    <Grid container={true} spacing={4}>
                        <Grid item={true} xs={12} md={6}>
                            <Card variant="elevation" elevation={0}>
                                {messageLoading && <LinearProgress variant="query" color="secondary"/>}
                                <CardContent>
                                    <Stack direction="column" spacing={2}>
                                        <form autoComplete="off" onSubmit={formik.handleSubmit}>

                                            {messageError && (
                                                <Alert severity="error">
                                                    <AlertTitle>{messageError}</AlertTitle>
                                                </Alert>
                                            )}

                                            {messageMessage && (
                                                <Alert severity="error">
                                                    <AlertTitle>{messageMessage}</AlertTitle>
                                                </Alert>
                                            )}

                                            <Box mb={4}>
                                                <Typography
                                                    mb={1} variant="body2"
                                                    sx={{color: 'text.secondary', fontWeight: 'bold'}}>
                                                    Name
                                                </Typography>
                                                <FormControl fullWidth={true} variant="outlined">
                                                    <InputLabel htmlFor="name">Name</InputLabel>
                                                    <OutlinedInput
                                                        fullWidth={true}
                                                        value={formik.values.name}
                                                        id="name"
                                                        name="name"
                                                        type="text"
                                                        endAdornment={
                                                            <InputAdornment
                                                                position="end">
                                                                <PersonOutline
                                                                    sx={{
                                                                        cursor: 'pointer',
                                                                        color: 'text.secondary',
                                                                        padding: 1,
                                                                        fontSize: 24,
                                                                    }}
                                                                />
                                                            </InputAdornment>
                                                        }
                                                        error={formik.touched.name && formik.errors.name}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        placeholder="Enter name"
                                                        required={true}
                                                        label="Name"
                                                        size="medium"
                                                        margin="dense"
                                                    />
                                                    {formik.touched.name && formik.errors.name && (
                                                        <FormHelperText
                                                            error={true}>
                                                            {formik.errors.name}
                                                        </FormHelperText>
                                                    )}
                                                </FormControl>
                                            </Box>

                                            <Box mb={4}>
                                                <Typography
                                                    mb={1} variant="body2"
                                                    sx={{color: 'text.secondary', fontWeight: 'bold'}}>
                                                    Email
                                                </Typography>
                                                <FormControl fullWidth={true} variant="outlined">
                                                    <InputLabel htmlFor="email">Email</InputLabel>
                                                    <OutlinedInput
                                                        fullWidth={true}
                                                        value={formik.values.email}
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        endAdornment={
                                                            <InputAdornment
                                                                position="end">
                                                                <MailOutline
                                                                    sx={{
                                                                        cursor: 'pointer',
                                                                        color: 'text.secondary',
                                                                        padding: 1,
                                                                        fontSize: 24,
                                                                    }}
                                                                />
                                                            </InputAdornment>
                                                        }
                                                        error={formik.touched.email && formik.errors.email}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        placeholder="Enter username or email or phone"
                                                        required={true}
                                                        label="Email"
                                                        size="medium"
                                                        margin="dense"
                                                    />
                                                    {formik.touched.email && formik.errors.email && (
                                                        <FormHelperText
                                                            error={true}>
                                                            {formik.errors.email}
                                                        </FormHelperText>
                                                    )}
                                                </FormControl>
                                            </Box>

                                            <Box mb={4}>
                                                <Typography
                                                    mb={1} variant="body2"
                                                    sx={{color: 'text.secondary', fontWeight: 'bold'}}>
                                                    Message
                                                </Typography>
                                                <FormControl fullWidth={true} variant="outlined">
                                                    <InputLabel htmlFor="message">Message</InputLabel>
                                                    <OutlinedInput
                                                        fullWidth={true}
                                                        id="message"
                                                        value={formik.values.message}
                                                        name="message"
                                                        type="text"
                                                        error={formik.touched.message && formik.errors.message}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        placeholder="Enter message"
                                                        required={true}
                                                        label="Message"
                                                        size="medium"
                                                        margin="dense"
                                                        multiline={true}
                                                        minRows={5}
                                                    />
                                                    {formik.touched.message && formik.errors.message && (
                                                        <FormHelperText
                                                            error={true}>
                                                            {formik.errors.message}
                                                        </FormHelperText>
                                                    )}
                                                </FormControl>
                                            </Box>

                                            <LoadingButton
                                                type="submit"
                                                size="large"
                                                color="primary"
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
                                                fullWidth={true}
                                                loadingPosition="start"
                                                startIcon={messageLoading ?
                                                    <CircularProgress color="secondary"/> : null}
                                                loadingIndicator={messageLoading ?
                                                    <CircularProgress color="secondary"/> : null}
                                                loading={messageLoading}
                                                variant="contained"
                                                disableElevation={true}>
                                                {messageLoading ? 'Sending...' : 'Send message'}
                                            </LoadingButton>
                                        </form>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item={true} xs={12} md={6}>
                            <Box
                                sx={{
                                    flex: 1,
                                    maxHeight: '100vh',
                                    backgroundColor: 'background.default'
                                }}>
                                <Stack sx={{height: '100%'}} justifyContent="center" alignItems="center">
                                    <img
                                        style={{
                                            maxHeight: '100vh',
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'center'
                                        }}
                                        alt=""
                                        src={contactLogo}
                                    />
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box sx={{py: 4, backgroundColor: 'background.default'}}>
                <Container>
                    <Map initialViewState={{
                        longitude: -122.4,
                        latitude: 37.8,
                        zoom: 14
                    }}
                         style={{width: '100vw', height: '50vh'}}
                         mapStyle="mapbox://styles/mapbox/streets-v9"/>
                </Container>
            </Box>
        </Layout>
    )
}

export default ContactPage;
