import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchTodos = () => {
  return axios.get('/contacts').then(response => response.data);
};

const updateTodo = (contactId, update) => {
  return axios.patch(`/contacts/${contactId}`, update).then(({ data }) => data);
};

export default { fetchTodos, addTodo, deleteTodo, updateTodo };
