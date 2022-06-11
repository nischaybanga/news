import SearchBar from "./SearchBar";
import Display from "./Display";
import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";

function App() {
  const [postsPerPage] = useState(6);
  const [newsArray, setNewsArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://newsdata.io/api/1/news?apikey=pub_44075bf721084ec17debf415505d72bfd35d&country=in&page=1"
      );
      setNewsArray(response.data.results);
      const response2 = await axios.get(
        "https://newsdata.io/api/1/news?apikey=pub_44075bf721084ec17debf415505d72bfd35d&country=in&page=2"
      );
      const response2Array = response2.data.results;
      setNewsArray((wordList) => [...wordList, ...response2Array]);
    }
    fetchData();
    setCurrentPage(1);
  }, []);

  async function onSearchHandler(search) {
     if(search=="")
     {
       search="hot";
     }
    console.log(search);
    const response = await axios.get(
      `https://newsdata.io/api/1/news?apikey=pub_44075bf721084ec17debf415505d72bfd35d&country=in&q=${search}&page=1`
    );
    setNewsArray(response.data.results);
    const response2 = await axios.get(
      `https://newsdata.io/api/1/news?apikey=pub_44075bf721084ec17debf415505d72bfd35d&country=in&q=${search}&page=2`
    );
    const response2Array = response2.data.results;
    setNewsArray((wordList) => [...wordList, ...response2Array]);
    setCurrentPage(1);
  }
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = newsArray.slice(indexOfFirstPost, indexOfLastPost);


  return (
    <div className="App">
      <h1 className="reload">
        <a onClick={() => window.location.reload()}>WORLD NEWS</a>
      </h1>
      <SearchBar setSearch={onSearchHandler} />
      <Display items={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={newsArray.length}
        paginate={paginate}
      ></Pagination>
      <h3
        style={{
          textAlign: "center",
        }}
      >
        Made by Nischay Banga
      </h3>
    </div>
  );
}

export default App;
