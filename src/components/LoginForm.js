import React from 'react'
import { useForm } from 'react-hook-form';

function LoginForm() {
    const { register, handleSubmit } = useForm();
    return (
        <div>
            <form>
                <label forHtml="username">Username</label>
                <input type="text" {...register("username", { required: true })} />
                <label forHtml="password">Password</label>
                <input type="password" {...register("password", { required: true })} />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default LoginForm;