//Example Code 1: In the example, we display “Hello World”.

// export default function App() {
//   return (
//     <h1>Hello World</h1>
//   );
// }

//Example Code 2: In the example, we displayed name of author for this website.

// export default function App() {
//   return (
//     <h1>naumanbutt2002</h1>
//   );
// }

//Example Code 4: Showing name of author at middle of the web-page.

//Method 1: update App() function in App.js like as shown below. In this method, we used inline CSS.

// function App() {
//   return (
//     <h1 style={{textAlign: 'center'}}>Muhammad Nauman</h1>
//   );
// }

//Method 2: Use external CSS.

// export default function App() {
//   return (
//     <h1 className='App'>Muhammad Nauman</h1>
//   );
// }

//Example Code 5: Displaying an introduction about author below his name. Introduction will also be shown at middle.

export default function App() {
  return (
    <div>
      <h1 className='App'>Muhammad Nauman</h1>
      <p className="App">Introduction about author</p>
    </div>
  );
}