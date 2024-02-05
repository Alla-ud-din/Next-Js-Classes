import Link from "next/link";
{/* <==========================Generating Static Params=====================> */}
type user = {
    id: number,
    name: string, 
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }

    }
}
export default async function Page(){
  const result = await fetch("https://jsonplaceholder.typicode.com/users").then((ress)=>ress.json());
  // console.log(result);
  return(
      <div>
          <h1>User List</h1>
          {
              result.map((res : user)=>(
                  <h2 key={res.id}>
                      <Link href={`/users/${res.id}`} >{res.name}</Link>
                  </h2>
              ))
          }
      </div>
  )
}
