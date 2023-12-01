
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ROUTES } from './routes/routes'
import { BasketContext, BasketContextProvider, CategoriesContextProvider } from './services/context';
import Navbar from './components/Navbar';

const routes = createBrowserRouter(ROUTES);

function App() {


  return (
    <>
      <BasketContextProvider>
        <CategoriesContextProvider>
          <RouterProvider router={routes}></RouterProvider>
        </CategoriesContextProvider>
      </BasketContextProvider>

    </>
  )
}

export default App
