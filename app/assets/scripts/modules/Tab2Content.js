import $ from 'jquery';

class Tab2Content{
    
    constructor(){
        this.events();
    }
    
    events(){
       
        $('.nav-tab2 div').on('click',this.showActiveTab);
    }
    
    showActiveTab(){
        var $that = $(this);
        var tab_id = $that.attr('data-tab2');
        
        $('.nav-tab2 div').removeClass('nav-tab2__link--current');
        $('.nav-tab2__content').removeClass('nav-tab2__current-tab');
            
        $that.addClass('nav-tab2__link--current');
        $('#'+tab_id).addClass('nav-tab2__current-tab');
    }
}

export default Tab2Content;