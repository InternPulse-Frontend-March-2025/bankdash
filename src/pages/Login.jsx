
import { useState } from 'react';
import { useNavigate, NavLink} from 'react-router-dom';


// Simple mock auth service (replace with real backend API in production)
const mockAuthService = {
  login: (email, password) => {
    // Mock credentials - in reality, this would be a backend API call
    const validEmail = 'user@example.com';
    const validPassword = 'password123';
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === validEmail && password === validPassword) {
          resolve({ token: 'fake-jwt-token', user: { email } });
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000); // Simulate network delay
    });
  }
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await mockAuthService.login(email, password);
      // Store token in localStorage (in production, use more secure methods)
      localStorage.setItem('token', response.token);
      // Redirect to dashboard or home page
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-300"> 
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md px-5">
        <h2 className="text-3xl font-serif italic font-bold mb-6 text-center mt-4">Sign In</h2>
        <p className="mt-2 text-sm text-center text-gray-600">
          If you dont have an account registered?{' '}
          <a href="/register" className="text-indigo-600 hover:text-indigo-800">
            Register Here
          </a>
        </p>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
              placeholder='Enter your email'
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
              placeholder='Enter your password'
            />
          </div>

          {error && (
            <div className="mb-4 text-red-500 text-sm text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-indigo-400"
          >
            {/* {isLoading ? 'Logging in...' : 'Login'} */}
            <NavLink to='/banking'>Go to Banking</NavLink>
          </button>
        </form>

        {/* <p className="mt-5 text-sm text-center text-gray-600">
          Don't have an account?{' '}
          <a href="/register" className="text-indigo-600 hover:text-indigo-800">
            Register
          </a>
        </p> */}
      </div>
    </div>
  );
};

export default Login;