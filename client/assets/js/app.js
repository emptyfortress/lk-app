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
    '720kb.tooltips'
//    'easypiechart'
//    'xeditable'
//    'angularFileUpload'
//    'datePicker'
  ])
    .config(config)
    .run(run)
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider'];


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
        $scope.orderByField = 'from';
        $scope.reverseSort = false;
        $scope.tasks = [
            {
            'from' : 'Волков А.',
            'to' : 'Волков А.',
            'state' : 'В работе',
            'created' : '09.10.2014 7:15',
            'deadline' : '09.10.2014 7:20',
            'title' : 'Извещение о выселении и многое многое другое в длинном названии'
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
            'title' : 'Ознакомьтесь с презентацией'
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
        $scope.orderByField = 'type';
        $scope.reverseSort = false;
        $scope.files = [
            {
            'name' : 'dv-design.digdes.com',
            'type' : 'Ссылка',
            'created' : '09.10.2014 7:15',
            'modified' : '09.10.2014 7:20',
            'number' : 'Вх-3',
            'img' : '../../img/anchor.png'
            },
            {
            'name' : 'Исходящее письмо.doc',
            'type' : 'Документ',
            'created' : '09.10.2014 7:20',
            'modified' : '09.10.2014 7:20',
            'number' : 'Вх-4',
            'img' : '../../img/skrepka.png'
            },
            {
            'name' : 'Приказ о выселении',
            'type' : 'Связанная карточка',
            'created' : '09.10.2014 7:15',
            'modified' : '09.10.2014 7:20',
            'number' : 'Вх-5',
            'img' : '../../img/dv.png'
            }

        ];
  }]);






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





//pie chart ************************************
/**!
 * easyPieChart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.6
 **/

