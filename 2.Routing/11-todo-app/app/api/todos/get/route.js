import { cookies, headers } from 'next/headers'

export const revalidate = 1;

export async function GET(){
    const cookieStore = cookies();
    const token = cookieStore.get("token"); // get specificly
    const headersList = headers();
    const secretKey = headersList.get("secretKey"); // get specificly

    const result = await fetch("http://localhost:9500/todos",{
        cache: "no-cache" // edit cache options
       //next: { revalidate: 1}//how long to keep in cache
    }).then(res=> res.json());

    return new Response(secretKey, {
        status: 200,
        headers: { 'Set-Cookie': 'token=' + token}//set token to set-cookie
    });
}