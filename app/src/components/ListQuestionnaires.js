import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Dropdown, Form, Row } from 'react-bootstrap';
import axios from 'axios';
export const ListQuestionnaires = ({ rol }) => {

    const [questionnaires, setQuestionnaires] = useState([]);

    useEffect(() => {
        const url = rol == "administrator" ? "/api/get-all-questionnaires" : "/api/get-questionnaires-by-user";
        //axios.get(url) -> Devuelve un objeto "data";
    }, [])
//crear el delete con metodo de delete y poner la funcion en el boton onClick
    const getData = async () => {
        try {
            const [data] = await axios.get("http://localhost:4000/questionnaire/get-all");
            setQuestionnaires(data.questionnaires)
        } catch (error) {
            console.log(error)
            alert("Ocurrio un error al obtener x")

        }
    }
    return (
        <Container>
            <Row>
                {
                    questionnaires.map(({ name, description }, i) => (
                        <Col>
                            <Card style={{ width: "15rem" }} className='mb-3'>
                                <Card.Body>
                                    <a href={`/create-questionnaires/${i}`}
                                        style={{ textDecoration: "none", color: "black" }}>
                                        <Card.Img src="https://cdn-icons-png.flaticon.com/512/3913/3913648.png" />
                                    </a>
                                    <Row className='m-1'>
                                        <Col xs={8}>
                                            <Card.Title>
                                                {name}
                                            </Card.Title>
                                        </Col>
                                        {
                                            rol == "client" && (
                                                <Col className='text-center'>
                                                    <Dropdown variant="outline-primary">
                                                        <Dropdown.Toggle></Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item>Eliminar</Dropdown.Item>
                                                            <Dropdown.Item>Editar</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </Col>
                                            )
                                        }

                                    </Row>
                                    <Row>
                                        <Card.Text>
                                            {description}
                                        </Card.Text>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}
