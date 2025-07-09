import { prisma } from "./db"
import { Category } from "../types"

export async function getAllCategories(): Promise<Category[]> {
    const categories = await prisma.category.findMany({
        orderBy: {
            displayName: 'asc'
        }
    })
    return categories
}

export async function getCategoryBySlug(slug: string): Promise<Category> {
    const category = await prisma.category.findUnique({
        where: {
            slug: slug
        }
    })
    if (!category) {
        throw new Error(`Category with slug ${slug} not found`)
    }
    return category
}

export async function getDisplayNameFromSlug(slug: string): Promise<string> {
    const category = await getCategoryBySlug(slug)
    return category.displayName
}
