import './App.css';
import { useStore } from './store/Store';
import 'bootstrap/dist/css/bootstrap.min.css';
import PaginationComponent from './components/Pagination';
import NamesList from './components/NamesList';
import AddNameForm from './components/AddNameForm';
import SearchName from './components/SearchName';

function App() {

  const [state, dispatch] = useStore();
  return (
    <div className="App">

      <AddNameForm />
      <SearchName />
      <NamesList />
      <PaginationComponent />

    </div>
  );
}

export default App;
