import User from '../models/User.js'
import format from 'date-fns/format/index.js'

export async function allFuzziesSerializer(data) {
  const elevator = await User.query().findById(data.elevatorId)
  const recipient = await User.query().findById(data.recipientId)
  let date = format(new Date(data.createdAt), 'MM/dd/yyyy')
  const fuzzyData = { ...data, elevatorEmail: elevator.email, date: date, recipientEmail: recipient.email }
  return fuzzyData
};

export default allFuzziesSerializer;