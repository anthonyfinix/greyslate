import { Route, Switch } from "react-router-dom"
import Header from '../components/header';
import Home from './home';
import NotFound from './notFound';
import SingleGame from "./SingleGame";
export default () => {
    return(
        <div>
            <Header />
            <Switch>
                <Route exact path="/" render={(props) => <Home {...props} />} />
                {/* <Route path="/notFound" render={(props) => <NotFound {...props} />} />
                <Route path="/:id" render={(props) => <SingleGame {...props} />} /> */}
            </Switch>
        </div>
    )
}