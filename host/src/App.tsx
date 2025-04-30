import ReactDOM from "react-dom/client";
import { lazy, Suspense, useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';

import "./index.css";

const Welcome = lazy(
  () => import('users/Welcome')
    .catch(() => ({ default: () => <div>Welcome is not available</div> }))
)

const UserLogin = lazy(
  () => import('users/UserLogin')
    .catch(() => ({ default: () => <div>UserLogin is not available</div> }))
)

const TaskList = lazy(
  () => import('tasks/TaskList')
    .catch(() => ({ default: () => <div>TaskList is not available</div> }))
)

const App = () => {
  const [jwt, setJwt] = useState('')

  const handleJwtChange = (event: CustomEvent<string>) => {
    setJwt(event.detail)
  }

  useEffect(() => {
    addEventListener('jwt-change', handleJwtChange)

    return () => removeEventListener('jwt-change', handleJwtChange)
  }, [])

  return (
    < div className="app" >
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        Лабораторная работа по микрофронтендам
      </header>

      <section className='App-content'>
        {jwt ? (
          <>
            <Suspense>
              <Welcome jwt={jwt} />
            </Suspense>
            <Suspense>
              <TaskList jwt={jwt} />
            </Suspense>

          </>
        ) : (
          <Suspense>
            <UserLogin />
          </Suspense>

        )}
      </section>
    </div >
  )
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);