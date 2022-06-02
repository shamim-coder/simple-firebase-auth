import "./App.css";
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { app } from "./firebase.init";
import { useState } from "react";

const auth = getAuth(app);

function App() {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const [user, setUser] = useState({});

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                setUser(user.providerData[0]);
                console.log("google: ", user);
            })
            .catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorMessage, email, credential);
            });
    };

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                const user = result.user;
                console.log(result);
                setUser(user.providerData[0]);
                console.log("github: ", user);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({ message: "Sign-out successful" });
            })
            .catch((error) => {
                // An error happened.
            });
    };
    return (
        <div className="App">
            {user.uid ? (
                <button onClick={handleSignOut}>Sign Out</button>
            ) : (
                <div>
                    <button onClick={handleGoogleSignIn}>Sign In by Google</button>
                    <button onClick={handleGithubSignIn}>Sign In by GutHub</button>
                </div>
            )}

            <h3>{user.displayName}</h3>
            <p>{user.email}</p>
            <p style={{ color: "green" }}>{user?.message}</p>
            <img src={user.photoURL} alt="" />
        </div>
    );
}

export default App;
