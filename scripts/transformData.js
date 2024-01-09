import { readFile, writeFile } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

// 获取当前脚本所在目录的绝对路径
const currentDir = dirname(fileURLToPath(import.meta.url))

// 构建data.json的相对路径
const filePath = join(currentDir, '..', 'src', 'data', 'champion.json')
const savePath = join(currentDir, '..', 'src', 'data', 'data.json')

readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('读取文件时发生错误:', err)
    return
  }

  // 解析JSON数据
  const jsonData = JSON.parse(data)

  // 总数计算函数
  function calculateTotalAmount(cost) {
    const costToAmountMap = {
      1: 29,
      2: 22,
      3: 18,
      4: 12,
      5: 10
    }
    return costToAmountMap[cost]
  }
  // 去除'和空格符号，因为要和图片链接对应
  function removeApostrophesAndSpaces(str) {
    if (str === `Kai'Sa`) return 'Kaisa'
    return str.replace(/'| /g, '')
  }
  // 转换数据结构
  const transformedData = Object.values(jsonData.data).map((champion) => ({
    name: removeApostrophesAndSpaces(champion.name),
    cost: champion.tier,
    totalAmount: calculateTotalAmount(champion.tier)
  }))

  let generatedObjects = []
  let idCounter = 1

  transformedData.forEach((item) => {
    for (let i = 0; i < item.totalAmount; i++) {
      let newObject = { ...item, id: idCounter++ } // 复制对象并添加 id
      delete newObject.totalAmount
      generatedObjects.push(newObject)
    }
  })
  // 转换成JSON字符串
  const jsonString = JSON.stringify(generatedObjects, null, 2)

  // 将结果保存到新文件
  writeFile(savePath, jsonString, 'utf8', (err) => {
    if (err) {
      console.error('写入文件时发生错误:', err)
    } else {
      console.log('数据已成功保存到 data.json')
    }
  })
})
