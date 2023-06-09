import React from 'react'
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomeBanner() {
    return (
        <Container fluid className="home_page_banner">
            <div className="home_hero_section">
                    <h1><span>Doc </span>Online</h1>
                    <h4>Book Online appointment in any Hospital from Anywhere</h4>
                    <Link to="/allhospital"><Button>Book Online Appointment</Button></Link>
            </div>
        </Container>
    )
}

export default HomeBanner