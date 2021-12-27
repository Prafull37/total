const os= require('os');

//getPriority
console.log(os.getPriority())

//Version of OS

console.log(os.version())

//userInfo

console.log(os.userInfo())

// uptime

console.log(os.uptime())

// type

console.log(os.type())

//total mem

console.log(os.totalmem())

//temporary storage

console.log(os.tmpdir());

//release

console.log(os.release());

//platform

console.log(os.platform())

//network info

console.log(os.networkInterfaces())

//loadavg -> only Unix based system on windows [0,0,0]

console.log(os.loadavg())

//hostname -> hostname 

console.log(os.hostname())

//homedir

console.log(os.homedir())

//free mem

console.log(os.freemem());

//endianess--

console.log(os.endianness())

//devNull --

console.log(os.devNull)

//cpus

console.log(os.cpus())

//constants

console.log(os.constants)

//architecture == process.arch

console.log(os.arch());

//EOL---  End of Line Marker

console.log(os.EOL)