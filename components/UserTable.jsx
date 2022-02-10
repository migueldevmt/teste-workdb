import { useContext } from "react";

import { UserContext } from "../hooks/useUserRepository";
import Input from "../components/Input";

function UserTable() {
    const { users, sortUsersBy, sortBy, searchTerm, searchUser, clearUsers } =
        useContext(UserContext);

    const exportData = () => {
        let jsonWindow = window.open();
        jsonWindow.document.open();
        jsonWindow.document.write(
            "<html><body><pre>" +
                JSON.stringify(users, undefined, 2) +
                "</pre></body></html>"
        );
        jsonWindow.document.close();
    };

    return (
        <>
            <h2>Clientes</h2>
            <Input
                label="Pesquisar"
                id="search"
                value={searchTerm}
                onChange={(e) => searchUser(e.target.value)}
            />
            <button className="btn btn-danger" onClick={clearUsers}>
                Limpar
            </button>
            <button className="btn ms-2 btn-warning" onClick={exportData}>
                Exportar
            </button>

            <table className="table">
                <thead>
                    <tr>
                        <th onClick={() => sortUsersBy("name")} scope="col">
                            Nome {sortBy == "name" ? "▼" : null}
                        </th>
                        <th onClick={() => sortUsersBy("lastName")} scope="col">
                            Sobrenome {sortBy == "lastName" ? "▼" : null}
                        </th>
                        <th onClick={() => sortUsersBy("height")} scope="col">
                            Altura{sortBy == "height" ? "▼" : null}
                        </th>
                        <th
                            onClick={() => sortUsersBy("birthdate")}
                            scope="col"
                        >
                            Data de Nascimento{" "}
                            {sortBy == "birthdate" ? "▼" : null}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users &&
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.lastName}</td>
                                <td>{user.height}</td>
                                <td>{user.birthdate}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </>
    );
}

export default UserTable;
