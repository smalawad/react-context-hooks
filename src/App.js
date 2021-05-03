import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeContextProider from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProider>
        <Navbar />
        <BookList />
      </ThemeContextProider>
      
    </div>
  );
}

export default App;
