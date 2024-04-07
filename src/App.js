import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import AddUser from "./pages/AddUser";
import AddChar from "./pages/AddChar";
import AddItem from "./pages/AddItem";
import EditUser from "./pages/EditUser";
import EditChar from "./pages/EditChar";
import EditItem from "./pages/EditItem";
import UserList from "./pages/Users";
import CharacterList from "./pages/Character";
import ItemListAdmin from "./pages/ItemAdmin";
import Teams from "./components/Teams";
import Scarlet from "./components/character/Scarlet";
import Poli from "./components/character/Poli";
import Modernia from "./components/character/Modernia";
import PrivatyUnkindMaid from "./components/character/Privaty Unkind Maid";
import ItemList from "./pages/Item";

// Admin


// Char
import Quiry from "./components/character/Quiry";
import Rapi from "./components/character/Rapi";
import Liter from "./components/character/Liter";
import Alice from "./components/character/Alice";
import YoRHa2B from "./components/character/2B";
import Rapunzel from "./components/character/Rapunzel";
import Noir from "./components/character/Noir";
import Blanc from "./components/character/Blanc";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users/addusers" element={<AddUser />} />
          <Route path="/character/addchar" element={<AddChar />} />
          <Route path="/item/additem" element={<AddItem />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/character/edit/:id" element={<EditChar />} />
          <Route path="/item/edit/:id" element={<EditItem />} />
          <Route path="/admin/users" element={<UserList />} />
          <Route path="/admin/character" element={<CharacterList />} />
          <Route path="/admin/item" element={<ItemListAdmin />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/character/scarlet" element={<Scarlet />} />
          <Route path="/character/poli" element={<Poli />} />
          <Route path="/character/modernia" element={<Modernia />} />
          <Route path="/character/privaty-unkind-maid" element={<PrivatyUnkindMaid />} />
          <Route path="/character/quiry" element={<Quiry />} />
          <Route path="/character/rapi" element={<Rapi />} />
          <Route path="/character/liter" element={<Liter />} />
          <Route path="/character/alice" element={<Alice />} />
          <Route path="/character/2b" element={<YoRHa2B />} />
          <Route path="/character/rapunzel" element={<Rapunzel />} />
          <Route path="/character/noir" element={<Noir />} />
          <Route path="/character/blanc" element={<Blanc />} />
          <Route path="/item" element={<ItemList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
