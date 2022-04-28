import PersonCard from "./components/PersonCard/PersonCard";

function App() {
  return (
    <div className="container">
      <PersonCard nombre="Mark" apellido="Jacobs" colorCabello="Negro" />
      <PersonCard nombre="Elanor" apellido="Rigby" colorCabello="Castaño" />
    </div>
  );
}

export default App;
