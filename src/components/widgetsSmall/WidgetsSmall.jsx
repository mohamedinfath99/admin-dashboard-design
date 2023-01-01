import React from 'react'
import './WidgetsSmall.css';
import { Visibility } from '@material-ui/icons';

export default function WidgetsSmall() {
    return (
        <div className='WidgetsSmall'>
            <span className="WidgetsSmallTitle">New Join Members</span>

            <ul className="WidgetsSmallList">

                <li className="WidgetsSmallItem">
                    <img src="https://avatars.githubusercontent.com/u/106984600?v=4" alt="" className="WidgetsSmallImg" />

                    <div className="WidgetsSmallUser">
                        <span className="WidgetsSmallUserName">Moahmed Infath</span>
                        <span className="WidgetsSmallUserTitle">Software Engineer</span>
                    </div>

                    <button className="WidgetsSmallBtn"><Visibility className='icon'/> Display</button>
                </li>


                <li className="WidgetsSmallItem">
                    <img src="https://avatars.githubusercontent.com/u/106984600?v=4" alt="" className="WidgetsSmallImg" />

                    <div className="WidgetsSmallUser">
                        <span className="WidgetsSmallUserName">Moahmed Infath</span>
                        <span className="WidgetsSmallUserTitle">Software Engineer</span>
                    </div>

                    <button className="WidgetsSmallBtn"><Visibility className='icon'/> Display</button>
                </li>


                <li className="WidgetsSmallItem">
                    <img src="https://avatars.githubusercontent.com/u/106984600?v=4" alt="" className="WidgetsSmallImg" />

                    <div className="WidgetsSmallUser">
                        <span className="WidgetsSmallUserName">Moahmed Infath</span>
                        <span className="WidgetsSmallUserTitle">Software Engineer</span>
                    </div>

                    <button className="WidgetsSmallBtn"><Visibility className='icon'/> Display</button>
                </li>


                <li className="WidgetsSmallItem">
                    <img src="https://avatars.githubusercontent.com/u/106984600?v=4" alt="" className="WidgetsSmallImg" />

                    <div className="WidgetsSmallUser">
                        <span className="WidgetsSmallUserName">Moahmed Infath</span>
                        <span className="WidgetsSmallUserTitle">Software Engineer</span>
                    </div>

                    <button className="WidgetsSmallBtn"><Visibility className='icon'/> Display</button>
                </li>


                <li className="WidgetsSmallItem">
                    <img src="https://avatars.githubusercontent.com/u/106984600?v=4" alt="" className="WidgetsSmallImg" />

                    <div className="WidgetsSmallUser">
                        <span className="WidgetsSmallUserName">Moahmed Infath</span>
                        <span className="WidgetsSmallUserTitle">Software Engineer</span>
                    </div>

                    <button className="WidgetsSmallBtn"><Visibility className='icon'/> Display</button>
                </li>
            </ul>
        </div>
    )
}
