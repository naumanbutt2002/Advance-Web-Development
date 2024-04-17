import { useEffect, useState } from "react";
 
/* File: App.jsx */
function App() {
  const [dataStatus, setdataStatus] = useState("");
  const [datatotalResults, setdatatotalResults] = useState("");
  const [dataArticles, setArticles] = useState([]);
 
  const getDataFromApi = async () => {
    let myEndpoint =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=41ef462eca8142a4bbb7eaa25b4ece4c";
    let myData = await fetch(myEndpoint); /* Must wait for fetching */
    let parsedData = await myData.json(); /* Must wait for myData.json */
    console.log("parsed received Data: ", parsedData);
 
    setdataStatus(parsedData.status);
    setdatatotalResults(parsedData.totalResults);
    setArticles(parsedData.articles);
  };
 
  useEffect(() => {
    getDataFromApi();
  }, []);
 
  return (
    <div>
      <h1>Data from our REST API</h1>
 
      <p>
        <b>Status:</b> {dataStatus}
      </p>
      <p>
        <b>Total Results:</b> {datatotalResults}
      </p>
      <p>
        <b>Articles:</b>
      </p>
      {
        dataArticles.map((element, uniqueKey = 0) => {
          uniqueKey = uniqueKey + 1;
          return (
            <div key={uniqueKey}>
              <p>
                {uniqueKey}. {element.title}
              </p>
            </div>
          );
        })
      }
    </div>
  );
}
 
export default App;