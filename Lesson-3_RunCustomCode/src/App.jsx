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
//  import './App.css';

// export default function App() {
//   return (
//     <h1 className='App'>Muhammad Nauman</h1>
//   );
// }

//Example Code 5: Displaying an introduction about author below his name. Introduction will also be shown at middle.

// export default function App() {
//   return (
//     <>
//       <h1 className='App'>Muhammad Nauman</h1>
//       <p className="App">Introduction about author</p>
//     </>
//   );
// }

// Example Code 6:

// If you don’t want to use external classes, then you can write code using inline CSS, like as below.

// In this code, we used multiple classes separated by comma (,).
// When you used “textAlign” property in inline CSS, then write it in camel casing style and without white space. But in case of external CSS, it will be written by using hyphen(-) i.e., text-align.

// export default function App() {
//   return (
//     <div>
//       <h1 style={{ margin: "25px 0px", textAlign: "center" }}>
//         naumanbutt2002
//       </h1>
//       <p style={{ textAlign: "center" }}>Introduction about author</p>
//     </div>
//   );
// }

// Example Code 7:

// Here, we did same work as in previous example, but by using external CSS file. Following are two files. One is App.css and other is App.js.

// First line in both files are commented. Note the method of commenting, that is different in both files.

// import './App.css';

// export default function App() {
//   return (
//     <div>
//       <h1>Muhammad Nauman</h1>
//       <p>Introduction about author</p>
//     </div>
//   );
// }


// Example Code 8: Displaying image.

// Some lines are commented.
// Online inline styles are used here so that property is fixed to a specific image. If you have multiple image and you want to display in same size, then you shall specify property in your style sheet.
// It is noted that there is a portion of line that is commented. In this way, you can also comment any HTML part in react environment.
// Line 1 is also commented. In this way, you can comment any non-HTML content in react environment. To comment multiple lines, you can use /* and */ at starting and ending of lines, respectively.



export default function App() {
  return (
    <div>
        <div> {/*outer-container*/}
          <div style={{width:'200px', height:'150px', border:"1px solid black"}}> {/*image-container*/}
            <img src="data.jpg" alt="naumanbutt2023" style={{maxWidth:"100%", height:"auto"}} />
          </div>
        </div>
    </div>
  );
}