import Copyright from "./copyright";
import React from "react";
import {Divider} from "@mui/material";
import DesktopFooter from "./desktop-footer";

const Footer = () => {
    return (
        <React.Fragment>
            <DesktopFooter/>
            <Divider variant="middle" light={true}/>
            <Copyright/>
        </React.Fragment>
    )
}

export default Footer;
