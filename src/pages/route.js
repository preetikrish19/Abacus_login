import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp2 from "./pages/signup2";
import SignUp from "./SignUp";
import SignInForm from "./SignInForm";
import ForgotPassword from "./ForgotPassword";
export default function Route() {
    return (
    <Router basename="/react-auth-ui/">
        <Route exact path="/" component={SignUp} />   {/* Signup form*/}
        <Route path="/sign-in" component={SignInForm} />
        </Router>
    );
}