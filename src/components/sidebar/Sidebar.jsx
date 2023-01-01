import React from 'react'
import "./Sidebar.css"
import { Home, Poll, Report, Receipt, AccountCircle, Work, Redeem, AttachMoney, Assessment, Mail, Message, Feedback } from '@material-ui/icons';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWarapper">


                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>

                    <ul className="sidebarList">

                        <li className="sidebarListItem active">
                            <Home className='sidebarIcon'/>
                            Home 
                        </li>

                        <li className="sidebarListItem">
                            <Poll className='sidebarIcon'/>
                            Analytics 
                        </li>

                        <li className="sidebarListItem">
                            <Receipt className='sidebarIcon'/>
                            Sales
                        </li>

                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>

                    <ul className="sidebarList">

                        <li className="sidebarListItem">
                            <AccountCircle className='sidebarIcon'/>
                            Users 
                        </li>

                        <li className="sidebarListItem">
                            <Redeem className='sidebarIcon'/>
                            Products 
                        </li>

                        <li className="sidebarListItem">
                            <AttachMoney className='sidebarIcon'/>
                            Transactions
                        </li>

                        <li className="sidebarListItem">
                            <Assessment className='sidebarIcon' />
                            Reports
                        </li>

                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notification</h3>

                    <ul className="sidebarList">

                        <li className="sidebarListItem">
                            <Mail className='sidebarIcon'/>
                            Mail 
                        </li>

                        <li className="sidebarListItem">
                            <Feedback className='sidebarIcon'/>
                            FeedBack 
                        </li>

                        <li className="sidebarListItem">
                            <Message className='sidebarIcon'/>
                            Message
                        </li>

                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>

                    <ul className="sidebarList">

                        <li className="sidebarListItem">
                            <Work className='sidebarIcon'/>
                            Manage 
                        </li>

                        <li className="sidebarListItem">
                            <Poll className='sidebarIcon'/>
                            Analytics 
                        </li>

                        <li className="sidebarListItem">
                            <Report className='sidebarIcon' />
                            Reports
                        </li>

                    </ul>
                </div>


            </div>
        </div>
    )
}
