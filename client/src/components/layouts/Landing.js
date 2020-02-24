import React from 'react'

export const Landing = () => {
    return (
        <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Welcome to Twitter</h1>
          <p className="lead">
          Twitter lets you follow your interests. Follow people that you want to hear from.
           Your timeline is a custom stream of your follows.
          </p>
          <div className="buttons">
            <a href="register.html" className="btn btn-primary">Sign Up</a>
            <a href="login.html" className="btn btn-light">Login</a>
          </div>
        </div>
      </div>
    </section>
    )
}
