export interface Article {
    slug: string;
    title: string;
    subtitle: string;
    text: string;
    image: string;
    created_at: string;
    state: string;
    category: string;
    author: {
        name: string;
        avatar?: string;
    };
    credits: {
        name: string;
        link: string;
    }[];
    tags: string[];
}

export interface ArticlesResponse {
    articles: Article[]
}