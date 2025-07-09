import ModelsGrid from "@/app/components/ModelsGrid"
import { getCategoryBySlug } from "@/app/lib/categories"
import { getModels } from "@/app/lib/models"
import { CategoryPageProps } from "@/app/types"

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { categoryName } = await params
    const category = await getCategoryBySlug(categoryName)
    const models = await getModels({ category: categoryName })

    return <ModelsGrid title={category.displayName} models={models} />
}