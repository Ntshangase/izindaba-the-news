
type Article = { 
    author: string | null;
    category: string;
    country: string;
    description: string;
    image: string | null;
    language: string;
    published_at: string;
    source: string;
    title: string;
    url: string;
};

type pagination = {
    count: Int;
    limit: Int;
    offset: Int;
    total: Int;
};

type NewsResponse = {
    pagination: pagination;
    data: Article[];
};

type Category = 
| "general"
| "business"
| "entertainment"
| "health"
| "science"
| "sports"
| "technology";
