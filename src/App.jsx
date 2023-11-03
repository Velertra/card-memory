import { useEffect, useState } from 'react'
import StartGame from './components/StartPage'
import './styles/index.css'
import LoadingImage from './components/LoadingImage'

function App() {
  const [loadingPage, setLoadingPage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(true)
    }, 5600)
  }, [])

  return (
  <>
    {!loadingPage ? <LoadingImage /> :
      
     <StartGame />
     }
  </>
  )
}

export default App
