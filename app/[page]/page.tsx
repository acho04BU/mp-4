"use client";


import {useParams} from "next/navigation";
import useSWR from "swr";
import ArtCard from "../components/ArtCard";
import styled from "styled-components";
import {Data} from "@/types/types";

const ArtContentWrapper = styled.main`
    width: 80vw;
    margin: auto;
    background-color: aquamarine;
`;

const ArtCardsContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    border: gold 5px solid;
`;

export default function ArtPage() {

    const params = useParams();

    // Fetch Art data with SWR
    const {data, error} = useSWR(`/api/getPageData?page=${params.page}`,
        (url) =>
            fetch(url)
                .then((res) => res.json())
    );

    // Handle error and loading
    if (data?.error || error) return <h1>Failed to load</h1>;

    if (!data) return <div>Loading...</div>;

    // If there is data, get the days otherwise an empty array.
    const artworks = data?.records || [];

    return (
        <ArtContentWrapper>
            <ArtCardsContainer>
                {
                    artworks.map((Art: Data) =>
                        (
                            <ArtCard
                                title={Art.title}
                                key={Art.key}
                                dated={Art.dated}
                                copyright={Art.copyright}
                                url={Art.url}
                                description={Art.description}
                            />
                        )
                    )
                }
            </ArtCardsContainer>
        </ArtContentWrapper>
    );
}