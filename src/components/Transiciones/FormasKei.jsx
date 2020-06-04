import React from "react";
import { Col, Card, CardBody, Row, UncontrolledTooltip } from "reactstrap";
import { Link } from "react-router-dom";

export default function FormasKei(props) {
	return (
		<React.Fragment>
			<h3 className="title text-center" id="las-formas">
				Las Formas 形
			</h3>
			<UncontrolledTooltip placement="top" target="las-formas" delay={0}>
				けい <br /> (Kei)
			</UncontrolledTooltip>
			<Row className="justify-content-around">
				<Col md="6">
					<Link
						to="/grupos"
						onClick={() => {
							props.scrollTop();
						}}
					>
						<Card
							style={{
								borderRadius: "10px",
								boxShadow:
									"0px 5px 25px 0px rgba(255, 54, 54, 0.6)",
								background:
									"linear-gradient(87deg, #f56036 0, #f5365c 100%)",
							}}
						>
							<CardBody className="text-white text-capitalize">
								<span className="title">grupos y tipos</span>
								<i className="fas fa-chevron-right pl-3"></i>
								<i
									className="fas fa-3x fa-pencil-ruler"
									style={{
										position: "absolute",
										top: 10,
										right: 10,
										opacity: 0.7,
									}}
								></i>
							</CardBody>
						</Card>
					</Link>
				</Col>
			</Row>
		</React.Fragment>
	);
}
