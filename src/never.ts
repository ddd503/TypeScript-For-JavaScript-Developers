export {};

// 例外を故意に起こすメソッド
function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error('test'); // resultには値は返ってこない
  console.log({ result });
} catch (error) {
  console.log({ error });
}

let foo: void = undefined;
// let bar1: never = undefined; // never型は基本的に値として格納保持できない
let bar2: never = error('only me'); // never型は基本的に値として格納保持できないが、never型を返すメソッドの場合のみ保持できる
