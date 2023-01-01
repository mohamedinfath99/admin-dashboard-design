import React, { Component } from 'react'
import "./Topbar.css"
import {NotificationsNone, Language, Settings} from '@material-ui/icons';


export class Topbar extends Component {
  render() {
    return (
      <div className="topbar">
        <div className="topbarwarapper">

          <div className="topleft">
            <span className="logo">Trripy Admin Dashboard</span>
          </div>

          <div className="topright">

            <div className="topbarIconContainer">
              <NotificationsNone />
              <span className="tobIconBadge">2</span>
            </div>

            <div className="topbarIconContainer">
              <Language/>
              <span className="tobIconBadge">2</span>
            </div>

            <div className="topbarIconContainer">
              <Settings />
            </div>

            <img src="https://avatars.githubusercontent.com/u/106984600?v=4" alt="profile" className="topAvatar" />

          </div>
        </div>
      </div>
    )
  }
}

export default Topbar
