import * as React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { apiService } from '../services/api-service';

const Pizza = (props: PizzaProps) => {
  
  const [pizzaTime, setPizzaTime] = useState<{ message: string }>();

  useEffect(() => {
    
    apiService('/api/pizza')
      .then(data => setPizzaTime(data));
      
  }, []);
  return (
    <div>
      <main className="container">
      <h2 className="text-center display-1 text-light">{pizzaTime?.message}</h2>
      <Link className='home-button' to='/'>Return Home</Link>
      </main>
    </div>
  )
}

interface PizzaProps {}

export default Pizza
