import { Component } from 'react';
import { connect } from 'react-redux';
import { CommentInput, EmailInput, FirstNameInput, Form, InputLabel, LastNameInput, PhoneInput, SubmitButton, TermsAndConditions } from './OrderForm.styled';
import Agreement from './Agreement';
import { validateEmail } from '../../helpers/validateEmail';
import { validatePhone } from '../../helpers/validatePhone';

class OrderForm extends Component {
    state = {
        isDataValid: {},
        inputValue: {
            firstName: '',
            lastName: '',
            tel: '',
            email: '',
            comment: '',
        },
        agreement: {
            agreed: false,
        }
    }
    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState(prevState => {
            return {
                ...prevState,
                inputValue: {
                    ...prevState.inputValue,
                    [name]: value,
                },
            }
        })
    }
    toggleAgreementState = () => {
        const { agreement: { agreed } } = this.state;
        
        this.setState(prevState => ({
            ...prevState,
            agreement: {
                agreed: agreed ? false : true,
            }
        }));
    }
    validateData = (e) => {
        const { name, value } = e.currentTarget; 
        const FIELDS_TO_VALIDATE = {
            email: validateEmail(value),
            tel: validatePhone(value),
        }

        this.setState(prevState => ({
            ...prevState,
            isDataValid: {
                ...prevState.isDataValid,
                [name]: FIELDS_TO_VALIDATE[name],
            }
        }));
    }
    handleFormSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, tel, email, comment } = e.currentTarget.elements;
        const { agreement: { agreed } } = this.state;
        const { addProductList } = this.props;
        
        const dataForServer = {
            customerInfo: {
                firstName: firstName.value,
                lastName: lastName.value,
                tel: tel.value,
                email: email.value,
                comment: comment.value,
                agreement: agreed,
            },
            customerOrder: {
                items: addProductList,
            }
        }
        console.log(dataForServer);
        
        this.resetForm();
    }
    resetForm = () => {
        this.setState({
            isDataValid: {},
            inputValue: {
                firstName: '',
                lastName: '',
                tel: '',
                email: '',
                comment: '',
            },
            agreement: {
                agreed: false,
            }
        });
    }
    render() {
        const { agreement: { agreed }, inputValue, isDataValid } = this.state;

        return (
            <Form onSubmit={this.handleFormSubmit}> 
                <InputLabel>
                    First name
                    <FirstNameInput autoFocus 
                        onChange={this.handleInputChange}
                        onBlur={this.validateData}
                        value={inputValue.firstName}
                    />
                </InputLabel>
                <InputLabel>
                    Last name
                    <LastNameInput 
                        onChange={this.handleInputChange}
                        onBlur={this.validateData}
                        value={inputValue.lastName}
                    />
                </InputLabel>
                <InputLabel>
                    Phone
                    <PhoneInput 
                        onChange={this.handleInputChange}
                        onBlur={this.validateData}
                        value={inputValue.tel}
                        isValid={isDataValid.tel}
                    />
                </InputLabel>
                <InputLabel>
                    Email
                    <EmailInput 
                        onChange={this.handleInputChange}
                        onBlur={this.validateData}
                        value={inputValue.email}
                        isValid={isDataValid.email}
                    />
                </InputLabel>
                <InputLabel>
                    Leave a comment
                    <CommentInput 
                        onChange={this.handleInputChange}
                        value={inputValue.comment}
                    />
                </InputLabel>
                <Agreement 
                    onChange={this.toggleAgreementState}
                    checked={agreed}
                />
                <SubmitButton
                    disabled={!agreed}
                    type="submit"
                >
                    Confirm order
                </SubmitButton>
            </Form>
        )
    }
}

const mapStateToProps = (state) => ({
    addProductList: state.cart.items,
});

export default connect(mapStateToProps, null)(OrderForm);
