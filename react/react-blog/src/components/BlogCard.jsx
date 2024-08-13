
const BlogCard = () => {
  return (
        <div className="col-12 col-md-2 col-lg-3 mb-3">
            <div className='card border-0 shadwo-lg'>
              <img src="https://placehold.co/600x400" alt="" />
              <div className='card-body'>
                <h4 className='h5'>Dummay Heading</h4>
                <p>Descrtion is nothing. aok for nothing..just desction.</p>
                <div className="d-flex justify-content-between">
                <a href="#" className='btn btn-dark'>Details</a>
                <a href="#" className='btn btn-warning'>Pencil</a>
              </div>
            </div>
            </div>
        </div>
  )
}

export default BlogCard
