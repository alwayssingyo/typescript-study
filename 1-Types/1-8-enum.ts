{
  /**
   * Enum
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENT_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUSEDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  enum Days {
    Monday,
    Tuseday,
    Wednesday,
    Tursday,
    Friday,
    Saturday,
    Sunday,
  }
  // enum Days {
  //   Monday = 'monday',
  //   Tuseday = 'Tuseday',
  //   Wednesday = 'wd',
  //   Tursday = 'th',
  //   Friday = 'fri',
  //   Saturday = 'sa',
  //   Sunday = 'sun',
  // }
  console.log(Days.Monday);

  //enum 대신 union 활용하기!
  type DaysOfWeek =
    | 'Monday'
    | 'Tuseday'
    | 'Wednesday'
    | 'Tursday'
    | 'Friday'
    | 'Saturday'
    | 'Sunday';
  let dayOfWeek: DaysOfWeek = 'Monday';
  dayOfWeek = 'Tuseday';
}
