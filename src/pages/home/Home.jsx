import React from 'react'
import "./Home.css"
import FeatureInfo from '../../components/featuredInfo/FeatureInfo'
import Charts from '../../components/charts/Charts';
import { userData } from "../../dummyData";
import WidgetsSmall from '../../components/widgetsSmall/WidgetsSmall';
import WidgetsLarge from '../../components/widgetsLarge/WidgetsLarge';

export default function Home() {
  return (
    <div className='home'>
      <FeatureInfo />
      <Charts data={userData} title="User Analytics" grid dataKey="Active User" />
      <div className='homeWidgets'>
        <WidgetsSmall />
        <WidgetsLarge />
      </div>
    </div>
  )
}
