var rellax = new Rellax('.rellax');

document.addEventListener("DOMContentLoaded", function(event) {

	window.addEventListener('load', function(e) {
		document.body.style.display = "block";
		document.body.style.opacity = '1';
        // document.body.style.backgroundColor = "#000"
        
		var tl = new TimelineMax();


		tl.staggerFrom('.left-bg', 2, {
			opacity: 1,
			y: -500,
			ease: Power2.easeOut
		}, 0.2)
		tl.staggerFrom('.right-bg', 1.5, {
			opacity: 1,
			// y: 100,
			x: 400,
			ease: Power2.easeOut
		}, 0.2,"-=2")

        tl.staggerFrom('.header',2,{
            opacity: 0,
            y: -50,
            ease: Power2.easeInOut
        }, 0.2,"-=1.5")
		tl.staggerFrom('.vertical', 3, {
			opacity: 0,
			x: -50,
			ease: Power2.easeInOut
        }, 0.2,"-=3")
        tl.staggerFrom('.V-letter', 3, {
			opacity: 0,
			x: 50,
			ease: Power2.easeInOut
		}, 0.2,"-=2")

		tl.staggerFrom('.central-logo', 1, {
			opacity: 0,
			y: -40,
			ease: Power2.easeInOut
        }, 0.2,"-=2.5")
        tl.staggerFrom('.learn-more-btn', 2, {
			opacity: 0,
			y: 50,
			ease: Power2.easeInOut
        }, 0.2,"-=3")
        tl.staggerFrom('.vertical-text', 1, {
			opacity: 0,
			y: -50,
			ease: Power2.easeInOut
        }, 0.2,"-=3")
        tl.staggerFrom('.share-icon', 2, {
			opacity: 0,
			y: 50,
			ease: Power2.easeInOut
        }, 0.2,"-=3")
        tl.staggerFrom('.scroll-down', 1.5, {
			opacity: 0,
			y: 50,
			ease: Power2.easeInOut
        }, 0.2,"-=2")
	},false);
})

var mobile = ($(window).width()<500)
var circleOne = document.getElementById('circle one')
var circleTwo = document.getElementById('circle two')
var circleThree = document.getElementById('circle three')
var circleFour = document.getElementById('circle four')

var furnitureLabel = document.getElementById('furniture-label')
var decoreLabel = document.getElementById('decore-label')
var centralLogo = document.getElementById("central-logo")
var dLetter = document.getElementById("D-letter")
var decoreHr = document.getElementById("decore-hr")

var videos = document.getElementById("videos")
var scroll;
var sidebarCounter = 0;

