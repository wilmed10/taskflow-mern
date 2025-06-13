import { Router } from 'express'
import { body, param } from 'express-validator'
import { ProjectController } from '../controllers/ProjectController'
import { handleInputErrors } from '../middleware/validation'
import { TaskController } from '../controllers/TaskController'
import { projectExists } from '../middleware/Project'
import { taskBelongsToProject, taskExists } from '../middleware/Task'

const router = Router()

router.post('/', 
    body('projectName').
        notEmpty().withMessage('El nombre del proyecto es OBLIGATORIO'),
    body('clientName').
        notEmpty().withMessage('El nombre del cliente es OBLIGATORIO'),
    body('description').
        notEmpty().withMessage('La descripcion del proyecto es OBLIGATORIA'),
    handleInputErrors,
    ProjectController.createProject
)

router.get('/', ProjectController.getAllProjects)

router.get('/:id', 
    param('id').isMongoId().withMessage('ID no valido'),
    handleInputErrors,
    ProjectController.getProjectById
)

router.put('/:id', 
    param('id').isMongoId().withMessage('ID no valido'),
    body('projectName').
        notEmpty().withMessage('El nombre del proyecto es OBLIGATORIO'),
    body('clientName').
        notEmpty().withMessage('El nombre del cliente es OBLIGATORIO'),
    body('description').
        notEmpty().withMessage('La descripcion del proyecto es OBLIGATORIA'),
    handleInputErrors,
    ProjectController.updateProject
)

router.delete('/:id', 
    param('id').isMongoId().withMessage('ID no valido'),
    handleInputErrors,
    ProjectController.deleteProject
)

/* tasks routes */
router.param('projectId', projectExists)

router.post('/:projectId/tasks',
    body('name').
        notEmpty().withMessage('El nombre de la tarea es OBLIGATORIO'),
    body('description').
        notEmpty().withMessage('La descripcion de la tarea es OBLIGATORIA'),
    handleInputErrors,
    TaskController.createTask
)

router.get('/:projectId/tasks',
    TaskController.getProjectTask
)

router.param('taskId', taskExists)
router.param('taskId', taskBelongsToProject)

router.get('/:projectId/tasks/:taskId',
    param('taskId').isMongoId().withMessage('ID no valido'),
    handleInputErrors,
    TaskController.getTaskById
)

router.put('/:projectId/tasks/:taskId',
    param('taskId').isMongoId().withMessage('ID no valido'),
    body('name').
        notEmpty().withMessage('El nombre de la tarea es OBLIGATORIO'),
    body('description').
        notEmpty().withMessage('La descripcion de la tarea es OBLIGATORIA'),
    handleInputErrors,
    TaskController.updateTask
)

router.delete('/:projectId/tasks/:taskId',
    param('taskId').isMongoId().withMessage('ID no valido'),
    handleInputErrors,
    TaskController.deleteTask
)

router.post('/:projectId/tasks/:taskId/status',
    param('taskId').isMongoId().withMessage('ID no valido'),
    body('status')
        .notEmpty().withMessage('El estado es obligatorio'),
    handleInputErrors,
    TaskController.updateStatus
)

export default router