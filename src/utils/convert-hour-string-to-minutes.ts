export function convertHourStringToMinutes(hourString: string) {
  const [hours, minutes] = hourString.split(':').map(Number)

  const minutesaAmount = (hours * 60) + minutes;

  return minutesaAmount
}