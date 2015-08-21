(function() {
  'use strict';

var app = angular.module('application', [
    'ui.router',
    'angular-loading-bar',
    'ngAnimate',
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations',
    'angularSlideables',
    'monospaced.elastic',
    'slick',
    '720kb.tooltips',
    'treeControl'
//    'easypiechart'
//    'xeditable'
//    'angularFileUpload'
//    'datePicker'
  ])
    .config(config)
    .run(run)
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider'];

//  angular.module('app', ['treeControl']);

//my controllers*****************************************

app.controller( 'flipCtrl', ['$scope', function($scope) {
    $scope.isFlipped = false;
//    $scope.hideAttr = false;
}]);

app.controller( 'TimeCtrl', ['$scope', function($scope) {
    $scope.date = new Date();
}]);

app.controller( 'textCtrl', ['$scope', function($scope) {
    $scope.text = "Ложная цитата нивелирует диалектический характер, но известны случаи прочитывания содержания приведённого отрывка иначе. Лирический субъект, как бы это ни казалось парадоксальным, отражает контрапункт. Эпическая медлительность вероятна. Речевой акт, по определению интегрирует символ. Ю.Лотман, не дав ответа, тут же запутывается в проблеме превращения не-текста в текст, поэтому нет смысла утверждать, что аллегория последовательно отражает диссонансный реципиент. Мифопоэтический хронотоп, несмотря на внешние воздействия, однородно отражает верлибр.";
}]);


app.controller('TabController', function () {
        this.tab = 1;

        this.setTab = function (tabId) {
            this.tab = tabId;
        };

        this.isSet = function (tabId) {
            return this.tab === tabId;
        };
    });

app.controller('TestBarCtrl', function($scope, $http, $timeout, cfpLoadingBar) {
    $scope.start = function() {
      cfpLoadingBar.start();
    };

    $scope.complete = function () {
      cfpLoadingBar.complete();
    };
});

app.controller('chartCtrl', ['$scope', function ($scope) {
//        $scope.percent = ;
        $scope.options = {
            animate:{
                duration:2000,
                enabled:true
            },
            barColor:'#2C3E50',
            scaleColor:'#cecece',
            lineWidth:5,
            lineCap:'circle'
        };
    }]);


app.controller('ManCtrl', ['$scope', function($scope){
//        $scope.orderByField = 'name';
//        $scope.reverseSort = false;
        $scope.mans = [
            {
            'name' : 'Волков А.',
            'deadline' : '09.10.2014 7:15',
            'duration' : '2 дня',
            'desc' : '',
            'name1' : 'Петров Г.'
            },
            {
            'name' : 'Смирнов В',
            'deadline' : '09.10.2014 7:15',
            'duration' : '2 дня',
            'desc' : '',
            'name1' : 'Петров Г.'
            },

            {
            'name' : 'Пуцин С.',
            'deadline' : '09.10.2014 7:15',
            'duration' : '2 дня',
            'desc' : '',
            'name1' : 'Петров Г.'
            }
        ];
  }]);

 app.controller('DocCtrl', ['$scope', function($scope){
        $scope.orderByField = 'state';
        $scope.reverseSort = false;
        $scope.docs = [
            {
            'name' : 'Волков А.',
            'state' : 'Подготовка',
            'created' : '09.10.2014 7:15',
            'modified' : '09.10.2014 7:20',
            'registeredBy' : 'Петров Г.',
            'number' : 'Вх-3',
            'title' : 'Извещение о выселении и многое многое другое в длинном названии'
            },
            {
            'name' : 'Пуцин С.',
            'state' : 'Регистрация',
            'created' : '10.10.2014 7:15',
            'modified' : '10.10.2014 7:20',
            'registeredBy' : 'Петров Г.',
            'number' : 'Вх-2',
            'title' : 'Приказ о выпуске продукта'
            },
            {
            'name' : 'Смирнов В.',
            'state' : 'В работе',
            'created' : '11.10.2014 7:15',
            'modified' : '11.10.2014 7:20',
            'registeredBy' : 'Петров Г.',
            'number' : 'Вх-1',
            'title' : 'Письмо из исполкома'
            },
            {
            'name' : 'Смирнов В.',
            'state' : 'Завершено',
            'created' : '12.10.2014 7:15',
            'modified' : '12.10.2014 7:20',
            'registeredBy' : 'Петров Г.',
            'number' : 'Вх-4',
            'title' : 'Ознакомьтесь с презентацией'
            },
            {
            'name' : 'Гордеева С.',
            'state' : 'Подготовка',
            'created' : '14.10.2014 7:15',
            'modified' : '14.10.2014 7:20',
            'registeredBy' : 'Петров Г.',
            'number' : 'Вх-5',
            'title' : 'Письмо для генерального'
            }

        ];
  }]);

app.controller('TaskCtrl', ['$scope', function($scope){
        $scope.class = "read";
        $scope.changeClass = function(){
        if ($scope.class === "read")
            $scope.class = "unread";
         else
            $scope.class = "read";
        };
    
        $scope.orderByField = 'from';
        $scope.reverseSort = false;
        $scope.tasks = [
            {
            'from' : 'Волков А.',
            'to' : 'Волков А.',
            'state' : 'В работе',
            'created' : '09.10.2014 7:15',
            'deadline' : '09.10.2014 7:20',
            'title' : 'Извещение о выселении'
            },
            {
            'from' : 'Пуцин С.',
            'to' : 'Волков А.',
            'state' : 'На контроле',
            'created' : '10.10.2014 7:15',
            'deadline' : '10.10.2014 7:20',
            'title' : 'Приказ о выпуске продукта'
            },
            {
            'from' : 'Смирнов В.',
            'to' : 'Волков А.',
            'state' : 'В работе',
            'created' : '11.10.2014 7:15',
            'deadline' : '11.10.2014 7:20',
            'title' : 'Письмо из исполкома'
            },
            {
            'from' : 'Смирнов В.',
            'to' : 'Волков А.',
            'state' : 'Завершено',
            'created' : '12.10.2014 7:15',
            'deadline' : '12.10.2014 7:20',
            'title' : 'Ознакомьтесь с приказом'
            },
            {
            'from' : 'Гордеева С.',
            'to' : 'Волков А.',
            'state' : 'Завершено',
            'created' : '14.10.2014 7:15',
            'deadline' : '14.10.2014 7:20',
            'title' : 'Письмо для генерального'
            }

        ];
  }]);

app.directive('slideToggle', function() {
  return {
    restrict: 'A',
    scope:{
      isOpen: "=slideToggle" // 'data-slide-toggle' in our html
    },
    link: function(scope, element, attr) {
      var slideDuration = parseInt(attr.slideToggleDuration, 10) || 200;

      // Watch for when the value bound to isOpen changes
      // When it changes trigger a slideToggle
      scope.$watch('isOpen', function(newIsOpenVal, oldIsOpenVal){
        if(newIsOpenVal !== oldIsOpenVal){
          element.stop().slideToggle(slideDuration);
        }
      });

    }
  };
});



app.controller('FileCtrl', ['$scope', function($scope){
        $scope.orderByField = 'img';
        $scope.reverseSort = false;
        $scope.files = [
            {
            'name' : 'Исходящее письмо.doc',
            'type' : 'v.1.1',
            'created' : '09.10.2014 7:20',
            'modified' : '09.10.2014 7:20',
            'number' : 'Вх-4',
            'img' : '../../img/mainfile.png'
            },
            {
            'name' : 'Примечания.txt',
            'type' : '',
            'created' : '09.10.2014 7:15',
            'modified' : '09.10.2014 7:20',
            'number' : 'Вх-3'
            },
            {
            'name' : 'Приказ о выселении',
            'type' : '',
            'created' : '09.10.2014 7:15',
            'modified' : '09.10.2014 7:20',
            'number' : 'Вх-5'
            }

        ];
  }]);
    

app.controller('linkCtrl', ['$scope', function($scope){
        $scope.orderByField = 'img';
        $scope.reverseSort = false;
        $scope.files = [
            {
            'name' : 'Согласование договора',
            'type' : 'Связанная карточка',
            'created' : '09.10.2014 7:20',
            'modified' : '09.10.2014 7:20',
            'number' : 'Вх-4',
            'img' : '../../img/dv.png'
            },
            {
            'name' : 'www.google.com',
            'type' : 'URL',
            'created' : '09.10.2014 7:15',
            'modified' : '09.10.2014 7:20',
            'number' : '',
            'img' : '../../img/url.png'
            }
        ];
  }]);


// tree controller

app.controller('TreeCtrl', function ($scope){
    $scope.treeOptions = {
    nodeChildren: "children",
    dirSelectable: true
//    injectClasses: {
//        ul: "a1",
//        li: "a2",
//        liSelected: "a7",
//        iExpanded: "a3",
//        iCollapsed: "a4",
//        iLeaf: "a5",
//        label: "a6",
//        labelSelected: "a8"
//    }
}
$scope.dataForTheTree =
[
    { "name" : "Задания УД", "children" : [
        { "name" : "Задание на исполнение", "children" : [] },
        { "name" : "Задание на согласование", "children" : [
            { "name" : "Простое согласование", "children" : [
                { "name" : "Последовательный маршрут", "children" : [] },
                { "name" : "Параллельный маршрут", "children" : [] }
            ]}
        ]},
        { "name": "Еще какое-то задание"},
        { "name": "Задание на контроль"},
        { "name": "Задание для проверки"}
    ]},
    { "name" : "Задания Доксвижн", "children" : [
         { "name" : "Задание на исполнение1", "children" : [] },
        { "name" : "Задание на согласование1", "children" : [
            { "name" : "Простое согласование1", "children" : [
                { "name" : "Последовательный маршрут1", "children" : [] },
                { "name" : "Параллельный маршрут1", "children" : [] }
            ]}
        ]},
        { "name": "Еще какое-то задание1"},
        { "name": "Задание на контроль1"},
        { "name": "Задание для проверки1"}
    ] },
    { "name" : "Другие Задания", "children" : [
         { "name" : "Задание на исполнение2", "children" : [] },
        { "name" : "Задание на согласование2", "children" : [
            { "name" : "Простое согласование2", "children" : [
                { "name" : "Последовательный маршрут2", "children" : [] },
                { "name" : "Параллельный маршрут2", "children" : [] }
            ]}
        ]},
        { "name": "Еще какое-то задание2"},
        { "name": "Задание на контроль2"},
        { "name": "Задание для проверки2"}
    ] }
];
});
    
    
    
    
    
    
    
    


//end of my controllers ****************************
  function config($urlProvider, $locationProvider) {
    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled:false,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  }

  function run() {
    FastClick.attach(document.body);
  }

    var DemoCtrl = function(){
    alert('hello workld');
}

})();

