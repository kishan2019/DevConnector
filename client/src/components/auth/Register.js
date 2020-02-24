import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

export const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const onChangeHandler = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        if (password !== password2) {
            console.log('password not matched');
        } else {
            console.log(formData);
        }
    }

    const { name, email, password, password2 } = formData;
    return (
        <Fragment>
            <section className="container">
                <h1 className="large text-primary">Sign Up</h1>
                <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>

                <form className="form" onSubmit={onSubmitHandler}>
                    <div className="form-group">
                        <input type="text"
                            placeholder="Name"
                            name="name"
                            value={name}
                            onChange={e => onChangeHandler(e)} required />
                    </div>
                    <div className="form-group">
                        <input type="email"
                            placeholder="Email Address"
                            name="email"
                            value={email}
                            onChange={e => onChangeHandler(e)} required />

                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            minLength="6"
                            value={password}
                            onChange={e => onChangeHandler(e)} required />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            name="password2"
                            minLength="6"
                            value={password2}
                            onChange={e => onChangeHandler(e)} required />
                    </div>
                    <input type="submit"
                        className="btn btn-primary"
                        value="Register" />
                </form>
                <p className="my-1">
                    Already have an account? <Link to="/login">Sign In</Link>
                </p>
            </section>
        </Fragment>
    )
}
