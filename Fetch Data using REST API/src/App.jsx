//Example Code 1: You can write below code in which endpoint is requested and data is tried to display in Browser’s Console.

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

//Example Code 2: Use below code as solution for previous problem.



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

//Example Code 3: Use below code as solution for previous problem.



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

//Example Code 4: Displaying value for a specific field in received data in case of previous example.


// const getDataFromApi = async () => {
//   let myEndpoint = "https://newsapi.org/v2/top-headlines?country=us&apiKey=dd4cf4a5a1e64635a4d62c631362bdf4";
//   let myData = await fetch(myEndpoint); /* Must wait for fetching */
//   //console.log("received Data: ", myData);
//   let parsedData = await myData.json(); /* Must wait for myData.json */
//   console.log("parsed received Data: ", parsedData);
 
//   let dataStatus = parsedData.status;
//   console.log("value of 'status' in data: ", dataStatus);
 
//   let datatotalResults = parsedData.totalResults;
//   console.log("value of 'status' in data: ", datatotalResults);
 
//   let dataarticles = parsedData.articles;
//   console.log("value of 'articles' in data: ", dataarticles);
   
//   let dataarticles_3 = parsedData.articles[3];
//   console.log("value of 'articles' at 3rd index: ", dataarticles_3);
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

//Example Code 5: Use states in previous example to show value of “status” on web’s interface.


// import { useState } from "react";
 
 
// function App() {
//   const [dataStatus, setdataStatus] = useState("");
 
//   const getDataFromApi = async () => {
//     let myEndpoint =
//       "https://newsapi.org/v2/top-headlines?country=us&apiKey=dd4cf4a5a1e64635a4d62c631362bdf4";
//     let myData = await fetch(myEndpoint); /* Must wait for fetching */
//     let parsedData = await myData.json(); /* Must wait for myData.json */
//     console.log("parsed received Data: ", parsedData);
 
//     setdataStatus(parsedData.status);
//   };
 
//   getDataFromApi();
 
//   return (
//     <div>
//       <h1>Data from our REST API</h1>
 
//       <h2>Status: </h2>
//       <p>{dataStatus}</p>
//     </div>
//   );
// }
 
// export default App;

//Example Code 6: Stop rendering the components multiple times.

// import { useEffect, useState } from "react";
 
 
// function App() {
//   const [dataStatus, setdataStatus] = useState("");
 
//   const getDataFromApi = async () => {
//     let myEndpoint =
//       "https://newsapi.org/v2/top-headlines?country=us&apiKey=dd4cf4a5a1e64635a4d62c631362bdf4";
//     let myData = await fetch(myEndpoint); /* Must wait for fetching */
//     let parsedData = await myData.json(); /* Must wait for myData.json */
//     console.log("parsed received Data: ", parsedData);
 
//     setdataStatus(parsedData.status);
//   };
 
//   useEffect(() => {
//     getDataFromApi();
//   }, []);
 
//   return (
//     <div>
//       <h1>Data from our REST API</h1>
 
//       <p>
//         <b>Status:</b> {dataStatus}
//       </p>
//     </div>
//   );
// }
 
// export default App;


//Example Code 7: Also show value of totalResults in addition to previous example.

import { useEffect, useState } from "react";
 
 
function App() {
  const [dataStatus, setdataStatus] = useState("");
  const [datatotalResults, setdatatotalResults] = useState("");
 
  const getDataFromApi = async () => {
    let myEndpoint =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=dd4cf4a5a1e64635a4d62c631362bdf4";
    let myData = await fetch(myEndpoint); /* Must wait for fetching */
    let parsedData = await myData.json(); /* Must wait for myData.json */
    console.log("parsed received Data: ", parsedData);
 
    setdataStatus(parsedData.status);
    setdatatotalResults(parsedData.totalResults);
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
    </div>
  );
}
 
export default App;