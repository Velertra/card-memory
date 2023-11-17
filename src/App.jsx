import { useEffect, useState } from 'react'
import LandingPage from './components/Page/LandingPage'
import LoadingImage from './components/Page/LoadingImage'

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
