const getDataFromApi = async () => {
  let myEndpoint = "https://newsapi.org/v2/top-headlines?country=us&apiKey=41ef462eca8142a4bbb7eaa25b4ece4c";
  let myData = await fetch(myEndpoint); /* Must wait for fetching */
  //console.log("received Data: ", myData);
  let parsedData = await myData.json(); /* Must wait for myData.json */
  console.log("parsed received Data: ", parsedData);
 
  let dataStatus = parsedData.status;
  console.log("value of 'status' in data: ", dataStatus);
 
  let datatotalResults = parsedData.totalResults;
  console.log("value of 'data articles' in data: ", datatotalResults);
 
  let dataarticles = parsedData.articles;
  console.log("value of 'articles' in data: ", dataarticles);
   
  let dataarticles_3 = parsedData.articles[3];
  console.log("value of 'articles' at 3rd index: ", dataarticles_3);
};
 
function App() {
  getDataFromApi();
  return (
    <div>
      <h1>Data from our REST API</h1>
    </div>
  );
}
 
export default App;