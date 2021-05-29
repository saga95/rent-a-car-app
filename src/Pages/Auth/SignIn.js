import Amplify from "aws-amplify";
import {
  AmplifyAuthenticator,
  AmplifySignUp,
  AmplifySignIn,
  AmplifySignOut,
} from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import awsconfigure from "../../aws-exports";

export default function SignIn({ signOut }) {
  Amplify.configure(awsconfigure);

  onAuthUIStateChange((nextAuthState, authData) => {
    if (nextAuthState === AuthState.SignedIn) {
      console.log("user successfully signed in!");
      console.log(authData);
    }
  });

  return (
    <div>
      <AmplifyAuthenticator
        usernameAlias="email"
        initialAuthState={AuthState.SignIn}
      >
        <AmplifySignIn slot="sign-in" usernameAlias="email" />
        {signOut ? <AmplifySignOut></AmplifySignOut> : ""}
      </AmplifyAuthenticator>
    </div>
  );
}
