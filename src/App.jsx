import { useEffect, useState } from 'react'
import LoadingImage from './utilities/LoadingImage';
import LandingPage from './Page/LandingPage';
import { Link } from 'react-router-dom';

function App() {
  const [loadingPage, setLoadingPage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(true)
    }, 2600)
  }, [])

  return (
  <>
  <nav>
    <Link to="dash">dash</Link>
  </nav>
    {!loadingPage ? <LoadingImage /> :
      
     <LandingPage />
     }
  </>
  )
}

export default App
