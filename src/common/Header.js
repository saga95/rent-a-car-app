import { useHistory } from "react-router";

export default function Header() {
  const history = useHistory();

  const handleOnSignUpClick = () => {
    history.push("/signup");
  };
  const handleOnSignInClick = () => {
    history.push("/signin");
  };

  return (
    <div>
      <div className="header">
        <div>Logo</div>
        <div>title</div>
        <div>
          <button onClick={handleOnSignUpClick}>Sign up</button>
        </div>
        <div>
          <button onClick={handleOnSignInClick}>Sign in</button>
        </div>
      </div>
    </div>
  );
}
