const ok=['img/DSC_6729.JPG','img/DSC_6764.JPG','img/DSC_6934.JPG'];
let aj=+0;
    document.querySelector('body > main > img').addEventListener('click',()=>{
      console.log('Excellent gallery on JS a click flipping');
      aj++;
      document.querySelector('img').setAttribute('src',ok[aj]);
      if(aj===ok.length){
        aj=0;
        return document.querySelector('img').setAttribute('src',ok[aj]);
      }
    })
    ok.forEach(element=>console.log(element));
