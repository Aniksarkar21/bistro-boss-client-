import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  const { singIn } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, [])
  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    singIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
  }

  const handleVAlidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
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
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin} className="fieldset">
                <label className="label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input type="password" name="password" className="input" placeholder="Password" />
                <div><a className="link link-hover">Forgot password?</a></div>


                <div className='form-control'>
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                  <input type="text" ref={captchaRef} name="captcha" className="input" placeholder="type the text about" />
                  <button onClick={handleVAlidateCaptcha} className='btn btn-outline btn-xs mt-2'>Validate</button>
                </div>



                <div className="form-control mt-6">

                  <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                </div>
              </form>
              <p><small>New Here?<Link to="/signup">Create in account</Link></small></p>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default Login;