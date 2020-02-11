import Mock from 'mockjs'

export const getUserInfo = (options) => {
  // console.log(options)
  const template = {
    'str|2-4': 'zongqiang', // 重复str生成一个字符串，重复次数小于等于4大于等于2
    'name|5': 'zongqiang', // 重复str生成一个字符串，重复次数5
    'age|+2': 18, // 属性值自动加2，初始值为number
    'num|4-10': 0,  // 生成一个大于等于4小于等于10的整数，默认值只是用来确定类型
    'float|3-10.2-5': 0, // 整数部分大于等于3小于等于10，小数部分最小保留2位，最多保留5位
    'bool|1-1': true, // 随机生成一个布尔值，值为true的概率为 1/（1+1）1/2 值为false 的概率为1/2
    'bool1|2-5': true, // 值为true的概率为 2/（2+5）2/7 值为true的概率为 5/（2+5）5/7
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
    'arr|1': ['aa', 'bb', 'cc'], // 从array中随机选取1个元素
    'arr1|+1': ['aa', 'bb', 'cc'], // 循环的时候，顺序从array中选取1个元素

  }
  return Mock.mock(template)
}