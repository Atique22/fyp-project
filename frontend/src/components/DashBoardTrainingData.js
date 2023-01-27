import React from 'react'
import Chart from './Chart'
import MenuDashBoard from './DashBoardMenu'
import FileDataDisplay from './FileDataDisplay'
import LineGraph from './LineGraph'

const TrainingDataDashboard = () => {


  return (
    //  ======= Training Data Dash-Board ======= 
    <div id="dashboard" className='container'>
       <MenuDashBoard/>
       
      <div className='row' style={{ marginLeft: "7rem" }} >
        <Chart title="Bubble chart" component={  <LineGraph />  } description="chart is usually used as a catchall term for the graphical representation of data. Graph refers to a chart that specifically plots data along two dimensions... " />
        <Chart title="Bar chart"  component={  <LineGraph />  } description="chart is usually used as a catchall term for the graphical representation of data. Graph refers to a chart that specifically plots data along two dimensions... " />
        <Chart title="Line graph."  component={  <LineGraph />  } description="chart is usually used as a catchall term for the graphical representation of data. Graph refers to a chart that specifically plots data along two dimensions... " />
        <Chart title="Area graph."  component={  <LineGraph />  } description="chart is usually used as a catchall term for the graphical representation of data. Graph refers to a chart that specifically plots data along two dimensions... " />
      </div>
      <div className='border  d-flex justify-content-center m-5'>
          <FileDataDisplay/>
      </div>
      
    </div>
  )
}

export default TrainingDataDashboard