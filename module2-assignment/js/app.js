(function (){
'use strict';
    
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
        var toBuy = this;
        toBuy.toBuyItems = ShoppingListCheckOffService.getToBuyItem();
        toBuy.itemBought = function(index){
            ShoppingListCheckOffService.itemBought(index);
        }
    };
    
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var alreadyBought = this;
        alreadyBought.boughtItems = ShoppingListCheckOffService.getBoughtItems();
    };
    
    function ShoppingListCheckOffService (){
        var service = this;
        
        //list of items to buy
        var toBuyItems = [
            {
                name: 'cookies',
                quantity: '10'
            },
            {
                name: 'chocolates',
                quantity: '20'
            },
            {
                name: 'biscuits',
                quantity: '30'
            },
            {
                name: 'chips',
                quantity: '40'
            },
            {
                name: 'apples',
                quantity: '50'
            }
        ];
        //list of items bought
        var boughtItems = [];
        
        service.itemBought = function(index){
            var itemBought = toBuyItems[index];
            //remove from tobuy array
            toBuyItems.splice(index, 1);
            
            //add to the bought list
            boughtItems.push(itemBought);
        };
        
        service.getToBuyItem = function(){
            return toBuyItems;
        }
        service.getBoughtItems = function(){
            return boughtItems;
        };
    };
    
})();
