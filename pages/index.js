import {Jumbotron} from 'react-bootstrap'
import toNum from '../helpers/toNum'

export default function Home({globalTotal}) {

  const {cases} = globalTotal
  
  return (
    <Jumbotron>
      <h1 className="text-center">Welcome to Batch 94's Coronavirus Statistics</h1>
      <h3 className="text-center"> Total Numver of Cases Around the World:</h3>
      <h4 className="text-center">{cases}</h4>
    </Jumbotron>
  )
}

/* 
NextJs has unique ways to pre-render data. one of the functions that nextjs uses is called getStaticProps(). This allows to fetch data during build tome ( the time when your HTML fles are built data. ).
getStaticProps() is mostly used or very quickly. The main advanatage of using getStaticProps() over our client-side  fetching ( fFetching withing the component ex. Courses page in the next-booking system app)
*/
export async function getStaticProps(){

  const res = await fetch('https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php', {
    'method' : "GET",
    'headers': {
      'x-rapidapi-host' : 'coronavirus-monitor.p.rapidapi.com',
      'x-rapidapi-key' : '6085b628a5msh12b4765569d1427p1188bbjsnd3c4dc348539'
    }
  })

  /* 
    getStaticProps() is run furing build time berfore your ages are rendered into  the browser. This is why, if you console log on the browser BUT it will be shown in your nextJS dev terminal.
   */
  const data = await res.json()
  // console.log(data)
  
  const countriesStats = data.countries_stat;
  let total = 0;

  countriesStats.forEach( country => {
    total += toNum(country.cases)
  })

  const globalTotal = {

    cases: total
  }
  // console.log(globalTotal)
  return {
    props: {
      globalTotal
    }
  }
  
}