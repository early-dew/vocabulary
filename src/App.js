import { useState, useEffect } from 'react';
import './App.css';
import dotenv from 'dotenv';
import jsonp from 'jsonp';


dotenv.config();

const apiKey = process.env.NY_API_KEY

const App = () => {



  const searchQuery = 'cinema';
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const apiUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchQuery}&api-key=${apiKey}`;

  fetch(proxyUrl + apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });


  return (
    <div>

    </div>
  )

}

//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);


//   const handleSearch = () => {
//     // const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(searchTerm)}&format=json`;
//     const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=intext:${encodeURIComponent(searchTerm)}&format=json&prop=extracts&exintro=true&explaintext=true`;
//     // const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(searchTerm)}&format=json&prop=extracts&exintro=true&explaintext=true&utf8=1`;


//     jsonp(apiUrl, null, async (err, data) => {
//       if (err) {
//         console.error('Error fetching search results:', err);
//       } else {
//         const wikiResults = data.query.search;
//         setSearchResults(wikiResults);
//       }
//     });
//   };

//   const handleShowFullContent = async (pageId) => {
//     try {
//       const response = await fetch(
//         `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=revisions&rvprop=content&pageids=${pageId}`
//       );
//       const articleContentData = await response.json();
//       const articleContent = articleContentData.query.pages[pageId]?.revisions[0]?.['*'] || 'No content available';

//       console.log('Full Content:', articleContent);
//     } catch (error) {
//       console.error('Error fetching full content:', error);
//     }
//   };

//   return (
//     <div className="App">
//       <input
//         type="text"
//         placeholder="Enter search term"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>

//       <ul>
//         {searchResults.map((result) => (
//           <li key={result.pageid}>
//             <h3>{result.title}</h3>
//             <button onClick={() => handleShowFullContent(result.pageid)}>Show Full Content</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


// const handleInputChange = (event) => {
//   if (event && event.target) {
//     setSearchTerm(event.target.value);
//   }

// }
// const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(searchTerm)}&format=json`;


// const handleSearch = () => {
//   jsonp(apiUrl, null, (err, data) => {
//     if (err) {
//       console.error('Error fetching search results:', err);
//     } else {
//       console.log(data.query.search);
//       // Assuming data.query.search contains search results
//       const wikiResults = data.query.search;

//       wikiResults.forEach(result => {

//         const pageId = result.pageid

//         console.log('pageId:', pageId);

//         setSearchResults(wikiResults)

//       });

//     }
//   });
// };


//   return (
//     <>
//       <input
//         type="text"
//         placeholder="Enter search term"
//         value={searchTerm}
//         onChange={handleInputChange} // Attach the input change handler
//       />
//       <button onClick={handleSearch}>Search</button>

//       <button onClick={() => handleShowFullContent(result.pageid)}>Show Full Content</button>
//     </>
//   );



export default App;
