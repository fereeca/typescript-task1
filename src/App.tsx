import "./App.css";
import Home from "./views/Home/home";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./views/Navbar/navbar";
import Task1 from "./views/Task1";
import Task2 from "./views/Task2/task2";
import Task3 from "./views/Task3/task3";
import Task4 from "./views/Task4/task4";
import Task5 from "./views/Task5/task5";
import Task6 from "./views/Task6/task6";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="task1" element={<Task1 />} />
      <Route path="task2" element={<Task2 />} />
      <Route path="task3" element={<Task3 />} />
      <Route path="task4" element={<Task4 />} />
      <Route path="task5" element={<Task5 />} />
      <Route path="task6" element={<Task6 />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
