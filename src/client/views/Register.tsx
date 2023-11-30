import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TOKEN_KEY, apiService } from '../services/api-service';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const isEmailValid = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
  
      if (!email || !password) {
        setError('Please provide both email and password.');
        return;
      }

      if (!isEmailValid(email)) {
        setError('Please enter a valid email address.');
        return;
      }

      setLoading(true);
      const token = await apiService('/auth/register', 'POST', { email, password });
      localStorage.setItem(TOKEN_KEY, token);
      navigate('/login');
      setSuccessMessage('Thank you for registering!');
      alert('Thank you for registering!');
    } catch (error) {
      console.error(error);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <nav className='navbar navbar-expand-lg'>
        <div className="container-fluid">
          <h3 className='title'>Register Page</h3>
          <Link className='btn' to='/'>Home</Link>
        </div>
      </nav>
      <main className='container'>
        <section className="row justify-content-center">
          <div className="col-12 col-md-4">
            <form className="form-group border rounded shadow p-4">
              <label htmlFor="email">Email</label>
              <input className='mb-2 form-control' type='email' value={email} onChange={e => setEmail(e.target.value)} required />
              <label htmlFor="password">Password</label>
              <input className='mb-2 form-control' type='password' value={password} onChange={e => setPassword(e.target.value)} />
              <button
                onClick={handleRegister}
                className='btn'
                disabled={loading}
              >
                {loading ? 'Registering...' : 'Register'}
              </button>
              {error && <div className="text-danger mt-2">{error}</div>}
              {successMessage && <div className="text-success mt-2">{successMessage}</div>}
              <label htmlFor="login">Already have an account?</label>
              <Link to='/login'> Login</Link>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Register;

