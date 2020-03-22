import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

const Dropzone = (props) => {
  const maxSize = 20000000
  const onDrop = useCallback(acceptedFiles => {
    props.getAcceptedFiles(acceptedFiles)
  }, [])

  const { isDragActive, getRootProps, getInputProps, isDragReject, acceptedFiles, rejectedFiles } = useDropzone({
    onDrop,
    minSize: 0,
    maxSize
  })

  const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize

  return (
    <div className='container text-center mt-5'>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {!isDragActive && 'Click here or drop a file to upload!'}
        {isDragActive && !isDragReject && "Drop it like it's hot!"}
        {isDragReject && 'File type not accepted, sorry!'}
        {isFileTooLarge &&
          (
            <div className='text-danger mt-2'>
              File is too large.
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Dropzone
