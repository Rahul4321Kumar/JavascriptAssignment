const fun2 = () => {
    setTimeout(() =>{
        console.log("fun2 started")
    },3000)
}

const fun1 = () => {
    console.log("fun1 started")
    fun2()
    console.log("fun1 finished")
}

fun1()

