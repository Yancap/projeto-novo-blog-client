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
    articles: Article
}

export interface AllArticlesResponse {
    articles: Article[]
}

export interface ArticleCommentsResponse {
    article: any;
    comments: {
        id: string; 
        text: string; 
        created_at: string; 
        user_name: string;
        user_email: string;
    }[]
}

export interface CategoriesResponse {
    categories: Categories[]
}

export interface Categories {
    
    id: string;
    category: string;
    
}