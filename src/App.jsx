import "./App.css";
import Router from "./routes/Router";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/Loading";

function App() {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }

  return <Router />;
}

export default App;
