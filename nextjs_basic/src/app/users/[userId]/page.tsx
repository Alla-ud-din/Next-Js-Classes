
{/* <==========================Generating Static Params=====================> */}
export default async function Page(props: any) {
    const users = await fetch("https://jsonplaceholder.typicode.com/users").then((ress)=>ress.json());
    const currentId = props.params.userId;
    const userData = users[currentId-1];
    return (
        <div>
            <h3 style={{backgroundColor:"blue"}}>User detail Page</h3>
            <h4>Id: {userData.id}</h4>
            <h4>Name: {userData.name}</h4>
            <h4>Website: {userData.website}</h4>
        </div>
    )
}
export async function generateStaticParams() {
    const users = await fetch("https://jsonplaceholder.typicode.com/users").then((ress)=>ress.json());
    return users.map((user: any) => ({
        userId: user.id.toString()
    }))
}