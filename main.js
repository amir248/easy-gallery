const ok=['../blozhik/img/6680.JPG','../blozhik/img/DSC_6676.JPG','../blozhik/img/DSC_6677.JPG'];
let aj=+0;
    document.querySelector('body > main > img').addEventListener('click',()=>{
      console.log('ok');
      aj++;
      document.querySelector('img').setAttribute('src',ok[aj]);
      if(aj===ok.length){
        aj=0;
        return document.querySelector('img').setAttribute('src',ok[aj]);
      }
    })
    ok.forEach(element=>console.log(element));

    //OK