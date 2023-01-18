import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './styles.scss';
import TasksList from './tasks/components/TasksList';
import CreateTask from './tasks/components/CreateTask';

const App = () => {
	return (
		<>
			<h1 className='title'>Todo List</h1>
			<main className='todo-list'>
				<Provider store={store}>
					<CreateTask />
					<TasksList />
				</Provider>
			</main>
		</>
	);
};

export default App;
