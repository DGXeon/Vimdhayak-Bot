const menus = (prefix, pushname, jam, wib, hari, date) => {
  return `Hello ${pushname}👋
  
Hour : ${jam} || ${wib} WIB
Date : ${date}

   *Here is a list of menu bots🤖*

*CONVERT*
 •${prefix}sticker
 •${prefix}stickergif
 •${prefix}toimg
  
*OWNER*
 •${prefix}self
 •${prefix}public
 •${prefix}banchat
 •${prefix}unbanchat
  
*STORAGE*
 •${prefix}addcmd
 •${prefix}delcmd
 •${prefix}listcmd
  
*GROUP*
 •${prefix}welcome
 •${prefix}setwelcome
 •${prefix}delwelcome
 •${prefix}left
 •${prefix}setleft
 •${prefix}delleft

*Bot Creator By ©Xeon`
}

exports.menus = menus
