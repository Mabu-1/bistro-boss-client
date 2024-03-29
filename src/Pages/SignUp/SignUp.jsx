import { Link, useNavigate } from "react-router-dom";
import authentication from '../../assets/others/auth.png'
import backgroundImage from '../../assets/others/authentication.png';
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const SignUp = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        createUser(data.email, data.password)
    .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
            .then(() => {
                // create user entry in the database
                const userInfo = {
                    name: data.name,
                    email: data.email
                }
               
                    .then(res => {
                        if (res.data.insertedId) {
                            console.log('user added to the database')
                            reset();
                            Swal.fire({
                                position: 'top-centre',
                                icon: 'success',
                                title: 'User created successfully.',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/');
                        }
                    })
                    .catch(error => {
                        // Handle the error with Swal.fire
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Something went wrong while adding user to the database!",
                        });
                        console.error("Database insertion error:", error);
                    });
            })
            .catch(error => {
                // Handle the error with Swal.fire
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong while updating user profile!",
                });
                console.error("Update user profile error:", error);
            });
    })
    .catch(error => {
        // Handle the error with Swal.fire
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong while creating the user!",
        });
        console.error("Create user error:", error);
    });

    }
        
    const heroStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (
        <>
            <Helmet>
                <title>Bistro Boss | SignUp</title>
            </Helmet>
            <div className="hero min-h-screen" style={heroStyle}>
                <div className=" flex-col md:flex lg:flex-row justify-center">

                    <div className="card md:w-3/4  max-w-sm ">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="url"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6 ">

                                <input className="btn bg-yellow-600 text-white" type="submit" value="Sign In" />
                            </div>
                        </form>
                        <div className='flex justify-center  text-yellow-600'>
                            <p className='px-6'><small>Already registered?  <Link to="/login">Go to log in</Link> </small></p>
                        </div>
                    </div>
                    <div className=" md:w-3/4 ">
                        <img className='' src={authentication} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;