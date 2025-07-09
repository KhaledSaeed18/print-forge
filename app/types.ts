export interface Category {
    id: number
    displayName: string
    slug: string
}

export interface Model {
    id: number
    name: string
    description: string
    likes: number
    image: string
    category: string
    dateAdded: string
}

export interface GetModelsParams {
    category?: string
}

export interface ModelsPageProps {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
