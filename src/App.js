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
          <Route path="/item" element={<ItemList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
