import mongoose, { Schema, Document, PopulatedDoc, Types } from 'mongoose'
import { ITask } from './Task'

// typescript
export interface IProject extends Document {
    projectName: string
    clientName: string
    description: string
    tasks: PopulatedDoc<ITask & Document>[]
}

// mongoose
const ProjectSchema: Schema = new Schema({
    projectName: {
        type: String,
        required: true,
        trim: true
    },
    clientName: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    tasks: [
        {
            type: Types.ObjectId,
            ref: 'Tasks'
        }
    ]
}, {timestamps: true})

const Project = mongoose.model<IProject>('Project', ProjectSchema)
export default Project