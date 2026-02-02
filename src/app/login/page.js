import { redirect } from "next/navigation";
import { auth } from "../../lib/auth";
import { signInAction } from "../../lib/action";


export default async function Page() {
    const session = await auth();

    if (session?.user) {
        if (session.user.userRole === "admin") {
            redirect("/admin");
        } else {
            redirect("/unauthorized");
        }
    }

    return (
        <form action={signInAction}>
            <button>Continue with Google</button>
        </form>
    );
}
