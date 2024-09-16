import './App.css';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Sidepage from './Components/sidepage';
import MainPage from './Components/mainpage';

function App() {
  return (
    <MantineProvider>
      <div className="app-container">
        <Sidepage />
        <MainPage />
      </div>
    </MantineProvider>
  );
}

export default App;
