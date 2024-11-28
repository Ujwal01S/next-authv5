import Email from "next-auth/providers/email"


const user = [
    {
        email:"demo@demo.com",
        password:"password"
    },
    {
        email:"alex@demo.com",
        password:"password"
    },
    {
        email:"example@demo.com",
        password:"password"
    },
    {
        email:"demo2@demo.com",
        password:"password"
    },
]

export const getUserByEmail = (email:string) => {
    const found = user.find(user => user.email === email)
    return found;
}