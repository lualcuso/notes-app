import './App.scss';

// Components
import Folders from "./Components/Folders/Folders";
import Notes from "./Components/Notes/Notes";
import Editor from "./Components/Editor/Editor";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Folders />
        <Notes />
        <Editor />
      </div>
    </div>
  );
}

export default App;
