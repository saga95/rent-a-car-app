import Amplify from "aws-amplify";
import {
  AmplifyAuthenticator,
  AmplifySignUp,
  AmplifySignIn,
} from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import awsconfigure from "../../aws-exports";

export default function SignUp() {
  Amplify.configure(awsconfigure);
  return (
    <div>
      <AmplifyAuthenticator
        usernameAlias="email"
        initialAuthState={AuthState.SignUp}
      >
        <AmplifySignUp
          slot="sign-up"
          usernameAlias="email"
          formFields={[
            {
              type: "email",
              label: "Email",
              placeholder: "Email",
              inputProps: { required: true, autocomplete: "username" },
            },
            {
              type: "password",
              label: "Password",
              placeholder: "Password",
              inputProps: { required: true, autocomplete: "new-password" },
            },
            {
              type: "name",
              label: "First Name",
              placeholder: "First Name",
            },
            {
              type: "middle_name",
              label: "Last Name",
              placeholder: "Last Name",
            },
            {
              type: "birthdate",
              inputProps: { type: "date" },
              label: "Birthday",
              placeholder: "Birthday",
            },
          ]}
        />
        {/* <AmplifySignIn slot="sign-in" usernameAlias="email" /> */}
      </AmplifyAuthenticator>
    </div>
  );
}
