import Mock from 'mockjs'

const Random = Mock.Random

export const getUserInfo = (options) => {
  // console.log(options)
  const template = {
    'str|2-4': 'zongqiang', // 重复str生成一个字符串，重复次数小于等于4大于等于2
    'name|5': 'zongqiang', // 重复str生成一个字符串，重复次数5
    character: Random.character('symbol'), // lower/upper/symbol/number 生成特殊的字符
    string: Random.string('lower', 5, 10), // lower/upper/symbol/number 生成特殊字符串
    'age|+2': 18, // 属性值自动加2，初始值为number
    'integer|4-10': 0,  // 生成一个大于等于4小于等于10的整数，默认值只是用来确定类型
    integer1: Random.integer(0, 10), // 生成一个整数
    'float|3-10.2-5': 0, // 整数部分大于等于3小于等于10，小数部分最少保留2位，最多保留5位
    float1: Random.float(1, 100, 2, 4), // 和上面写法等效
    'bool|1-1': true, // 随机生成一个布尔值，值为true的概率为 1/（1+1）1/2 值为false 的概率为1/2
    'bool1|2-5': true, // 值为true的概率为 2/（2+5）2/7 值为true的概率为 5/（2+5）5/7
    bool2: Random.boolean(1, 2, true),
    'obj|2': {
      a: 'aa',
      b: 'bb',
      c: 'cc'
    }, // 从object中随机选取2个属性值
    'obj1|1-3': {
      a: 'aa',
      b: 'bb',
      c: 'cc'
    }, // 从object中随机选取1到3个属性值
    'arr|2': ['aa', 'bb', 'cc'], // 重复array中的元素2次
    'arr1|2-4': ['aa', 'bb', 'cc'], // 重复array中的元素至少2次，至多4次
    'arr2|+1': ['aa', 'bb', 'cc'], // 循环的时候，按顺序从array中选取1个元素
    arr3: Random.range(1, 10, 2), // 随机生成一个数组 start end step
    'fun': () => {
      return 'this is a function'
    }, // 属性值为函数的情况
    'reg': /[1-9][a-z]/, // 属性是正则表达式
    // email: Random.email(),
    email: Mock.mock('@email'), // 随机生成一个邮箱
    natural: Random.natural(0, 100), // 返回一个自然数，最小为0，最大为100
    date: Random.date('yyyy-MM-dd'),  // hh 是12进制的小时 HH 是24进制的小时
    time: Random.time('hh:mm:ss A'), // hh 是12进制的小时 HH 是24进制的小时 a 小写上午下午 A 大写上午下午
    time1: Random.time('T'), // 返回一个时间戳
    dateTime: Random.datetime('yyyy-MM-dd hh:mm:ss a'),
    now: Random.now('yyyy-MM-dd hh:mm'), // 2020-02-11 04:03
    now1: Random.now('hour', 'yyyy-MM-dd hh:mm'), // now1: "2020-02-11 04:00" 带单位的，时间精确到小时即可 单位：year,month,week,day,hour,minute,second
    img: Random.image(),





  }
  return Mock.mock(template)
}