import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import authentication from '../../assets/others/auth.png'
import backgroundImage from '../../assets/others/authentication.png';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {

  const [disabled, setDisabled] = useState(true);

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  console.log('state in the location login page', location.state)
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, [])


  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "top-centre",
          icon: "success",
          title: "Log in Successfully",
          showConfirmButton: false,
          timer: 1500
        });
        navigate(from, { replace: true });
      })
      .catch(error => {
        // Handle the error with Swal.fire
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
        });
      });
    }
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    }
    else {
      setDisabled(true)
    }
  }

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero min-h-screen" style={heroStyle}>
        <div className=" flex-col md:flex lg:flex-row justify-center">
          <div className=" md:w-3/4 ">
            <img className='' src={authentication} alt="" />
          </div>
          <div className="card md:w-3/4  max-w-sm ">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />

              </div>
              <div className="form-control mt-6 ">

                <input disabled={disabled} className="btn bg-yellow-600 text-white" type="submit" value="Sign In" />
              </div>
            </form>
            <div className='flex justify-center  text-yellow-600'>
            <p className='px-6'><small>New Here? <Link to="/signup">Create an account</Link> </small></p>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
