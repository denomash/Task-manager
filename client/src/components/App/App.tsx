import Header from "../Header/Header";
import { ListTasksPage } from "../../pages/ListTasksPage";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { ViewTaskPage } from "../../pages/ViewTaskPage";

const App = () => (
  <Router>
    <Header />
    <div className="container flex flex-col mx-auto h-screen w-8/12 mt-16">
      <Route path="/" exact>
        <ListTasksPage />
      </Route>
      <Route path="/:id">
        <ViewTaskPage />
      </Route>
    </div>
  </Router>
);

export default App;
