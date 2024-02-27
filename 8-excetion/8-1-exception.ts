// Java: Exception
// JavaScript : Error
// const array = new Array(100000000000000000);

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === 'not exist💩!') {
    throw new Error(`file not exist! ${fileName}`);
  }
  return 'file contents';
}

function closeFile(fileName: string) {
  //
}

function run() {
  const fileName = 'not exist💩!';

  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.log(`catched! ${error}`);
    return;
  } finally {
    // finally는 catch에서 return되어도 실행되기 때문에 반드시 마지막에 실행되어야 하는 코드는 finally에!
    closeFile(fileName);
    console.log('finally!');
  }

  // closeFile(fileName); // 💩
  console.log('closed!');
}

run();
