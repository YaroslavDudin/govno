
document.addEventListener('DOMContentLoaded', () => {

});
let today = new Date() 
                        let dd = String(today.getDate()).padStart(2, '0');
                        let mm = String(today.getMonth() + 1).padStart(2, '0');
                        let yyyy = today.getFullYear();
                        today = `${dd}/${mm}/${yyyy}`
                        let a = document.write(today);
                
                      