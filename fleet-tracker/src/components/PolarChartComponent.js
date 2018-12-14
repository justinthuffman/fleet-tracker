import React, { Component } from 'react';
import {Polar} from 'react-chartjs-2';


export default class PolarChartComponent extends Component
{
  constructor(props) {
      super(props);
      this.state = {
        data: {},
        truckNumber:[],
        truckMileage:[]
      }
    }
       
      componentDidMount() {
        fetch('http://localhost:8080/api/trucks')
          .then(res => res.json())
          .then(data => {
            const trucks = data;
            let truckNumber = [];
            let truckMileage = [];
            trucks.forEach(element => {
              truckNumber.push(element.truckNumber);
              truckMileage.push(element.mileage);
            });
            this.setState({
              data: {
            
                labels: truckNumber,
                datasets:[
                   {
                      label:'Trucks',
                      data: truckMileage ,
                      backgroundColor:[
                       'rgba(255,105,145,0.6)',
                       'rgba(155,100,210,0.6)',
                       'rgba(90,178,255,0.6)',
                       'rgba(240,134,67,0.6)',
                       'rgba(120,120,120,0.6)',
                       'rgba(255,105,145,0.6)',
                       'rgba(155,100,210,0.6)',
                       'rgba(90,178,255,0.6)',
                       'rgba(240,134,67,0.6)',
                       'rgba(120,120,120,0.6)',
                       'rgba(255,105,145,0.6)',
                       'rgba(155,100,210,0.6)',
                       'rgba(90,178,255,0.6)',
                       'rgba(240,134,67,0.6)',
                       'rgba(120,120,120,0.6)',
                       'rgba(250,55,197,0.6)'
                    ]
                   }
                ]
             }
             });
          })
      }
    
 render()
   {
      return(
        <div className="chart">
          <Polar
            // height = {240}
            // width = {240}
            data = {this.state.data}
            options = {{ title:{
          display:true,
          text:'Compare Truck Mileage',
          fontSize:25
        },
        legend:{
          display:true,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    } />
        </div>
      )
   }
}