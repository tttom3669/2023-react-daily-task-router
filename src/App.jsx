import './App.css';
import {
  HashRouter,
  NavLink,
  Link,
  useNavigate,
  Outlet,
  Route,
  Routes,
  useParams,
} from 'react-router-dom';

// 在 App.js 設定路由一個 Post 的巢狀路由，有父層 /post 路由以及子動態路由 /:postId
// 定義 Post 和 PostId 兩個元件，分別會看到 Post 詳細資料頁面、點入 /:postId 路由會顯示 Post ID 是 xxxx。
// 加上 NavLink，讓使用者可以直接點擊查看這些頁面。

const Home = () => {
  return <p>這是首頁</p>;
};
// 在 Todo 元件中加入 Logout 元件
// Logout 元件有一顆登出按鈕，點選登出後，使用 navigate 導回 /login 畫面。
const Todo = () => {
  return (
    <>
      <p>這是 Todo 頁面</p>
      <Logout />
    </>
  );
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};
const Logout = () => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => {
        navigate('/login');
      }}
    >
      Logout
    </button>
  );
};
const Post = () => {
  return (
    <>
      <p>Post 詳細頁面</p>
      <Link to="post123">post 123連結</Link>
      <Link to="post246">post 246連結</Link>
      <Outlet />
    </>
  );
};
const PostId = () => {
  const params = useParams();
  return <p>PostId: {params.postId}</p>;
};
function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/post">
            <p>Post 詳細頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/post" element={<Post />}>
            <Route path=":postId" element={<PostId />} />
          </Route>
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
