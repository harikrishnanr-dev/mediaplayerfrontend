import { faCloudArrowUp, faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import React from "react";
import { UploadVideo } from "../services/AllApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({status}) {
	const [show, setShow] = useState(false);
	// state to store all form field values
	const [videoDetails, SetVideoDetails] = useState({
		caption: '',
		imageUrl: '',
		youtubeLink: ''
	})

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const addVideoDetails = async () => {
		const {caption, youtubeLink } = videoDetails
		

			if(!caption || !youtubeLink){
				toast.warning("Please Fill the Form Completely ")
			} else {
				console.log("final data")
				console.log(videoDetails)
				const response = await UploadVideo(videoDetails);
				console.log(response);
				if (response.status === 201) {
					status(response.data)
					toast.success(`${response.data.caption} successfully uploaded`);
					handleClose()
				}
				else {
					toast.error("Something Went Wrong")
				}
					
			}
		

	}
	const getEmbededLink = (data) => {
		console.log("========emebeded======");
		
		const link2 =`https://i.ytimg.com/vi/${data.slice(-11)}/maxresdefault.jpg`
		const link=`https://www.youtube.com/embed/${data.slice(-11)}`
		console.log(link);
		SetVideoDetails({...videoDetails,imageUrl:link2,youtubeLink: link})
	}
	return (
		<>
			<div className="d-flex align-items-center ">
				<h5 className="textStyle me-3">Upload A new Video</h5>
				<button onClick={handleShow} className="btn">
					<FontAwesomeIcon
						icon={faCloudArrowUp}
						style={{ color: "#ffffff" }}
						className="fs-5"
					/>
				</button>
			</div>
			<Modal show={show} onHide={handleClose} data-bs-theme="dark">
				<Modal.Header closeButton className="bg-dark">
					<Modal.Title>
						<FontAwesomeIcon icon={faFilm} className="text-warning me-3" />
						<span className="textStyle">Upload Video</span>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p className="textStyle">Please Fill The Form</p>
					<Form className="border border-secondary p-3 rounded" data-bs-theme="light">
						
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Control type="text" placeholder="Enter Video Caption" onChange={(e)=> SetVideoDetails({...videoDetails,caption:e.target.value})} />
						</Form.Group>
						{/* <Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Control type="text" placeholder="Enter Video Thumbnail Url" onChange={(e)=> SetVideoDetails({...videoDetails,imageUrl:e.target.value})}/>
						</Form.Group> */}
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Control type="text" placeholder="Enter Youtube Video LInk" onChange={(e)=>getEmbededLink(e.target.value)}  />
							
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer className="bg-dark">
					<Button variant="secondary" onClick={handleClose}>
						Cancel
					</Button>
					<Button variant="warning" onClick={addVideoDetails}>
						Upload
					</Button>
				</Modal.Footer>
			</Modal>
			<ToastContainer position='top-center' theme='colored' autoClose={2000} />
		</>
	);
}

export default Add;
