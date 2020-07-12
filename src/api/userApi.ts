import { UserInterface } from '../components/UserHobbyList/UserHobbyList';

export async function fetchUsers() {
  const response = await fetch('http://localhost:3000/users');
  const data = await response.json();
  if (response.status >= 400) throw new Error(data.errors);
  return data;
}

export async function addUser(user: UserInterface) {
  const response = await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  if (response.status >= 400) throw new Error(data.errors);
  return data;
}
