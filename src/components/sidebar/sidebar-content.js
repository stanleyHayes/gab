import {Box, Button, Divider, Stack, Link} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {closeDrawer, selectUI, toggleTheme} from "../../redux/features/ui/ui-slice";
import SidebarLink from "../shared/sidebar-link";

import {
    BrowseGallery,
    BrowseGalleryOutlined,
    Close,
    ContactPage,
    ContactPageOutlined,
    DarkMode,
    Group,
    GroupOutlined,
    Home,
    HomeOutlined,
    Info,
    InfoOutlined,
    LightMode,
    Newspaper,
    NewspaperOutlined,
    TrendingUp,
    TrendingUpOutlined
} from "@mui/icons-material";
import React from "react";
import logo from "../../assets/images/logo.png";

const SidebarContent = () => {

    const {activePath, themeVariant} = useSelector(selectUI);
    const dispatch = useDispatch();

    return (
        <Box sx={{minHeight: '100vh', minWidth: "80vw", py: 3}}>
            <Stack divider={<Divider variant="fullWidth"/>} direction="column" spacing={2}>
                <Stack sx={{px: 4}} direction="row" alignItems="center" justifyContent="space-between">
                    {themeVariant === 'light' ? (
                        <DarkMode
                            onClick={() => dispatch(toggleTheme())}
                            sx={{
                                cursor: 'pointer',
                                color: 'secondary.main',
                                borderTopRightRadius: 32,
                                borderBottomRightRadius: 0,
                                borderBottomLeftRadius: 32,
                                borderTopLeftRadius: 32,
                                padding: 1,
                                fontSize: 18,
                                backgroundColor: 'light.secondary'
                            }}/>
                    ) : (
                        <LightMode
                            onClick={() => dispatch(toggleTheme())}
                            sx={{
                                cursor: 'pointer',
                                color: 'secondary.main',
                                borderTopRightRadius: 32,
                                borderBottomRightRadius: 0,
                                borderBottomLeftRadius: 32,
                                borderTopLeftRadius: 32,
                                padding: 1,
                                fontSize: 18,
                                backgroundColor: 'light.secondary'
                            }}/>
                    )}

                    <Close
                        onClick={() => dispatch(closeDrawer())}
                        sx={{
                            cursor: 'pointer',
                            color: 'secondary.main',
                            borderTopRightRadius: 32,
                            borderBottomRightRadius: 0,
                            borderBottomLeftRadius: 32,
                            borderTopLeftRadius: 32,
                            padding: 1,
                            fontSize: 18,
                            backgroundColor: 'light.secondary'
                        }}/>

                </Stack>

                <img
                    src={logo}
                    style={{height: 50, objectFit: 'contain', objectPosition: 'center'}}
                    alt="Ghana Association of Bankers Logo"
                />

                <Stack direction="column">
                    <SidebarLink
                        active={activePath === '/'}
                        label="Home"
                        path="/"
                        icon={activePath === '/' ? (
                            <Home
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 18,
                                    backgroundColor: 'light.secondary'
                                }}/>
                        ) : (
                            <HomeOutlined
                                sx={{
                                    cursor: 'pointer',
                                    color: 'text.secondary',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 18
                                }}/>
                        )}
                    />

                    <SidebarLink
                        active={activePath === '/about'}
                        label="About"
                        path="/about"
                        icon={activePath === '/about' ? (
                            <Info
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 18,
                                    backgroundColor: 'light.secondary'
                                }}/>
                        ) : (
                            <InfoOutlined
                                sx={{
                                    cursor: 'pointer',
                                    color: 'text.secondary',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 18
                                }}/>
                        )}
                    />

                    <SidebarLink
                        active={activePath === '/members'}
                        label="Members"
                        path="/members"
                        icon={activePath === '/members' ? (
                            <Group
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 18,
                                    backgroundColor: 'light.secondary'
                                }}/>
                        ) : (
                            <GroupOutlined
                                sx={{
                                    cursor: 'pointer',
                                    color: 'text.secondary',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 18
                                }}/>
                        )
                        }
                    />
                    <SidebarLink
                        active={activePath === '/treasury-and-markets'}
                        label="Treasury & Markets"
                        path="/treasury-and-markets"
                        icon={activePath === '/treasury-and-markets' ? (
                            <TrendingUp
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 18,
                                    backgroundColor: 'light.secondary'
                                }}/>
                        ) : (
                            <TrendingUpOutlined
                                sx={{
                                    cursor: 'pointer',
                                    color: 'text.secondary',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 18
                                }}/>
                        )
                        }
                    />
                    <SidebarLink
                        active={activePath === '/news'}
                        label="News"
                        path="/news"
                        icon={activePath === '/news' ? (
                            <Newspaper
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 18,
                                    backgroundColor: 'light.secondary'
                                }}/>
                        ) : (
                            <NewspaperOutlined
                                sx={{
                                    cursor: 'pointer',
                                    color: 'text.secondary',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 18
                                }}/>
                        )
                        }
                    />
                    <SidebarLink
                        active={activePath === '/gallery'}
                        label="Gallery"
                        path="/gallery"
                        icon={activePath === '/gallery' ? (
                            <BrowseGallery
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 18,
                                    backgroundColor: 'light.secondary'
                                }}/>
                        ) : (
                            <BrowseGalleryOutlined
                                sx={{
                                    cursor: 'pointer',
                                    color: 'text.secondary',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 18
                                }}/>
                        )
                        }
                    />

                    <SidebarLink
                        active={activePath === '/contact'}
                        label="Contact"
                        path="/contact"
                        icon={activePath === '/contact' ? (
                            <ContactPage
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 18,
                                    backgroundColor: 'light.secondary'
                                }}/>
                        ) : (
                            <ContactPageOutlined
                                sx={{
                                    cursor: 'pointer',
                                    color: 'text.secondary',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 18
                                }}/>
                        )
                        }
                    />

                    <Link underlilng="none" href="https://forum.gab.com.gh"
                          style={{marginLeft: 8, marginRight: 8}}>
                        <Button
                            color="secondary"
                            fullWidth={true}
                            sx={{
                                textTransform: 'capitalize',
                                borderTopRightRadius: 32,
                                borderBottomRightRadius: 0,
                                borderBottomLeftRadius: 32,
                                borderTopLeftRadius: 32,
                            }}
                            variant="contained"
                            disableElevation={true}>
                            Login
                        </Button>
                    </Link>
                </Stack>
            </Stack>
        </Box>
    )
}

export default SidebarContent;
