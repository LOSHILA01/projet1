import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddStagiaire from "./Composants/AddStagiaire";
import UpdateStagiaire from "./Composants/UpdateStagiaire";
import { store } from "./Config/store";
import Form from "./Composants/Form";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Form />
        </div>
        <Routes>
          <Route path="/add_stagiaire" element={<AddStagiaire />} />
          <Route path="/update_stagiaire/:id" element={<UpdateStagiaire />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
