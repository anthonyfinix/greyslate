import React from "react";
import "./App.css";
// import axios from "axios";
// import Header from "./components/header";
// import config from "./util/config";
// import GamesWrapper from "./components/gameWrapper";
// import SingleGame from "./components/singleGame";
import { BrowserRouter } from "react-router-dom";
import ReduxProvider from './redux';
import Main from './Pages/index';
import Material from "./components/material";

function App() {
  // const [page, setPage] = React.useState(1);
  // const gamesWrapperRef = React.useRef("");
  // const [searchTerm, setSearchTerm] = React.useState("");
  // const [loading, setLoading] = React.useState(false);
  // const [games, setGames] = React.useState([]);
  // const [searchInit, setSearchInit] = React.useState(false);

  // const gamesWrapperHandleScroll = (e) => {
  //   const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
  //   if (scrollHeight - scrollTop === clientHeight) {
  //     setPage(page + 1);
  //   }
  // };

  // const handleGamesUpdate = async () => {
  //   let params = {};
  //   if (searchTerm !== "") params.search = searchTerm;
  //   params.page = page;
  //   axios.get(`${config.api_url}/api/games`, { params }).then((response) => {
  //     setGames((prevGames) => [...prevGames, ...response.data.results]);
  //     setLoading(false);
  //   });
  // };

  // const handleSearch = () => {
  //   let params = {};
  //   if (searchTerm !== "") params.search = searchTerm;
  //   params.page = page;
  //   axios.get(`${config.api_url}/api/games`, { params }).then((response) => {
  //     setPage(1);
  //     setGames(response.data.results);
  //     setSearchInit(false);
  //     setLoading(false);
  //   });
  // };

  // React.useEffect(() => {
  //   setLoading(true);
  //   if (searchInit) {
  //     let timeout = setTimeout(() => {
  //       handleSearch();
  //     }, 2000);
  //     return () => {
  //       clearTimeout(timeout);
  //     };
  //   } else {
  //     handleGamesUpdate();
  //   }
  // }, [page, searchTerm]);

  return (
    <Material>
      <ReduxProvider>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
        {/* <Router>
        <div className="app-wrapper">
          
          <Switch>
            <Route exact path="/">
              <GamesWrapper
                games={games}
                gamesWrapperHandleScroll={gamesWrapperHandleScroll}
                loading={loading}
                gamesWrapperRef={gamesWrapperRef}
                page={page}
              />
            </Route>
            <Route exact path="/game/:gameId">
              <SingleGame />
            </Route>
          </Switch>
        </div>
      </Router> */}
      </ReduxProvider>
    </Material>
  );
}

export default App;
