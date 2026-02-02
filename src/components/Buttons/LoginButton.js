import {signInAction} from "@/lib/action";

export default function LoginButton() {
    return (
        <form action={signInAction}>
            <p>Continue with google</p>
        </form>
    )
}