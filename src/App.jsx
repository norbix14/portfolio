import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="container main-container">
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
