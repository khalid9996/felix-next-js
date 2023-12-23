import "../signin/auth.scss";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const page = () => {
  return (
    <div className="login__body">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form>
        <h3>Admin Register</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button>Log In</button>
        <div className="social">
          <div className="go">
            <FaGoogle className="G__icon" />
            <span>Google</span>
          </div>
          <div className="fb">
            <FaFacebook className="F__icon" />
            <span>Facebook</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default page;
