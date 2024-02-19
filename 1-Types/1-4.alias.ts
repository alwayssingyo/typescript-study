{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text = 'ellie';
  const address: Text = 'Korea';
  type num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'ellie',
    age: 12,
  };

  /**
   * String Litteral Types
   */
  type Name = 'name';
  let ellieName: Name;
  ellieName = 'name';
  type JSON = 'json';
  const json: JSON = 'json';
}
