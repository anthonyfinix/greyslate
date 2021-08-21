import { Route, Switch } from "react-router-dom"
import classes from './main.module.scss';
import Header from '../components/header';
import Home from './home';
import NotFound from './notFound';
import SingleGame from "./SingleGame";
export default () => {
    return (
        <div id="main-wrapper" className={classes.wrapper}>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                {/* <Route path="/notFound" render={(props) => <NotFound {...props} />} />
                <Route path="/:id" render={(props) => <SingleGame {...props} />} /> */}
            </Switch>
        </div>
    )
}