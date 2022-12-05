import './App.css';
import { Layout } from "./Layout.js";
import { NextUIProvider } from '@nextui-org/react';
import Nav from './Nav/Nav.js';

function App() {
  return (
    <Layout>
      <Nav />
      <h1>Hello, World!</h1>
    </Layout>
  );
}

export default App;
