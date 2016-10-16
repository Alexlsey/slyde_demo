var model = [
        {
            id: 'apple_1',
            price: '200',
            name: 'IPhone 7',
            image: 'http://i2.rozetka.ua/promotions/502/502706.jpg',
            description: 'Some decription'
        },
        {
            id: 'xiaomi_mipad_64gb',
            price: '100',
            name: 'xiaomi mipad 64gb',
            image: 'http://i2.rozetka.ua/goods/1689627/xiaomi_mipad_64gb_white_images_1689627454.jpg',
            description: 'Some decription'
        }
    ]
    ;
var views = {
        initDom: function () {
            return this.mainDom = document.getElementById("containter");
        },
        show_product: function (p) {
            var elemPrice = document.createElement('span');
            var elemName = document.createElement('h1');
            var elemdescription = document.createElement('h1');
            var elemimage = document.createElement('img');
            var containterItem = document.createElement('div');
            elemPrice.innerHTML = p.price;
            elemName.innerHTML = p.name;
            elemdescription.innerHTML = p.description;
            elemimage.src = p.image;
            containterItem.appendChild(elemName);
            containterItem.appendChild(elemimage);
            containterItem.appendChild(elemdescription);
            containterItem.appendChild(elemPrice);
            return containterItem;
        }
        ,
        renderlist: function () {
            for (var i = 0; i < model.length; i++) {
                views.initDom().appendChild(this.show_product(model[i]));
            }

        }
    }
    ;
views.renderlist();
