import { CreateTodo } from './components/CreateTodo';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import { TodoList } from './components/TodoList';

export const App = () => {
  return (
    <div className='bg-slate-100'>
      <NavBar />
      <main className='h-[calc(100vh-48px-56px)] flex flex-col items-center justify-center px-4 lg:px-0'>
        <div className='container'>
          <CreateTodo />
          <TodoList />
        </div>
      </main>
      <Footer />
    </div>
  )
}
