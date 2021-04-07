import { Doughnut } from 'react-chartjs-2'

export default function DoughnutChart( {criticals, deaths, recoveries} ) {
    return (
        <Doughnut 
            data = {
                {
                    datasets: [{
                        data: [ criticals, deaths, recoveries ],
                        backgroundColor: ["red", "black" , "green"]
                    }],
                    labels: ['Criticals', 'Deaths' , 'Recoveries']
                }
            }
            redraw={false}
        />
    )
}