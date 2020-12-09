import User from '../models/User.js'
import format from 'date-fns/format/index.js'

export async function receivedFuzzySerializer(data) {
  const elevator = await User.query().findById(data.elevatorId)
  let date = format(new Date(data.createdAt), 'MM/dd/yyyy')
  const fuzzyData = { ...data, elevatorEmail: elevator.email, date: date }
  return fuzzyData
};