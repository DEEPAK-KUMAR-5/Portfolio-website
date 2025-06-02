import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: '/about',
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },
  {
    path: '/projects',
    element: (
      <>
        <Navbar />
        <Projects />
      </>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
