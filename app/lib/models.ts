import { prisma } from "./db"
import type { Model, GetModelsParams } from "../types"

export async function getModels({ category }: GetModelsParams = {}): Promise<Model[]> {
    const models = await prisma.model.findMany({
        where: category ? {
            category: {
                slug: category
            }
        } : undefined,
        include: {
            category: true
        },
        orderBy: {
            dateAdded: 'desc'
        }
    })

    // Transform the data to match the expected Model type
    return models.map(model => ({
        id: model.id,
        name: model.name,
        description: model.description,
        likes: model.likes,
        image: model.image,
        category: model.category.slug,
        dateAdded: model.dateAdded.toISOString()
    }))
}

export async function getModelById(id: string | number): Promise<Model> {
    const model = await prisma.model.findUnique({
        where: {
            id: parseInt(id.toString())
        },
        include: {
            category: true
        }
    })

    if (!model) {
        throw new Error(`Model with id ${id} not found`)
    }

    // Transform the data to match the expected Model type
    return {
        id: model.id,
        name: model.name,
        description: model.description,
        likes: model.likes,
        image: model.image,
        category: model.category.slug,
        dateAdded: model.dateAdded.toISOString()
    }
}