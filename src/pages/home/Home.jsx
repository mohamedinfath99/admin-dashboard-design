import React from 'react'
import "./Home.css"
import FeatureInfo from '../../components/featuredInfo/FeatureInfo'
import Charts from '../../components/charts/Charts';
import { userData } from "../../dummyData";

export default function Home() {
  return (
    <div className='home'>
      <FeatureInfo />
      <Charts data={userData} title="User Analytics" grid dataKey="Active User" />
    </div>
  )
}
