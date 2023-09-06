import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import './app.css'
import Home from './Views/Home/Home'
import "./Views/Home/home.css"
import Cities from './Views/Cities/Cities'
import Login from './Views/Login/Login'
import CityItinerary from '../src/Components/CityItinerary/CityItinerary'
import SignUp from './Components/SingPages/SignUp'




const router = createBrowserRouter([
  {
    path: '/', 
    element: <Home/>,
    children: [
  
    { path: '/*', element: <h1><img src="\img\404error_page_background.png" alt="404page" /></h1> },
 
  
  ]
  },
  
  {
    path: '/cities',
    element: <Cities/>,
    children: [
    
      
      { path: '/cities/*', element: <h1><img src="\img\404error_page_background.png" alt="404page" /></h1> },
  
    
    ]
  },

  {
    path: '/cities/Itinerary',
    element: <CityItinerary/>,
    children: [
     
      { path: '/cities/Itinerary*', element: <h1><img src="\img\404error_page_background.png" alt="404page" /></h1> },
  
    
    ]
  },

  {
    path: '/login', 
    element: <Login/>,
    children: [
  
    { path: '/login*', element: <h1><img src="\img\404error_page_background.png" alt="404page" /></h1> },
 
  
  ]
  },

  {
    path: '/login/signup',
    element: <SignUp/>,
    children: [
  
      { path: '/login/signup*', element: <h1><img src="\img\404error_page_background.png" alt="404page" /></h1> },
   
    
    ]
  }
  
     

])

function App() {
  return (
    
  <>
  <RouterProvider router={router}/> 
  

  </>
  )
}

export default App
