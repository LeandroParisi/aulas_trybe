const os = require('os');

const systemInfo = {
  OSendOfLineMarker: os.EOL,
  CPUArchitecture: os.arch(),
  OsContants: os.constants,
  CPUCores: os.cpus(),
  freeMemory: os.freemem(),
  OSName: os.platform(),
  RAM: os.totalmem(),
}

const {
  OSendOfLineMarker,
  CPUArchitecture,
  OsContants,
  CPUCores,
  freeMemory,
  OSName,
  RAM
} = systemInfo

const convertHz = (value, step, type) => {
  if (type === 'up') return value / (Math.pow(1000, step))
  if (type === 'down') return value * (Math.pow(1000, step))
}

const sumHertz = (hertzArray) => {
  return hertzArray.reduce((acc, value) => acc + convertHz(value, 1, 'up'))
}

const convertBytes = (value, step, type) => {
  if (type === 'up') return value / (Math.pow(1024, step))
  if (type === 'down') return value * (Math.pow(1024, step))
}

const PCDetails = {
  CPUCores: CPUCores.length,
  CPUTotalSpeedGHz: sumHertz(CPUCores.map(cpu => cpu.speed)),
  TotalRamGB: convertBytes(RAM, 3, 'up')
}

console.log('OSName: ', OSName)
console.log('CPUArchitecture: ', CPUArchitecture)
console.log('PCDetails: ', PCDetails)

const monitorMemory = () => {
  setInterval(() => {
    const totalMemoryMB = convertBytes(os.totalmem(), 2, 'up')
    const usedMem = totalMemoryMB - convertBytes(os.freemem(), 2, 'up').toFixed(2)

    console.log('total OS Memory (MB)', totalMemoryMB)
    console.log('used OS Memory (MB)', usedMem)

  }, 1000)
}

const forceOverlock = () => {
  const array = [['over', 'CLOCKKKK', 'over', 'CLOCKKKK', 'over', 'CLOCKKKK', 'over', 'CLOCKKKK', 'over', 'CLOCKKKK', 'over', 'CLOCKKKK','over', 'CLOCKKKK', 'over', 'CLOCKKKK'], ['over', 'CLOCKKKK', 'over', 'CLOCKKKK', 'over', 'CLOCKKKK', 'over', 'CLOCKKKK', 'over', 'CLOCKKKK', 'over', 'CLOCKKKK','over', 'CLOCKKKK', 'over', 'CLOCKKKK']]
  setInterval(() => {
    array.forEach(over => {
      console.log(over);
      over.forEach(clock => {
        console.log(clock)
        console.log(`Process ID: ${process.pid}`)
      })
    })
  }, 1000)
}

monitorMemory()

forceOverlock()

console.log(`Process ID: ${process.pid}`)


