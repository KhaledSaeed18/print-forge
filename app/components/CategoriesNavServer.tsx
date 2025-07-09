import { getAllCategories } from "@/app/lib/categories"
import CategoriesNav from "./CategoriesNav"

export default async function CategoriesNavServer() {
    const categories = await getAllCategories()

    return <CategoriesNav categories={categories} />
}
