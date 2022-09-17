const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  await new Promise((r) => setTimeout(r, 200));

  return new Promise((resolve) => {
    let countEmosi = 0;

    promiseTheaterIXX()
      .then(
        (resultPromiseTheaterIXX) => {
          resultPromiseTheaterIXX.forEach(function (value) {
            if (value.hasil == emosi) {
              ++countEmosi;
            }
          });
          promiseTheaterVGC()
            .then(
              (resultPromiseTheaterVGC) => {
                resultPromiseTheaterVGC.forEach(function (value) {
                  if (value.hasil == emosi) {
                    ++countEmosi;
                  }
                });
                resolve(countEmosi);
              }
            );
        }
      );
  });
};

module.exports = {
  promiseOutput,
};
