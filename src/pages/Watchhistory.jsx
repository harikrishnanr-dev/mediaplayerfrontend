import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getHistory } from '../services/AllApi'


function Watchhistory() {
  const [allHistory, setAllHistory] = useState([])
  const getWatchHistory = async () => {
    const { data } = await getHistory();
    console.log(data);
    setAllHistory(data);
    
  }
  useEffect(() => {
    getWatchHistory(allHistory)
  }, [])
  //Delete history videos
  const handleDelete = async (historyId) => {
    await deleteHistory(historyId)
    getWatchHistory();
  }

  return (
    <>
      <div className='container d-flex mt-5 justify-content-between mb-5'>
        <h3 className='textStyle'>Watch History</h3>
        <Link to='/home' style={{textDecoration:'none',color:'white',fontWeight:'750',fontSize:'16px'}}>
          <FontAwesomeIcon icon={faArrowLeft}  className='me-3'/> Back to Home
        </Link>
      </div>
      <table className='table container' data-bs-theme='dark' style={{ borderRadius: '15px',border:'2px'
        }}>
        <thead>
          <tr>
          <th>#</th>
          <th>Caption</th>
          <th>Url</th>
          <th>Time Stamp</th>
          <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
          allHistory.length > 0 ?
          allHistory.map((item) => (
      <tr>
        <td>{item.id}</td>
        <td>{item.caption}</td>
        <td>{item.url}</td>
              <td>{item.timeStamp}</td>
        <td><FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(item?.id)} /></td>
        </tr>
    ))
    :<p>NO Item Found</p>
    
}
</tbody>
      </table>
    </>
  )
}

export default Watchhistory