document.addEventListener("scroll", function() {
	scroll = window.scrollY;
	console.log(scroll)
	var counter = document.getElementById('counter');
	
	if ($(window).width() < 1900) {
	
	if (scroll <= 490) {var screen = 'top-block'}
	else if (scroll >= 490 && scroll <= 2380) {var screen = 'middle-block'}
	else if (scroll >= 2380 && scroll <= 3150) {var screen = 'third-block'}
	else if (scroll >= 3150) {var screen = 'fourth-block'}
	} else {
		
		if (scroll <= 650) {var screen = 'top-block'}
		else if (scroll >= 650 && scroll <= 2990) {var screen = 'middle-block'}
		else if (scroll >= 2990 && scroll <= 3909) {var screen = 'third-block'}
		else if (scroll >= 3909) {var screen = 'fourth-block'}

	}
	
	
	
	if (screen==='top-block') {counter.innerText = '01';
	circleOne.style.opacity = '1';
	circleTwo.style.opacity = '.3';
	circleThree.style.opacity = '.3';
	circleFour.style.opacity = '.3'
	centralLogo.style.opacity = `${(300-scroll)/300}`;
	}
	if (screen==='middle-block') {counter.innerText = '02';
	circleOne.style.opacity = '.3';
	circleTwo.style.opacity = '1';
	circleThree.style.opacity = '.3';
	circleFour.style.opacity = '.3'
	furnitureLabel.style.marginLeft = `${-scroll/20+100}px`
	dLetter.style.marginLeft = `${scroll/20+100}px`
	if(!mobile) {
		decoreLabel.style.marginLeft = `${scroll/20-300}px`
	} else {
		decoreLabel.style.marginLeft = `${scroll/20-100}px`
	}
	
	}
	

	if (screen==='third-block') {counter.innerText = '03';
	circleOne.style.opacity = '.3';
	circleTwo.style.opacity = '.3';
	circleThree.style.opacity = '1';
	circleFour.style.opacity = '.3';
	}
	
	if (screen==='fourth-block') {counter.innerText = '04';
	circleOne.style.opacity = '.3';
	circleTwo.style.opacity = '.3';
	circleThree.style.opacity = '.3';
	circleFour.style.opacity = '1';
	
}
	if (!mobile) {
		$('.large-circle .play-video-circle').css('border-width',`${scroll/10-200}px`)
	} else {
		$('.large-circle .play-video-circle').css('border-width',`${scroll/10-270}px`)
	}
	
	if (scroll<900) {$('.header').css({'background-color':`rgba(0,0,0,${scroll/1000})`,'box-shadow':`0 0 15px rgba(0,0,0,${scroll/1000}`})} else {$('.header').css({'background-color':`rgba(0,0,0,.8)`,'box-shadow':'0 0 15px rgba(0,0,0,.2'})}
	
	if(mobile && sidebarToggle){
		
		if (sidebarCounter <= 32) {
			
		$('.sidebar').css({
			height: `${32-sidebarCounter}vh`

			})
			sidebarCounter+=2
		} else {sidebarToggle = false}
		

	}
})
function parallax(event) {
	this.querySelectorAll('.video-img').forEach(layer => {
		let speed = layer.getAttribute('data-speed');
		layer.style.transform = `translate(${-event.clientX*speed/300}px,${-event.clientY*speed/300}px)`
	})
	this.querySelectorAll('.about-us-image').forEach(layer => {
		let speed = layer.getAttribute('data-speed');
		layer.style.transform = `translateX(${-event.clientX*speed/300-25}px)`
	})
	this.querySelectorAll('.label-animate').forEach(layer => {
		let speed = layer.getAttribute('data-speed');
		layer.style.transform = `translateX(${-event.clientX*speed/50+100}px)`
	})
	
}

if ($(window).width() < 500) {
	$('.russian').css('transition','none');
	$('.ukrainian').css('transition','none');
	$('.english').css('transition','none');
	$('.line-to-increase').css('opacity','0')
	$('.sidebar-menu').css({
		'width':'100vw',
		'margin-left': '0',
		'padding-left':'0'
	})
	$('.social-icons').css('display','none')
	$('.sidebar-menu-item').click(function(){
		$('.sidebar-menu-item').css('color','#fff')

		$(this).css('color','#bea67c')

	})
}

var innovations = document.getElementById('innovations')
var highLevel  = document.getElementById('highLevel')
var quality = document.getElementById('quality')
var innovationsPlay = document.getElementById('innovationsPlay')
var highLevelPlay  = document.getElementById('highLevelPlay')
var qualityPlay = document.getElementById('qualityPlay')

var innovationsIcon = document.getElementById('innovationsIcon')
var highLevelIcon = document.getElementById('highLevelIcon')
var qualityIcon = document.getElementById('qualityIcon')

function makeOpacityForVideos(video,playButton,playIcon) {
	video.addEventListener('mouseover',function(){
		video.style.opacity = '.7'
		
	})
	video.addEventListener('mouseout',function(){
		video.style.opacity = '1'
	})
	playButton.addEventListener('mouseover',function(){
		video.style.opacity = '.7'
		playIcon.style.backgroundColor = 'rgba(0,0,0,1)'
	})
	playButton.addEventListener('mouseout',function(){
		video.style.opacity = '1'
		playIcon.style.backgroundColor = '#bea67c'
	})
}

makeOpacityForVideos(innovations,innovationsPlay,innovationsIcon)
makeOpacityForVideos(highLevel,highLevelPlay,highLevelIcon)
makeOpacityForVideos(quality,qualityPlay,qualityIcon)

document.addEventListener('mousemove', parallax)

