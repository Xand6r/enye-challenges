import React from 'react';
import { Form, Icon, Input, Button, DatePicker,message, InputNumber} from 'antd'
import { useDispatch } from 'react-redux'
import addUser from "../actions/addUser"

const {TextArea} = Input;



function InputForm(props) {
    // create a dispatch object for our actions
    const Dispatch=useDispatch();
    
    // add a success message to display if the info was sucessfuly saved
    const success = () => {
        message
          .loading('Saving to database..', 1.5)
          .then(() => message.success('Finished saving', 0.5))

            //Clear the input field after all is said and done
          .then(()=> props.form.resetFields());
      };

    // method to be called upon submission of the form
    const handleSubmit=e=>{
        e.preventDefault();

        props.form.validateFields((err,values)=>{
            // if there was no error save the information
            const enteredYear=values['date-picker'].year();
            var calculatedAge = new Date().getFullYear() - Number(enteredYear);

            if (calculatedAge !== Number(values['age'])){
                message.error("Your age is incorrect, please align it with your year of birth!",1.0);
                return;
            }
            
            if(!err){
                // send the field items to the app's state
                Dispatch(addUser(values))
                success();
            }
            else{
                message.error("there was an error saving, please try again!",1.0);
            }
        })
    }

    // defining some constants for use  
    const {getFieldDecorator} = props.form;
    const config = {
        rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    };

    const margin={
        marginRight:"15px"
    }

    // return the JSX to be displayed as the template
    return (
        <Form onSubmit={handleSubmit} style={styles['loginForm']}>
            <div style={styles["titleBar"]}>
                <h3 style={styles["title"]}>DATA</h3>
            </div>
            {/* form item for the first name */}
            <Form.Item>

                {getFieldDecorator('firstName', {
                    rules: [{ required: true, message: 'Please input your first name!' }],
                })(
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
                })(
                    <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.95)' }} />}
                    placeholder="last name"
                    />,
                  )}

            </Form.Item>
            {/* form item for the last name */}
            
            <div style={styles["flexContainer"]}>

                {/* form item for the date picker */}
                <Form.Item style={margin} >
                    {getFieldDecorator('date-picker', config)(<DatePicker />)}
                </Form.Item>
                {/* form item for the date picker */}
                                
                {/* form item for the last name */}
                <Form.Item>
                {getFieldDecorator('age', {
                    rules: [{ required: true, message: 'Please input your age!' }],
                })(
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
            })(
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

                <Button style={styles['buttonStyle']} type="primary" htmlType="submit">
                    Submit
                </Button>

            </Form.Item>
            {/* form item for the submit button */}

        </Form>
    )
}


const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(InputForm);


// styles for this component
const styles={
    loginForm:{
        maxWidth: "500px"
    },
    titleBar:{
        textAlign: "center",marginBottom: "60px"
    },
    title:{
        fontSize: "30px",color: "rgb(34, 58, 109)"
    },
    flexContainer:{
        display: "flex",flexWrap: "wrap",justifyContent: "space-between"
    },
    buttonStyle:{
        width:"120px",marginLeft:"calc(50% - 60px)",marginTop:"30px"
    }
}



export default WrappedNormalLoginForm