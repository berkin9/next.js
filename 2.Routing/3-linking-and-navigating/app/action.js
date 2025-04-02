'use server'

import { redirect } from "next/navigation";

export async function createPost(data){// post request oluşturu terminalde görünür.
    console.log(data);
    //db ye kaydet ??
    redirect("/blog");//redirect to blog page
}