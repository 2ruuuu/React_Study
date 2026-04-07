// 프로미스

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 3000);
});
