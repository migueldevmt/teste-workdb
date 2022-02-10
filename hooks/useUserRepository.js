import { createContext, useEffect, useState } from 'react';

let nextId = 1;
const USERS = [{
    id: nextId++,
    name: "John",
    lastName: "Doe",
    birthdate: "1990-01-01",
    height: 1.8
}]

export default function useUserRepository() {
    const [users, setUsers] = useState(USERS)

    const [usersFiltered, setUsersFiltered] = useState(USERS)
    const [searchTerm, setSearchTerm] = useState('')
    useEffect(() => {
        const lowerCaseTerm = searchTerm.toLowerCase()
        setUsersFiltered(users.filter(user => !searchTerm ||
            user.name.toLowerCase().includes(lowerCaseTerm) ||
            user.lastName.toLowerCase().includes(lowerCaseTerm))
        )
    }, [searchTerm, users])

    const [sortBy, setSortBy] = useState('name')
    useEffect(() => {
        setUsersFiltered([...users.sort((a, b) => {
            if (!(sortBy in a)) throw new Error("Chave invalida")

            if (typeof a[sortBy] == 'string') {
                const aLower = a[sortBy].toLowerCase()
                const bLower = b[sortBy].toLowerCase()
                if (aLower > bLower) return 1;
                if (aLower < bLower) return -1;
            } else {
                if (a[sortBy] > b[sortBy]) return 1;
                if (a[sortBy] < b[sortBy]) return -1;
            }
            return 0;
        })])
    }, [sortBy, users])

    const clear = () => setUsers([])
    const insert = (user) => { setUsers([...users, { ...user, id: nextId++ }]) }
    const destroy = (userId) => {
        const userIndex = users.findIndex(user => user.id == userId);
        const newUsers = users
        newUsers.splice(userIndex, 1)
        setUsers([...newUsers])
    }

    return {
        users: usersFiltered,
        clearUsers: clear,
        deleteUser: destroy,
        searchUser: setSearchTerm,
        searchTerm,
        insertUser: insert,
        sortUsersBy: setSortBy,
        sortBy
    }
}

export const UserContext = createContext(null);