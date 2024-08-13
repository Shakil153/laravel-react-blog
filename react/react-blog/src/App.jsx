import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import Blogs from './components/Blogs';
import CreateBlogs from './components/CreateBlogs';
function App() {
  return (
    <>
      <div className='bg-dark text-center py-2 saddow-lg'>
        <h1 className='text-white'>React Bog</h1>
      </div>
      <Routes>
        <Route path='/' element={ <Blogs/> }/ >
        <Route path='/create' element={ <CreateBlogs/> }/ >
      </Routes>
      
    </>
  )
}

export default App
