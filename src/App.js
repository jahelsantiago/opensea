import { useState } from "react";
import "./App.css";
import { CollectionCard, ImageCard, SearchAppBar } from "./components";
import { useSearchBar } from "./components/SearchBar";

function App() {

  const [address, setAddress] = useState(null);

  const [searchBar, value] = useSearchBar("Search an address...", () => {setAddress(value)});



  return (
    <div className="App">
      <SearchAppBar>
        {searchBar}
      </SearchAppBar>
      <div>
        <CollectionCard address={address} />
      </div>
    </div>
  );
}

export default App;
