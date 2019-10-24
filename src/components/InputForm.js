import React, { Component } from 'react';
import { Form, Icon, Input, Button, DatePicker,message, InputNumber} from 'antd'
const {TextArea} = Input;



class InputForm extends Component {
    // add a success message to display if the info was sucessfuly saved
    success = () => {
        message
          .loading('Saving to database..', 1.5)
          .then(() => message.success('Finished saving', 0.5))

            //Clear the input field after all is said and done
          .then(()=> this.props.form.resetFields());
      };

    // method to be called upon submission of the form
    handleSubmit=e=>{
        e.preventDefault();

        this.props.form.validateFields((err,values)=>{
            // if there was no error save the information
            const enteredYear=values['date-picker'].year();
            var calculatedAge = new Date().getFullYear() - Number(enteredYear);

            if (calculatedAge !== Number(values['age'])){
                message.error("Your age is incorrect, please align it with your year of birth!",1.0);
                return;
            }
            
            if(!err){
                // send the field items to the app's state
                this.props.customValidator(values);
                this.success();
                // clear all the fields
            }
            else{
                message.error("there was an error saving, please try again!",1.0);
            }
        })
    }

    render() {
        // defining some constants for use  
        const {getFieldDecorator} = this.props.form;
        const config = {
            rules: [{ type: 'object', required: true, message: 'Please select time!' }],
        };

        const margin={
            marginRight:"15px"
        }

        // return the JSX to be displayed as the template
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <div className="titleBar">
                    <h3>DATA</h3>
                </div>
                {/* form item for the first name */}
                <Form.Item>

                    {getFieldDecorator('firstName', {
                        rules: [{ required: true, message: 'Please input your first name!' }],
                    })
                    (
                        <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.95)' }} />}
                        placeholder="first name"
                        />,
                    )}

                </Form.Item>
                {/* form item for the first name */}

                {/* form item for the last name */}
                <Form.Item>

                    {getFieldDecorator('lastName', {
                        rules: [{ required: true, message: 'Please input your last name!' }],
                    })
                    (
                        <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.95)' }} />}
                        placeholder="last name"
                        />,
                    )}

                </Form.Item>
                {/* form item for the last name */}
                
                <div className="flex-container">

                    {/* form item for the date picker */}
                    <Form.Item style={margin} >
                        {getFieldDecorator('date-picker', config)(<DatePicker />)}
                    </Form.Item>
                    {/* form item for the date picker */}
                                    
                    {/* form item for the last name */}
                    <Form.Item>
                    {getFieldDecorator('age', {
                        rules: [{ required: true, message: 'Please input your age!' }],
                    })
                    (
                        <InputNumber
                        min={0}
                        prefix={<Icon type="number" style={{ color: 'rgba(0,0,0,.95)' }} />}
                        placeholder="age"
                        />,
                    )}
                    </Form.Item>
                    {/* form item for the last name */}
                
                </div>

                {/* form item for the Hobbies */}
                <Form.Item>
                {getFieldDecorator('hobbies', {
                    rules: [{ required: true, message: 'Please input your Hobbies!' }],
                })
                (
                    <TextArea
                    rows={4}
                    prefix={<Icon type="text" style={{ color: 'rgba(0,0,0,.95)' }} />}
                    placeholder="Enter your hobbies"
                    />,
                )}
                </Form.Item>
                {/* form item for the Hobbies*/}

                {/* form item for the submit button */}
                <Form.Item>

                    <Button style={{width:"120px",marginLeft:"calc(50% - 60px)",marginTop:"30px"}} type="primary" htmlType="submit" className="login-form-button">
                        Submit
                    </Button>

                </Form.Item>
                {/* form item for the submit button */}

            </Form>
        )
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(InputForm);
export default WrappedNormalLoginForm