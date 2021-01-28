import Student from './components/Student';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Leadersboard</h1>
      <Student name="Abdul Rafiu" university="MUET, Jamshoro" score={345} />
      <Student name="Ali Hasan" university="NED, Karchi" score={340} />
      <Student name="Sarang Joyo" university="NUST, Islamabad" score={334} />
      <Student name="Salamat Ali" university="MUET, Jamshoro" score={289} />
    </div>
  );
}

export default App;
