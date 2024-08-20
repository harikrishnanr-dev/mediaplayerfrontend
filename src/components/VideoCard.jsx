import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { addToHistory, deleteVideo } from "../services/AllApi";
import { toast } from "react-toastify";

function VideoCard({ displayVideo, setDeleteVideoStatus }) {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async () => {
    // watch History Time
    const today = new Date();
    const timeStamp = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(today);
    console.log(timeStamp);
   
    const reqBody = {
      url: displayVideo.youtubeLink,
      caption: displayVideo.caption,
      timeStamp: timeStamp
    };
   
    await addToHistory(reqBody);
    setShow(true);
  };
  
  
  //for delete
  const deleteVideoItem = async(id) => {
    const response = await deleteVideo(id)
    console.log("response=========");
    console.log(response);
    if (response.status === 200) {
      setDeleteVideoStatus(true)
      toast.warning("Successfully deleted the Video")
    }
    else {
      toast.error("Something Went Wrong")
    }
    
  }


  // for drag and drop
  const dragStarted = (e,id)=>{
    console.log(`video with ID ${id} started dragging`)
    e.dataTransfer.setData("videoID",id)
}
    return (
        <>
        
        <Card style={{ width: '18rem' }} className="mt-4" draggable onDragStart={(e)=>dragStarted(e,displayVideo.id)} >
                <Card.Img variant="top" src={displayVideo.imageUrl}
                    height={'250px'} style={{ padding: '5px' }} onClick={handleShow}/>
                <Card.Body>
                        <div className='d-flex justify-content-between'>
                            <Card.Title >{displayVideo.caption.slice(0,20) }...</Card.Title>
              <Button variant="danger"  onClick={()=>deleteVideoItem(displayVideo.id)}><FontAwesomeIcon icon={faTrash}   /></Button>
                        </div>
                </Card.Body>
            </Card>
            <Modal
        show={show}
        onHide={handleClose}
        data-bs-theme='dark'
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-white">{displayVideo.caption }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                    <iframe width="100%" height="315" src={`${displayVideo.youtubeLink}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
        </Modal>
        </>
    )
}

export default VideoCard;