$('.watch-video').mouseover(
	function(){

		$('.watch-video .play-video-circle').css("border-color","#bea67c")
		$('.watch-video').css("border-color","#bea67c")
		$('.watch-video-text').css('color','#bea67c')
		$('.watch-video .play-icon').css('opacity','1')
	}
)
$('.watch-video').mouseout(
	function(){
		
		$('.watch-video .play-video-circle').css("border-color","#fff")
		$('.watch-video').css("border-color","#fff")
		$('.watch-video-text').css('color','#fff')
		
	}
)
$(".learnMoreButton").mouseover(
	function(){
		$(".increaseWidth").css('width',"92px")
	}
)
$(".learnMoreButton").mouseout(
	function(){
		$(".increaseWidth").css('width',"8%")
	}
)
$(".about-us-image").mouseover(
	function(){
		$(".bottom-block").css('background-color',"rgba(0,0,0,.3")
	}
)
$(".about-us-image").mouseout(
	function(){
		$(".bottom-block").css('background-color',"")
	}
)

function moveTo(block){
	sidebarCounter = 32;
	var yCoordinate;
	
	var height = document.body.scrollHeight
	if (block === 'home') {
		yCoordinate = '0'}
	
	if (400 < $(window).width() < 500) {
		if (block === 'products') {yCoordinate = 740}
		if (block === 'howWeWork') {yCoordinate = 3275}
		if (block === 'about') {yCoordinate = 3920}
	}
	if (500 < $(window).width() < 1700) {
		if (block === 'products') {yCoordinate =height/5}
		if (block === 'howWeWork') {yCoordinate = height/1.5}
		if (block === 'about') {yCoordinate = height}
	}
	
	window.scrollTo({
		top: yCoordinate,
		left: 0,
		behavior: "smooth"
	})
}

if ($(window).width() > 500) {
	$('.sidebar').css({
		top: "0",
		left: "-500px"
	})
} else {
	$('.sidebar').css({
		opacity: '0'
	})
}

var sidebarToggle = false
function showSidebar() {
	sidebarCounter = 0;
	if ($(window).width() > 500) {
		if(!sidebarToggle) {
			$('.sidebar').css({
				top: "0",
				left: "0"
			})
			sidebarToggle = true
		} else {
			$('.sidebar').css({
				top: "0",
				left: "-500px"
			})
			sidebarToggle = false
		}
	} else {
		
		if(!sidebarToggle) {
			sidebarToggle = true;
			if ($(window).width>370) {
			$('.sidebar').css({
				height: "32vh",
				opacity: '1'
			})
		} else {
			$('.sidebar').css({
				height: "35vh",
				opacity: '1'
			})
		}
			
		} else {
			sidebarToggle = false
			$('.sidebar').css({
				height: "0",
				opacity: '0'
			})
			
		}
	}	
}

function increaseLine(element) {
	var lastWord = element.className.split(' ')[1]
	reduceValue = "120px"
	if (lastWord == 'home'){reduceValue = "60px"}
	if (lastWord == 'products'){reduceValue = "110px"}
	if (lastWord == 'howWeWork'){reduceValue = "160px"}
	if (lastWord == 'about'){reduceValue = "70px"}

	$(`.line-to-increase.${lastWord}`).css('width',reduceValue)
}	
function reduceLine(element) {
	var lastWord = element.className.split(' ')[1]
	$(`.line-to-increase.${lastWord}`).css('width','0')
}

