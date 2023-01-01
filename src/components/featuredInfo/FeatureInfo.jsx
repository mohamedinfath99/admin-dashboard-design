import React from 'react'
import "./FeaturedInfo.css"
import {ArrowDownward, ArrowUpward} from '@material-ui/icons';

export default function featureInfo() {
  return (
    <div className="featured">

        <div className="featuredItem">
            <span className="featuedTitle">Revanue</span>

            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2, 415</span>
                <span className="featuredMoneyRate">-11.4 <ArrowDownward className='iconNegative'/></span>
            </div>
            <span className="featureSub">Compared to last months</span>
        </div>

        <div className="featuredItem">
            <span className="featuedTitle">Sales</span>

            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2, 415</span>
                <span className="featuredMoneyRate">-11.4 <ArrowDownward className='iconNegative'/></span>
            </div>
            <span className="featureSub">Compared to last months</span>
        </div>

        <div className="featuredItem">
            <span className="featuedTitle">Cost</span>

            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2, 415</span>
                <span className="featuredMoneyRate">10.4 <ArrowUpward className='iconPositive'/></span>
            </div>
            <span className="featureSub">Compared to last months</span>
        </div>

    </div>
  )
}
