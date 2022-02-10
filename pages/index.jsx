import "bootstrap/dist/css/bootstrap.css";

import useUserRepository, { UserContext } from "../hooks/useUserRepository";

import UserForm from "../components/UserForm";
import UserTable from "../components/UserTable";

function HomePage() {
    const userRepository = useUserRepository();

    return (
        <UserContext.Provider value={userRepository}>
            <header className="container mb-5">
                <h1>Teste Workdb</h1>
            </header>
            <main className="container">
                <UserForm />
                <br />
                <br />
                <UserTable />
            </main>
        </UserContext.Provider>
    );
}

export default HomePage;