$(document).mouseup(function(e) 
{
    var container = $(".sidebar");
	var menu = $('.menu-lines');
	if (!container.is(e.target) && !menu.is(e.target) && container.has(e.target).length === 0 && $(window).width() > 500) {if (sidebarToggle){showSidebar()}}
	var video = $(".videoContainer");
	if (!video.is(e.target) && video.has(e.target).length === 0) 
    {
		$('#videoContainer').css({
			'opacity':'0',
			'z-index':'0',
		})
		$('#videoYoutube').css({
			'opacity':'0',
			'z-index':'0',
		})
		$('#videoContainer').html('<iframe class="videoYoutube" id="videoYoutube" src="https://www.youtube.com/embed/N1aljc6bhZY?start=3&controls=0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
	}

	
	
});


var languageToggle = false

var chosenLanguage = 'EN'


$(".language").click(function(){
	
	if (!languageToggle) {
			$('.header').css('height','120px')
			$(".russian").css({
				"margin-top":"2em",
				"opacity":"0.5"
			})
			$(".ukrainian").css({
				"margin-top":".5em",
				"opacity":"0.5"
			})
			
			$(".russian").mouseover(function(){
				$('.russian').css('opacity','1')})
			$(".russian").mouseout(function(){
				$('.russian').css('opacity','.5')})
			$(".ukrainian").mouseover(function(){
				$('.ukrainian').css('opacity','1')})
			$(".ukrainian").mouseout(function(){
				$('.ukrainian').css('opacity','.5')})
			
			
			$('.arrow-down').css('transform','rotate(180deg)')
			
			languageToggle = true
			} else {
				$('.header').css('height','62px')
				$(".russian").css({
					"margin-top":"0",
					"opacity":"0"
				})
				$(".ukrainian").css({
					"margin-top":"0",
					"opacity":"0"
				})
			
				$(".russian").mouseover(function(){
					$('.russian').css('opacity','0')})
				$(".russian").mouseout(function(){
					$('.russian').css('opacity','.0')})
				$(".ukrainian").mouseover(function(){
					$('.ukrainian').css('opacity','0')})
				$(".ukrainian").mouseout(function(){
					$('.ukrainian').css('opacity','0')})
				
				
				$('.arrow-down').css('transform','none')
				
				languageToggle = false
		
			}
	
})
function translateLanguage(language){
	if (language === 'ukrainian') {
		chosenLanguage = 'UA'
		$('#navHome').text('ГОЛОВНА')
		$('#navProducts').text('ПРОДУКТИ')
		$('#navHowWeWork').text('НАША РОБОТА')
		$('#navAbout').text('ПРО НАС')
		if (!aboutCompanyToggle) {
			$('#mainLearnMore').text('ЧИТАТИ ЩЕ')
		} else {
			$('#mainLearnMore').text('НАЗАД')
		}
		
		$('#menuLabel').text('МЕНЮ')
		$("#mainFurnitureAndDecore").text('МЕБЛІ & ДЕКОР')
		$("#furnitureHeader").text('МЕБЛІ')
		$("#furnitureParagraph").text('Wooder використовує деревину повалених дерев тим самим запобігаючи вірубці лісів. Створюючи речі із меліорового амберу...')
		$('.learnMoreButton').text('Читати ще')
		$('#scroll').text('ВНИЗ')

		$('#infoParagraph').text("Цей веб-сайт надає вам можливість ознайомитись з компанією Wooder, оцінити надані товари та послуги та зробити замовлення.")
		$('#infoContacts').text('Ви можете зв’язатися з нами за такими контактами:')

		$('#about-company-paragraph-1').text("Компанія Wooder розпочала свою діяльність як сімейний бізнес ще в 1973 році. Засновник Стівен Бартрідж купив деревообробну фабрику після того, як сімейний бізнес здобув міцну репутацію в Бронксі, Нью-Йорк. Фабрика одразу ж почала розширюватися. Вже в 1977 році компанія почала масштабуватися на Сході США.") 
		
		$('#about-company-paragraph-2').text("У 1986 році компанія об'єдналася з іншим великим гравцем у галузі ‒ Ostin Wood Company. Разом вони здобули вирішальний голос у галузі та почали зростати за її межами. Вже в 1990 році Wooder виготовляв 18% американських дерев'яних виробів.")

		$('#sidebarHome').text('ГОЛОВНА')
		$('#sidebarProducts').text('ПРОДУКТИ')
		$('#sidebarHowWeWork').text('НАША РОБОТА')
		$('#sidebarAbout').text('ПРО НАС')

		
		$('#furniture-label').text('МЕБЛІ')
		$('#decore-label').text('ДЕКОР')
		$('#decoreHeader').text('ДЕКОР')
		$('#decoreParagraph').text("Ми займаємось всіма видами дерев'яного декорування створюваного архітекторами, інтер'єр дизайнерами, та підрядниками котрі зацікавлені проектом...")
		$('#wooderIsQuality').text('WOODER ‒ ЦЕ ЯКІСТЬ')
		$('#wooderIsQualityParagraph').text('Ми створюємо унікальні предмети з рідкісного дерева, спеціально під замовлення. Подивіться коротке відео про нашу роботу')

		$('#innovativeDesign').text('Інноваційний Дизайн')
		$('#highLevelSkills').text('Висококласні Спеціалісти')
		$('#qualityProducts').text('Якість Продукції')
		
		$('#weDoTheDesign').text('МИ ВИКОНУЄМО ЗАМОВЛЕННЯ БУДЬ ЯКОЇ СКЛАДНОСТІ')
		$('#thisIsATeam').text('Це команда професіоналів, яка робить меблі та декор з дерева найвищого стандарту. Створюючи сучасний дизайн та дотримуючись світових стандартів якості, ми робимо роботу, яку ми любимо')
		$('#watchVideo').text('ДИВИТИСЬ ВІДЕО')
		
		$('#aboutUsLabel').text('ПРО НАС')
		$('#aboutUsHeader').text('ПРО НАС')
		$('#aboutUsParagraph').text('Ми - команда професіоналів з деревообробки та створення дерев’яних меблів вищого класу')


	}
	else if (language === 'russian'){
		chosenLanguage = "RU"
		$('#navHome').text('ГЛАВНАЯ')
		$('#navProducts').text('ПРОДУКТЫ')
		$('#navHowWeWork').text('НАША РАБОТА')
		$('#navAbout').text('О НАС')
		if (!aboutCompanyToggle) {
			$('#mainLearnMore').text('ЧИТАТИ ЕЩЁ')
		} else {
			$('#mainLearnMore').text('НАЗАД')
		}
		$('#menuLabel').text('МЕНЮ')
		$("#mainFurnitureAndDecore").text('МЕБЕЛЬ & ДЕКОР')
		$("#furnitureHeader").text('МЕБЕЛЬ')
		$("#furnitureParagraph").text('Wooder использует древесину поваленных деревьев тем самым предотвращая вырубку лесов. Создавая вещи из мелиорового амбера...')
		$('.learnMoreButton').text('Читать ещё')
		$('#scroll').text('ВНИЗ')

		$('#infoParagraph').text("Этот сайт дает вам возможность познакомиться с Wooder, оценить предлагаемые продукты и услуги и сделать заказ.")
		$('#infoContacts').text('Вы можете связаться с нами используя следующие контакты:')

		$('#about-company-paragraph-1').text("Компания Wooder начала свою деятельность как семейный бизнес еще в 1973 году. Основатель Стивен Бартридж купил деревообрабатывающую фабрику после того, как семейный бизнес получил прочную репутацию в Бронксе, Нью-Йорк. Фабрика сразу же начала расширяться. Уже в 1977 году компания начала масштабироваться на Востоке США.") 
		
		$('#about-company-paragraph-2').text("В 1986 году компания объединилась с другим крупным игроком в отрасли - Ostin Wood Company. Вместе они получили решающий голос в индустрии и начали расти за ее пределами. Уже в 1990 году Вудер изготавливал 18% американских деревянных изделий.")

		$('#sidebarHome').text('ГЛАВНАЯ')
		$('#sidebarProducts').text('ПРОДУКТЫ')
		$('#sidebarHowWeWork').text('НАША РАБОТА')
		$('#sidebarAbout').text('О НАС')
		
		$('#furniture-label').text('МЕБЕЛЬ')
		$('#decore-label').text('ДЕКОР')
		$('#decoreHeader').text('ДЕКОР')
		$('#decoreParagraph').text("Мы занимаемся всеми видами древесного декорирования создаваемого архитекторами, итерьер-дизайнерами, и подрядчиками заинтересованными в проекте...")

		$('#wooderIsQuality').text('WOODER ‒ ЭТО КАЧЕСТВО')
		$('#wooderIsQualityParagraph').text('Мы создаем уникальные предметы из редкой древесины, специально под заказ. Посмотрите короткое видео о нашей работе')

		$('#innovativeDesign').text('Инновационный Дизайн')
		$('#highLevelSkills').text('Высококлассные Специалисты')
		$('#qualityProducts').text('Качество Продукции')

		$('#weDoTheDesign').text('МЫ ВЫПОЛНЯЕМ ЗАКАЗЫ ЛЮБОЙ СЛОЖНОСТИ')
		$('#thisIsATeam').text('Это команда профессионалов, которая делает мебель и декор из дерева высокого стандарта. Создавая современный дизайн и следуя мировым стандартам качества, мы делаем работу, которую мы любим')
		$('#watchVideo').text('СМОТРЕТЬ ВИДЕО')

		$('#aboutUsLabel').text('О НАС')
		$('#aboutUsHeader').text('О НАС')
		$('#aboutUsParagraph').text('Мы команда профессионалов в области деревообработки и создания деревянной мебели высшего класса')

	}
	else if (language === 'english') {
		chosenLanguage = 'EN'
		$('#navHome').text('HOME')
		$('#navProducts').text('PRODUCTS')
		$('#navHowWeWork').text('HOW WE WORK')
		$('#navAbout').text('ABOUT')
		if (!aboutCompanyToggle) {
			$('#mainLearnMore').text('LEARN MORE')
		} else {
			$('#mainLearnMore').text('HIDE')
		}
		$('#menuLabel').text('MENU')
		$("#mainFurnitureAndDecore").text('FURNOTURE & DECORE')
		$("#furnitureHeader").text('FURNOTURE')
		$("#furnitureParagraph").text('Wooder utilizes materials otherwise left behind, rendered useless in their original intent. By creating new places made of reclaimed barnwood...')
		$('.learnMoreButton').text('LEARN MORE')
		$('#scroll').text('SCROLL')

		$('#sidebarHome').text('HOME')
		$('#sidebarProducts').text('PRODUCTS')
		$('#sidebarHowWeWork').text('HOW WE WORK')
		$('#sidebarAbout').text('ABOUT')

		$('#infoParagraph').text("This website provides you with the ability to get acquainted with the Wooder Company, assess the provided products and services, and make an order.")
		$('#infoContacts').text('You can reach the Woorder Company using the following contacts:')

		$('#about-company-paragraph-1').text("Wooder started as a small family business back in 1973. The founder, Steven Bartridge, bought a wood-processing factory after the family business gained a solid reputation in Bronx, New York. The factory accelerated the growth of the company immediately. Already in 1977, the company started to scale in the East.") 
		
		$('#about-company-paragraph-2').text("In 1986, the company merged with another big player in the industry: Ostin Wood Company. Together, they gained major voice in the industry and started to grow beyond it. Already in 1990, Wooder produced 18% of American wooden products.")
		
		$('#furniture-label').text('FURNITURE')
		$('#decore-label').text('DECORE')
		$('#decoreHeader').text('DECORE')
		$('#decoreParagraph').text("We make all types of wooden decore as per design by Architect, Interior designer, contractor which is suitable...")
		$('#wooderIsQuality').text('WOODER ‒ IS QUALITY')
		$('#wooderIsQualityParagraph').text('We create unique objects made of rare wood, specifically under the order. Look at the short video about our work')

		$('#innovativeDesign').text('Innovative Design')
		$('#highLevelSkills').text('High-Level Skills')
		$('#qualityProducts').text('Quality Products')
		
		$('#weDoTheDesign').text('We do the design of any complexity'.toUpperCase())
		$('#thisIsATeam').text('This is a team of professionals that make the furniture and wood decore of the highest standard. Creating modern designs and adhering to the global quality standards, we are doing work that we love.')
		$('#watchVideo').text('watch video'.toUpperCase())
		
		$('#aboutUsLabel').text('ABOUT US')
		$('#aboutUsHeader').text('ABOUT US')
		$('#aboutUsParagraph').text('We are a team of professionals in the wood-processing and the creation of wooden furniture of the highest class')
	}
}

if (!languageToggle) {
	$('.ukrainian').click(function(){
		if ($('.ukrainian').text() === 'UA') {
			$(".english").text('UA')
			$('.russian').text('RU')
			$(".ukrainian").text('EN')
			
			translateLanguage('ukrainian')
		}
		else {
			$(".english").text('EN')
			$('.russian').text('RU')
			$(".ukrainian").text('UA')
			translateLanguage('english')
		
	}})
	$('.russian').click(function(){
		if ($('.russian').text() === 'RU') {
			$(".english").text('RU')
			$('.russian').text('EN')
			$(".ukrainian").text('UA')
			translateLanguage('russian')
		}
		else {
			$(".english").text('EN')
			$('.russian').text('RU')
			$(".ukrainian").text('UA')
			translateLanguage('english')
	}})
	$('#watchVideoButton').click(function(){
		$('#videoContainer').css({
			'opacity':'1',
			'z-index':'4',
		})
		$('#videoYoutube').css({
			'opacity':'1',
			'z-index':'4',
		})
	
	})

}

$('#largePlayVideo').click(function(){
	$('#videoContainer').css({
		'opacity':'1',
		'z-index':'4',
	})
	$('#videoYoutube').css({
		'opacity':'1',
		'z-index':'4',
	})
	

})
var informationToggle = false
$('#infoIcon').click(function(){
	if (!informationToggle) {
		
		$('#information').css({'height':'162px','opacity':'1'})
		informationToggle = true
	}
	else {
		$('#information').css({'height':'0','opacity':'0'})
		informationToggle = false
		
	}
	
})
var aboutCompanyToggle = false

$('#learnMoreBtn').click(function(){
	if (!aboutCompanyToggle) {
		if (chosenLanguage === 'EN') {
			$('#mainLearnMore').text('HIDE')
			$('.arrow').css('transform','scaleX(-1)')
		} else if (chosenLanguage === 'RU') {
			$('#mainLearnMore').text('НАЗАД')
			$('.arrow').css('transform','scaleX(-1)')
		} else if (chosenLanguage === 'UA') {
			$('#mainLearnMore').text('НАЗАД')
			$('.arrow').css('transform','scaleX(-1)')
		}

		$('.right-bg').css({
			width:'80%',
			left:'30%'})
		
		if (!mobile) {
			$('.factory').css({
				top:'30%',
				left: '60%',
				opacity: '1',
			})}

		$('#central-logo').css({
			top: '-20vh',
		})
		$('#learnMoreBtn').css({
			top: '34vh',
		})
		if ($(window).width() < 500) {
			$('#learnMoreBtn').css({
				top: '40vh',
				left: '18vw'
			})
		}
		$('#scrollDown').css({
			top: '2vh',
			left: '-4vw',
		})
		if(chosenLanguage === 'EN') {
			$('.about-company').css({
				height: '400px',
				opacity: '1',
				transition: '1s',
				'transition-delay': '.2s',
				"margin-top": "-20px"
			})
		} else {
			if (mobile) {
				$('.about-company').css({
					height: '420px',
					opacity: '1',
					transition: '1s',
					'transition-delay': '.2s',
					"margin-top": "-60px"
				})
			} else {
				$('.about-company').css({
					height: '420px',
					opacity: '1',
					transition: '1s',
					'transition-delay': '.2s',
					"margin-top": "-20px"
				})
			}
		
		}
		
		$('.vertical-text').css({
			'transition':'opacity .5s',
			'opacity':'0',
			'transition-delay':'0'
		})

		aboutCompanyToggle = true
		
	} else {
		if (chosenLanguage === 'EN') {
			$('#mainLearnMore').text('LEARN MORE')
			$('.arrow').css('transform','none')
		} else if (chosenLanguage === 'RU') {
			$('#mainLearnMore').text('ЧИТАТЬ ЕЩЁ')
			$('.arrow').css('transform','none')
		} else if (chosenLanguage === 'UA') {
			$('#mainLearnMore').text('ЧИТАТИ ЩЕ')
			$('.arrow').css('transform','none')
		}


		$('.right-bg').css({
			width:'46.5%',
			left:'53.5%'})
			
		$('.factory').css({
			opacity: '0',
			top:'100%',
			left: '100%',
		})
		$('#central-logo').css({
			top: '0',
		})
		$('#learnMoreBtn').css({
			top: '0',
		})
		if (mobile) {
			$('#learnMoreBtn').css({
				top: '0',
				left: '0'
			})
		}
		$('#scrollDown').css({
			top: '0',
			left: '-10px',
		})
		$('.about-company').css({
			height: '0',
			opacity: '0',
			transition: '.5s',
			'transition-delay': '0',
		})
		$('.vertical-text').css({
			'transition':'opacity .5s',
			'opacity':'.3',
			'transition-delay':'.7s'
		})


		aboutCompanyToggle = false
	}
})

if ($(window).width() < 500) {
	$('.decore-row > div').each(function() {
		$(this).prependTo(this.parentNode);
	});
}

$( window ).on( "orientationchange", function( event ) {location.reload()})