export {};

let numbers: number[] = [1, 2, 3];

// 非推奨の配列記法
let numbers2: Array<number> = [1, 2, 3];

let strings: string[] = ['Tokyo', 'Osaka', 'Kyoto'];

// 二次元配列
let nijigenHairetsu: number[][] = [
  [50, 100],
  [150, 300],
];

// ()内の型が含まれた配列という意味（順序は関係ない）
let hairetsu: (number | boolean | string)[] = [1, false, 'Japan'];
