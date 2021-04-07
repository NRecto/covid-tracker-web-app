import { Doughnut } from 'react-chartjs-2'

export default function TopCountryDoughnut( {dataCases, dataNames} ) {
    // console.log(dataProp)
    const { top1, top2, top3, top4, top5, top6, top7, top8, top9, top10 } = dataCases
    const {name1, name2, name3, name4, name5, name6, name7, name8, name9, name10 } = dataNames
    
    return (
        <Doughnut 
            data = {
                {
                    datasets: [{
                        data: [ top1, top2, top3, top4, top5, top6, top7, top8, top9, top10 ],
                        backgroundColor: ["red", "black" , "green", "yellow", 'orange', 'violet', 'brown', 'blue', 'gray' ,'aqua' ]
                    }],
                    labels: [ name1, name2, name3, name4, name5, name6, name7, name8, name9, name10 ]
                }
            }
            redraw={false}
        />
    )
}
