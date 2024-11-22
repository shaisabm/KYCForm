import React from 'react';
import './App.css';
import KYCForm from './components/KYCForm/KYCForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>KYC Application Form</h1>
      </header>
      <main>
        <KYCForm />
      </main>
      <footer>
        <p>© 2024 KYC Application. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;