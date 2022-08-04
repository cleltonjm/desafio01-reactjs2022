import { Logo } from './components/Logo';
import './global.css';

function App() {

  return (
    <>
      <Logo />

      <div className='tasks'>
        <input type="text" placeholder='Adicione uma nova tarefa' />
        <button>Criar +</button>
      </div>

      <div className='taskList'>
        <a href="#">Tarefas criadas 0</a>
        <a href="#">Concluídas 0</a>

        <div className=''>
          <img src="" alt="voidTask" />
          Você ainda não tem tarefas cadastradas
          Crie tarefas e organize seus itens a fazer
        </div>
      </div>
    </>
  );
}

export default App
