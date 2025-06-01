import { useState } from 'react'
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>
      <Navbar />
      <Home />
    </div>,
  },
  {
    path: '/about',
    element: <div>
      <Navbar />
      <About />
    </div>,
  },
  {
    path: '/contact',
    element: <div> 
      <Navbar />
      <Contact /> 
    </div>,
  },
  {
    path: '/projects',
    element: <div>
      <Navbar />
      <Projects />
    </div>, 
  },
]);

function App() {

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
