//EXAMPLE-1

// function App() {
//   let myEndpoint = "https://newsapi.org/v2/top-headlines?country=us&apiKey=41ef462eca8142a4bbb7eaa25b4ece4c";
//   let myData = fetch(myEndpoint);
//   console.log("received Data: ", myData);
//   //let parsedData = myData.json();
//   //console.log("received parseData: ", parsedData);
//   return (
//     <div>
//       <h1>Data from our REST API</h1>
//     </div>
//   );
// }
 
// export default App;

//EXAMPLE-2

// const getDataFromApi = async () => {
//   let myEndpoint = "https://newsapi.org/v2/top-headlines?country=us&apiKey=dd4cf4a5a1e64635a4d62c631362bdf4";
//   let myData = await fetch(myEndpoint);
//   console.log("received Data: ", myData);
// };
 
// function App() {
//   getDataFromApi();
//   return (
//     <div>
//       <h1>Data from our REST API</h1>
//     </div>
//   );
// }
 
// export default App;

//EXAMPLE-3
// const getDataFromApi = async () => {
//   let myEndpoint = "https://newsapi.org/v2/top-headlines?country=us&apiKey=dd4cf4a5a1e64635a4d62c631362bdf4";
//   let myData = await fetch(myEndpoint); /* Must wait for fetching */
//   //console.log("received Data: ", myData);
//   let parsedData = await myData.json(); /* Must wait for myData.json */
//   console.log("parsed received Data: ", parsedData);
// };
 
// function App() {
//   getDataFromApi();
//   return (
//     <div>
//       <h1>Data from our REST API</h1>
//     </div>
//   );
// }
 
// export default App;

//EXAMPLE-4
const getDataFromApi = async () => {
  let myEndpoint = "https://newsapi.org/v2/top-headlines?country=us&apiKey=dd4cf4a5a1e64635a4d62c631362bdf4";
  let myData = await fetch(myEndpoint); /* Must wait for fetching */
  //console.log("received Data: ", myData);
  let parsedData = await myData.json(); /* Must wait for myData.json */
  console.log("parsed received Data: ", parsedData);
 
  let dataStatus = parsedData.status;
  console.log("value of 'status' in data: ", dataStatus);
 
  let datatotalResults = parsedData.totalResults;
  console.log("value of 'status' in data: ", datatotalResults);
 
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