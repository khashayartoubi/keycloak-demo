import './App.css'
import Protect from './component/protected'
import Public from './component/public'
import useAuth from './hooks/useAuth'

function App() {
  const [isLogin,Token] = useAuth();
  return isLogin && isLogin == true ? <Protect Token={Token}/> : <Public />
}

export default App
