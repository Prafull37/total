const path= require('path');

//dirname & filename
console.log("Dirname",__dirname)
console.log("Filename",__filename)

// win32

// console.log(path.win32);

//posix

// console.log(path.posix)

//resolve :- resolve to an absolute path

console.log("Resolve",path.resolve("/csecondPath","/subpath","test.txt"))

//basename
  
console.log("basename",path.basename(__filename,'.js'))

//delimeter
console.log(path.delimiter)

//dirname
console.log(path.dirname(__filename))

//format - is used to join paths on a obj {dir,root,base,name,ext}. if dir specified root ignored. If dir not specified root is not ignored

console.log("Formatted Path :- ",path.format({
    root:'C:\\',
    dir: 'C:\\Users\\Prafull37\\Desktop\\Node\\nodefirstPath/subPath',
    // root:'PRAFULL',
    base:'fits.json',
    file : 'fits',
    ext:'json'
}))

//isAbsolute

console.log(path.isAbsolute(__dirname))
console.log(path.isAbsolute("./firstPath/subpath"))

// join

console.log("Join goes:- ",path.join(__dirname,'firstPath','subPath',__filename,'secondPath'))

//normalize

console.log("normalize",path.normalize('..\\\\..\\\\secondPath\\\\subpath'))

//parse

console.log(path.parse(__dirname+'firstPath/subPath/TEST.txt'))

//relative 

console.log(path.relative('./firstPath/subpath','./secondPath/subpath'))

//sep --- Seperator os specific

console.log(path.sep)

//namespaces --- ?
console.log(path.toNamespacedPath(__dirname))