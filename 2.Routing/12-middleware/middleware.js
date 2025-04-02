import { NextResponse } from "next/server";

const cors = {
    origins: ["https://www.blabla.com"],//allowed websites
    methods: ["POST","PUT"],//allowed request methods
    headers: ["Authorizations"]//allowed headers
}

export function middleware(request){//request param
    const origin = request.headers.get("origin") ?? "";
    const isAllowedOrigin = cors.origins.includes(origin); 
    const isAllowedMethod = cors.methods.includes(request.method);
    if(!isAllowedOrigin){
        return NextResponse.json({message: "İzin verilen siteler dışında bu endpointe istek yapılamaz!"},{status: 405});
    }

    if(!isAllowedMethod){
        return NextResponse.json(            
            {message: "İzin verilen metotlar dışında istek yapılamaz!"},
            {status: 405}, 
            {headers: {"Access-Control-Allow-Methods": "POST,PUT"} });
    }
    
    const response = NextResponse.next();//get response
	//response.cookies.set();

    return response;
}


export const config = {
    matcher: '/api/:path*',//matcher indicates where to mw run
  }