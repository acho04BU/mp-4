"use client";

import styled from "styled-components";

import {useState} from "react";
import Link from "next/link";

const StyledDiv = styled.div`
    
`

export default function Home(){
    const [page, setPage] = useState(1);
    return(
        <StyledDiv>
            <h1>Look at any page in the Harvard Art Museum Page!</h1>
            <p>type a page number to check that page!</p>
            <input type="text" value={page} placeholder="page number" onChange={(e) => setPage(parseInt(e.target.value))}/>
            <Link href={`/${page}`}>Get Artworks in Page</Link>
        </StyledDiv>
    )
}