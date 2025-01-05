import './styles/App.css';
import type { ModuleContent } from './utils/utils';
import Header from './components/component/Header';
import Footer from './components/component/Footer';
import Hero from './components/component/Hero';
import Card from './components/component/Card';
import Content from './components/section/Content';
import contents from './utils/contents';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <section className="card-display">
              {
                contents.map((content: ModuleContent) => {
                  return <Card key={ content.module } { ...content } />
                })
              }
            </section>
          </>
        }/>

        <Route path="/module/:id" element={
          <Content />
        }/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
