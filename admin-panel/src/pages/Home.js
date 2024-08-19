import { useUser } from "../account/UserContext"

export default function Home() {
    const user = useUser();
    return (
        <div className="container max-w-xl mx-auto mt-4 p-12 border bg-slate-800 text-center">
            <h2>Welcome to Travlr Getaways Admin</h2>
            {!user && (
                <p>Please login to continue</p>
            )}
        </div>
    )
}