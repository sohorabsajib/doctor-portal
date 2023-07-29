import React from 'react';

import { useCreateUserWithEmailAndPassword,  useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";

import auth from '../../firebase/firebase.config'
import Loading from "../../Shared/Loading";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit, } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      const navigate = useNavigate();

    let signInErrorMessage;

    if (loading || gLoading) {
        return <Loading></Loading>;
    }
    if(error|| gError || updateError){
        signInErrorMessage= <p className="text-red-500"><small> {error?.message|| gError?.message || updateError?.message }</small></p>
    }

    if (gUser || user) {
        console.log(gUser || user);
    }

    const onSubmit = async (data) => {
        console.log(data);
       await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log('update done');
        navigate('/appointment')
    };
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    }
                                }
                                    )}
                            />
                            <label className="label">
                                {errors.name?.type === "required" && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                           </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    }
                                },
                                    {
                                        pattern: {
                                            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                            message: 'error message'
                                        }
                                    })}
                            />
                            <label className="label">
                                {errors.email?.type === "required" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === "pattern" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                           </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Your Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    }
                                },
                                    {
                                        minLength: {
                                            value: 6,
                                            message: 'minimum 6 characters'
                                        }
                                    })}
                            />
                            <label className="label">
                                {errors.password?.type === "required" && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === "minLength" && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {signInErrorMessage}
                        <input className="btn w-full max-w-xs text-white" type="submit" value="sign up" />
                    </form>
                    
                    <p><small>Already have an account? <Link className="text-primary" to="/login">Please login</Link></small></p>
                    <div className="divider">OR</div>

                    <div className="card-actions justify-end">
                        <button
                            onClick={() => signInWithGoogle()}
                            className="btn btn-outline w-full max-w-xs">Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;