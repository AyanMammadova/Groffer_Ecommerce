import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { DATA } from '../../context/DataContext'

function MediaPage() {
  const {mediaImgs}=useContext(DATA)
  const {'*' : mediaslug}=useParams()
  const colNumber=mediaslug?.split("-")[0]
  return (
    <>
      <div className={`grid w-[90%] grid-cols-1 mx-auto gap-[5px]  ${colNumber == 4 ? 'sm:grid-cols-4' : colNumber == 2 ? 'sm:grid-cols-2' : colNumber == 3 ? 'sm:grid-cols-3' :''}`}>
        {
          mediaImgs && mediaImgs.map((item,i)=>{
            return <img key={i} className={`w-[100%] h-[50vh] ${colNumber == 4 ? 'sm:h-[50vh]' : colNumber == 2 ? 'sm:h-[100vh]' : colNumber == 3 ? 'sm:h-[70vh]' :'h-[50vh]'} object-cover`} src={item} alt="" />
          })
        }
      </div>
    </>
  )
}

export default MediaPage
