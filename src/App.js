import React from "react"
import CTerms from "./components/CTerms.js"
import STerms from "./components/STerms.js"
import cryptoTerms from "./cryptoTerms.js"
import stockTerms from "./stockTerms.js"
import chartTerms from "./patternsData.js"
import Navbar from "./components/Navbar.js"
import Pattern from "./components/Patterns.js"
import Home from "./components/HomePage.js"
import Footer from "./components/Footer.js"
import {nanoid} from "nanoid"

function App() {
  const [page, setPage] = React.useState("Home")
  const [cTerms, setCTerms] = React.useState()
  const [sTerms, setSTerms] = React.useState()
  const [chartPatterns, setchartPatterns] = React.useState()
  const [showFooter, setShowFooter] = React.useState(true);

  function changePage(nPage){
    setPage(nPage)
  }

  React.useEffect(() => {
    if(page !== "Home"){
      document.getElementById('searchPage').value = '';
    }
    setShowFooter(true)
    setCTerms(cryptoTerms.map(term => {
      return <CTerms
          key={nanoid()}
          section={term.letter}
          name={term.name}
          description={term.description}
          />
        }))
    setchartPatterns(chartTerms.map(term => {
      return <Pattern
          key={nanoid()}
          name={term.name}
          description={term.description}
          img={term.img}
          />
        }))
    setSTerms(stockTerms.map(term => {
      return <STerms
          key={nanoid()}
          section={term.letter}
          name={term.name}
          description={term.description}
          />
        }))
  },[page])


  function handleChange(event){
    setShowFooter(false)
    const {value} = event.target
    if(page === "Crypto Terms"){
      setCTerms(cryptoTerms
        .filter(term => term.name.toLowerCase().includes(value.toLowerCase()))
        .map(filteredTerm => { 
          return <CTerms
            key={nanoid()}
            section={filteredTerm.letter}
            name={filteredTerm.name}
            description={filteredTerm.description}
          />
        }))
    }
    if(page === "Chart Patterns"){
      setchartPatterns(chartTerms
        .filter(chart => chart.name.toLowerCase().includes(value.toLowerCase()))
        .map(filteredTerm => { 
          return <Pattern
          key={nanoid()}
          name={filteredTerm.name}
          description={filteredTerm.description}
          img={filteredTerm.img}
          />
        }))
    }
    if(page === "Stock Terms"){
      setSTerms(stockTerms
        .filter(stock => stock.name.toLowerCase().includes(value.toLowerCase()))
        .map(filteredTerm => { 
          return <STerms
          key={nanoid()}
          section={filteredTerm.letter}
          name={filteredTerm.name}
          description={filteredTerm.description}
          />
        }))
    }
  }

  return (
    <div className="App">
      <Navbar page={changePage}/>
      {page !== "Home" && 
        <div className="search--container">
          <input 
              type="text"
              placeholder="Search"
              className="form--search"
              onChange={handleChange}
              id = "searchPage"
          />
        </div>
      }
      {page === "Crypto Terms" && cTerms}
      {page === "Stock Terms" && sTerms}
      {page === "Chart Patterns" && chartPatterns}
      {page === "Home" && <Home/>}
      {showFooter && <Footer/>}
    </div>
  );
}

export default App;
