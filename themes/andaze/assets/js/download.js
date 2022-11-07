'use strict'
    {
        console.log('download!')
        const target = document.querySelector('.multi-download');
        target.addEventListener('click', downloadFiles);
    
        // 一括画像ダウンロード
        function downloadFiles(){
            downloadFile('Generic.CRM.2023.1.pdf');
            downloadFile('PaaS.2022.pdf');
        }
        
        // 画像ダウンロード
        function downloadFile(fileName){
            // ファイル情報
            const url = '../pdf/' + fileName;;
        
            // IE用
            if(window.navigator.msSaveOrOpenBlob){
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.responseType = 'blob';
            xhr.onload = function(){
                if(xhr.status !== 200){
                return false;
                }
                window.navigator.msSaveOrOpenBlob(xhr.response, fileName);
            }
            xhr.send();
            }else{ // Chromeなど
            let link = document.createElement('a');
            link.href= url;
            link.download = fileName;
        
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            }
        }
    }
    
