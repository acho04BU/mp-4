
import {NextResponse} from "next/server";

export const dynamic = "force-dynamic";


const API_URL = `https://api.harvardartmuseums.org/object?apikey=`;

const API_KEY = process.env.API_KEY;



export async function GET(request:Request): Promise<NextResponse>{
    const {searchParams} = new URL(request.url);
    const page = searchParams.get("page");

    if (!page) {
        return NextResponse.json({error: "No [page] provided"}, {status:400});
    }

    const res = await fetch(API_URL + API_KEY + "&page=" + page, {cache: "no-store"});

    const data = await res.json();

    if (data.meta?.body.status && data.meta.body.status !== 200){
        return NextResponse.json({error:data.meta.body.error.type}, {status:(data.meta.body.status)});
    }else{
        return NextResponse.json(data);
    }
}