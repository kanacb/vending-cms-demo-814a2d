import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Link, useNavigate } from "react-router-dom";
import FacebookOauth from "./FacebookOauth";
import GithubOauth from "./GithubOauth";
import GoogleOauth from "./GoogleOauth";
import AppleOauth from "./AppleOauth";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const [maskPassword, setMaskPassword] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (props.isLoggedIn === true) navigate("/", { replace: true });
  }, [props.isLoggedIn]);

  const onEnter = (e) => {
    if (e.key === "Enter") login();
  };

  const login = () => {
    if (validate()) {
      props
        .login({ email, password })
        .then(() => {
          navigate("/admin");
        })
        .catch(() => {});
    }
  };

  const validate = () => {
    let isValid = true;
    let re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      setEmailError("Please Enter a valid Email address");
      isValid = false;
    }
    if (password.length < 6) {
      setPasswordError(
        "Please enter a valid password. Must be at least 6 characters"
      );
      isValid = false;
    }
    return isValid;
  };

  // const loginBlock = 
  // <div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
  //     <div className="flex flex-wrap shadow-2">
  //         <div className="w-full lg:w-6 px-0 py-4 lg:p-7 bg-blue-50">
  //             <img src="/demo/images/blocks/logos/bastion-700.svg" alt="Image" height="35" className="mb-6" />
  //             <Carousel value={features} itemTemplate={(feature) =>
  //                 <div className="text-center mb-8">
  //                     <img src={`/demo/images/blocks/illustration/${feature.image}`} alt="Image" className="mb-6 w-6" />
  //                     <div className="mx-auto font-medium text-xl mb-4 text-blue-900">{feature.title}</div>
  //                     <p className="m-0 text-blue-700 line-height-3">{feature.text}</p>
  //                 </div>} />
  //         </div>
  //         <div className="w-full lg:w-6 p-4 lg:p-7 surface-card">
  //             <div className="flex align-items-center justify-content-between mb-7">
  //                 <span className="text-2xl font-medium text-900">Login to Bastion</span>
  //                 <a tabIndex="0" className="font-medium text-blue-500 hover:text-blue-700 cursor-pointer transition-colors transition-duration-150">Sign up</a>
  //             </div>
  //             <div className="flex justify-content-between">
  //                 <button className="p-ripple mr-2 w-6 font-medium border-1 surface-border surface-100 py-3 px-2 p-component hover:surface-200 active:surface-300 text-900 cursor-pointer transition-colors transition-duration-150 inline-flex align-items-center justify-content-center">
  //                     <i className="pi pi-facebook text-indigo-500 mr-2"></i>
  //                     <span>Sign in With Facebook</span>
  //                     <Ripple />
  //                 </button>
  //                 <button className="p-ripple ml-2 w-6 font-medium border-1 surface-border surface-100 py-3 px-2 p-component hover:surface-200 active:surface-300 text-900 cursor-pointer transition-colors transition-duration-150 inline-flex align-items-center justify-content-center">
  //                     <i className="pi pi-google text-red-500 mr-2"></i>
  //                     <span>Sign in With Google</span>
  //                     <Ripple />
  //                 </button>
  //             </div>
  //             <Divider align="center" className="my-4">
  //                 <span className="text-600 font-normal text-sm">OR</span>
  //             </Divider>
  
  //             <label htmlFor="email4" className="block text-900 font-medium mb-2">Email</label>
  //             <InputText id="email4" type="text" placeholder="Email address" className="w-full mb-3 p-3" />
  
  //             <label htmlFor="password4" className="block text-900 font-medium mb-2">Password</label>
  //             <InputText id="password4" type="password" placeholder="Password" className="w-full mb-3 p-3" />
  
  //             <div className="flex align-items-center justify-content-between mb-6">
  //                 <div className="flex align-items-center">
  //                     <Checkbox id="rememberme" className="mr-2" checked={checked4} onChange={(e) => setChecked4(e.checked)} />
  //                     <label htmlFor="rememberme">Remember me</label>
  //                 </div>
  //                 <a className="font-medium text-blue-500 hover:text-blue-700 cursor-pointer transition-colors transition-duration-150">Forgot password?</a>
  //             </div>
  
  //             <Button label="Sign In" className="w-full py-3 font-medium" />
  //         </div>
  //     </div>
  // </div>
  //     ;


  return (
    <div className="grid p-fluid flex flex-column align-items-center h-screen">
      <div className="col-12 lg:col-6 xl:col-4">
        <div className="card flex flex-column align-items-center">
          <div className="grid col-12 xl:col-8 flex flex-column align-items-center">
            <h4>Login</h4>
            <div className="w-full mb-4">
              <p className="m-0">Email</p>
              <InputText
                type="text"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={emailError ? "p-invalid" : ""}
                onKeyDown={onEnter}
              ></InputText>
              <small className="p-error">{emailError}</small>
            </div>
            <div className="w-full mb-4">
              <p className="m-0">Password</p>
              <span className="p-input-icon-right">
                <i
                  className={`pi ${maskPassword ? "pi-eye" : "pi-eye-slash"} cursor-pointer`}
                  onClick={() => setMaskPassword(!maskPassword)}
                  title={`${maskPassword ? "Show" : "Hide"} password`}
                />
                <InputText
                  type={maskPassword ? "password" : "text"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={passwordError ? "p-invalid" : ""}
                  onKeyDown={onEnter}
                ></InputText>
              </span>
              <small className="p-error">{passwordError}</small>
            </div>
            <div className="w-6 mb-4">
              <Button
                label="Login"
                className="p-button-raised p-button-rounded"
                onClick={login}
              ></Button>
            </div>
            {/* <div className="w-full mb-4">
                            <div className="flex">
                                <p className="m-0">Or login with</p>
                                <hr
                                    style={{
                                        width: '60%',
                                        marginLeft: '5%',
                                        marginTop: '4%',
                                        borderTop: '1px solid #000'
                                    }}
                                />
                            </div>
                            <div className="w-full flex justify-content-center mt-3">
                                <GoogleOauth props={props} type={'login'} />
                            </div>
                            <div className="w-full flex justify-content-center mt-3">
                                <FacebookOauth props={props} type={'login'} />
                            </div>
                            <div className="w-full flex justify-content-center mt-3">
                                <GithubOauth props={props} type={'login'} />
                            </div>
                            <div className="w-full flex justify-content-center mt-3">
                                <AppleOauth props={props} type={'login'} />
                            </div>
                        </div> */}
            <div className="w-full flex flex-column align-items-center">
              <div className="w-full flex justify-content-between">
                <Link to="/signup">Don't have an account?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapState = (state) => {
  const { isLoggedIn } = state.auth;
  return { isLoggedIn };
};
const mapDispatch = (dispatch) => ({
  login: (data) => dispatch.auth.login(data),
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(LoginPage);
