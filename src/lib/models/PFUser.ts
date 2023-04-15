import { Schema, model, models } from 'mongoose'

export interface IPFUser {
	_id?: string
	clerkId: string
	seedVal: number
}

const pfUser = new Schema<IPFUser>({
	clerkId: {
		type: String,
		required: true
	},
	seedVal: {
		type: Number,
		required: true,
		default: 0
	}
})

export const PFUser = models.PFUser || model('PFUser', pfUser)
