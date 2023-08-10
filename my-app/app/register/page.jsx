import RegisterForm from "@/components/RegisterForm"
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
export default async function Register() { //register linki bu dosyaya yönlendiriyor
    const session = await getServerSession(authOptions);

    if (session) redirect("/dashboard");

    return (<RegisterForm />)

}

