import { getProjectById } from "@/api/ProjectAPI"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"

export default function EditProjectView() {
    const params = useParams()
    const projectId = params.projectId!

    const { data, isLoading } = useQuery({
        queryKey: ['editProject', projectId],
        queryFn: () => getProjectById(projectId),
        retry: 10
    })

    return (
        <div>EditProjectView</div>
    )
}
