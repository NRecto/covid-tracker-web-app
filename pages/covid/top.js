export default function Top({countryData}) {
    console.log(countryData)
    return (
        <>
            <h1>10 Countries with the highest number of Cases.</h1>
            <DoughnutChart
			 
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