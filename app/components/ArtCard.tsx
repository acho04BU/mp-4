import styled from "styled-components";
import {Data} from "@/types/types";

const ArtCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    border: 1px solid black;
    margin: 1rem;
    width: 200px;
    border-radius: 10px;
`;

export default function ArtCard(props:Data) {
    return(
        <ArtCardWrapper className="Art-card">
            <h2>{props.title}</h2>
            <p>{props.dated}</p>
            <p>{props.copyright}</p>
            <p>{props.description}</p>
            <a href={props.url}>Link to Artwork</a>
        </ArtCardWrapper>
    )
}