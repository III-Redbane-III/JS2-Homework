const getRequest = (url, cb) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a) {
                resolve(a + 10);
            } else {
                reject('Error!');
            }
        }, 1000);
    });
}





const getRequest = (url) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4){
                if(xhr.status !== 200){
                    reject("ERROR!");
                } else {
                    resolve(xhr.responseText);
                }
            }
        };
        xhr.send();
    })
};




let getRequest = (url, cb) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status !== 200) {
          console.log('Error');
        } else {
          cb(xhr.responseText);
        }
      }
    };
    xhr.send();
  };