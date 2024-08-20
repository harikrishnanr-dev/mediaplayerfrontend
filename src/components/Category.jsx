import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faTrash } from '@fortawesome/free-solid-svg-icons';
import { addCategory, deleteCategory, getAllCategory, getAllVideosById, updateCategory } from '../services/AllApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VideoCard from './VideoCard';


function Category() {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState();
  const [allCategory,setAllCategory] = useState([]);
    
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 // Function to handle the 'Enter' key press in the input field
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleaddCategory();
    }
  }
  
  const handleaddCategory = async() => {
    if (!categoryName) { // Check if the category name is empty
        alert("Please Fill the Form")
      }
    else {
      let body = {
        categoryName:categoryName,
        allVideos:[],
      }
      const response = await addCategory(body);// Call the API to add the category
      if (response.status == 201) {
        toast.success(`${categoryName} Successfully Added`);
        handleClose();
        setCategoryName("");
        //to update the list of categories
        getCategory(); 
      }
      else {
        toast.error("Something Went Wrong")
  
      }
    }
  }

  // Function to fetch/Display all categories from the backend
  const getCategory = async ()=> {
    const response = await getAllCategory();// Call the API to view the category
    const{data} = response; //Destructure the data from the response
    setAllCategory(data); // Update the state with the fetched categories
    
  }
  
  useEffect(() => {
    getCategory();
  }, [])
  
  const handleDelete = async (categoryId) => {
    const result = await deleteCategory(categoryId);// Call the API to delete the category using id
    console.log("delete Response");
    console.log(result);
    if (result.status === 200) {// If the deletion is successful
      toast.success(`${categoryName} deleted`)
      getCategory();
    }
    else {
      toast.error("Some thing went wrong")
    }
  }
  const videoDrop = async (e,id) => {
    console.log("===on drop===")
    console.log("category id", id)
    const videoid = e.dataTransfer.getData("VideoId");
    console.log(`Video id, ${videoid} is dropped to category id ${id}`)
    
    const { data } = await getAllVideosById(videoid); //Destructure the data from the responegory=se
    console.log(data);
    const selectedCategory = allCategory?.find(item => item.id === id);
    selectedCategory.allVideos.push(data);
    console.log("selectedCategory");
    console.log(selectedCategory);

    //update
    const response = await updateCategory(selectedCategory, id);
    
  }
  const onDragOver = (e) => {
    //onDragover method will trigger page refresh so the video id 
    e.preventDefault();
    console.log("inside drag over")
    
  }

 

  return (
    <>
      <button className='btn btn-warning' onClick={handleShow}>Add New Category</button>
      
      {
        allCategory?.length > 0 ? 
        allCategory?.map((item) => (
          <div key={item?.id} className='m-3 border border-secondary p-3 rounded' droppable="true" onDragOver={(e) => onDragOver(e)} onDrop={(e) => videoDrop(e,item.id)}>
            <div className='d-flex justify-content-between align-items-center'>
              <h6 className='text-white'>{item?.categoryName}</h6>
              <Button className='btn btn-danger' onClick={() => handleDelete(item?.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </div>
            {
              item.allVideos.length > 0 ?
                item.allVideos?.map(card => (
                  <VideoCard displayVideo={card}/>
                  
                ))
              :<p>No Category Found</p>
            }
          </div>
        )):<p>No Category Found</p>
      }
    <Modal show={show} onHide={handleClose} data-bs-theme='dark'>
        <Modal.Header closeButton className='bg-dark'>
          <Modal.Title> <FontAwesomeIcon icon={faList} className='text-warning me-3'/><span className='textStyle'>Add Category</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p className='textStyle'>Please Fill The Form</p>
        <Form className='border border-secondary p-3 rounded' data-bs-theme='light'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Category Name" onChange={(e) => setCategoryName(e.target.value )} onKeyDown={handleKeyDown}/>
      </Form.Group> 
      
    </Form>
        </Modal.Body>
        <Modal.Footer className='bg-dark'>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleaddCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Category