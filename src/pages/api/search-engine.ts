import { NextApiRequest, NextApiResponse } from "../../../node_modules/next/dist/shared/lib/utils";
import { z } from "zod"
import { searchClean } from "@/services/searchClean";
import { api_client } from "@/services/api_client";

interface Article {
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


interface AllArticlesResponse {
    articles: Article[]
}

export default async function handler(request: NextApiRequest, response: NextApiResponse ) {
    const registerBodySchema = z.object({
        search: z.string()
    })
    const { search } = registerBodySchema.parse(request.body)
    const searchCleaner = searchClean(search)

    const {data} = await api_client.get<AllArticlesResponse>('articles/get-all')
    
    
    const filtered = data.articles.filter((article: Article) => {
        if(article.tags.join(' ').toLowerCase().includes(searchCleaner)) return true
        if(article.author.name.toLowerCase().includes(searchCleaner)) return true
        if(article.category.toLowerCase().includes(searchCleaner)) return true
        if(article.title.toLowerCase().includes(searchCleaner)) return true
        if(article.subtitle.toLowerCase().includes(searchCleaner)) return true
        return false
    })
    
    response.status(200).json({ articles: filtered })
}