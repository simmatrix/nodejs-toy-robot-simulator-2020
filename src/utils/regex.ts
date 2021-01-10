export const isValidTimestamp = (input: string) => {
  return /([0-9]{4}-[0-9]{2}-[0-9]{2}) ([0-9]{2}:[0-9]{2}:[0-9]{2})/g.test(input) 
}