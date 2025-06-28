import TodoList from './TodoList';
import Pomodoro from './Pomodoro';
import Quote from './Quote';
import './zen.css';

function App() {
  return (
    <div className="zen-container">
      <h1 className="zen-title">ZenFocus</h1>
      <div className="zen-columns">
        <div className="zen-left">
          <TodoList />
        </div>
        <div className="zen-right">
          <Pomodoro />
          <Quote />
        </div>
      </div>
    </div>
  );
}

export default App;
