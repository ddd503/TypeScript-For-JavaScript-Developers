// ファイル自体をモジュールとして扱える（変数定義などはPrivateになる）
export {};

let name = 'TypeScript';

let isFinished: boolean = true;
isFinished = false;
console.log({ isFinished });
