import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./routes/home";
import RootLayout from "./routes/rootLayout";
import GoogleAuth from "./routes/googleAuth";
import YandexAuth from "./routes/yandexAuth";
import YandexWhitePage from "./routes/yandexAuth/yandexWhitePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="auth-with-google" element={<GoogleAuth />} />
      <Route path="auth-with-yandex" element={<YandexAuth />} />
      <Route path="auth-with-yandex/token" element={<YandexWhitePage />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
