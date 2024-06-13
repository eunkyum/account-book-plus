import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Layout from './components/Layout';
import { useEffect, useState } from 'react';
// import { getUserInfo } from './lib/api/auth';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);

  const [user, setUser] = useState(null);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout user={user} setUser={setUser} />}>
            <Route index element={<Home expenses={expenses} setExpenses={setExpenses} />} />
            <Route path="/detail/:id" element={<Detail expenses={expenses} setExpenses={setExpenses} />} />
            <Route path="/profile" element={<Profile setUser={setUser} />} />
          </Route>
          <Route path="/sign_in" element={<SignIn user={user} setUser={setUser} />} />
          <Route path="/sign_up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
