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

// import { useEffect, useState } from "react";
 
 
// function App() {
//   const [dataStatus, setdataStatus] = useState("");
//   const [datatotalResults, setdatatotalResults] = useState("");
 
//   const getDataFromApi = async () => {
//     let myEndpoint =
//       "https://newsapi.org/v2/top-headlines?country=us&apiKey=dd4cf4a5a1e64635a4d62c631362bdf4";
//     let myData = await fetch(myEndpoint); /* Must wait for fetching */
//     let parsedData = await myData.json(); /* Must wait for myData.json */
//     console.log("parsed received Data: ", parsedData);
 
//     setdataStatus(parsedData.status);
//     setdatatotalResults(parsedData.totalResults);
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
//       <p>
//         <b>Total Results:</b> {datatotalResults}
//       </p>
//     </div>
//   );
// }
 
// export default App;



//Example Code 8: Display articles on web interface just like above simple data.

// import { useEffect, useState } from "react";
 
 
// function App() {
//   const [dataStatus, setdataStatus] = useState("");
//   const [datatotalResults, setdatatotalResults] = useState("");
//   const [dataArticles, setArticles] = useState([]);
 
//   const getDataFromApi = async () => {
//     let myEndpoint =
//       "https://newsapi.org/v2/top-headlines?country=us&apiKey=dd4cf4a5a1e64635a4d62c631362bdf4";
//     let myData = await fetch(myEndpoint); /* Must wait for fetching */
//     let parsedData = await myData.json(); /* Must wait for myData.json */
//     console.log("parsed received Data: ", parsedData);
 
//     setdataStatus(parsedData.status);
//     setdatatotalResults(parsedData.totalResults);
//     setArticles(parsedData.articles);
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
//       <p>
//         <b>Total Results:</b> {datatotalResults}
//       </p>
//       <p>
//         <b>Articles:</b> {dataArticles}
//       </p>
//     </div>
//   );
// }
 
// export default App;

//Example Code 9: Display articles on web interface using map( ) function.

// import { useEffect, useState } from "react";
 
 
// function App() {
//   const [dataStatus, setdataStatus] = useState("");
//   const [datatotalResults, setdatatotalResults] = useState("");
//   const [dataArticles, setArticles] = useState([]);
 
//   const getDataFromApi = async () => {
//     let myEndpoint =
//       "https://newsapi.org/v2/top-headlines?country=us&apiKey=dd4cf4a5a1e64635a4d62c631362bdf4";
//     let myData = await fetch(myEndpoint); /* Must wait for fetching */
//     let parsedData = await myData.json(); /* Must wait for myData.json */
//     console.log("parsed received Data: ", parsedData);
 
//     setdataStatus(parsedData.status);
//     setdatatotalResults(parsedData.totalResults);
//     setArticles(parsedData.articles);
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
//       <p>
//         <b>Total Results:</b> {datatotalResults}
//       </p>
//       <p>
//         <b>Articles:</b>
//       </p>
//       {
//         dataArticles.map((element, uniqueKey = 0) => {
//           uniqueKey = uniqueKey + 1;
//           return (
//             <div key={uniqueKey}>
//               <p>
//                 {uniqueKey}. {element.title}
//               </p>
//             </div>
//           );
//         })
//       }
//     </div>
//   );
// }
 
// export default App;

//Example Code 10: Displaying news with their image, title, author and published-date. No data for some fields.

// import { useEffect, useState } from "react";
 
// function App() {
//   const [dataStatus, setdataStatus] = useState("");
//   const [datatotalResults, setdatatotalResults] = useState("");
//   const [dataArticles, setArticles] = useState([]);
 
//   const getDataFromApi = async () => {
//     let myEndpoint =
//       "https://newsapi.org/v2/top-headlines?country=us&apiKey=41ef462eca8142a4bbb7eaa25b4ece4c";
//     let myData = await fetch(myEndpoint); /* Must wait for fetching */
//     let parsedData = await myData.json(); /* Must wait for myData.json */
//     console.log("parsed received Data: ", parsedData);
 
//     setdataStatus(parsedData.status);
//     setdatatotalResults(parsedData.totalResults);
//     setArticles(parsedData.articles);
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
//       <p>
//         <b>Total Results:</b> {datatotalResults}
//       </p>
//       <p>
//         <b>Articles:</b>
//       </p>
//       {dataArticles.map((element, uniqueKey = 0) => {
//         uniqueKey = uniqueKey + 1;
//         return (
//           <div key={uniqueKey}>
//             <img src={element.urlToImage} alt="Image for News" />
//             <p>{element.title}</p>
//             <p className="text-red-600">Author: {element.author}</p>
//             <p>{element.publishedAt}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
 
// export default App;

//Example Code 11: If there is no data from fetched data, then we will display our own data. In previous example, there were some news for which author and images were missed.

import { useEffect, useState } from "react";
 
function App() {
  const [dataStatus, setdataStatus] = useState("");
  const [datatotalResults, setdatatotalResults] = useState("");
  const [dataArticles, setArticles] = useState([]);
 
  const getDataFromApi = async () => {
    let myEndpoint =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=dd4cf4a5a1e64635a4d62c631362bdf4";
    let myData = await fetch(myEndpoint); /* Must wait for fetching */
    let parsedData = await myData.json(); /* Must wait for myData.json */
    //console.log("parsed received Data: ", parsedData);
 
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
      {dataArticles.map((element, uniqueKey = 0) => {
        uniqueKey = uniqueKey + 1;
 
        //if no author, then use our own
        let authorEdit = element.author;
        if (authorEdit == "") {
          console.log("nauman");
          authorEdit = "Nauman";
        }
        //if no image, then use our own
        let imageEdit = element.urlToImage;
        if (imageEdit == "") {
          console.log("no image value");
          imageEdit = "src/assets/data.jpg";
        }
 
        console.log("authorEdit: ", authorEdit);
        console.log("imageEdit: ", imageEdit);
 
        return (
          <div key={uniqueKey}>
            <img src={imageEdit} alt="Image for News" />
            <p>{element.title}</p>
            <p className="text-red-600">Author: {authorEdit}</p>
            <p>{element.publishedAt}</p>
          </div>
        );
      })}
    </div>
  );
}
 
export default App;
