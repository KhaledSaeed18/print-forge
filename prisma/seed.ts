import { PrismaClient } from '@prisma/client'
import categoriesData from '../app/data/categories.json'
import modelsData from '../app/data/models.json'

const prisma = new PrismaClient()

async function main() {
    console.log('Seeding database...')

    await prisma.model.deleteMany()
    await prisma.category.deleteMany()

    console.log('Seeding categories...')
    const categories = await prisma.category.createMany({
        data: categoriesData.map(cat => ({
            displayName: cat.displayName,
            slug: cat.slug
        }))
    })
    console.log(`Created ${categories.count} categories`)

    const createdCategories = await prisma.category.findMany()
    const categoryMap = new Map(createdCategories.map(cat => [cat.slug, cat.id]))

    console.log('Seeding models...')
    const validModels = modelsData.filter(model =>
        model.id &&
        model.name &&
        model.description &&
        model.category &&
        model.image &&
        model.dateAdded
    )

    const models = await prisma.model.createMany({
        data: validModels.map(model => ({
            name: model.name,
            description: model.description,
            likes: model.likes || 0,
            image: model.image,
            dateAdded: new Date(model.dateAdded),
            categoryId: categoryMap.get(model.category)!
        }))
    })
    console.log(`Created ${models.count} models`)

    console.log('Database seeded successfully!')
}

main()
    .catch((e) => {
        console.error('Error seeding database:', e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
