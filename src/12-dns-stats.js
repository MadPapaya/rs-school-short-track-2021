/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = [];
  const rez = {};
  let str;
  let i;
  let j;
  for (i = 0; i < domains.length; i++) {
    arr = [];
    const arrDom = domains[i].split('.').reverse();
    for (j = 0; j < arrDom.length; j++) {
      arr.push(arrDom[j]);
      str = `${'.'}${arr.join('.')}`;
      if (str in rez) {
        rez[str] += 1;
      } else {
        rez[str] = 1;
      }
    }
  }
  return rez;
}

module.exports = getDNSStats;
