import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function SubBanner() {
    return (
        <Container fluid className="subBanner mt-4 p-5">
            <Row className="Banner">
                <Col>
                    <h2>For Hospital to appointment from here Join from Below</h2>
                    <Link to="/registerHospital"><Button>Hospital Join </Button></Link>
                </Col>
            </Row>
        </Container>
    )
}

export default SubBanner
