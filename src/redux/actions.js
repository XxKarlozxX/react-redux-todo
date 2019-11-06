// importando cada una de los nombre de las acciones
import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from './actionTypes';

// inicia los id de cada tarea
let nextTodoId = 0;

// Declaramos una acción (agregar tarea)
export const addTodo = content => ({
	type: ADD_TODO,
	payload: {
		id: ++nextTodoId,
		content
	}
});

// Alteramos una tarea de a cual obtenemos su id
export const toggleTodo = id => ({
	type: TOGGLE_TODO,
	payload: { id }
});

// Declaramos una accion de tipo filtro
export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });