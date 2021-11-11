import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';

import { MenuItem } from '@mui/material';

import { DropdownButton } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    return (
        <div
            style={{ display: 'flex', height: '100vh', width: '170px', overflow: 'scroll initial' }}
        >
            <CDBSidebar textColor="black" backgroundColor="#FFFFFF">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a
                        href="/"
                        className="text-decoration-none"
                        style={{ color: 'black' }}
                    >
                        CURENET
                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content" >
                    <CDBSidebarMenu>

                        <DropdownButton title="Facility" style={{ marginLeft: '90px'}}>
                            <MenuItem href="#books">Appointments</MenuItem>
                            <MenuItem href="#podcasts">MeetUp</MenuItem>
                            <MenuItem href="#">Empty Bed</MenuItem>
                        </DropdownButton>

                        <NavLink exact to="/admin" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user" style={{ marginLeft: '22px', marginTop: '14px' , color: 'black', backgroundColor: '#00FFFF', 'borderRadius': '12px', textDecoration: 'none' }}>Admin</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/patient" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user" style={{ marginLeft: '22px', marginTop: '14px' , color: 'black', backgroundColor: '#00FFFF', 'borderRadius': '12px', textDecoration: 'none' }}>Patient</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/doctor" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user" style={{ marginLeft: '22px', marginTop: '14px' , color: 'black', backgroundColor: '#00FFFF', 'borderRadius': '12px', textDecoration: 'none' }}>
                                Doctor
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/user" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user" style={{ marginLeft: '22px', marginTop: '14px' , color: 'black', backgroundColor: '#00FFFF', 'borderRadius': '12px', textDecoration: 'none' }}>Medical</CDBSidebarMenuItem>
                        </NavLink>

                        <NavLink
                            exact
                            to="/hero404"
                            target="_blank"
                            activeClassName="activeClicked"
                        >
                            {/* <CDBSidebarMenuItem icon="exclamation-circle">
                                404 page
                            </CDBSidebarMenuItem> */}
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        style={{
                            padding: '20px 5px',
                        }}
                    >
                        Welcome To Curenet,
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    );
};

export default Sidebar;

