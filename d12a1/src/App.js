// // import logo from "./logo.svg";
// // import "./App.css";
// // import { useState } from "react";
// // import { useEffect } from "react";

// // const getData = async (url) => {
// //   try {
// //     let res = await fetch(url);
// //     let data = await res.json();
// //     return data;
// //   } catch {
// //     throw new Error(`something wrong while fetching data`);
// //   }
// // };

// // function App() {
// //   const [loading, setLoading] = useState(false);
// //   const [data, setData] = useState([]);
// //   const [err, setErr] = useState(false);

// //   const fetchAndUpdateData = (url) => {
// //     setLoading(true);
// //     setErr(false);
// //     getData(url)
// //       .then((res) => {
// //         setData(res);
// //         setLoading(false);
// //       })
// //       .catch(() => {
// //         setErr(true);
// //         setLoading(false);
// //       });
// //   };

// //   useEffect(() => {
// //     fetchAndUpdateData(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
// //   }, []);

// //   return loading ? (
// //     <h1>Loading...</h1>
// //   ) : err ? (
// //     <h1>Something went wrong</h1>
// //   ) : (
// //     <div className="App">
// //       {data.map((post) => (
// //         <p key={post.id}>
// //           {post?.id}-{post?.title}
// //         </p>
// //       ))}
// //     </div>
// //   );
// // }

// // export default App;
// import { useReducer } from "react";
// import { useEffect } from "react";

// const getData = async (url) => {
//   try {
//     let res = await fetch(url);
//     let data = await res.json();
//     return data;
//   } catch {
//     throw new Error(`something wrong while fetching data`);
//   }
// };

// const initState = {
//   loading: false,
//   err: false,
//   data: [],
// };

// const reducer = (state, action) => {
//   if (action.type === "FETCH_LOADING") {
//     return {
//       loading: true,
//       err: false,
//       data: [],
//     };
//   } else if (action.type === "FETCH_SUCCESS") {
//     return {
//       loading: false,
//       err: false,
//       data: action.payload,
//     };
//   } else if (action.type === "FETCH_ERROR") {
//     return {
//       loading: false,
//       err: true,
//       data: [],
//     };
//   } else {
//     throw new Error(`Action type is invalid`);
//   }
// };
// function App() {
//   const [state, dispatch] = useReducer(reducer, initState);
//   const fetchAndUpdateData = (url) => {
//     dispatch({ type: "FETCH_LOADING" });
//     getData(url)
//       .then((res) => {
//         dispatch({ type: "FETCH_SUCCESS", payload: res });
//       })
//       .catch(() => {
//         dispatch({ type: "FETCH_ERROR" });
//       });
//   };

//   useEffect(() => {
//     fetchAndUpdateData(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
//   }, []);

//   console.log(initState);
//   return <></>;
// }

// export default App;



import { useEffect, useReducer } from "react";

// Function to fetch data from API
const getData = async (url) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch {
    throw new Error(`Something went wrong while fetching data`);
  }
};

// Initial state for our component
const initState = {
  loading: false,
  data: [],
  err: false
};

// Reducer function to update our state
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_LOADING":
      return {
        ...state,
        loading: true,
        err: false,
        data: []
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        err: false
      };
    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        err: true,
        data: []
      };
    default:
      throw new Error(`Action type is invalid`);
  }
};

// Our main App component
export default function App() {
  // useReducer hook, which returns an array with the state and a dispatch function
  const [state, dispatch] = useReducer(reducer, initState);

  // Function to fetch data and update our state using dispatch
  const fetchAndUpdateData = (url) => {
    // We call the dispatch function with an action object as argument
    // This will trigger the reducer function to update our state
    dispatch({ type: "FETCH_LOADING" });

    getData(url)
      .then((res) => {
        // If the request is successful, we update our state with the data
        dispatch({ type: "FETCH_SUCCESS", payload: res });
      })
      .catch(() => {
        // If there's an error, we update our state accordingly
        dispatch({ type: "FETCH_ERROR" });
      });
  };

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    fetchAndUpdateData(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
  }, []);

  // Destructuring our state object for easier access
  const { loading, err, data } = state;

  // Rendering our component based on the current state
  return loading ? (
    <h1>Loading..</h1>
  ) : err ? (
    <h1>Something went wrong</h1>
  ) : (
    <div className="App">
      {data.map((post) => (
        <p key={post.id}>
          {post?.id} - {post?.title}
        </p>
      ))}
    </div>
  );
}