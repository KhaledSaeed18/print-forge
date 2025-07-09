import modelsData from "../data/models.json"
import type { Model, GetModelsParams } from "../types"

export async function getModels({ category }: GetModelsParams = {}): Promise<Model[]> {
    let filteredModels = [...modelsData]
    if (category) {
        filteredModels = modelsData.filter(
            (model: Model) => model.category === category
        )
    }
    return filteredModels
}

export async function getModelById(id: string | number): Promise<Model> {
    const foundModel = modelsData.find(
        (model: Model) => model.id.toString() === id.toString()
    )
    if (!foundModel) {
        throw new Error(`Model with id ${id} not found`)
    }
    return foundModel
}