function calcAverageCalories(days) {
    if (days.length === 0) {
        return 0;
    }
   let totalCalories = 0;
    for (const days of days) {
        totalCalories += day.calories;
    }
    return totalCalories / days.lenght;
}
days = [
    {'day': 'Monday', 'calories': 2500},
    {'day': 'Tuesday', 'calories': 2200},
    {'day': 'Wednesday', 'calories': 3000},
    {'day': 'Thursday', 'calories': 2800},
    {'day': 'Friday', 'calories': 2600},
    {'day': 'Saturday', 'calories': 2700},
    {'day': 'Sunday', 'calories': 2400}
]