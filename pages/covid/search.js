import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import DoughnutChart from '../../components/DoughnutChart';
import toNum from '../../helpers/toNum';

export default function Search({data}) {

	// console.log(data);

	const countriesStats = data.countries_stat;
	// state to store the value of the input field
	const [targetCountry, setTargetCountry] = useState('');
	// states to store the information of the country
	const [name, setName] = useState('');
	const [criticals, setCriticals] = useState(0);
	const [deaths, setDeaths] = useState(0);
	const [recoveries, setRecoveries] = useState(0);

	// Function to search for a specific country
	function searchCountry(e){

		// Prevents page redirection
		e.preventDefault();

		// .find method returns an object that meets the condition provided 
		const match = countriesStats.find(country => country.country_name.toLowerCase() === targetCountry.toLowerCase());

		// console.log(match);

		if (match) {

			setName(match.country_name);
			setCriticals(toNum(match.serious_critical));
			setDeaths(toNum(match.deaths));
			setRecoveries(toNum(match.total_recovered));

		} else {

			setName('');
			setCriticals(0);
			setDeaths(0);
			setRecoveries(0);

		}
		

	}

	return(
		<React.Fragment>
			<Form onSubmit={e => searchCountry(e)}>
				<Form.Group controlId="country">
					<Form.Label>Country</Form.Label>
					<Form.Control 
						type="text"
						placeholder="Search for a country"
						value={targetCountry}
						onChange={e => setTargetCountry(e.target.value)}
					/>
					<Form.Text className="muted">
						Get Covid-19 stats of searched for country.
					</Form.Text>
				</Form.Group>

				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>

			<h1>Country: {name}</h1>
			<DoughnutChart
			 criticals = {criticals}
			 deaths = {deaths}
			 recoveries = { recoveries }
			/>
		</React.Fragment>
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

	return {
		props: {
			data
		}
	}

}

/*Search {
	props: {
		data: [country1, country2]
	}
}

<NaviBar className="text-center" data="hello" />

NaviBar {
	props: {
		className: "text-center",
		data: "hello"
	}
}*/