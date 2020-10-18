export {};

// object型はとりあえずモデルクラスだ
let profile1: object = { name: 'Ham' }; // propatyに型指定ができない
profile1 = { birthday: 1992 }; // 中身の定義も変えられてしまう

// object型だと曖昧なので、propatyの型指定もしてあげると良い
let profile2: {
  name: string;
} = { name: 'Ham' };
// profile2 = { birthday: 1992 }; // 中身の定義は変えられない
profile2 = { name: '1992' };
profile2.name = 'ddd'; // 書き換えはこれでも可能

console.log(profile2.name);
