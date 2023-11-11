import { useEffect, useState } from 'react'
import LandingPage from './components/LandingPage'
import './styles/index.css'
import LoadingImage from './components/LoadingImage'

function App() {
  const [loadingPage, setLoadingPage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(true)
    }, 2600)
  }, [])

  return (
  <>
    {!loadingPage ? <LoadingImage /> :
      
     <LandingPage />
     }
  </>
  )
}

export default App