(function(root, factory) {
    if(typeof exports === 'object') {
        module.exports = factory(require('angular'));
    }
    else if(typeof define === 'function' && define.amd) {
        define(['angular'], factory);
    }
    else {
        factory(root.angular);
    }
}(this, function(angular) {

(function (angular) {

	'use strict';

	return angular.module('easypiechart', [])

		.directive('easypiechart', [function() {
			return {
				restrict: 'A',
				require: '?ngModel',
				scope: {
					percent: '=',
					options: '='
				},
				link: function (scope, element, attrs) {

					scope.percent = scope.percent || 0;

					/**
					 * default easy pie chart options
					 * @type {Object}
					 */
					var options = {
						barColor: '#ef1e25',
						trackColor: '#eaeaea',
						scaleColor: '#dfe0e0',
						scaleLength: 5,
						lineCap: 'round',
						lineWidth: 3,
						size: 100,
						rotate: 0,
						animate: {
							duration: 1000,
							enabled: true
						}
					};
					scope.options = angular.extend(options, scope.options);

					var pieChart = new EasyPieChart(element[0], options);

					scope.$watch('percent', function(newVal, oldVal) {
						pieChart.update(newVal);
					});
				}
			};
		}]);

})(angular);
/**
 * Renderer to render the chart on a canvas object
 * @param {DOMElement} el      DOM element to host the canvas (root of the plugin)
 * @param {object}     options options object of the plugin
 */
var CanvasRenderer = function(el, options) {
	var cachedBackground;
	var canvas = document.createElement('canvas');

	el.appendChild(canvas);

	if (typeof(G_vmlCanvasManager) !== 'undefined') {
		G_vmlCanvasManager.initElement(canvas);
	}

	var ctx = canvas.getContext('2d');

	canvas.width = canvas.height = options.size;

	// canvas on retina devices
	var scaleBy = 1;
	if (window.devicePixelRatio > 1) {
		scaleBy = window.devicePixelRatio;
		canvas.style.width = canvas.style.height = [options.size, 'px'].join('');
		canvas.width = canvas.height = options.size * scaleBy;
		ctx.scale(scaleBy, scaleBy);
	}

	// move 0,0 coordinates to the center
	ctx.translate(options.size / 2, options.size / 2);

	// rotate canvas -90deg
	ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI);

	var radius = (options.size - options.lineWidth) / 2;
	if (options.scaleColor && options.scaleLength) {
		radius -= options.scaleLength + 2; // 2 is the distance between scale and bar
	}

	// IE polyfill for Date
	Date.now = Date.now || function() {
		return +(new Date());
	};

	/**
	 * Draw a circle around the center of the canvas
	 * @param {strong} color     Valid CSS color string
	 * @param {number} lineWidth Width of the line in px
	 * @param {number} percent   Percentage to draw (float between -1 and 1)
	 */
	var drawCircle = function(color, lineWidth, percent) {
		percent = Math.min(Math.max(-1, percent || 0), 1);
		var isNegative = percent <= 0 ? true : false;

		ctx.beginPath();
		ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, isNegative);

		ctx.strokeStyle = color;
		ctx.lineWidth = lineWidth;

		ctx.stroke();
	};

	/**
	 * Draw the scale of the chart
	 */
	var drawScale = function() {
		var offset;
		var length;

		ctx.lineWidth = 1;
		ctx.fillStyle = options.scaleColor;

		ctx.save();
		for (var i = 24; i > 0; --i) {
			if (i % 6 === 0) {
				length = options.scaleLength;
				offset = 0;
			} else {
				length = options.scaleLength * 0.6;
				offset = options.scaleLength - length;
			}
			ctx.fillRect(-options.size/2 + offset, 0, length, 1);
			ctx.rotate(Math.PI / 12);
		}
		ctx.restore();
	};

	/**
	 * Request animation frame wrapper with polyfill
	 * @return {function} Request animation frame method or timeout fallback
	 */
	var reqAnimationFrame = (function() {
		return  window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				function(callback) {
					window.setTimeout(callback, 1000 / 60);
				};
	}());

	/**
	 * Draw the background of the plugin including the scale and the track
	 */
	var drawBackground = function() {
		if(options.scaleColor) drawScale();
		if(options.trackColor) drawCircle(options.trackColor, options.trackWidth || options.lineWidth, 1);
	};

  /**
    * Canvas accessor
   */
  this.getCanvas = function() {
    return canvas;
  };

  /**
    * Canvas 2D context 'ctx' accessor
   */
  this.getCtx = function() {
    return ctx;
  };

	/**
	 * Clear the complete canvas
	 */
	this.clear = function() {
		ctx.clearRect(options.size / -2, options.size / -2, options.size, options.size);
	};

	/**
	 * Draw the complete chart
	 * @param {number} percent Percent shown by the chart between -100 and 100
	 */
	this.draw = function(percent) {
		// do we need to render a background
		if (!!options.scaleColor || !!options.trackColor) {
			// getImageData and putImageData are supported
			if (ctx.getImageData && ctx.putImageData) {
				if (!cachedBackground) {
					drawBackground();
					cachedBackground = ctx.getImageData(0, 0, options.size * scaleBy, options.size * scaleBy);
				} else {
					ctx.putImageData(cachedBackground, 0, 0);
				}
			} else {
				this.clear();
				drawBackground();
			}
		} else {
			this.clear();
		}

		ctx.lineCap = options.lineCap;

		// if barcolor is a function execute it and pass the percent as a value
		var color;
		if (typeof(options.barColor) === 'function') {
			color = options.barColor(percent);
		} else {
			color = options.barColor;
		}

		// draw bar
		drawCircle(color, options.lineWidth, percent / 100);
	}.bind(this);

	/**
	 * Animate from some percent to some other percentage
	 * @param {number} from Starting percentage
	 * @param {number} to   Final percentage
	 */
	this.animate = function(from, to) {
		var startTime = Date.now();
		options.onStart(from, to);
		var animation = function() {
			var process = Math.min(Date.now() - startTime, options.animate.duration);
			var currentValue = options.easing(this, process, from, to - from, options.animate.duration);
			this.draw(currentValue);
			options.onStep(from, to, currentValue);
			if (process >= options.animate.duration) {
				options.onStop(from, to);
			} else {
				reqAnimationFrame(animation);
			}
		}.bind(this);

		reqAnimationFrame(animation);
	}.bind(this);
};

var EasyPieChart = function(el, opts) {
	var defaultOptions = {
		barColor: '#ef1e25',
		trackColor: '#e3e3e3',
		scaleColor: '#dfe0e0',
		scaleLength: 5,
		lineCap: 'round',
		lineWidth: 3,
		trackWidth: undefined,
		size: 110,
		rotate: 0,
		animate: {
			duration: 1000,
			enabled: true
		},
		easing: function (x, t, b, c, d) { // more can be found here: http://gsgd.co.uk/sandbox/jquery/easing/
			t = t / (d/2);
			if (t < 1) {
				return c / 2 * t * t + b;
			}
			return -c/2 * ((--t)*(t-2) - 1) + b;
		},
		onStart: function(from, to) {
			return;
		},
		onStep: function(from, to, currentValue) {
			return;
		},
		onStop: function(from, to) {
			return;
		}
	};

	// detect present renderer
	if (typeof(CanvasRenderer) !== 'undefined') {
		defaultOptions.renderer = CanvasRenderer;
	} else if (typeof(SVGRenderer) !== 'undefined') {
		defaultOptions.renderer = SVGRenderer;
	} else {
		throw new Error('Please load either the SVG- or the CanvasRenderer');
	}

	var options = {};
	var currentValue = 0;

	/**
	 * Initialize the plugin by creating the options object and initialize rendering
	 */
	var init = function() {
		this.el = el;
		this.options = options;

		// merge user options into default options
		for (var i in defaultOptions) {
			if (defaultOptions.hasOwnProperty(i)) {
				options[i] = opts && typeof(opts[i]) !== 'undefined' ? opts[i] : defaultOptions[i];
				if (typeof(options[i]) === 'function') {
					options[i] = options[i].bind(this);
				}
			}
		}

		// check for jQuery easing
		if (typeof(options.easing) === 'string' && typeof(jQuery) !== 'undefined' && jQuery.isFunction(jQuery.easing[options.easing])) {
			options.easing = jQuery.easing[options.easing];
		} else {
			options.easing = defaultOptions.easing;
		}

		// process earlier animate option to avoid bc breaks
		if (typeof(options.animate) === 'number') {
			options.animate = {
				duration: options.animate,
				enabled: true
			};
		}

		if (typeof(options.animate) === 'boolean' && !options.animate) {
			options.animate = {
				duration: 1000,
				enabled: options.animate
			};
		}

		// create renderer
		this.renderer = new options.renderer(el, options);

		// initial draw
		this.renderer.draw(currentValue);

		// initial update
		if (el.dataset && el.dataset.percent) {
			this.update(parseFloat(el.dataset.percent));
		} else if (el.getAttribute && el.getAttribute('data-percent')) {
			this.update(parseFloat(el.getAttribute('data-percent')));
		}
	}.bind(this);

	/**
	 * Update the value of the chart
	 * @param  {number} newValue Number between 0 and 100
	 * @return {object}          Instance of the plugin for method chaining
	 */
	this.update = function(newValue) {
		newValue = parseFloat(newValue);
		if (options.animate.enabled) {
			this.renderer.animate(currentValue, newValue);
		} else {
			this.renderer.draw(newValue);
		}
		currentValue = newValue;
		return this;
	}.bind(this);

	/**
	 * Disable animation
	 * @return {object} Instance of the plugin for method chaining
	 */
	this.disableAnimation = function() {
		options.animate.enabled = false;
		return this;
	};

	/**
	 * Enable animation
	 * @return {object} Instance of the plugin for method chaining
	 */
	this.enableAnimation = function() {
		options.animate.enabled = true;
		return this;
	};

	init();
};


}));


//xeditable ***********************************************************

//end xeditable

