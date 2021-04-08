import Link from 'next/link';
import React from 'react';
import { Jumnbotron , Button } from 'react-bootstrap';

export default function Banner({country, criticals, deaths, recoveries}) {
    return (
        <Jumnbotron>
            <h1>{country}</h1>
            <p>Deaths: {deaths}</p>
            <p>Recoveries: {recoveries} </p>
            <p>Critical Cases: {criticals} </p>
            <Button variant="success">
                <Link href="/covid/countries">
                    <a>View Countries</a>
                </Link>
            </Button>
        </Jumnbotron>
    )
}