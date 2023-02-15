import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
    category?: Category | string,
    keywords?: string,
    isDynamic?: boolean,
) => {

    const query = gql`
      query MyQuery(
        $access_key: String!
        $categories: String!
        $keywords: String
        ) {
            myQuery(
                access_key: $access_key
                categories: $categories
                contries: "za,us"
                sort: "published_desc"
                keywords: $keywords 
                ) {
            data {
                author
                category
                country
                description
                image
                published_at
                source
                url
                title
                language
            }
            pagination {
                count
                limit
                offset
                total
            }
        }
    }`;

    //fetch function with Next.js 13 caching..
    const res = await fetch('https://mordelles.stepzen.net/api/the-beginning/__graphql', {
        method: 'POST',
        cache: isDynamic ? "no-cache" : "default",
        next: isDynamic ? { revalidate: 0 } : { revalidate: 30 },
        headers: new Headers( {
            "Content-Type": "application/json",
            Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
        }),
        body: JSON.stringify({
            query,
            variables: {
                access_key: process.env.MEDIASTACK_API_KEY,
                categories: category,
                keywords: keywords,
            },
        }),
    }
    );

    console.log(
        "LOADING NEWS DATA FROM API for category>>>>",
        category,
        keywords
    );

    const newsResponse = await res.json();

    //Sort function by images vs no image present
    const news = sortNewsByImage(newsResponse.data.myQuery);

    return news;

};

export default fetchNews;