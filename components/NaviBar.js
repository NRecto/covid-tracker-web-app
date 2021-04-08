import Link from 'next/link';
import { Navbar, Nav } from 'react-bootstrap';

export default function NaviBar() {
	return(
		<Navbar bg="light" expand="lg">
		    <Link href="/">
		        <a className="navbar-brand">Covid-19 Tracker</a>
		    </Link>
		    <Navbar.Toggle aria-controls="basic-navbar-nav" />
		    <Navbar.Collapse id="basic-navbar-nav">
		        <Nav className="mr-auto">
		            <Link href="/covid/countries">
		                <a className="nav-link" role="button">
		                    Infected Countries
		                </a>
		            </Link>
		            <Link href="/covid/search">
		                <a className="nav-link" role="button">
		                    Find a Country
		                </a>
		            </Link>
		            <Link href="/covid/top">
		                <a className="nav-link" role="button">
		                    Top Countries
		                </a>
		            </Link>
		        </Nav>
		    </Navbar.Collapse>
		</Navbar>
	)
}