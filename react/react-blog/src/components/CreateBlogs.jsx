import { React, useState } from 'react';
import Editor from 'react-simple-wysiwyg';
const CreateBlogs = () => {
const [html, setHtml] = useState('my <b>HTML</b>');
function onChange(e) {
    setHtml(e.target.value);
  }
  return (
    <>
    <div className="container">
        <div className="d-flex justify-content-between pt-4">
                <h4>Create Blogs</h4>
                <a href='#' className='btn btn-dark'>Back</a>
        </div>
        <div className="card border-0 shadow-lg">
            <div className="card-body">
                <div className="mb-3">
                    <label htmlFor="" className='form-label'>Title</label>
                    <input type="text" className='form-control' placeholder='Title' />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className='form-label'>Description</label>
                    <Editor value={html} containerProps={{ style: { height: '200px' } }} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className='form-label'>Image</label> <br />
                    <input type="file" />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className='form-label'>Author</label>
                    <input type="text" className='form-control' placeholder='Author' />
                </div>
                <button className='btn btn-success'>Create</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default CreateBlogs
