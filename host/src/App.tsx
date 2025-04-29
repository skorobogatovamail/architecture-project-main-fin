import ReactDOM from "react-dom/client";
import { lazy } from 'react'

import "./index.css";

const UsersTestControl = lazy(
  () => import('users/UsersTestControl').catch(
    () => ({ default: () => <div className="error">Component is not available</div> }))
)

const TasksTestControl = lazy(
  () => import('tasks/TasksTestControl').catch(
    () => ({ default: () => <div>Component is not available</div> })
  )
)

const App = () => (
  <div className="container">
    <UsersTestControl />
    <TasksTestControl />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);