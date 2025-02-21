const checkAge = (value: number): void => {
  console.log(value >= 18 ? 'You are an adult' : 'You are a child');
};

checkAge(20); // Output: You are an adult
checkAge(15); // Output: You are a child

const getDayName = (day: number): string => {
  switch (day) {
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    case 7:
      return 'Sunday';
    default:
      return 'Invalid day';
  }
};

console.log(getDayName(1)); // Output: Monday
console.log(getDayName(5)); // Output: Friday
console.log(getDayName(8)); // Output: Invalid day
