function App() {
  let myEndpoint = "https://newsapi.org/v2/top-headlines?country=us&apiKey=41ef462eca8142a4bbb7eaa25b4ece4c";
  let myData = fetch(myEndpoint);
  console.log("received Data: ", myData);
  //let parsedData = myData.json();
  //console.log("received parseData: ", parsedData);
  return (
    <div>
      <h1>Data from our REST API</h1>
    </div>
  );
}
 
export default App;