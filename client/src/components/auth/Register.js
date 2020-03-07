import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const onChangeHandler = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmitHandler = async e => {
        e.preventDefault();
        if (password !== password2) {
            setAlert('password not matched', 'danger');
        } else {
            register({ name, email, password });
        }
    }
    if (isAuthenticated) {
        return <Redirect to="/dashboard" />;
    }

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
                            onChange={e => onChangeHandler(e)} />
                    </div>
                    <div className="form-group">
                        <input type="text"
                            placeholder="Email Address"
                            name="email"
                            value={email}
                            onChange={e => onChangeHandler(e)} />

                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={e => onChangeHandler(e)} />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            name="password2"
                            value={password2}
                            onChange={e => onChangeHandler(e)} />
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

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
