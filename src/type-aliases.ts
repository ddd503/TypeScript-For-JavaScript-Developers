export {};

type Mojiretsu = string;

// 定数をstring型で定義
const foo: string = 'Hello';

// 定数を宣言したエイリアスを使って型定義
const fooMojiretsu: Mojiretsu = 'Hello';

const exemple1 = {
  name: 'Ham',
  age: 43,
};

// 構造系の宣言だった定数exemple1を型としてエイリアスで宣言する
type Profile = {
  name: 'Ham';
  age: 43;
};

// Profile型で定数を宣言
const exemple2: Profile = {
  name: 'Ham',
  age: 43,
};

// 定数exemple1の値から方としてProfile2を作る（値から型を作る）
type Profile2 = typeof exemple1;