//responsive tables *************************

$(document).ready(function() {
  var switched = false;
  var updateTables = function() {
    if (($(window).width() < 767) && !switched ){
      switched = true;
      $("table.responsive").each(function(i, element) {
        splitTable($(element));
      });
      return true;
    }
    else if (switched && ($(window).width() > 767)) {
      switched = false;
      $("table.responsive").each(function(i, element) {
        unsplitTable($(element));
      });
    }
  };
   
  $(window).load(updateTables);
  $(window).on("redraw",function(){switched=false;updateTables();}); // An event to listen for
  $(window).on("resize", updateTables);
   
	
	function splitTable(original)
	{
		original.wrap("<div class='table-wrapper' />");
		
		var copy = original.clone();
		copy.find("td:not(:first-child), th:not(:first-child)").css("display", "none");
		copy.removeClass("responsive");
		
		original.closest(".table-wrapper").append(copy);
		copy.wrap("<div class='pinned' />");
		original.wrap("<div class='scrollable' />");

    setCellHeights(original, copy);
	}
	
	function unsplitTable(original) {
    original.closest(".table-wrapper").find(".pinned").remove();
    original.unwrap();
    original.unwrap();
	}

  function setCellHeights(original, copy) {
    var tr = original.find('tr'),
        tr_copy = copy.find('tr'),
        heights = [];

    tr.each(function (index) {
      var self = $(this),
          tx = self.find('th, td');

      tx.each(function () {
        var height = $(this).outerHeight(true);
        heights[index] = heights[index] || 0;
        if (height > heights[index]) heights[index] = height;
      });

    });

    tr_copy.each(function (index) {
      $(this).height(heights[index]);
    });
  }

});










