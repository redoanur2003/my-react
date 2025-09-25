import { Suspense } from 'react'
import './App.css'
import Countries from './countries/country/Countries'

const countryData = fetch("https://openapi.programming-hero.com/api/all")
  .then(res => res.json())
function App() {
  return (
    <>
      <h1>My react projects</h1>

      <Suspense fallback={<h4>The country data is loading ..............</h4>}>
        <Countries countryData={countryData}></Countries>
      </Suspense>

    </>
  )
}

export default App
