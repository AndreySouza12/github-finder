//Search input
const http = new GitHub();
const ui = new UI();
const searchUser = document.querySelector('#searchUser');

searchUser.addEventListener('keyup',(e)=>{
    //get Input text
    const userText = e.target.value;

    if(userText !== ''){
       //Fazer chamada http   
        
        http.getUser(userText).then(data=>{
            if(data.profile.message === 'Not Found'){
                ui.showAlert('Usuário não encontrado','alert alert-danger');

               
            }else{
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        });

    
    }else{
        ui.clearProfile();
    }
});