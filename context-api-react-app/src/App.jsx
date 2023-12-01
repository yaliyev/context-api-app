
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ROUTES } from './routes/routes'
import { CategoriesContextProvider } from './services/context';
import Navbar from './components/Navbar';

const routes = createBrowserRouter(ROUTES);

function App() {
  

  return (
    <>

      <CategoriesContextProvider>
         <RouterProvider router={routes}></RouterProvider>
      </CategoriesContextProvider>
    </>
  )
}

export default App
