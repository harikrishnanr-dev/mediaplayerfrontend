import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Landingpage() {
	return (
		<>
			<Container className="mt-5 mb-5 d-flex align-items-center justify-content-evenly w-100">
				<Row>
					<Col>
						<h1 className="textStyle">
							Welcome To <span className="text-warning">Media Player</span>
						</h1>
						<p className="textStyle" style={{ textAlign: "justify" }}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
							assumenda animi! Sequi molestiae quas corporis animi, tempore enim
							maxime porro eligendi, beatae iure aut ipsam earum eveniet non nam
							placeat?Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Sit eligendi quis vel excepturi, molestiae molestias. Illum,
							repellendus numquam tempora debitis doloribus iste officiis ea et
							rem accusamus. Vitae, pariatur quibusdam?
						</p>
						<Link to="/home">
							<button className="btn btn-warning mt-5">
								Get Started <FontAwesomeIcon icon={faArrowRight} />
							</button>
						</Link>
					</Col>
					<Col className="text-center">
						<img
							src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif"
							alt=""
							className="ms-5"
							height="350px"
						/>
					</Col>
				</Row>
			</Container>
			<div className="container mt-5 mb-5">
				<h3 className="textStyle mb-5">Features</h3>
				<div className="cards d-flex align-items-center justify-content-evenly ">
					{/* Features Cards 1 */}
					<Card style={{ width: "18rem" }}>
						<Card.Img
							variant="top"
							src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif"
						/>
						<Card.Body className="bg-dark">
							<Card.Title className="text-white">Card Title</Card.Title>
							<Card.Text className="text-white">
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
							<Button variant="warning">Go somewhere</Button>
						</Card.Body>
					</Card>
					{/* Features Cards 2 */}
					<Card style={{ width: "18rem" }}>
						<Card.Img
							variant="top"
							src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif"
						/>
						<Card.Body className="bg-dark">
							<Card.Title className="text-white">Card Title</Card.Title>
							<Card.Text className="text-white">
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
							<Button variant="warning">Go somewhere</Button>
						</Card.Body>
					</Card>
					{/* Features Cards 3 */}
					<Card style={{ width: "18rem" }}>
						<Card.Img
							variant="top"
							src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif"
						/>
						<Card.Body className="bg-dark">
							<Card.Title className="text-white">Card Title</Card.Title>
							<Card.Text className="text-white">
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
							<Button variant="warning">Go somewhere</Button>
						</Card.Body>
					</Card>
				</div>
			</div>



			<div className="container mb-5 mt-5 border border-2 border-secondary p-5 rounded">
				<Row>
					<Col>
						<h3 className="textStyle text-warning">Simple And Power</h3>
						<p className="textStyle mt-5" style={{ textAlign: "justify" }}>
							<span className="fs-5 fw-bolder">Play Everything : </span>Lorem,
							ipsum dolor sit amet consectetur adipisicing elit. Doloremque
							accusantium aut quasi! A doloribus et maiores ratione, iure
							tempora corrupti dolores. Expedita nisi optio molestias inventore
							iste corrupti ad reprehenderit!
						</p>
						<p className=" textStyle" style={{ textAlign: "justify" }}>
							<span className="fs-5 fw-bolder">Play Everything : </span>Lorem,
							ipsum dolor sit amet consectetur adipisicing elit. Doloremque
							accusantium aut quasi! A doloribus et maiores ratione, iure
							tempora corrupti dolores. Expedita nisi optio molestias inventore
							iste corrupti ad reprehenderit!
						</p>
						<p className="textStyle" style={{ textAlign: "justify" }}>
							<span className="fs-5 fw-bolder">Play Everything : </span>Lorem,
							ipsum dolor sit amet consectetur adipisicing elit. Doloremque
							accusantium aut quasi! A doloribus et maiores ratione, iure
							tempora corrupti dolores. Expedita nisi optio molestias inventore
							iste corrupti ad reprehenderit!
						</p>
					</Col>
					<Col>
						<div className="mt-1">
							<iframe
								width="600"
								height="400"
								src="https://www.youtube.com/embed/NG0ei6rihQ8"
								title="Spark (Lyrical Video) Tamil |The GOAT| Thalapathy Vijay | Venkat Prabhu |Yuvan Shankar Raja|T-Series"
								frameorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerpolicy="strict-origin-when-cross-origin"
								allowfullscreen
							></iframe>
						</div>
					</Col>
				</Row>
			</div>
		</>
	);
}

export default Landingpage;
