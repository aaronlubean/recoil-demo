import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom"
import './App.css';
import UseStateCounterDemo from './01-UseStateCounterDemo'
import UseRecoilStateCounterDemo from './02-UseRecoilStateCounterDemo'
import UseRecoilValueCounterDemo from './03-UseRecoilValueCounterDemo'
import ReactTempCelsiusDemo from './04-ReactTempCelsiusDemo'
import RecoilSelectorTempCelsiusDemo from './05-RecoilSelectorTempCelsiusDemo'
import RecoilAtomFamilyDemo from './06-RecoilAtomFamilyDemo'
import RecoilSelectorFamilyDemo from './07-RecoilSelectorFamilyDemo'
import RecoilAsyncSelectorFamilyDemo from './08-RecoilAsyncSelectorFamilyDemo'
import ReactContextSquaresDemo from './09-ReactContextSquaresDemo/ReactContextSquaresDemo'
import RecoilSquaresDemo from './10-RecoilSquaresDemo/RecoilSquaresDemo'
// import ReactContextCountersDemo from './11-ReactContextCountersDemo'

export default function App() {
    return (
        <Router>
            <div>
                <div id="links">
                    <NavLink to="/useState">1 useState Counter</NavLink>&nbsp;&nbsp;
                    <NavLink to="/useRecoilState">2 useRecoilState Counter</NavLink>&nbsp;&nbsp;
                    <NavLink to="/useRecoilValue">3 useRecoilValue Counter</NavLink>&nbsp;&nbsp;
                    <NavLink to="/reactTempCelsius">4 React Temp Celsius</NavLink>&nbsp;&nbsp;
                    <NavLink to="/recoilSelectorTempCelsius">5 Recoil Selector Temp Celsius</NavLink>&nbsp;&nbsp;
                    <NavLink to="/recoilAtomFamily">6 Recoil Atom Family</NavLink>&nbsp;&nbsp;
                    <NavLink to="/recoilSelectorFamily">7 Recoil Selector Family</NavLink>&nbsp;&nbsp;
                    <NavLink to="/recoilAsyncSelectorFamily">8 Recoil Async Selector Family</NavLink>&nbsp;&nbsp;
                    <NavLink to="/reactContextSquares">9 React Context Squares</NavLink>&nbsp;&nbsp;
                    <NavLink to="/recoilSquares">10 Recoil Squares</NavLink>&nbsp;&nbsp;
                    {/* <NavLink to="/reactContextCounters">11 React Context Counters</NavLink>&nbsp;&nbsp; */}
                </div>
                
                <Switch>
                    <Route path="/useState">
                        <UseStateCounterDemo />
                    </Route>
                    <Route path="/useRecoilState">
                        <UseRecoilStateCounterDemo />
                    </Route>
                    <Route path="/useRecoilValue">
                        <UseRecoilValueCounterDemo />
                    </Route>
                    <Route path="/reactTempCelsius">
                        <ReactTempCelsiusDemo />
                    </Route>
                    <Route path="/recoilSelectorTempCelsius">
                        <RecoilSelectorTempCelsiusDemo />
                    </Route>
                    <Route path="/recoilAtomFamily">
                        <RecoilAtomFamilyDemo />
                    </Route>
                    <Route path="/recoilSelectorFamily">
                        <RecoilSelectorFamilyDemo />
                    </Route>
                    <Route path="/recoilAsyncSelectorFamily">
                        <RecoilAsyncSelectorFamilyDemo />
                    </Route>
                    <Route path="/reactContextSquares">
                        <ReactContextSquaresDemo />
                    </Route>
                    <Route path="/recoilSquares">
                        <RecoilSquaresDemo />
                    </Route>
                    {/* <Route path="/reactContextCounters">
                        <ReactContextCountersDemo />
                    </Route> */}
                </Switch>
            </div>
        </Router>
    );
}
