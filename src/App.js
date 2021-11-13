import "./App.css";
import { Layout } from "./components/Layout";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Projects } from "./components/Projects";

function App() {
  return (
    <Layout>
      <Header />
      <About />
      <Projects />
    </Layout>
  );
}

export default App;
