import React from 'react'
import { Link } from 'react-router-dom'

export const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Welcome to Twitter</h1>
          <p className="lead">
            Twitter lets you follow your interests. Follow people that you want to hear from. Your timeline is a custom stream of your follows.
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">Sign Up</Link>
            <Link to="/login" className="btn btn-light">Login</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
