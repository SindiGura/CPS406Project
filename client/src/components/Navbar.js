import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="mx-0 my-auto">
      <div className="grid justify-center items-center fixed top-0 left-0 w-full z-10">
        <ul className="mt-6 mb-10">
          <li className="inline px-11"><Link className="no-underline text-xl font-medium text-slate-800 hover:text-slate-500" to="/login">Login</Link></li>
          <li className="inline px-11"><Link className="no-underline text-xl font-medium text-slate-800 hover:text-slate-500" to="/create-account">Create Account</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
