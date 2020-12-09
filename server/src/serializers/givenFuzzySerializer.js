import User from '../models/User.js'
import format from 'date-fns/format/index.js'

export async function givenFuzzySerializer(data) {
  const recipient = await User.query().findById(data.recipientId)
  let date = format(new Date(data.createdAt), 'MM/dd/yyyy')
  const fuzzyData = { ...data, recipientEmail: recipient.email, date: date }
  return fuzzyData
};