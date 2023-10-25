import Home from "../pages/Home";
import TicTacToe from "../pages/TicTacToe";
import Search from "../pages/Search";
import Login from "../pages/Login/Login";
import Tenzies from "../pages/Tenzies";
// chua dang nhap

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/tictactoe", component: TicTacToe },
  { path: "/tenzies", component: Tenzies },
  { path: "/search", component: Search },
  { path: "/login", component: Login, },
];

// dang nhap

const privateRoutes = [];

export { privateRoutes, publicRoutes };
