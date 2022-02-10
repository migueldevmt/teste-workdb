import { useContext, useState } from "react";

import { UserContext } from "../hooks/useUserRepository";
import Input from "../components/Input";

const INITIAL_FORM = {
    name: "",
    lastName: "",
    height: 0,
    birthdate: "1970-01-01",
};

function UserForm() {
    const { insertUser } = useContext(UserContext);
    const [form, setForm] = useState(INITIAL_FORM);

    const submit = (e) => {
        e.preventDefault();
        insertUser(form);
        setForm(INITIAL_FORM);
    };

    return (
        <>
            <h2>Cadastrar Novo Cliente</h2>
            <form onSubmit={submit}>
                <Input
                    label="Nome"
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <Input
                    label="Sobrenome"
                    id="lastname"
                    value={form.lastName}
                    onChange={(e) =>
                        setForm({ ...form, lastName: e.target.value })
                    }
                />
                <Input
                    label="Data de nascimento"
                    type="date"
                    id="date"
                    value={form.birthdate}
                    onChange={(e) =>
                        setForm({ ...form, birthdate: e.target.value })
                    }
                />
                <Input
                    label="Altura"
                    id="height"
                    value={form.height}
                    onChange={(e) =>
                        setForm({ ...form, height: e.target.value })
                    }
                />
                <button
                    disabled={!form.name || !form.lastName || !form.height}
                    type="submit"
                    className="btn btn-primary"
                >
                    Criar
                </button>
            </form>
        </>
    );
}

export default UserForm;
