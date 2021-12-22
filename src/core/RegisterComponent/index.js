import React from "react";

class RegisterComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            firstName: "",
            country: "",
            secondName: "",
            phone: "",
            confirmPassword: "",
            user: {},
            errors: [],
            checkbox: ""
        };
    }

    isFormValid = () => {
        let errors = [];
        let error;


        if (this.isFormEmpty(this.state)) {
            error = { message: 'Fill in all fields' };
            this.setState({ errors: errors.concat(error) });
            return false;
        }
        else if (!this.isPasswordValid(this.state)) {
            error = { message: 'Password is invalid' };
            this.setState({ errors: errors.concat(error) });
            return false;
        }
        else if (!this.isNameCorrect(this.state)) {
            error = { message: 'The name must be more than 2 characters' };
            this.setState({ errors: errors.concat(error) });
            return false;
        }
        else if (!this.isEmailCorrect(this.state)) {
            error = { message: 'The email is invalid' };
            this.setState({ errors: errors.concat(error) });
            return false;
        }
        else {
            return true;
        }
    }

    isNameCorrect = ({ firstName, secondName }) => {
        if (firstName.length <= 2 && secondName.length <= 2) {
            return false
        }
        else {
            return true
        }
    }

    isEmailCorrect = ({ email }) => {
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regEmail.test(email)) {
            return false;
        } else {
            return true
        }
    }

    isFormEmpty = ({ firstName, secondName, email, password, confirmPassword, phone, country }) => {
        return !firstName.length || !secondName.length || !email.length || !password.length || !confirmPassword.length || !phone.length || !country.length
    }

    isPasswordValid = ({ password, confirmPassword }) => {
        let regPassword = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[*.!@$%^&*<>?+#~]).{3,}/
        if (!regPassword.test(password)) {
            return false;
        }
        else if (password !== confirmPassword) {
            return false
        }
        else {
            return true
        };
    }

    displayErrors = errors => errors.map((error, i) => <p key={i}>{error.message}</p>)


    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    };
    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    };
    handleFirstNameChange = (event) => {
        this.setState({ firstName: event.target.value });
    };
    handleCountryChange = (event) => {
        this.setState({ country: event.target.value });
    };
    handleSecondNameChange = (event) => {
        this.setState({ secondName: event.target.value });
    };
    handlePhoneChange = (event) => {
        this.setState({ phone: event.target.value });
    };
    handleConfirmPasswordChange = (event) => {
        this.setState({ confirmPassword: event.target.value });
    };
    handleCheckboxChange = (event) => {
        this.setState({ checkbox: event.target.value });
    };




    handleSumbit = (event) => {
        event.preventDefault();

        if (this.isFormValid()) {

            console.log("true")

        } else {
            console.log("false")
        }
    }






    render() {


        return (
            <div className="form" >
                <div className="form_content">

                    <form onSubmit={this.handleSumbit}>

                        <div className="content_wrapper">
                            <input
                                placeholder="First Name"
                                className="input"
                                name="firstName"
                                onChange={this.handleFirstNameChange}
                            ></input>
                            <input
                                placeholder="Country"
                                className="input"
                                name="country"
                                onChange={this.handleCountryChange}
                            ></input>
                            <input
                                placeholder="Second Name"
                                className="input"
                                name="secondName"
                                onChange={this.handleSecondNameChange}
                            ></input>
                            <input
                                placeholder="Phone"
                                className="input"
                                name="phone"
                                onChange={this.handlePhoneChange}
                            ></input>
                            <input
                                placeholder="Confirm Password"
                                className="input"
                                name="confirmPassword"
                                type="password"
                                onChange={this.handleConfirmPasswordChange}
                            ></input>
                            <input
                                placeholder="Type the email"
                                className="input"
                                name="email"
                                onChange={this.handleEmailChange}
                            ></input>
                            <input
                                placeholder="Type the password"
                                className="input"
                                type="password"
                                name="password"
                                onChange={this.handlePasswordChange}
                            ></input>
                            <input
                                placeholder="I agree to Terms and conditions"
                                type="checkbox"
                                name="checkbox"
                                required="required"
                                onChange={this.handleCheckboxChange}
                            ></input>
                        </div>


                        <button type="submit" className="signButton" >
                            Sign Up
                        </button>

                    </form>
                    <h3>Error</h3>
                    {this.displayErrors(this.state.errors)}
                </div>
            </div >
        );
    }
}







export default RegisterComponent;
