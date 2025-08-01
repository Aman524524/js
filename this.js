let myobj ={
    name: "aman",
    age:22,

    fun: function() {
        console.log("Hello, " + this.name);
    }
}
fun(myobj.fun()); // Output: Hello, aman