import React from 'react';
import "./WidgetsLarge.css"

export default function WidgetsLarge() {

  const Button = ({type}) => {
    return <button className={'WidgetsLargeButton ' + type}>{type}</button>
  }

  return (
    <div className='WidgetsLarge'>
      <h3 className="WidgetsLargeTitle">Latest Transactions</h3>

      <table className="WidgetsLargeTable">
        
        <tr className="WidgetsLargeTr">
          <th className="WidgetsLargeTh">Customer</th>
          <th className="WidgetsLargeTh">Date</th>
          <th className="WidgetsLargeTh">Amount</th>
          <th className="WidgetsLargeTh">Status</th>
        </tr>
        
        <tr>
          <td className='WidgetsLargeUSer'>
            <img src='https://avatars.githubusercontent.com/u/106984600?v=4' alt='' className='WidgetsLargeImg'/>

            <span className='WidgetsLargeName'>Mohamed Infath</span>
          </td>

          <td className='WidgetsLargeDate'> 2 Jun 2022</td>
          <td className='WidgetsLargeAmount'>$122.89</td>
          <td className='WidgetsLargeStatus'><Button type="Approved" /></td>
        </tr>


        <tr>
          <td className='WidgetsLargeUSer'>
            <img src='https://avatars.githubusercontent.com/u/106984600?v=4' alt='' className='WidgetsLargeImg'/>

            <span className='WidgetsLargeName'>Mohamed Infath</span>
          </td>

          <td className='WidgetsLargeDate'> 2 Jun 2022</td>
          <td className='WidgetsLargeAmount'>$122.89</td>
          <td className='WidgetsLargeStatus'><Button type="Declined"/></td>
        </tr>


        <tr>
          <td className='WidgetsLargeUSer'>
            <img src='https://avatars.githubusercontent.com/u/106984600?v=4' alt='' className='WidgetsLargeImg'/>

            <span className='WidgetsLargeName'>Mohamed Infath</span>
          </td>

          <td className='WidgetsLargeDate'> 2 Jun 2022</td>
          <td className='WidgetsLargeAmount'>$122.89</td>
          <td className='WidgetsLargeStatus'><Button type="Pending"/></td>
        </tr>


        <tr>
          <td className='WidgetsLargeUSer'>
            <img src='https://avatars.githubusercontent.com/u/106984600?v=4' alt='' className='WidgetsLargeImg'/>

            <span className='WidgetsLargeName'>Mohamed Infath</span>
          </td>

          <td className='WidgetsLargeDate'> 2 Jun 2022</td>
          <td className='WidgetsLargeAmount'>$122.89</td>
          <td className='WidgetsLargeStatus'><Button type="Approved"/></td>
        </tr>

      </table>
    </div>
  )
}

