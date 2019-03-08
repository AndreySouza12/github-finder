class GitHub{
  constructor(){
      this.client_id = 'e4b1e44f192180adf139';
      this.cliente_secret = '5bd885c280015012f1f6d8cf4fc93b095a190844';
      this.repos_count = 5;
      this.repos_sort = 'created_at:asc';
  }


  async  getUser(user){
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.cliente_secret}`);
      const profile =  await profileResponse.json();


    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.cliente_secret}`);
    const repos = await repoResponse.json();

      return {
          profile,
          repos
      }
  }




}
