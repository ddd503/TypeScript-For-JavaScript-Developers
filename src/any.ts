import axios from 'axios';

export {};

let url: string =
  'http://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url).then(function (response) {
  interface Article {
    id: number;
    title: string;
    description: string;
  }
  // handle success
  let data: Article[];
  // Parseしている
  data = response.data;
  console.log(data);
});
