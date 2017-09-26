import $ from 'jquery';

class TabContent{
    constructor(){
        this.events();
    }
    
    events(){
       
        $('.nav-tab div').on('click',this.showActiveTab);
    }
    
    showActiveTab(){
        var $that = $(this);
        var tab_id = $that.attr('data-tab');
        
        $('.nav-tab div').removeClass('nav-tab__link--current');
        $('.nav-tab__content').removeClass('nav-tab__current-tab');
            
        $that.addClass('nav-tab__link--current');
        $('#'+tab_id).addClass('nav-tab__current-tab');
    }
}

export default TabContent;