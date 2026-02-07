const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getUserTodos = async (userId: string) => {
  const token = localStorage.getItem('auth-token');

  const res = await fetch(`${API_BASE}/api/v1/tasks`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch todos');
  }

  const data = await res.json();

  // Your backend returns: { tasks: [...] }
  return data.tasks || [];
};
