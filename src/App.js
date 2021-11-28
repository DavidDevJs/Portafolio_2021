import { Layout } from "./components/Layout";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

import "./App.css";

function App() {
  return (
    <Layout>
      <Header />
      <About />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;