//slideable **************************************

angular.module('angularSlideables', [])
    .directive('slideable', function () {
    return {
        restrict:'C',
        compile: function (element, attr) {
            // wrap tag
            var contents = element.html();
            element.html('<div class="slideable_content" style="margin:0 !important; padding:0 !important" >' + contents + '</div>');

            return function postLink(scope, element, attrs) {
                // default properties
                attrs.duration = (!attrs.duration) ? '300ms' : attrs.duration;
                attrs.easing = (!attrs.easing) ? 'ease-in-out' : attrs.easing;
                element.css({
                    'overflow': 'hidden',
                    'height': '0px',
                    'transitionProperty': 'height',
                    'transitionDuration': attrs.duration,
                    'transitionTimingFunction': attrs.easing
                });
            };
        }
    };
})
.directive('slideToggle', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var target = document.querySelector(attrs.slideToggle);
            attrs.expanded = false;
            element.bind('click', function() {
                var content = target.querySelector('.slideable_content');
                if(!attrs.expanded) {
                    content.style.border = '1px solid rgba(0,0,0,0)';
                    var y = content.clientHeight;
                    content.style.border = 0;
                    target.style.height = y + 'px';
                } else {
                    target.style.height = '0px';
                }
                attrs.expanded = !attrs.expanded;
            });
        }
    }
});


//monospaced elastic ***************************
/*
 * angular-elastic v2.4.2
 * (c) 2014 Monospaced http://monospaced.com
 * License: MIT
 */





//angular-datepicker ****************************************
//get one from https://github.com/g00fy-/angular-datepicker







//}));


//xeditable ***********************************************************

//end xeditable

