import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const links = ['Link 1', 'Link 2', 'Link 3', 'Link 4'];

function Page({ title }) {
  return <h2 style={{ padding: '1rem' }}>{title}</h2>;
}

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial' }}>
        {/* Sidebar */}
        <div style={{ width: '200px', background: '#eee', padding: '1rem' }}>
          <h3>Navigation</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {links.map((link, i) => (
              <li key={i}>
                <Link to={`/link${i + 1}`}>{link}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Main content */}
        <div style={{ flex: 1 }}>
          <header style={{ background: '#333', color: '#fff', padding: '1rem' }}>
            <h1>JZod test</h1>
          </header>
          <div style={{ padding: '1rem' }}>
            <Routes>
              {links.map((link, i) => (
                <Route
                  key={i}
                  path={`/link${i + 1}`}
                  element={<Page title={link} />}
                />
              ))}
              <Route path="/" element={<Page title="Welcome!" />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

