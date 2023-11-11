class App{
    constructor(){
        console.log('App works');
        this.$form = document.querySelector('#form');
        this.$noteTitle = document.querySelector('#note-title');
        this.$formButtons = document.querySelector('#form-buttons');
        
        
        this.addEventListeners();
    }

    addEventListeners(){
        document.addEventListener('click', event=>{
            this.handleFormClick(event)
        })
    }
    handleFormClick(event){
        const isFormClicked = this.$form.contains(event.target); 
        if(isFormClicked){
            this.openForm()
        }else{
            this.closeForm()
        }
    }

    openForm(){
        this.$form.classList.add('form-open');
        this.$formButtons.style.display='block';
        this.$noteTitle.style.display= 'block';
    }

    closeForm(){
        this.$form.classList.remove('form-open');
        this.$formButtons.style.display='none';
        this.$noteTitle.style.display= 'none';
    }
    
    
}
        

new App()