type user = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string
}

type postUser = {
    id: number,
    title: string,
    body: string,
    userId: number
}

export const users: [{user:{postUser}}] = [
    {
        id: 1,
        name: "Lucas Coimbra Rocha Lago",
        phone: "1234 5678",
        email: "lucas@gmail.com",
        website: "www.lucas.com.br"
        {
            id: "11",
            title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
            userId: 111
        }
    },
    {
        id: 2,
        name: "Scheilla Costa Godioso",
        phone: "1234 5679",
        email: "xeilla@gmail.com",
        website: "www.xeilla.com.br"
        { 
            id: "22",
            title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
            userId: 222
        }
    },
    {
        id: 3,
        name: "Mingau",
        phone: "1234 5601",
        email: "mingau@gmail.com",
        website: "www.mingau.com.br"
    },
    {
        id: 4,
        name: "Marie",
        phone: "1234 5998",
        email: "marie@gmail.com",
        website: "www.marie.com.br"
    }
]