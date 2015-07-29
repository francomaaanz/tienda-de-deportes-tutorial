angular.module("cart", [])
.factory("cart", function () {
	var cartData = [];

	return {
		addProduct: function (id, name, price) {
			var addedExistingProduct = false;
			for (var i = 0; i < cartData.lenght; i++) {
				if(cartData[i].id == id) {
					cartData[i].count++;
					addedExistingProduct = true;
					break;
				}	
			}
			if (!addedExistingProduct) {
				cartData.push( { count: 1, id: id, price: price, name: name } );
			}
		},
		removeProduct: function (id){
			for (var i = 0; i < cartData.lenght; i++) {
				if (cartData[i].id == id) {
					cartData.splice(i, 1);
					break
				}
			}
		},
		getProducts: function () {
			return cartData;
		}
	};
})
.directive("cartSummary", function (cart) {
	return {
		restrict: "E",
		templateUrl: "components/cart/cartSummary.html",
		controller: function ($scope) {
			
			var cartData = cart.getProducts();
			
			$scope.total = function () {
				var total = 0;
				for (var i = 0; i < cartData.length; i++) {
					//total +=  (cartData[i].price * cartData[i].count) ;
					total += cartData[i].price;
				}
				return total;
			}
		
			$scope.itemCount = function () {
				var total = 0;
				for (var i = 0; i < cartData.length; i++) {
					total += cartData[i].count;
				}
				return total;
			}
		}
	};	
});