// App.jsx is the most parent component, call all other components here 


// imports
import Main from "./components/Main"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"
import { useEffect, useState } from "react"

function App() {

  // states and variables
  const [showModal, setShowModal] = useState(false) // so sidebar shows up clicked
  // holds fetched api data
  const [data, setData] = useState(false) // why false
  const[loading, setLoading] = useState(false) 



  // functions

  function handleToggleModal() { // for when someone clicks to open/close sidebar
    setShowModal(!showModal)
    // set it to oppisite
  }

  // get api data on load
  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY // api key
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`// Get request URL string

      // cache the data to reduce api calls
      const today = (new Date()).toDateString() 
      const localKey = `NASA-${today}` //

      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log('fetched from cache today')
        return
      } // if we already have today's data, get it from cache


      // if we get here, today's key did not work
      localStorage.clear() // clear the storage and get data from api


      // try catch the fetched data
      try{

        const res = await fetch(url) // get the data from fetching
        const apiData = await res.json() // put in a better form

        localStorage.setItem(localKey, JSON.stringify(apiData)) // put today's data in local storage under key: localKey

        setData(apiData)
        console.log('fetched from api today')

        console.log('DATA\n', apiData) // output data to see it (inspect -> console)

      } catch (err) {
        console.log(err.message) // if error, output it
      }
    }

    // actually call the function
    fetchAPIData()
  }, []) // run on page load

  // () contains logic to be exectued when what is in [] (dependency array) conditions is met

  return (
    <>
    {/* conditionally show Main if data is there */}
    {data ? (<Main data={data} ></Main>): (
      // this is alternative case (no data)
      <div className="loadingState">
        <i className="fa-solid fa-gear"></i>
      </div>
    )}


    {/* only show sidebar when footer's i button is clicked*/}
    {showModal && 
      (<Sidebar data={data} handleToggleModal={handleToggleModal}/>) // if showModal is true, then do ()
    } 
  
    {/* why have this order */}
    {data && (
      <Footer data={data} handleToggleModal={handleToggleModal} />
    )}
    {/* pass function as a prop */}


    </>
  )
}

export default App


// normal project setup
// font awesome cdn 6.0 for icons
// make components with static data
// css them 
// integrate api call
// cache the data in local storage


// upload to github:
// click source control tab in vs code
// upload repository to github

// to update changes:
// save changes
// git add .
// git commit -m "setup gh-pages"
// git push