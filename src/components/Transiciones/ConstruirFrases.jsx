import React from "react";
import { Col, Card, CardBody, Row } from "reactstrap";
import { Link } from "react-router-dom";
import LasFrases from "components/LasFrases";
import Secciones from "components/Sections/Secciones";

export default class ConstruirFrases extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            LasFrases: LasFrases.Elementos,
        };
    }
    componentDidMount() {
        this.setState({
            altura: "auto",
        });
    }

    render() {
        return (
            <React.Fragment>
                <h3 className="title text-center pt-2">
                    Construir Frases Simples
                </h3>
                <Row className="justify-content-around">
                    {this.state.LasFrases.map((grupo) => (
                        <Col md="12" key={grupo.titulo}>
                            <Card
                                style={{
                                    overflowY: "hidden",
                                    height: "auto",
                                    borderRadius: "15px",
                                    background: grupo.bgColor,
                                    boxShadow: grupo.sombra,
                                }}
                            >
                                <h4
                                    className={
                                        "text-center text-capitalize title mt-3 pt-0 " +
                                        grupo.textColor
                                    }
                                >
                                    {grupo.titulo}
                                </h4>
                                <CardBody
                                    className="d-flex justify-content-between px-0 col-lg-12"
                                    style={{
                                        overflowX: "scroll",
                                        whiteSpace: "nowrap",
                                        position: "relative",
                                    }}
                                >
                                    {grupo.elementos.map((elemento) => (
                                        <Col
                                            md="auto"
                                            key={elemento.titulo}
                                            style={{
                                                minWidth: "20rem",
                                            }}
                                        >
                                            <Link
                                                to={
                                                    "/construir-frases/" +
                                                    elemento.url
                                                }
                                                onClick={() => {
                                                    this.props.scrollTop();
                                                }}
                                            >
                                                <Card
                                                    style={{
                                                        borderRadius: "10px",
                                                        background:
                                                            "rgb(45, 206, 137)",
                                                        width: "100%",
                                                    }}
                                                    className="card-plain"
                                                >
                                                    <CardBody className="text-white px-3">
                                                        <span className="title text-capitalize">
                                                            {elemento.titulo}
                                                        </span>
                                                        <i className="fas fa-chevron-right pl-3"></i>
                                                        <i
                                                            className={
                                                                "fas fa-3x fa-" +
                                                                elemento.icono
                                                            }
                                                            style={{
                                                                position:
                                                                    "absolute",
                                                                top: 10,
                                                                right: 10,
                                                                opacity: 0.7,
                                                            }}
                                                        ></i>
                                                    </CardBody>
                                                </Card>
                                            </Link>
                                        </Col>
                                    ))}
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                    <h3 className="title text-center col-lg-12 mt-5">
                        Contenido Relacionado
                    </h3>
                    <Col md="6">
                        <Link
                            to="/grupos"
                            onClick={() => {
                                this.props.scrollTop();
                            }}
                        >
                            <Card
                                style={{
                                    borderRadius: "10px",
                                    boxShadow:
                                        "rgba(45, 206, 137, 0.6) 0px 5px 25px 0px",
                                    background:
                                        "linear-gradient(87deg, rgb(45, 206, 137) 0px, rgb(45, 206, 204) 100%)",
                                }}
                            >
                                <CardBody className="text-white">
                                    <span className="title text-capitalize">
                                        grupos y tipos
                                    </span>
                                    <i className="fas fa-chevron-right pl-3"></i>
                                    <br />
                                    <small>
                                        Grupos de los Verbos y Adjetivos
                                    </small>
                                    <i
                                        className="fas fa-3x fa-pencil-ruler"
                                        style={{
                                            position: "absolute",
                                            top: 20,
                                            right: 10,
                                            opacity: 0.7,
                                        }}
                                    ></i>
                                </CardBody>
                            </Card>
                        </Link>
                    </Col>
                    <Col md="6">
                        <Link
                            to="/tiempos"
                            onClick={() => {
                                this.props.scrollTop();
                            }}
                        >
                            <Card
                                style={{
                                    borderRadius: "10px",
                                    boxShadow:
                                        "rgba(45, 206, 137, 0.6) 0px 5px 25px 0px",
                                    background:
                                        "linear-gradient(87deg, rgb(45, 206, 137) 0px, rgb(45, 206, 204) 100%)",
                                }}
                            >
                                <CardBody className="text-white">
                                    <span className="title text-capitalize">
                                        tiempos
                                    </span>
                                    <i className="fas fa-chevron-right pl-3"></i>
                                    <br />
                                    <small>Los tiempos de las palabras</small>
                                    <i
                                        className="fas fa-3x fa-pencil-ruler"
                                        style={{
                                            position: "absolute",
                                            top: 20,
                                            right: 10,
                                            opacity: 0.7,
                                        }}
                                    ></i>
                                </CardBody>
                            </Card>
                        </Link>
                    </Col>
                    <Secciones
                        hiragana={true}
                        katakana={true}
                        kanjis={true}
                        particulas={true}
                    />
                </Row>
            </React.Fragment>
        );
    }
}
