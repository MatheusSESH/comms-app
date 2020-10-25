interface Resolve {
    token: string;
    user: {
        name: string;
        email: string;
    }
}

export default function apiSignIn(): Promise<Resolve>  {
    return new Promise (resolve =>{
        setTimeout(() => {
            resolve({
                token: 'lajsdkfjçaslkdfjças',
                user: {
                    name: 'doka',
                    email: 'doka@professor.instituição.br'
                },
            });
        }, 2000)
    })
}