//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  const myName = 'Sydni';
  const myAge = '26';
  const myHobbies = ['Drawing', 'Dancing', 'Cooking'];
  return (
    <div>
      <h1>About Me</h1>
      <p>
        Hi, my name is {myName} and I am {myAge} years old. My hobbies
        include:{' '}
      </p>
      <ul>
        {myHobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
