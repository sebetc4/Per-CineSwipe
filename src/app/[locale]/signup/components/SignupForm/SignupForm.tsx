'use client';
// Styles
import styles from './SignupForm.module.scss';
// Libs
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
// App
import { SignupBody } from '~/types';
import { signupSchema } from '~/schemas';
import { nextApi } from '~/services/nextApi';

export const SignupForm = () => {
    const initialValues = {
        email: '',
        password: '',
    };

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm<SignupBody>({
        defaultValues: initialValues,
        resolver: zodResolver(signupSchema),
    });

    const submit = async (data: SignupBody) => {
        try {
            await nextApi.signup(data);
            signIn();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(submit)}
            className={`${styles.form} card`}
        >
            <div className={styles.form__field}>
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    {...register('email')}
                />
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className={styles.form__field}>
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    {...register('password')}
                />
                {errors.password && <p>{errors.password.message}</p>}
            </div>
            <div className='form__buttonSubmitContainer'>
                <button
                    disabled={isSubmitting}
                    className='btn btn-contained'
                >
                    S&apos;inscrire
                </button>
            </div>
        </form>
    );
};
