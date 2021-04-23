import React, { useContext, useState } from 'react';
import './Login.scss';
import LoadingButton from '../../../components/buttons/loading-button/LoadingButton';
import { Formik, Form, Field } from 'formik';
import { UserContext } from '../../../app/contexts/UserContext';
import { loginUser } from '../../../api/auth/login';
import { useHistory } from 'react-router';

interface LoginFormValues {
    username: string;
    password: string;
}

const Login: React.FC = () => {
    const history = useHistory();
    const userContext = useContext(UserContext);

    const [isLoading, setLoading] = useState<boolean>(false);
    const [isError, setError] = useState<boolean>(false);

    const onFormSubmit = async (values: LoginFormValues) => {
        try {
            setLoading(true);
            const token = await loginUser(values);
            if (token) {
                userContext.setToken(token);
                history.push('/');
            }
        } catch (e) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-screen">
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}
                onSubmit={onFormSubmit}
            >
                {() => (
                    <Form className={`login-card ${isError ? 'login-card_bounce' : ''}`}>
                        <p className="text title">Your TUKE credentials</p>

                        <Field name={'username'}>
                            {({ field }: any) => (
                                <input
                                    className={`base-input ${
                                        isError ? 'base-input_error base-input_error_bounce' : ''
                                    }`}
                                    type="text"
                                    placeholder={'dp330zm'}
                                    {...field}
                                    onFocus={() => setError(false)}
                                />
                            )}
                        </Field>
                        <Field name={'password'}>
                            {({ field }: any) => (
                                <input
                                    className={`base-input ${
                                        isError ? 'base-input_error base-input_error_bounce' : ''
                                    }`}
                                    name="password"
                                    type="password"
                                    placeholder={'password'}
                                    {...field}
                                    onFocus={() => setError(false)}
                                />
                            )}
                        </Field>

                        <LoadingButton
                            isLoading={isLoading}
                            sizeInEm={3}
                            type={'submit'}
                            text={`Log in`}
                            onClick={() => {}}
                        />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Login;
