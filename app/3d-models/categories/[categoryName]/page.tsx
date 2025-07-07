import { getCategoryBySlug } from "@/app/lib/categories"
import { CategoryPageProps } from "@/app/types"

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { categoryName } = await params
    const category = getCategoryBySlug(categoryName)
    console.log(category)
    return <h1>{category.displayName}</h1>
}