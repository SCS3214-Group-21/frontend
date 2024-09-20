// Save token and role to localStorage
export const setToken = (token) => localStorage.setItem('token', token);
export const setUserRole = (role) => localStorage.setItem('role', role);
export const setUserID = (id) => localStorage.setItem('id', id);

// Get token and role from localStorage
export const getToken = () => localStorage.getItem('token');
export const getUserRole = () => localStorage.getItem('role');
export const getUserID = () => localStorage.getItem('id')

// Remove token and role from localStorage (logout)
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('role');
  localStorage.removeItem('id')
};

// Route redirection based on user role
export const getDashboardRoute = (role) => {
  if (role === 'admin') return '/admin/dashboard';
  if (role === 'client') return '/client/mywedding';
  return '/vendor/dashboard'; // Default to vender dashboard if not admin or client
};
