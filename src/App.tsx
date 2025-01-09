import './styles/App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import type { ModuleContent } from './utils/utils';
import Header from './components/component/Header';
import Footer from './components/component/Footer';
import Hero from './components/component/Hero';
import Card from './components/component/Card';
import Content from './components/section/Content';
import contents from './utils/contents';

function App() {
  const [onMainPage, setOnMainPage] = useState<boolean>(true);
  const location = useLocation();

  useEffect(() => {
    setOnMainPage(location.pathname === '/');
  }, [location]);
  
  return (
    <>
      <Header onMainPage={ onMainPage }/>
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
      <Footer onMainPage={ onMainPage }/>
    </>
  );
}

export default App;
