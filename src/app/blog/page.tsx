import { Metadata } from "next"

export const metadata:Metadata={
    //this for template title from main page metadata
    title:"Blog",

    //this is for absolute title from main page metadata
    // title:{
    //     absolute:"Blog"
    // }
}

export default function Blog(){
    return <h1>My Blog</h1>
  }