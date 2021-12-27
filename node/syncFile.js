const fs=require('fs');
// require('./firstPath/')
/**
 * 
 * 
    fs.accessSync(path[, mode])  ---- ?
    fs.appendFileSync(path, data[, options])
    fs.chmodSync(path, mode) --- ?
    fs.chownSync(path, uid, gid) ---- ?
    fs.closeSync(fd)
    fs.copyFileSync(src, dest[, mode])
    fs.cpSync(src, dest[, options])
    fs.existsSync(path)
    fs.fchmodSync(fd, mode)
    fs.fchownSync(fd, uid, gid)
    fs.fdatasyncSync(fd)
    fs.fstatSync(fd[, options])
    fs.fsyncSync(fd)
    fs.ftruncateSync(fd[, len])
    fs.futimesSync(fd, atime, mtime)
    fs.lchmodSync(path, mode)
    fs.lchownSync(path, uid, gid)
    fs.lutimesSync(path, atime, mtime)
    fs.linkSync(existingPath, newPath)
    fs.lstatSync(path[, options])
    fs.mkdirSync(path[, options]) -->  
    fs.mkdtempSync(prefix[, options])
    fs.opendirSync(path[, options])
    fs.openSync(path[, flags[, mode]])
    fs.readdirSync(path[, options])
    fs.readFileSync(path[, options])
    fs.readlinkSync(path[, options])
    fs.readSync(fd, buffer, offset, length, position)
    fs.readSync(fd, buffer[, options])
    fs.readvSync(fd, buffers[, position])
    fs.realpathSync(path[, options])
    fs.realpathSync.native(path[, options])
    fs.renameSync(oldPath, newPath)
    fs.rmdirSync(path[, options])
    fs.rmSync(path[, options])
    fs.statSync(path[, options])
    fs.symlinkSync(target, path[, type])
    fs.truncateSync(path[, len])
    fs.unlinkSync(path)
    fs.utimesSync(path, atime, mtime)
    fs.writeFileSync(file, data[, options])
    fs.writeSync(fd, buffer[, offset[, length[, position]]])
    fs.writeSync(fd, string[, position[, encoding]])
    fs.writevSync(fd, buffers[, position])

 */

 /**
  *  fs.chmodSync
  */

 
//  fs.chmodSync('./firstPath/ppfile.txt',fs.constants.S_IWOTH);
//  fs.appendFileSync('./firstPath/firstText.txt',"This is appended Data",{flag:'a',encoding:'utf8',mode:''});

 /** 
  * fs.appendFileSync
    try{
     fs.appendFileSync('./firstPath/firstText.txt',"This is appended Data",{flag:'a',encoding:'utf8',mode:''});
      console.log("Data is appended to the file")
    }catch(e){
      console.log("Error Enocutered,",e);
    }finally{
       
    }
*/

/**
 * 
 fs.copyFileSync("./firstPath/firstText.txt","./firstPath/subpath/subtext.txt",fs.constants.COPYFILE_EXCL)
 */

/*
if(fs.existsSync("./firstPath")){
   console.log("file exist")
}

*/

/**
let fd;
try{

    fd= fs.openSync("./firstPath/firstText.txt");
   console.log("fd",fd);
   
   
}catch(e){

}
finally{
   if(fd !==undefined ){
      fs.closeSync(fd);
      console.log("File is closed")
   }
}
*/

/**
 * 
 fs.mkdirSync("./nodeCreatedPath");
 */

 /**
  * 
  * 
  */
