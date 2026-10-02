type User = {
    name: string
}
interface User2{
    name: string
}

const user1 = {
    name: "",
    age: 12,
}
const user2 = {
    name: "",
    age: 12,
}
const test1 : User = user1
const test2 : User2 = user2

const worker = new Worker("./worker.ts")

// worker.postMessage()