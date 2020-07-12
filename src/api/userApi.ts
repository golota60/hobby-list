import { UserInterface } from '../components/UserHobbyList/UserHobbyList';
import { returnJsonHeaders } from './helpers';

export async function fetchUsers() {
  const response = await fetch('http://localhost:3000/users');
  const data = await response.json();
  if (response.status >= 400) throw new Error(data.errors);
  return data;
}

export async function addUser(user: UserInterface) {
  const response = await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: returnJsonHeaders(),
    body: JSON.stringify(user),
  });
  const data = await response.json();
  if (response.status >= 400) throw new Error(data.errors);
  return data;
}

export async function updateUser(user: UserInterface) {
  const response = await fetch(`http://localhost:3000/users/${user.id}`, {
    method: 'PUT',
    headers: returnJsonHeaders(),
    body: JSON.stringify(user),
  });
  const data = await response.json();
  if (response.status >= 400) throw new Error(data.errors);
  return data;
}

export async function deleteUser(user: UserInterface) {
  const response = await fetch(`http://localhost:3000/users/${user.id}`, {
    method: 'DELETE',
    headers: returnJsonHeaders()
  });
  const data = await response.json();
  if (response.status >= 400) throw new Error(data.errors);
  return data;
}
