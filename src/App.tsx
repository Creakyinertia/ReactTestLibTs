import './App.css';
// import { CounterTwo } from './components/countertwo/counterTwo';
// import { MuiMode } from './components/mui/mui-mode';
import { AppProviders } from './components/providers/app-providers';
// import Test2 from './components/test2/test2';
// import Users from './components/users/users';
// import Assigned from './components/assigned/assigned';
// import { Application } from './application/application';
// import Skills from './skills/skills';

function App() {
  // const skills=['html','css','js']=-
  return (
    <AppProviders>
    <div className="App">
      {/* <MuiMode/>
      <CounterTwo count={0}/> */}
      {/* <Application/> */}
      {/* <Skills skills={skills}/> */}
      {/* <Assigned /> 
      <Users/>
      <Test2/> */}
 </div>
 </AppProviders>
  );
}

export default App;
