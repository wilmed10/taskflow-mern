import api from "@/lib/axios";
import { ProjectFormData } from "../types";

export async function createProject(formData: ProjectFormData) {
    try {
        const { data } = await api.post('/projects', formData)
        console.log(formData)
    } catch (error) {
        console.log(error)
    }
}