angular.module("itemList",[])
.constant("itemListActiveClass","btn-primary")
.constant("itemListPageCount",9)
.controller("itemListCtrl", function ($scope, $filter, itemListActiveClass,
	itemListPageCount) {
	
	$scope.items = [
	{ url: "http://www.quora.com/AngularJS", image:"/images/items/barbie_1.jpg" , title:"Check it out, awsome!", description:"Title goes here. Aliquam tincidunt diam varius ultricies auctor. Vivamus faucibus risus tempus, adipiscing justo"},
	{ url: "http://www.quora.com/AngularJS", image:"/images/items/barbie_1.jpg" , title:"Check it out, awsome!", description:"Title goes here. Aliquam tincidunt diam varius ultricies auctor. Vivamus faucibus risus tempus, adipiscing justo"},
	{ url: "http://www.quora.com/AngularJS", image:"/images/items/barbie_1.jpg" , title:"Check it out, awsome!", description:"Title goes here. Aliquam tincidunt diam varius ultricies auctor. Vivamus faucibus risus tempus, adipiscing justo"},
	{ url: "http://www.quora.com/AngularJS", image:"/images/items/barbie_1.jpg" , title:"Check it out, awsome!", description:"Title goes here. Aliquam tincidunt diam varius ultricies auctor. Vivamus faucibus risus tempus, adipiscing justo"},
	{ url: "http://www.quora.com/AngularJS", image:"/images/items/barbie_1.jpg" , title:"Check it out, awsome!", description:"Title goes here. Aliquam tincidunt diam varius ultricies auctor. Vivamus faucibus risus tempus, adipiscing justo"},
	{ url: "http://www.quora.com/AngularJS", image:"/images/items/barbie_1.jpg" , title:"Check it out, awsome!", description:"Title goes here. Aliquam tincidunt diam varius ultricies auctor. Vivamus faucibus risus tempus, adipiscing justo"},
	{ url: "http://www.quora.com/AngularJS", image:"/images/items/barbie_1.jpg" , title:"Check it out, awsome!", description:"Title goes here. Aliquam tincidunt diam varius ultricies auctor. Vivamus faucibus risus tempus, adipiscing justo"},
	{ url: "http://www.quora.com/AngularJS", image:"/images/items/barbie_1.jpg" , title:"Check it out, awsome!", description:"Title goes here. Aliquam tincidunt diam varius ultricies auctor. Vivamus faucibus risus tempus, adipiscing justo"},
	{ url: "http://www.quora.com/AngularJS", image:"/images/items/barbie_1.jpg" , title:"Check it out, awsome!", description:"Title goes here. Aliquam tincidunt diam varius ultricies auctor. Vivamus faucibus risus tempus, adipiscing justo"},
	{ url: "http://www.quora.com/AngularJS", image:"/images/items/barbie_1.jpg" , title:"Check it out, awsome!", description:"Title goes here. Aliquam tincidunt diam varius ultricies auctor. Vivamus faucibus risus tempus, adipiscing justo"},
	{ url: "http://www.quora.com/AngularJS", image:"/images/items/barbie_1.jpg" , title:"Check it out, awsome!", description:"Title goes here. Aliquam tincidunt diam varius ultricies auctor. Vivamus faucibus risus tempus, adipiscing justo"},
	{ url: "http://www.quora.com/AngularJS", image:"/images/items/barbie_1.jpg" , title:"Check it out, awsome!", description:"Title goes here. Aliquam tincidunt diam varius ultricies auctor. Vivamus faucibus risus tempus, adipiscing justo"},
	{ url: "http://www.quora.com/AngularJS", image:"/images/items/barbie_1.jpg" , title:"Check it out, awsome!", description:"Title goes here. Aliquam tincidunt diam varius ultricies auctor. Vivamus faucibus risus tempus, adipiscing justo"},
	{ url: "http://www.quora.com/AngularJS", image:"/images/items/barbie_1.jpg" , title:"Check it out, awsome!", description:"Title goes here. Aliquam tincidunt diam varius ultricies auctor. Vivamus faucibus risus tempus, adipiscing justo"},
	{ url: "http://www.quora.com/AngularJS", image:"/images/items/barbie_1.jpg" , title:"Check it out, awsome!", description:"Title goes here. Aliquam tincidunt diam varius ultricies auctor. Vivamus faucibus risus tempus, adipiscing justo"},
	{ url: "http://www.quora.com/AngularJS", image:"/images/items/barbie_1.jpg" , title:"Check it out, awsome!", description:"Title goes here. Aliquam tincidunt diam varius ultricies auctor. Vivamus faucibus risus tempus, adipiscing justo"},
	{ url: "http://www.quora.com/AngularJS", image:"/images/items/barbie_1.jpg" , title:"Check it out, awsome!", description:"Title goes here. Aliquam tincidunt diam varius ultricies auctor. Vivamus faucibus risus tempus, adipiscing justo"},
	{ url: "http://www.quora.com/AngularJS", image:"/images/items/barbie_1.jpg" , title:"Check it out, awsome!", description:"Title goes here. Aliquam tincidunt diam varius ultricies auctor. Vivamus faucibus risus tempus, adipiscing justo"},
	{ url: "http://www.quora.com/AngularJS", image:"/images/items/barbie_1.jpg" , title:"Check it out, awsome!", description:"Title goes here. Aliquam tincidunt diam varius ultricies auctor. Vivamus faucibus risus tempus, adipiscing justo"},
	{ url: "http://www.quora.com/AngularJS", image:"/images/items/barbie_1.jpg" , title:"Check it out, awsome!", description:"Title goes here. Aliquam tincidunt diam varius ultricies auctor. Vivamus faucibus risus tempus, adipiscing justo"},
	{ url: "http://www.quora.com/AngularJS", image:"/images/items/barbie_1.jpg" , title:"Check it out, awsome!", description:"Title goes here. Aliquam tincidunt diam varius ultricies auctor. Vivamus faucibus risus tempus, adipiscing justo"},
	{ url: "http://www.quora.com/AngularJS", image:"/images/items/barbie_1.jpg" , title:"Check it out, awsome!", description:"Title goes here. Aliquam tincidunt diam varius ultricies auctor. Vivamus faucibus risus tempus, adipiscing justo"},
	{ url: "http://www.quora.com/AngularJS", image:"/images/items/barbie_1.jpg" , title:"Check it out, awsome!", description:"Title goes here. Aliquam tincidunt diam varius ultricies auctor. Vivamus faucibus risus tempus, adipiscing justo"},
	{ url: "http://www.quora.com/AngularJS", image:"/images/items/barbie_1.jpg" , title:"Check it out, awsome!", description:"Title goes here. Aliquam tincidunt diam varius ultricies auctor. Vivamus faucibus risus tempus, adipiscing justo"},
	{ url: "http://www.quora.com/AngularJS", image:"/images/items/barbie_1.jpg" , title:"Check it out, awsome!", description:"Title goes here. Aliquam tincidunt diam varius ultricies auctor. Vivamus faucibus risus tempus, adipiscing justo"},
	{ url: "http://www.quora.com/AngularJS", image:"/images/items/barbie_1.jpg" , title:"Check it out, awsome!", description:"Title goes here. Aliquam tincidunt diam varius ultricies auctor. Vivamus faucibus risus tempus, adipiscing justo"},
	{ url: "http://www.quora.com/AngularJS", image:"/images/items/barbie_1.jpg" , title:"Check it out, awsome!", description:"Title goes here. Aliquam tincidunt diam varius ultricies auctor. Vivamus faucibus risus tempus, adipiscing justo"},
	{ url: "http://www.quora.com/AngularJS", image:"/images/items/barbie_1.jpg" , title:"Check it out, awsome!", description:"Title goes here. Aliquam tincidunt diam varius ultricies auctor. Vivamus faucibus risus tempus, adipiscing justo"},
	{ url: "http://www.quora.com/AngularJS", image:"/images/items/barbie_1.jpg" , title:"Check it out, awsome!", description:"Title goes here. Aliquam tincidunt diam varius ultricies auctor. Vivamus faucibus risus tempus, adipiscing justo"},
	{ url: "http://www.quora.com/AngularJS", image:"/images/items/barbie_1.jpg" , title:"Check it out, awsome!", description:"Title goes here. Aliquam tincidunt diam varius ultricies auctor. Vivamus faucibus risus tempus, adipiscing justo"}

	];

	$scope.infor = {
		selectedCategory : null
	};

	$scope.pageSize = itemListPageCount;

	$scope.selectCategory = function (newCategory) {
		$scope.infor.selectedCategory = newCategory;
		//console.log("In itemListCtrl, newCategory:" + newCategory);
	}

	$scope.getSelectedCategory = function () {
		return $scope.infor.selectedCategory;
	}

	$scope.selectPage = function (newPage) {
		$scope.selectedPage = newPage;
	}

	$scope.categoryFilterFn = function (item) {
		return $scope.infor.selectedCategory == null || item.category == $scope.infor.selectedCategory;
	}

	$scope.getCategoryClass = function (category) {
		//console.log("category:" + category + ", selectedCategory: " + $scope.infor.selectedCategory);
		return $scope.infor.selectedCategory == category ? itemListActiveClass : "";
	}

	$scope.getSelectedPageClass = function () {
		return itemListActiveClass;
	}

	$scope.getExpiryDate = function (days) {
		var now = new Date();
		return now.setDate(now.getDate() + days);
	}
});