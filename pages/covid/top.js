import { useEffect, useState } from "react";
import TopCountryDoughnut from '../../components/TopCountryDoughnut'
import toNum from '../../helpers/toNum'

export default function Top({countryData}) {
    const[cases, setCases] = useState([])
    const{countryName, setCountryName } = useState([])
    
    const countryCases = countryData.map( country => {
        return country.cases
    })
    const countryNames = countryData.map( country => {
        return country.country_name
    })
    // console.log(countryNames)
    
    const dataCases = {
        top1: toNum(countryCases[0]),
        top2: toNum(countryCases[1]),
        top3: toNum(countryCases[2]),
        top4: toNum(countryCases[3]),
        top5: toNum(countryCases[4]),
        top6: toNum(countryCases[5]),
        top7: toNum(countryCases[6]),
        top8: toNum(countryCases[7]),
        top9: toNum(countryCases[8]),
        top10: toNum(countryCases[9])
    }
    const dataNames = {
        name1: countryNames[0],
        name2: countryNames[1],
        name3: countryNames[2],
        name4: countryNames[3],
        name5: countryNames[4],
        name6: countryNames[5],
        name7: countryNames[6],
        name8: countryNames[7],
        name9: countryNames[8],
        name10: countryNames[9]
    }
    
    
    
    return (
        <>
            <h1>10 Countries with the highest number of Cases.</h1>
            <TopCountryDoughnut
			 dataCases = {dataCases}
             dataNames = {dataNames}
			/>
        </>
    )
}

export async function getStaticProps() {

	const res = await fetch('https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php',{
	    "method": "GET",
	    "headers": {
	      "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
	      "x-rapidapi-key": "6085b628a5msh12b4765569d1427p1188bbjsnd3c4dc348539"
	    }
	})

	const data = await res.json();
    const countriesStats = data.countries_stat;
    const countryData = countriesStats.slice(0 , 10);
    
    

    // console.log( topCountry )
	return {
		props: {
		    countryData
		}
	}

}