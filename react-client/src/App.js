import React from 'react';
import './App.css';
import axios from 'axios';
import GameCard from './components/gameCards';
import LoadingGif from './components/loading';
import Header from './components/header';

function App() {
  const [page, setPage] = React.useState(1);
  const gamesWrapperRef = React.useRef('');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [games, setGames] = React.useState([]);
  const [searchInit, setSearchInit] = React.useState(false);


  const gamesWrapperHandleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      setPage(page + 1)
    }
  }

  const handleGamesUpdate = async () => {
    let params = {};
    if (searchTerm !== '') params.search = searchTerm;
    params.page = page;
    axios.get(`https://frozen-ocean-18084.herokuapp.com/api`, { params }).then(response => {
      setGames(prevGames => [...prevGames, ...response.data.results]);
      setLoading(false);
    });
  }

  const handleSearch = () => {
    let params = {};
    if (searchTerm !== '') params.search = searchTerm;
    params.page = page;
    axios.get(`https://frozen-ocean-18084.herokuapp.com/api`, { params }).then(response => {
      setPage(1)
      setGames(response.data.results);
      setSearchInit(false);
      setLoading(false);
    });
  }

  React.useEffect(() => {
    setLoading(true);
    if (searchInit) {
      let timeout = setTimeout(() => {
        handleSearch()
      }, 2000)
      return () => {
        clearTimeout(timeout);
      }
    } else {
      handleGamesUpdate()
    }
  }, [page, searchTerm]);



  return (
    <div className="app-wrapper">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setSearchInit={setSearchInit}
        searchInit={searchInit}
        loading={loading}
        setPage={setPage}
      />
      <div className="games-wrapper" ref={gamesWrapperRef} data-page={1} onScroll={gamesWrapperHandleScroll}>
        {games.map(game => <div key={game.id} className="game-card-wrapper"><GameCard game={game} /></div>)}
        {loading ? <LoadingGif /> : null}
      </div>
    </div>
  );
}

export default App;
