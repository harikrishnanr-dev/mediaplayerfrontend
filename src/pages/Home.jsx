import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'

function Home() {
  const [uploadVideoStatus,setuploadVideoStatus]=useState({})
  return (
    <>
    <div className='container mt-5 mb-5 d-flex justify-content-between align-items-center'>
      <div className='add_video'>
          <Add status={setuploadVideoStatus} />
      </div>
      <Link to ="/watch" style={{textDecoration:'none',color:'white', fontSize:'25px'}}>Watch History</Link>
    </div>


    <div className='container mt-5 mb-5 d-flex justify-content-between'>
      <div className='all-videos textStyle'>
      <h4>All Videos</h4>
          <View uploadVideoStatus={uploadVideoStatus } />
      </div>

    
    <div className='category col-md-3'>
      <Category/>
    </div>
    </div>

    </>
  )
}

export default Home