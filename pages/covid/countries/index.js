import React from 'react';
import Link from 'next/link';
import Head from 'next/head'
import { ListGroup } from 'react-bootstrap'

export default function index({data}) {

    const countriesList =data.countries_stat.map( country => {
        return (
            <ListGroup.Item key={country.country_name}>
                <Link href={`/covid/countries/${country.country_name}`}>
                    <a>{country.country_name}</a>
                </Link>
            </ListGroup.Item>
        )
    })
    
    return (

        <React.Fragment>
        <Head>
            <title>Covid-19 Infected Countries</title>
        </Head>

        <ListGroup>
            {countriesList}
        </ListGroup>
        </React.Fragment>
        
    )
}
export async function getStaticProps(){
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
