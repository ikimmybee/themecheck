checkDevice=function(){var e=window.innerWidth>0?window.innerWidth:screen.width;return $("body").removeClass("isMobile isTablet isDesktop"),(navigator.userAgent.match(/iphone|ipod|ipad/i)||navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/iemobile/i))&&$("body").removeClass("no_touch"),768>=e?($("body").addClass("isMobile"),"isMobile"):e>768&&992>=e?($("body").addClass("isTablet"),"isTablet"):($("body").addClass("isDesktop"),"isDesktop")},$(document).ready(function(){checkDevice(),$("#icon_menu_mobile").on("click",switchMenu),$("#liste_menu .link_intern").on("click",scrollDown),$(".container_result .content_intro .container_alerts a").on("click",scrollDown),$("#select_zip a").on("click",openPopup),$(window).resize(function(){windowResize()});var e=$("img.wordpress")[0].src,o=$("img.joomla")[0].src,n=$("img.owasp")[0].src,i=$("img.github")[0].src;$("img.wordpress").hover(function(){$("img.wordpress")[0].src=domain_site+"/img/images/footer/wordpress_hover.png"},function(){$("img.wordpress")[0].src=e}),$("img.joomla").hover(function(){$("img.joomla")[0].src=domain_site+"/img/images/footer/joomla_hover.png"},function(){$("img.joomla")[0].src=o}),$("img.owasp").hover(function(){$("img.owasp")[0].src=domain_site+"/img/images/footer/owasp_hover.png"},function(){$("img.owasp")[0].src=n}),$("img.github").hover(function(){$("img.github")[0].src=domain_site+"/img/images/footer/github_hover.png"},function(){$("img.github")[0].src=i}),"contact"==page&&$("#contactPage").css("color","#cad334")}),$(window).load(function(){}),windowResize=function(){},$(function(){var e=$(window);e.scroll(function(){0!=e.scrollTop()||$("#menu").hasClass("open")?document.getElementById("menu").style.background="black":document.getElementById("menu").style.background="none",$(".container_liste_menu a").each(function(){var o=$(this).attr("href");("#ancreSubmit"==o||"#theme"==o)&&(e.scrollTop()==$(o).offset().top?$(".container_liste_menu a[href="+o+"]").addClass("hover_anchor"):$(".container_liste_menu a[href="+o+"]").removeClass("hover_anchor"))})})}),switchMenu=function(){$("#menu").toggleClass("open"),$("#menu").hasClass("open")?document.getElementById("menu").style.background="black":document.getElementById("menu").style.background="none"},scrollDown=function(){var e=$(this).attr("href"),o=e.split("#");if(o.length<=2){var n="#"+o[1],i=$(n).offset().top;"#warningAlerts"==n?i-=70:"#criticalAlerts"==n&&(i-=10),$("html, body").animate({scrollTop:i+"px"},500,function(){"isMobile"==checkDevice()&&$("#menu").removeClass("open")})}return!1},openPopup=function(){$("#select_zip a span ").toggleClass("openPopup")};
