/* File: App.jsx */
 
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
 
function App() {
  const [stateTotalResults, setTotalResults] = useState(0);
  const [stateArticles, setArticles] = useState([]);
  const [statePageNo, setPageNo] = useState(1);
  const [statePageSize, setPageSize] = useState(6);
 
  const [stateTotalPage, setTotalPage] = useState(0);
 
  const getDataFromApi = async () => {
    let myEndpoint = `https://newsapi.org/v2/top-headlines?country=us&apiKey=41ef462eca8142a4bbb7eaa25b4ece4c&page=${statePageNo}&pageSize=${statePageSize}`;
    let myData = await fetch(myEndpoint); /* Must wait for fetching */
    let parsedData = await myData.json(); /* Must wait for myData.json */
    console.log("parsed received Data: ", parsedData);
 
    setTotalResults(parsedData.totalResults);
 
    //cannot use "stateTotalResults" here. Becuase, state value will not be updated quickly
    let coutPage = Math.ceil(parsedData.totalResults / statePageSize);
    console.log("coutPage: ", coutPage);
 
    setTotalPage(coutPage);
 
    setArticles(parsedData.articles);
  };
 
  const handleNextNews = async () => {
    setPageNo(statePageNo + 1);
    console.log("Next Button Pressed");
 
    let myEndpoint = `https://newsapi.org/v2/top-headlines?country=us&apiKey=41ef462eca8142a4bbb7eaa25b4ece4c&page=${statePageNo}&pageSize=${statePageSize}`;
    let myData = await fetch(myEndpoint); /* Must wait for fetching */
    let parsedData = await myData.json(); /* Must wait for myData.json */
    console.log("parsed received Data: ", parsedData);
 
    setTotalResults(parsedData.totalResults);
 
    //setArticles(parsedData.articles); //this line for without infinity scroll down
    setArticles(stateArticles.concat(parsedData.articles)); // this line is for infinity scroll down
  };
 
  useEffect(() => {
    getDataFromApi();
  }, []);
 
  return (
    <div>
      <p>Current Page No: {statePageNo}</p>
      <p>Page Size: {statePageSize}</p>
      <p>Total Pages: {stateTotalPage}</p>
      <p>Total Results: {stateTotalResults}</p>
 
      <h1>Data from our REST API</h1>
 
      <p>
        <b>Articles:</b>
      </p>
 
      <InfiniteScroll
        dataLength={stateArticles.length}
        next={handleNextNews}
        hasMore={statePageNo <= stateTotalPage}
        style={{ overflow: "hidden" }}
      >
        <div>
          {stateArticles.map((element, uniqueKey = 0) => {
            uniqueKey = uniqueKey + 1;
            return (
              <div key={uniqueKey}>
                <img src={element.urlToImage} alt="Image for News" />
                <p>{element.title}</p>
                <p className="text-red-600">Author: {element.author}</p>
                <p>{element.publishedAt}</p>
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
}
 
export default App;