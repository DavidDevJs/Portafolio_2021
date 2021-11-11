import "./App.css";
import { Layout } from "./components/Layout";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { ProjectsList } from "./components/Projects";

function App() {
  return (
    <Layout>
      <Header />
      <About />
      <ProjectsList />
    </Layout>
  );
}

export default App;
