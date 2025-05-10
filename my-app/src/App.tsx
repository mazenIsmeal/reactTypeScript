import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Greet from './components/Greet';
import Header from './components/Header';
import Input from './components/Input';
import Oscar from './components/Oscar';
import PersonList from './components/PersonList';
import Status from './components/Status';

function App() {
  const list = [
    {
      fname: 'mazen',
      lname: 'ashraf'
    },
    {
      fname: 'mo',
      lname: 'ashraf'
    },
    {
      fname: 'hassen',
      lname: 'ashraf'
    },
  ]
  return (
    <div className="App">
      <Greet name='Mazen' messageCount={20} isLoggedIn={true} />
      <PersonList names={list} />
      <Status status='error' />
      <Header>
        This is my react app with typeScript but this ease
      </Header>
      <Oscar>
        <Header>Oscar is a main this year</Header>
      </Oscar>
      <Button clickHandler={(event, id) => {
        console.log('Clicked', event, id)
      }} />
      <Input value='' changeHandler={(event) => console.log(event)} />
      <Container styles={{padding: '1rem 4%'}} />
    </div>
  );
}

export default App;
