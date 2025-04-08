/**
 * UAParser.js v0.7.9
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright Â© 2012-2015 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 & MIT
 */
(function(window,undefined){"use strict";var LIBVERSION="0.7.9",EMPTY="",UNKNOWN="?",FUNC_TYPE="function",UNDEF_TYPE="undefined",OBJ_TYPE="object",STR_TYPE="string",MAJOR="major",MODEL="model",NAME="name",TYPE="type",VENDOR="vendor",VERSION="version",ARCHITECTURE="architecture",CONSOLE="console",MOBILE="mobile",TABLET="tablet",SMARTTV="smarttv",WEARABLE="wearable",EMBEDDED="embedded";var util={extend:function(regexes,extensions){for(var i in extensions){if("browser cpu device engine os".indexOf(i)!==-1&&extensions[i].length%2===0){regexes[i]=extensions[i].concat(regexes[i])}}return regexes},has:function(str1,str2){if(typeof str1==="string"){return str2.toLowerCase().indexOf(str1.toLowerCase())!==-1}else{return false}},lowerize:function(str){return str.toLowerCase()},major:function(version){return typeof version===STR_TYPE?version.split(".")[0]:undefined}};var mapper={rgx:function(){var result,i=0,j,k,p,q,matches,match,args=arguments;while(i<args.length&&!matches){var regex=args[i],props=args[i+1];if(typeof result===UNDEF_TYPE){result={};for(p in props){q=props[p];if(typeof q===OBJ_TYPE){result[q[0]]=undefined}else{result[q]=undefined}}}j=k=0;while(j<regex.length&&!matches){matches=regex[j++].exec(this.getUA());if(!!matches){for(p=0;p<props.length;p++){match=matches[++k];q=props[p];if(typeof q===OBJ_TYPE&&q.length>0){if(q.length==2){if(typeof q[1]==FUNC_TYPE){result[q[0]]=q[1].call(this,match)}else{result[q[0]]=q[1]}}else if(q.length==3){if(typeof q[1]===FUNC_TYPE&&!(q[1].exec&&q[1].test)){result[q[0]]=match?q[1].call(this,match,q[2]):undefined}else{result[q[0]]=match?match.replace(q[1],q[2]):undefined}}else if(q.length==4){result[q[0]]=match?q[3].call(this,match.replace(q[1],q[2])):undefined}}else{result[q]=match?match:undefined}}}}i+=2}return result},str:function(str,map){for(var i in map){if(typeof map[i]===OBJ_TYPE&&map[i].length>0){for(var j=0;j<map[i].length;j++){if(util.has(map[i][j],str)){return i===UNKNOWN?undefined:i}}}else if(util.has(map[i],str)){return i===UNKNOWN?undefined:i}}return str}};var maps={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}};var regexes={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[NAME,VERSION],[/\s(opr)\/([\w\.]+)/i],[[NAME,"Opera"],VERSION],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium)\/([\w\.-]+)/i],[NAME,VERSION],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[NAME,"IE"],VERSION],[/(edge)\/((\d+)?[\w\.]+)/i],[NAME,VERSION],[/(yabrowser)\/([\w\.]+)/i],[[NAME,"Yandex"],VERSION],[/(comodo_dragon)\/([\w\.]+)/i],[[NAME,/_/g," "],VERSION],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,/(uc\s?browser|qqbrowser)[\/\s]?([\w\.]+)/i],[NAME,VERSION],[/(dolfin)\/([\w\.]+)/i],[[NAME,"Dolphin"],VERSION],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[NAME,"Chrome"],VERSION],[/XiaoMi\/MiuiBrowser\/([\w\.]+)/i],[VERSION,[NAME,"MIUI Browser"]],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i],[VERSION,[NAME,"Android Browser"]],[/FBAV\/([\w\.]+);/i],[VERSION,[NAME,"Facebook"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[VERSION,[NAME,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[VERSION,NAME],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[NAME,[VERSION,mapper.str,maps.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[NAME,VERSION],[/(navigator|netscape)\/([\w\.-]+)/i],[[NAME,"Netscape"],VERSION],[/fxios\/([\w\.-]+)/i],[VERSION,[NAME,"Firefox"]],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[NAME,VERSION]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[ARCHITECTURE,"amd64"]],[/(ia32(?=;))/i],[[ARCHITECTURE,util.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[ARCHITECTURE,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[ARCHITECTURE,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[ARCHITECTURE,/ower/,"",util.lowerize]],[/(sun4\w)[;\)]/i],[[ARCHITECTURE,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[ARCHITECTURE,util.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[MODEL,VENDOR,[TYPE,TABLET]],[/applecoremedia\/[\w\.]+ \((ipad)/],[MODEL,[VENDOR,"Apple"],[TYPE,TABLET]],[/(apple\s{0,1}tv)/i],[[MODEL,"Apple TV"],[VENDOR,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[VENDOR,MODEL,[TYPE,TABLET]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[MODEL,[VENDOR,"Amazon"],[TYPE,TABLET]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[MODEL,mapper.str,maps.device.amazon.model],[VENDOR,"Amazon"],[TYPE,MOBILE]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[MODEL,VENDOR,[TYPE,MOBILE]],[/\((ip[honed|\s\w*]+);/i],[MODEL,[VENDOR,"Apple"],[TYPE,MOBILE]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/\(bb10;\s(\w+)/i],[MODEL,[VENDOR,"BlackBerry"],[TYPE,MOBILE]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i],[MODEL,[VENDOR,"Asus"],[TYPE,TABLET]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[VENDOR,"Sony"],[MODEL,"Xperia Tablet"],[TYPE,TABLET]],[/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],[[VENDOR,"Sony"],[MODEL,"Xperia Phone"],[TYPE,MOBILE]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[VENDOR,MODEL,[TYPE,CONSOLE]],[/android.+;\s(shield)\sbuild/i],[MODEL,[VENDOR,"Nvidia"],[TYPE,CONSOLE]],[/(playstation\s[3portablevi]+)/i],[MODEL,[VENDOR,"Sony"],[TYPE,CONSOLE]],[/(sprint\s(\w+))/i],[[VENDOR,mapper.str,maps.device.sprint.vendor],[MODEL,mapper.str,maps.device.sprint.model],[TYPE,MOBILE]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[VENDOR,MODEL,[TYPE,TABLET]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[VENDOR,[MODEL,/_/g," "],[TYPE,MOBILE]],[/(nexus\s9)/i],[MODEL,[VENDOR,"HTC"],[TYPE,TABLET]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[MODEL,[VENDOR,"Microsoft"],[TYPE,CONSOLE]],[/(kin\.[onetw]{3})/i],[[MODEL,/\./g," "],[VENDOR,"Microsoft"],[TYPE,MOBILE]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i],[MODEL,[VENDOR,"Motorola"],[TYPE,MOBILE]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[MODEL,[VENDOR,"Motorola"],[TYPE,TABLET]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[VENDOR,"Samsung"],MODEL,[TYPE,TABLET]],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[VENDOR,"Samsung"],MODEL,[TYPE,MOBILE]],[/(samsung);smarttv/i],[VENDOR,MODEL,[TYPE,SMARTTV]],[/\(dtv[\);].+(aquos)/i],[MODEL,[VENDOR,"Sharp"],[TYPE,SMARTTV]],[/sie-(\w+)*/i],[MODEL,[VENDOR,"Siemens"],[TYPE,MOBILE]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[VENDOR,"Nokia"],MODEL,[TYPE,MOBILE]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[MODEL,[VENDOR,"Acer"],[TYPE,TABLET]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[VENDOR,"LG"],MODEL,[TYPE,TABLET]],[/(lg) netcast\.tv/i],[VENDOR,MODEL,[TYPE,SMARTTV]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i],[MODEL,[VENDOR,"LG"],[TYPE,MOBILE]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[MODEL,[VENDOR,"Lenovo"],[TYPE,TABLET]],[/linux;.+((jolla));/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/((pebble))app\/[\d\.]+\s/i],[VENDOR,MODEL,[TYPE,WEARABLE]],[/android.+;\s(glass)\s\d/i],[MODEL,[VENDOR,"Google"],[TYPE,WEARABLE]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i],[[MODEL,/_/g," "],[VENDOR,"Xiaomi"],[TYPE,MOBILE]],[/(mobile|tablet);.+rv\:.+gecko\//i],[[TYPE,util.lowerize],VENDOR,MODEL]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[VERSION,[NAME,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[NAME,VERSION],[/rv\:([\w\.]+).*(gecko)/i],[VERSION,NAME]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[NAME,VERSION],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[NAME,[VERSION,mapper.str,maps.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[NAME,"Windows"],[VERSION,mapper.str,maps.os.windows.version]],[/\((bb)(10);/i],[[NAME,"BlackBerry"],VERSION],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[NAME,VERSION],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[NAME,"Symbian"],VERSION],[/\((series40);/i],[NAME],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[NAME,"Firefox OS"],VERSION],[/(nintendo|playstation)\s([wids3portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[NAME,VERSION],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[NAME,"Chromium OS"],VERSION],[/(sunos)\s?([\w\.]+\d)*/i],[[NAME,"Solaris"],VERSION],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[NAME,VERSION],[/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],[[NAME,"iOS"],[VERSION,/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[NAME,"Mac OS"],[VERSION,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(haiku)\s(\w+)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[NAME,VERSION]]};var UAParser=function(uastring,extensions){if(!(this instanceof UAParser)){return new UAParser(uastring,extensions).getResult()}var ua=uastring||(window&&window.navigator&&window.navigator.userAgent?window.navigator.userAgent:EMPTY);var rgxmap=extensions?util.extend(regexes,extensions):regexes;this.getBrowser=function(){var browser=mapper.rgx.apply(this,rgxmap.browser);browser.major=util.major(browser.version);return browser};this.getCPU=function(){return mapper.rgx.apply(this,rgxmap.cpu)};this.getDevice=function(){return mapper.rgx.apply(this,rgxmap.device)};this.getEngine=function(){return mapper.rgx.apply(this,rgxmap.engine)};this.getOS=function(){return mapper.rgx.apply(this,rgxmap.os)};this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}};this.getUA=function(){return ua};this.setUA=function(uastring){ua=uastring;return this};this.setUA(ua);return this};UAParser.VERSION=LIBVERSION;UAParser.BROWSER={NAME:NAME,MAJOR:MAJOR,VERSION:VERSION};UAParser.CPU={ARCHITECTURE:ARCHITECTURE};UAParser.DEVICE={MODEL:MODEL,VENDOR:VENDOR,TYPE:TYPE,CONSOLE:CONSOLE,MOBILE:MOBILE,SMARTTV:SMARTTV,TABLET:TABLET,WEARABLE:WEARABLE,EMBEDDED:EMBEDDED};UAParser.ENGINE={NAME:NAME,VERSION:VERSION};UAParser.OS={NAME:NAME,VERSION:VERSION};if(typeof exports!==UNDEF_TYPE){if(typeof module!==UNDEF_TYPE&&module.exports){exports=module.exports=UAParser}exports.UAParser=UAParser}else{if(typeof define===FUNC_TYPE&&define.amd){define(function(){return UAParser})}else{window.UAParser=UAParser}}var $=window.jQuery||window.Zepto;if(typeof $!==UNDEF_TYPE){var parser=new UAParser;$.ua=parser.getResult();$.ua.get=function(){return parser.getUA()};$.ua.set=function(uastring){parser.setUA(uastring);var result=parser.getResult();for(var prop in result){$.ua[prop]=result[prop]}}}})(typeof window==="object"?window:this);

$(function(){
	var OSName="Unknown OS";
	if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
	if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
	if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
	if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
	$("strong#helpdesk-os").text(OSName);
    var pl_parser = new UAParser();
    var fillHelpdeskForm = function(uastring){
    if(uastring) pl_parser.setUA(uastring);
      var browser =  pl_parser.getBrowser();
      var os =  pl_parser.getOS();
      var device =  pl_parser.getDevice();
      $("#helpdesk-browser").val(browser.name+' '+browser.major);
      $("#helpdesk-browser-os").val(os.name+' '+os.version);
      $("#helpdesk-browser-device").val(device.model+' '+device.vendor+' '+device.type);
    }
    fillHelpdeskForm();
});
$(function(){
  $("a[data-trigger='clipboard']").click(function(){
	  var v = $(this).data("value");
	  pl_clipboardcopy(v);
  });
  $("a[data-trigger='send-app-link']").click(function(e){
	 e.preventDefault();
	 $.ajax({
		type: "POST",
		url: "/settings.devices",
		data: "action=send-link" 
	 });
	 $("a[data-trigger='send-app-link']").before("<span class='yes'>Link Sent!</span>").remove();
  });
  $(".nav-lustre-app-launch-dismiss").click(function(){
	$.post("/pl.ajax.global.app.remindlater");
	$(".nav-lustre-app-launch-banner").addClass("minimized");
  });
  $("input[data-validate='contact-email']").change(function(){
	  var v = $(this).val();
	  var n = $(this).attr("name");
	  $(".warning-autosuggest-email[data-error='"+n+"'],.error[data-error='"+n+"']").hide();
	  if(v != ""){
		var ee = "";
		if(typeof $(this).data("validate-exclude") != "undefined" && $(this).data("validate-exclude") != ""){
		  ee = "&exclude="+$(this).data("validate-exclude");
		}
	    $.ajax({
			type: "GET",
			url: "/pl.ajax.people.suggestEmail?q="+encodeURIComponent(v)+ee,
			success: function(data){
			  var a = $.parseJSON(data);
			  if(!a.valid && a.suggestion != ""){
				$(".warning-autosuggest-email[data-error='"+n+"']").html("<em>Did you mean</em> <strong><span class='pseudolink' data-error='"+n+"' data-trigger='autofill-text' data-text='"+a.suggestion+"'>"+a.suggestion+"</span></strong>?")
			    $(".warning-autosuggest-email[data-error='"+n+"']").fadeIn();
				$("span[data-trigger='autofill-text']").click(function(){
				  var t = $(this).data("text");
				  var nn = $(this).data("error");
				  $("input[name='"+nn+"']").val(t).trigger("change").focus();
				  $(".warning-autosuggest-email[data-error='"+nn+"']").hide();
				});
			  }else if(!a.valid){
				$(".warning-autosuggest-email[data-error='"+n+"']").html("This email address doesn't look valid.")
			    $(".warning-autosuggest-email[data-error='"+n+"']").fadeIn();
			  }else if(a.valid && a.organization_id != null){
				var oi = a.organization_id;
				var o = a.organization;
				if($("#add-contact-form.modal-window:visible").length == 1){
				  if($("#switch-content-global-org-coname input[name='q_companyname']").val() == "" && $("#switch-content-global-org-join input[name='q_organization']").val() == ""){
				    $("#switch-global-org-join").trigger("click");
					var menu_id = "token-global-cntx-add-org-join";
					$("#switch-content-global-org-join input[name='q_organization']").val(oi+",")
					$("ul#"+menu_id+" li input#"+menu_id.replace('token-','token-input-')).parent().before('<li class="token-input-token-pl-wide"><span class="token-input-delete-token-pl token-input-delete-token-pl-custom" data-menu="'+menu_id+'" data-value="'+oi+'">&#10799</span><p>'+o+'</p></li>');
					$("input#token-input-global-cntx-add-org-join").hide();
					reBind_removeToken();
				  }
				}else if($("#switch-org-join:visible").length == 1 && $("#token-input-cntx-add-org-join").length == 1){
				  if($("#cntx-add-org-join").val() == "" && $("#switch-content-org-coname input[name='q_companyname']:visible").val() == ""){
					$("#switch-org-join").trigger("click");
					var menu_id = "token-cntx-add-org-join";
					$("#cntx-add-org-join").val(oi+",");
					$("ul#"+menu_id+" li input#"+menu_id.replace('token-','token-input-')).parent().before('<li class="token-input-token-pl-wide"><span class="token-input-delete-token-pl token-input-delete-token-pl-custom" data-menu="'+menu_id+'" data-value="'+oi+'">&#10799</span><p>'+o+'</p></li>');
					$("input#token-input-cntx-add-org-join").hide();
					reBind_removeToken();
				  }
				}
			  }
			  if(a.exists){
				 $(".error[data-error='"+n+"']").slideDown();
			  }			  	
			}
		});
	  }
 });
 $("input[data-limit]").change(function(){
	 var view = $(this).data("view");
	 var limit = $(this).data("limit");
	 var nm = $(this).attr("name");
	 var tot = $("input[name='"+nm+"'][data-view='"+view+"']:checked").length;
	 if(tot >= limit){
		 $("input[name='"+nm+"'][data-view='"+view+"']:not(:checked)").attr("disabled",true);
	 }else{
		 $("input[name='"+nm+"'][data-view='"+view+"']").removeAttr("disabled");
	 }
 });
 $("input[data-limit]").trigger("change");

  // Lustre Navigation
  var $plmenu = $('#nav-lustre');
  $plmenu.children('li').each(function(){
	var $this = $(this);
	var $span = $this.children('span');
	$span.data('width',$span.width());
	
	$this.bind('mouseenter',function(){
		$this.find('.nav-lustre-submenu').fadeIn(100);
	}).bind('mouseleave',function(){
		$this.find('.nav-lustre-submenu').stop(true,true).hide();
	});
  });
  
  $("#global-menu-clients-search").keyup(function(){
    var textsearch = $(this).val();
	if(textsearch == ""){
	  $("#global-menu-clients .report-item").show();
	}else{
	  $("#global-menu-clients .report-item").hide();
      $("#global-menu-clients .report-item a:contains('"+textsearch+"')").parent().show();
	}
  });
  $("#global-sso-window-search").keyup(function(){
    var textsearch = $(this).val();
	if(textsearch == ""){
	  $("#sso-window .modal-scroll table tr").show();
	}else{
	  $("#sso-window .modal-scroll table tr").hide();
      $("#sso-window .modal-scroll table tr td label:contains('"+textsearch+"')").parent().parent().show();
	}
  });

  // Messages
  $("#saved:visible:not(.keep-message)").delay(4000).slideUp(300);
  
  // Global Search
  $("form#global-search-form").submit(function(){
	$("#global-search-submit").hide();
	$("#global-search-loading-gif").fadeIn();
	$("#global-search-results-container").slideUp();
	$("#global-search-results-blank-container").slideUp();
	$("#global-search-results").html("");
	var searchterm = encodeURIComponent($("form#global-search-form input[name='search']").val())
	$.ajax({
	  type: "POST",
	  url: "/pl.ajax.global.search",
	  data: "search="+searchterm,
	  success: function(data, responsetext, xhr){
		if(data != ""){
		  $("#global-search-loading-gif").hide();
		  $("#global-search-submit").fadeIn();
		  $("#global-search-results").html(data);
		  $("#global-search-results-container").slideDown();
		}else{
		  $("#global-search-loading-gif").hide();
		  $("#global-search-submit").fadeIn();
		  $("#global-search-results-blank-container").slideDown();
		  $("#global-search-results-container").slideUp();
		  $("#global-search-results").html("");
		}
	  }
	});
    return false;
  });
	
  // Collapsable Step Menus
  $(".dashboard-summary.collapsable:not(.disabled) h3").click(function(){
    $(this).parent().children().not("h3").toggle();
    $(this).parent().toggleClass("collapsed");
  });

  $(".fl-right[data-trigger='close-loading-transition']").click(function(){
     $("#global-loading-transition").fadeOut(); 
  });

  $("input[data-trigger='launch-helpdesk'],a[data-trigger='launch-helpdesk']").click(function(){
	 global_launchHelpdesk();
  });

  $("a").click(function(){
    if($(this).attr("href").indexOf("#") == -1 && $(this).text().indexOf("Download") == -1 && $(this).attr("target") != "_blank" && !$(this).hasClass("modal-iframe")){
      $("#global-loading-transition").fadeIn();
    }
  });

  $("#trigger-add-contact-form-reset").click(function(){
    $("#add-contact-form").trigger("reset");
  });

  $("form.disable").submit(function(){
     $(this).find("input[type=submit]").hide().val("").attr("disabled","true").fadeIn(); 
  });

  $(".copy-field-text").click(function(){
    $(this).select();
  });

  $(".star").click(function(){
    var star_endpoint = $(this).attr("data-action");
    if($(this).hasClass("off")){
    $.get(star_endpoint+"&a=a")
    $(this).hide().delay(200).removeClass("off").addClass("on").slideDown();
    }else{
    $.get(star_endpoint+"&a=r")
    $(this).slideUp(500);
    setTimeout(function(){ $(".star").removeClass("on").addClass("off").fadeIn(700)}, 1000)
    }
  });

  // Add File Attachment
  $("a.form-add-file").click(function(){
    $(this).parent().parent().parent().children("input[type=file]:last").after("<input type='file' name='q_file' style='margin-left: 40px;'>");
    return false;
  });
  
  $(".tag-item.selectable").click(function(){
	  $(this).toggleClass("selected");
	  var field = $(this).data("field");
	  $('#'+field).prop('disabled', function(i, v) { return !v; });
  });

  $(".list-select-table.tokens label input[type='radio']").change(function(){
    var n = $(this);
	$(".list-select-table.tokens label input[type='radio'][name='"+n.attr("name")+"']").parent().removeClass("selected");
	n.parent().addClass("selected");
  });
  $("#warning input[type=button]").click(function(){
    $("#warning input[type=button]").hide();
    $("#warning form").show();
  });
  $("#warning form").submit(function(){
    $("#warning").slideUp();
  });
  $("#nav-menu #menu-mobile").click(function(){
    $("#nav-menu ul").slideToggle();               
  });
  $("#nav-lustre-nav ul#nav-lustre.nav-lustre li.mobile-menu").click(function(){
    $("#nav-lustre-nav ul#nav-lustre.nav-lustre li:not(.logo,.mobile-menu)").toggle();               
  });

  $("#global-sendtomobile").submit(function(){
    $("#global-sendtomobile input[type=submit]").hide().val("").attr("disabled","true").fadeIn();
  });
  
  // Helpdesk Routine
  $("a#helpdesk-url").attr("href",document.URL);
  $("a#helpdesk-url").text(document.title);
  if($("font").length){
    var program_err = "";
    $("font").each(function(){
	  if($(this).text() != ""){
        program_err = program_err+$(this).text()+' ';
	  }
    });
	if(program_err.indexOf("deadlocked on lock") >= 0 && window.location.hash != "#reloaded"){
	  $("#data").hide();
	  window.location.hash = "#reloaded";
      window.location.reload();
	}else{
	  window.location.hash = "#globalerror";
   	  $("#data,#saved,font").remove();
	  pl_loadmodal_fixed('global-error-500');
	  $("#helpdesk-message").val("NOTIFICATION GENERATED BY PARTYLINE:\n"+program_err);
      $("#global-helpdesk").submit();
      $("#helpdesk-message").val("");
	  $("#global-error-500-msg textarea")
	    .val(program_err.trim())
	    .click(function(){
	      $(this).select();  
	    });
	  $("#global-error-500 img").click(function(){
	    pl_loadmodal_fixed('global-error-500-msg');
		$("#global-error-500-msg textarea").select();
	  });
	  $("#global-error-500 a.button-start").click(function(){
		 window.history.back(-2);
	  });
	}
	return false;
  }
  
  // Image Manager
  $("#switch-content-imagemgr-upload form").submit(function(){
	  $("#switch-content-imagemgr-upload form").hide();
	  $("#switch-content-imagemgr-upload-loading").fadeIn();
	  $("switch-content-imagemgr-upload form").reset;
  });

  // Global Rebinds
  reBind_dropdowns();			// Dropdowns
  reBind_trigger();				// Duplicate Trigger
  reBind_jumpmenu();			// Jump Menus
  reBind_star();				// Star Items
  reBind_globalselectAll();		// Select All
  reBind_globalDelete();		// Delete Inline
  reBind_switchcontent();		// Content Toggles
  rebind_edithover();			// Edit on Hover
  reBind_toggle();				// Toggle Switch
  reBind_bigradio();			// Big Radio
  pl_rb_status_popover();		// Status Popover Menu

  if($(".form-step").length > 0){
    pl_init_guidedform();			// Guided form fields
  }
});
function update_modal_loading(pct){
  $(".modal-loading-bar-container div").css("width",pct);
  $(".modal-loading-percent").text(pct);
  if(pct == "100%"){
    $(".modal-loading-bar-container div,.modal-loading-percent").addClass("success");
  }
}
function update_modal_success(){
  $(".modal-loading-bar-container div,.modal-loading-percent").addClass("success");
  var i = $(".modal-window:visible").attr("id");
  if($("#"+i+"-success").length = 1){
	setTimeout(function(){-pl_loadmodal_fixed(i+"-success")},2000);
  }
}
function reBind_toggle(){
  $(".form-tokenitem").click(function(){
	if(typeof $(this).data("switch") != "undefined" && $(this).data("switch") != ""){
	  var switchgrp = $(this).data("switch");
      var selected = $(this).hasClass("selected");
	  if(!(selected)){
		  var switchid = $(this).attr("id").replace('switch-','');
		  $("div[data-switch='"+switchgrp+"']:not(.form-tokenitem),form[data-switch='"+switchgrp+"']:not(.form-tokenitem)").hide();
		  $("#switch-content-"+switchid).fadeIn();
	  }
	}
	if(!$(this).data("follow-link")){
	  if(typeof $(this).data("group") == "undefined" || $(this).data("group") == ""){
		var group = $(this).data("switch");  
	  }else{
	    var group = $(this).data("group");
	  }
	  var thisval = $(this).data("value");
	  $("#"+group).val(thisval).trigger("change");
	  $(".form-tokenitem[data-group='"+group+"'][data-value!='"+thisval+"'],.form-tokenitem[data-switch='"+group+"'][data-value!='"+thisval+"']").removeClass("selected");
	  $(".form-tokenitem[data-group='"+group+"'][data-value='"+thisval+"'],.form-tokenitem[data-switch='"+group+"'][data-value='"+thisval+"']").addClass("selected");
      return false;
	}
  });
  $(".toggle").click(function(){
    if(!$(this).hasClass("disabled")){
	  if($(this).data("boolean") == "t|f"){
		var data_val_t = "true";
		var data_val_f = "false";
	  }else{
		var data_val_t = "on";
		var data_val_f = "off";
	  } 
	  var toggleid = $(this).data("input");
	  var dataloc = $(this).data("action");
	  if($(this).hasClass("toggle-on")){
		$("input[name='"+toggleid+"']").val(data_val_f).trigger("change");
		$(this).removeClass("toggle-on").addClass("toggle-off");
	  }else{
		$("input[name='"+toggleid+"']").val(data_val_t).trigger("change");
		$(this).removeClass("toggle-off").addClass("toggle-on");
	  }
	  if(typeof dataloc != 'undefined' && dataloc != ""){
		$.ajax({
		  type: "POST",
		  url: dataloc,
		  data: toggleid+'='+$("input[name="+toggleid+"]").val()
		});
	  }
	}
  });
}
function update_modal_loading(pct){
  $(".modal-loading-bar-container div").css("width",pct);
  $(".modal-loading-percent").text(pct);
};
function updateTotal(updateTotal_total){
  $("#total-records").text(updateTotal_total)
}
function updateStatus(updateStatus_status){
  $("#current-status").html(updateStatus_status)
}
function updateTotal_bar(updateTotal_bar_total){
  $("#loading-bar").css("width",updateTotal_bar_total)
}
function reBind_dropdowns(){
  $('.wrapper-dropdown,.wrapper-dropdown-light').unbind();
  var dd = new DropDown($('.wrapper-dropdown'));
  $(document).click(function(){$('.wrapper-dropdown').removeClass('active');});
  var dd_lt = new DropDown($('.wrapper-dropdown-light'));
  $(document).click(function(){$('.wrapper-dropdown-light').removeClass('active');});
  $('.wrapper-dropdown-light').click(function() {
    $('.wrapper-dropdown-light').not(this).removeClass('active');
  });	
}
function rebind_edithover(){
  $("td.edit-hover").hover(function() {
    $(".edit-hover-show").hide();
    $(this).children(".edit-hover-show").fadeIn();
  }, function() {
    $(this).children(".edit-hover-show").fadeOut();
  });
  $("tr.edit-hover").hover(function() {
    $("tr td.edit-hover-show a").hide();
    $(this).find("td.edit-hover-show a").fadeIn();
  }, function() {
    $(this).find("td.edit-hover-show a").fadeOut();
  });
  $("tr.edit-hover-partial").hover(function() {
    $("tr td.edit-hover-partial-show a").css("opacity",".3");
    $(this).find("td.edit-hover-partial-show a").css("opacity","1");
  }, function() {
    $(this).find("td.edit-hover-partial-show a").css("opacity",".3");
  });
}
function reBind_star(){
  $(".star-item").unbind();
  $(".star-item").click(function(){
	 if($(this).hasClass("starred")){
	   $("div.star-item[data-id='"+$(this).data("id")+"'][data-type='"+$(this).data("type")+"']").removeClass("starred");
	 }else{
	   $("div.star-item[data-id='"+$(this).data("id")+"'][data-type='"+$(this).data("type")+"']").addClass("starred");
	 }
	 $.ajax({
      type: "POST",
      url: "/pl.ajax.global.star",
      data: "q="+$(this).data("id")+"&m="+$(this).data("type")
    });
  });	
}
function reBind_bigradio(){
  $(".radio-token").click(function(){
    if(!$(this).hasClass("disabled")){
	  $(".radio-token:visible").removeClass("selected");
      $(this).addClass("selected");
	}
  });
  $(".bigradio-container").click(function(){
   if(!$(this).hasClass("selected") && !$(this).hasClass("disabled")){
	 var grp = $(this).data("group");
	 var vl = $(this).data("value");
	 if(vl=="approve"){
	   $(".bigradio-continue[data-group='"+grp+"']").fadeIn();
	 }else{
	   $(".bigradio-continue[data-group='"+grp+"']:visible").hide(); 
	 }
	 $(".bigradio-container[data-group='"+grp+"']").removeClass("selected");
	 $("input#"+grp).val(vl).trigger("change");
	 $(this).addClass("selected");
   }
 });	
}
function reBind_switchcontent(){
  $("div.supreme-accordion .label button,div.supreme-accordion .label .button").click(function(){
	 if(!$(this).parent().parent().hasClass("disabled") && !$(this).parent().parent().hasClass("no-action")){
	   $(this).parent().parent().toggleClass("opened");   
	 }
  });
  $("button.innercontent-switch").click(function(e){
	e.preventDefault();
	var i = $(this).data("switch-id");
	$("#"+i).trigger("click");
  });
  $(".switch-form-option[data-trigger!='grid-switchcontent-status'],.aside-switch-content ul li,.switch-form-option-nostyle,.congress-filter-token.switch-option,ul.switch-form-options li,.switch-content-chip").click(function(){
    var switchgrp = $(this).data("switch");
    var selected = $(this).hasClass("selected");
    if(!(selected)){
      var switchid = $(this).attr("id").replace('switch-','');
      $("[data-switch='"+switchgrp+"']").removeClass("selected");
      $(this).addClass("selected");
      $("div[data-switch='"+switchgrp+"']:not(.switch-option),form[data-switch='"+switchgrp+"']:not(.switch-option)").hide();
      $("#switch-content-"+switchid).fadeIn();
      if($(this).data("switch-field") != ""){
        $("input#"+$(this).data("switch-field")).val($(this).data("switch-field-value"));
      }
    }
    return false;
  });
  $(".switch-form-option[data-trigger='grid-switchcontent-status']").click(function(){
	  var view = $(this).data("view");
	  var filter = $(this).data("filter");
	  $("#"+view+"-noresults").hide();
	  $("table#"+view+" tr.filter-row-selectall").show();
	  $(".switch-form-option[data-trigger='grid-switchcontent-status'][data-view='"+view+"']").removeClass("selected");
	  $(this).addClass("selected");
	  if(filter == "all"){
		$("table#"+view+" tbody tr").show();
	  }else{
		$("table#"+view+" tbody tr").hide();
		$("table#"+view+" tbody tr[data-grid-switchcontent-status='"+filter+"']").show();
		var count = $("table#"+view+" tbody tr[data-grid-switchcontent-status='"+filter+"']").length;
		if(count < 1){
		  $("#"+view+"-noresults").fadeIn();
		  $("tr.filter-row-selectall").hide();
		}
	  }
	  return false;
  });
}
function global_launchHelpdesk(){
  var html_body = $("html").html();
  $("#global-helpdesk-htmlbody").val(html_body);
  trigger_screengrab('global-helpdesk-screenshot-preview','global-helpdesk-screenshot-data');
  pl_loadmodal('global-helpdesk');
  $("#global-helpdesk-support-articles").hide();
  $("#global-helpdesk-support-articles-list").html("");
  $.ajax({
    "type": "GET",
    "url": "/support/ajax/uri-lookup?q=" + encodeURIComponent(window.location),
    dataType: "json",
    success: function(data) {
	  if(data != ""){
        $.each(data, function(i,item){
          $("#global-helpdesk-support-articles-list").append("<div><a href='"+item.uri+"'>"+item.title+"</a></div>")
        })
  	    $("#global-helpdesk-support-articles").fadeIn();
	  }
    }
  });
  $("input[name='q_screenshot_include']").unbind();
  $("input[name='q_screenshot_include']").change(function(){
	 $("#global-helpdesk-screenshot-preview").slideToggle(); 
  });
  return false;
}
function trigger_screengrab(insert_element,field_value){
    html2canvas($(document.body).get(0)).then(function (canvas) {
      var base64encodedstring = canvas.toDataURL("image/png", 1);
      $('#'+insert_element).html('<img src="'+base64encodedstring+'" width="350">');
	  $("#"+field_value).val(base64encodedstring)
    });
	$("#"+insert_element).fadeIn();
}
function reBind_trigger(){
  $("a[data-duplicate-trigger='true']").click(function(){
	var dupli_var    =  $(this).attr("data-duplicate-id");
	$("[data-duplicate='"+dupli_var+"']:last").clone().insertAfter("[data-duplicate='"+dupli_var+"']:last");
	$("input[data-duplicate='"+dupli_var+"']:last,div[data-duplicate='"+dupli_var+"']:last input").val("");
	$("input[data-duplicate='"+dupli_var+"']:last,div[data-duplicate='"+dupli_var+"']:last input:first").focus();
    reBind_auto();
	rebind_maskedinput();
//    reBind_trigger();
    return false;
  });
}
function getSelectionText() {
  var text = "";
  if (window.getSelection) {
    text = window.getSelection().toString();
  } else if (document.selection && document.selection.type != "Control") {
    text = document.selection.createRange().text;
  }
  return text;
}
function sendtomobile_success(){
  $.magnificPopup.close();
  $("#global-sendtomobile input[type='submit']").removeClass("disabled")
  $("#global-sendtomobile textarea").val("");
  $("#saved").hide().text("Text message sent successfully.").slideDown();
}
function global_screengrab_success(){
  $.magnificPopup.close();
  $("#global-screengrab").reset;
  $("#global-screengrab input[type=submit]").removeClass("disabled").removeAttr("disabled").val("Send");
  $("#saved").hide().text("Your screenshot has been sent successfully.").slideDown();
}
function helpdesk_success(){
  if(window.location.hash != "#globalerror"){
    $.magnificPopup.close();
    $("#helpdesk-message").val("");
    $("#saved").hide().text("Your message to the helpdesk has been sent successfully.").slideDown();
  }
}
function reBind_globalDelete(){
  // Instant Delete
  $(".inline-delete-instant").click(function(){
    var inlineid = $(this).attr("data-inlineid"); 
    $.post($(this).attr("data-location"), { q: inlineid } );
  });
  
  $(".inline-delete-row").click(function(){
    $(this).parent().parent().remove();
  });

  // Inline Delete Routine
  $(".inline-delete").click(function(){
	  var inlineid = $(this).parent().parent().attr("data-inlineid");
	  $("tr[data-inlineid="+inlineid+"]").hide();
	  $("tr[id=inline-delete-confirm-"+inlineid+"]").fadeIn();
  });
  $("a.inline-delete-confirm-cancel").click(function(){
	  var inlineid = $(this).attr("data-inlineid");
	  $("tr[id=inline-delete-confirm-"+inlineid+"]").hide();
	  $("tr[data-inlineid="+inlineid+"]").fadeIn();
	  return false;
  });
  $("a.inline-delete-confirm-yes").click(function(){
	  var inlineid = $(this).attr("data-inlineid");
	  $.post($(this).attr("data-location"), { q: inlineid } );
	  $("tr[id=inline-delete-confirm-"+inlineid+"] td").fadeOut();
	  $("tr[id=inline-delete-confirm-"+inlineid+"] tr").remove();
	  return false;
  });
  $("a.inline-undo").click(function(){
	  var inlineid = $(this).attr("data-inlineid"); 
	  $.post($(this).attr("data-location"), { q: inlineid } );
	  if($(this).hasClass("inline-restore")){
	    $("tr[data-inlineid='"+inlineid+"']").removeClass("lighter");
	    $(this).hide();
		$(".inline-delete[data-inlineid='"+inlineid+"']").fadeIn();
	  }else{
	    $("tr[id=inline-delete-confirm-"+inlineid+"]").hide();
	    $("tr[data-inlineid="+inlineid+"]").fadeIn();
	  }
	  return false;
  });
  $("div.delete-item a").click(function(){
    $(this).parent().hide();
    $(this).parent().parent().children(".delete-item-confirm").fadeIn();
    return false;
  });
  $(".delete-item-confirm").click(function(){
    var postback  =  $(this).parent().attr("data-postback")
    if(postback == "false"){
      $(this).parent().removeAttr("action");
    }
    $(this).parent().children("input[name=action]").val($(this).attr("data-action"));
    $(this).parent().attr("enctype","application/x-www-form-urlencoded");
    $(this).parent().submit();
  });
}
function reBind_globalselectAll(){
  $("#copy-results-url,#show-contactids-field,[data-selectall='true']").click(function(){
    $(this).select() 
  });
  $('input[type=checkbox][data-trigger="filter-selectall"]').click(function() {
    var i_var = 0
    var dataview = $(this).data("view");
    if(this.checked) { // check select status
      $("table#"+dataview+" * input[name^='"+$(this).data('filter')+"']:visible").each(function() { //loop through each checkbox
        this.checked = true;
        i_var = i_var+1
      });
    }else{
      $("table#"+dataview+" * input[name^='"+$(this).data('filter')+"']:visible").each(function() { //loop through each checkbox
        this.checked = false;
        i_var = i_var+1
      });
    }
    $("input[name^='"+$(this).data('filter')+"']:visible").eq(0).trigger("change");
    var total_checked_init = $("table#"+dataview+" * tr.border td input[name^='"+$(this).data('filter')+"']:checked").length.toLocaleString('en');
    $("#total-"+dataview).text(total_checked_init);
  });
}
function updateTotal(updateTotal_total){$("#total-records").text(updateTotal_total)}
function reBind_jumpmenu(){
  $(".menu-goto").change(function(){
      if($(this).val() != ''){
      window.location = $(this).val();
    }
  });
  $(".button-goto").click(function(){
    if($(this).data("url") == "reload"){
	  location.reload();
	}else if($(this).data("url") != ''){
      window.location = $(this).data("url");
    }
  });
}
function DropDown(el) {
	this.dd = el;
	this.initEvents();
}
DropDown.prototype = {
	initEvents : function() {
		var obj = this;
		obj.dd.on('click', function(event){
		if($(this).hasClass("filter-clear")){
		  var tableid = $(this).attr("data-filtertable")
		  $(this).children("span").text($(this).attr("filter-clear"));
		  $("table#"+tableid+" tbody tr.border.hidden-"+$(this).attr("filter-group")).removeClass("hidden-"+$(this).attr("filter-group"));
		  $("table#"+tableid+" tbody tr.border").not("[class*=hidden-]").show();
		  $(this).removeAttr("filter-clear").removeClass("filter-clear");
		}else{
			$(this).toggleClass('active');
			event.stopPropagation();
		}
		});	
	}
}
function cmmx_email_image_error(error_number){
  if(error_number == "8"){
	  var err_label = "Maximum image size is 4MB. The selected file is too large. Please reduce the file size and re-upload."
  }
  $("#switch-content-imagemgr-upload-error").text(err_label).show();
  $("#switch-content-imagemgr-upload form").show();
  $("#switch-content-imagemgr-upload-loading").hide();
}
function cmmx_email_image_success(){
	$.ajax({
	  type: 'get',
	  url: '/pl.ajax.cmmx.email.image',
	  success: function(data){
		$("#switch-content-imagemgr-gallery").html(data);
  	    reBind_switchcontent();
		rebind_lightbox();
		$("#switch-imagemgr-gallery").trigger("click");
		$("#switch-content-imagemgr-upload-error").hide();
		$("#switch-content-imagemgr-upload form").show();
		$("#switch-content-imagemgr-upload form").trigger("reset");
		$("#switch-content-imagemgr-upload-loading").hide();
		if(typeof redactor3_rebind_imagelibrary !== "undefined" && typeof redactor3_rebind_imagelibrary === "function"){
  	      redactor3_rebind_imagelibrary();
	    }else if(typeof reBind_imagelibrary !== "undefined" && typeof reBind_imagelibrary === "function"){
  	      reBind_imagelibrary();
	    }
	  }
	});
}
function pl_init_psuedoform(){
	$("[data-guided-psuedo='true']:not([data-guided-psuedo-initialized='true'])").change(function(){
	  var elem = $(this).data("guided-elem");
	  var v = $(this).val();
	  if($("#form-adv "+elem).attr("type") == "radio" || $("#form-adv "+elem).attr("type") == "checkbox"){
		$("#form-adv "+elem+"[value='"+v+"']").prop("checked",true).trigger("change");
	  }else{
		$("#form-adv "+elem).val(v).trigger("change");
	  }
	}); 
	$("[data-guided-psuedo='true']:not([data-guided-psuedo-initialized='true'])").attr("data-guided-psuedo-initialized",true);
}
function pl_init_guidedform(){
	$(".form-step:not([data-step])").each(function(index){
		$(this).attr("data-step",index+1);
	});
	$(".form-step:not([data-step-title])").each(function(index){
		$(this).attr("data-step-title",$(this).children(".form-step-header").text());
	});
	$("[data-field-chain]:not([data-step])").each(function(index){
	  $(this).attr("data-step",index+1);
	  var c = $(this).data("field-chain");
	  if($(this).prop('nodeName') == "DIV"){
	    var f = $(this).find("input:first,select:first,textarea:first").filter(":not([data-field-chain])")
		f.attr("data-step",index+1);
		f.attr("data-field-chain",c);
	  }
  });
  $("input[data-field-chain],textarea[data-field-chain],select[data-field-chain]").on("change keyup",function(){
		var s = $(this).data("step")+1;
		var c = $(this).data("field-chain");
		if($(this).val() != ""){
		  $("[data-field-chain='"+c+"'][data-step='"+s+"']").fadeIn();
		  if($(this).prop('nodeName') == "SELECT"){
		    $("[data-field-chain='"+c+"'][data-step='"+s+"']").find("textarea,select,input:not([type='file'])").filter(":visible:first").focus();
		  }
		}
	});
  var progress = $("<ul />");
  $(".form-step[data-step]").each(function(index){
	  progress.append("<li data-step='"+$(this).data("step")+"'>"+$(this).data("step-title")+"</li>");
  });
  if($("#form-guided-progress").length < 1){
	$("#form-guided-progress").before('<div id="form-guided-progress" class="form-progress"></div>');  
  }
  $("#form-guided-progress").html("<ul class='noselect'>"+progress.html()+"<div class='clearer'></div></ul>")
  $("#form-guided-progress ul li:first-child").addClass("selected");
  $(".form-step").each(function(index){
	if($(this).children().find("button.form-step-continue").length < 1){
	  var x = index+2;
	  if($("#form-guided-progress ul li[data-step='"+x+"']").length >= 1){
	    var m = "<strong>NEXT: </strong>"+$("#form-guided-progress ul li[data-step='"+x+"']").text();
	  }else{
		  var m = "Save Changes & Continue";
		  var m_x = " type='submit'";
	  }
	  $(this).append("<div align='center'><button class='form-step-continue'"+m_x+">"+m+"</button></div>");
	  if(index > 0){
		$(this).append("<div align='center'><a href='#' class='smtext form-step-back'>&larr; Go Back</a></div>");  
	  }
		$(this).append("<div align='center' class='m-t-10 smtext lighter'><em>Your changes aren't saved yet</em></div>");
    }
  });
  $("button.form-step-continue[type='submit']").click(function(){
	if($("#form-guided-saving-changes").length > 0){
	  pl_loadmodal_fixed('form-guided-saving-changes');	
	}
    $(this).closest("form:visible").submit();
  });
  if($("form[data-trigger='autosubmit'] button.form-step-continue[type='submit']").length > 0){
    $("form[data-trigger='autosubmit'] button.form-step-continue[type='submit']").trigger("click");  
  }
  $(".form-step button:not([type='submit']),.form-step .form-step-back").click(function(){
	  if($(this).hasClass("form-step-back")){
		var n = $(".form-step:visible").prev(".form-step").data("step");
	  }else{
		var n = $(".form-step:visible").next(".form-step").data("step");
	  }
	  $(".form-progress ul li").removeClass("selected");
	  $(".form-progress ul li[data-step='"+n+"']").addClass("selected");
	  $(".form-step:visible").hide();
	  $(".form-step[data-step='"+n+"']").fadeIn();
	  $(".form-step[data-step='"+n+"'] input:not([type='file']):visible,.form-step[data-step='"+n+"'] select:visible").first().focus();
	  $("html, body").animate({scrollTop:100},100);
	  return false;
  });
}
function pl_rb_status_popover(){
   $("body:not(.status-popover:visible ul li,.status-trigger:visible)").click(function(){
	  $(".status-popover").hide();
	  $(".status-trigger").removeClass("active");
   });
   $(".status-trigger").click(function(e){
	  e.stopPropagation();
	  $(".status-trigger").removeClass("active");
	  var s = $(this).attr("id");
	  $(this).addClass("active");
	  $(".status-popover").hide();
	  $("#status-popover-"+s).show();
   });
   $(".status-popover ul li").click(function(e){
	  e.stopPropagation();
	  var s = $(this).data("status");
	  if(s == "-"){
	    s_cl = "notapplicable"
	  }else{
	    var s_cl = s.replace(' ','');
	    s_cl = s_cl.toLowerCase();
      }
	  $(this).parent().parent().parent().find(".status-trigger")
		.removeClass("notstarted delayed pending awaitingresponse confirmed notapplicable active arrived arrivedlate noshow");
	  $(this).parent().parent().parent().find(".status-trigger").addClass(s_cl).text(s);
	  $(".status-popover").hide();
   });
}
function pl_clipboardcopy(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(element).select();
    document.execCommand("copy");
    $temp.remove();
}
$(function(){
  reBind_auto();
});

function reBind_auto(){
  $("input[data-auto='true'][data-auto-active!='true']").each(function(){
	 if($(this).attr("id") == "" || typeof $(this).attr("id") == "undefined"){
		var field_nm = $(this).attr("name");
		var field_rand =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
		$(this).attr("id","token-input-"+field_nm+"-"+field_rand); 
	 }
  });
  $("input[data-auto='true'][data-auto-active!='true']").each(function(){
	  $(this).attr("data-auto-active","true");
      var auto_limit		=	$(this).attr("data-auto-limit");
	  if(typeof auto_limit == "undefined"){
		  auto_limit		=	1
	  };
	  var auto_noresult	=	$(this).attr("data-auto-noresult");
	  if($(this).hasClass("search-input")){
	    var token_class		=	"token-input-token-pl-search-input";
		var token_in_class	=	"token-input-input-token-search-input"
	  }
	  else if(auto_limit == "1" || $(this).hasClass("wide")){
	    var token_class		=	"token-input-token-pl-wide";
		var token_in_class	=	"token-input-input-token-wide"
	  }else{
	    var token_class		=	"token-input-token-pl";
		var token_in_class	=	"token-input-input-token-pl"
	  }
	  if($(this).attr("data-auto-append") != undefined && $(this).attr("data-auto-append") != ""){
		var auto_link		=	$(this).attr("data-auto-append")+"&q";
	  }else{
		var auto_link		=	"q"
	  }
	
	  var auto_prepopulate	=	null;
	  if($(this).attr("data-auto-prepopulate") !== undefined && $(this).attr("data-auto-prepopulate") !== ""){
		var auto_prepopulate=	[{id: $(this).attr("data-auto-prepopulate-id"), name: $(this).attr("data-auto-prepopulate")}]
	  }
	  
	  if($(this).attr("data-auto-prepopulate-id") !== undefined && $(this).attr("data-auto-prepopulate-id") !== "" && $(this).attr("data-auto-prepopulate-label") !== undefined && $(this).attr("data-auto-prepopulate-label") !== ""){
		var auto_prepopulate=	[{id: $(this).attr("data-auto-prepopulate-id"), name: $(this).attr("data-auto-prepopulate-label")}]
	  }
	
	  if($(this).attr("data-auto-prepopulate-json") !== undefined && $(this).attr("data-auto-prepopulate-json") !== ""){
		var auto_prepopulate=	$(this).data("auto-prepopulate-json");
	  }
      $("input[id='"+$(this).attr("id")+"'][data-auto='true']").tokenInput($(this).attr("id"),$(this).attr("data-auto-link"), {
		queryParam: auto_link,
		tokenLimit: auto_limit,
		prePopulate: auto_prepopulate,
		onAdd: function (item) {
		  if(item.id == auto_noresult){
		    window[auto_noresult]();
			return false;
		  }
		},
		classes: {
			tokenList: "token-input-list-pl",
			token: token_class,
			tokenDelete: "token-input-delete-token-pl",
			selectedToken: "token-input-selected-token-pl",
			highlightedToken: "token-input-highlighted-token-pl",
			dropdown: "token-input-dropdown-pl",
			dropdownItem: "token-input-dropdown-item-pl",
			dropdownItem2: "token-input-dropdown-item-pl",
			selectedDropdownItem: "token-input-selected-dropdown-item-pl",
			inputToken: token_in_class
      }
    });
	if($(this).hasClass("nomargin")){
	    $("ul.token-input-list-pl").addClass("nomargin");
	    $("div.token-input-dropdown-pl").addClass("nomargin");
	  }
	  if($(this).hasClass("short")){
	    $("ul.token-input-list-pl").addClass("short");
	  }
    if($(this).hasClass("big")){
	    $("ul.token-input-list-pl").addClass("big");
	    $("div.token-input-dropdown-pl").addClass("big");
	  }
  });
}

function modal_add_contact(){
  var search_name = $(document.activeElement).val();
  search_name = search_name.split(" ");
  if(search_name.length >= 1){
    var name_fn = search_name[0];
    var name_ln = search_name[1];
    $("#add-contact-form-fn").val(name_fn);
    $("#add-contact-form-ln").val(name_ln);
  }
  $.magnificPopup.open({
    type	: 'inline',
    items: {src: "#add-contact-form"}
  });
  setTimeout(function(){$("#add-contact-form-fn").focus()},200);
  return false;
}

function modal_add_org(){
  var search_name = $(document.activeElement).val();
  $("#add-organization-form-name").val(search_name);
  $.magnificPopup.open({
    type	: 'inline',
    items: {src: "#add-organization-form"}
  });
  setTimeout(function(){$("#add-organization-form-name").focus()},200);
  return false;
}

$(function(){
$("#add-contact-form").submit(function(){
	var form_data = $("#add-contact-form").serialize();
	var return_window = $("#add-contact-form").data("returnto");
	var menu_id = $("#add-contact-form input[type='submit']").data("returnto");
	if(typeof return_window == "undefined" || return_window == ""){
	  return_window = "add-contact-form-saved";
	}
	$.ajax({
	  type: "POST",
	  url: "/pl.people.create",
	  data: form_data,
	  success: function(data){
	    $("input[type=submit]:visible").attr("disabled",false).val("Save Changes");
		if(typeof menu_id != "undefined" && menu_id != ""){
		  $.each(JSON.parse(data), function(xx){
		    if(!isNaN(parseFloat(this.id)) && isFinite(this.id)){
		      var cx_name = this.name;
	          var cx_id = this.id;
			  $("#"+menu_id.replace('token-','token-input-')).val("");
	          $("ul#"+menu_id+" li input#"+menu_id.replace('token-','token-input-')).parent().before('<li class="token-input-token-pl-wide"><span class="token-input-delete-token-pl token-input-delete-token-pl-custom" data-menu="'+menu_id+'" data-value="'+cx_id+'">&#10799</span><p>'+cx_name+'</p></li>');
	          reBind_removeToken();
	          var id_string = cx_id + ","
	         $("ul#"+menu_id).parent().children("input[data-auto='true'][type='text']:not(:visible)").val($("ul#"+menu_id).parent().children("input[data-auto='true'][type='text']:not(:visible)").val() + id_string);
			}
		  });
		};
		$.magnificPopup.open({
		  type	: 'inline',
		  items: {src: "#"+return_window}
	    });
		$("#add-contact-form").trigger("reset");
		$("input[type='submit']:visible").attr("disabled",false).val("Save Changes");
	  }
	});
	return false;
  });
  $("#add-organization-form").submit(function(){
	var form_data = $("#add-organization-form").serialize();
	var return_window = $("#add-organization-form").data("returnto");
	var menu_id = $("#add-organization-form input[type='submit']").data("returnto");
	if(typeof return_window == "undefined" || return_window == ""){
	  return_window = "add-organization-form-saved";
	}
	$.ajax({
	  type: "POST",
	  url: "/pl.people.org.create",
	  data: form_data,
	  success: function(data){
	    $("input[type=submit]:visible").attr("disabled",false).val("Save Changes");
		if(typeof menu_id != "undefined" && menu_id != ""){
		  $.each(JSON.parse(data), function(xx){
		    if(!isNaN(parseFloat(this.id)) && isFinite(this.id)){
		      var cx_name = this.name;
	          var cx_id = this.id;
			  $("#"+menu_id.replace('token-','token-input-')).val("");
	          $("ul#"+menu_id+" li input#"+menu_id.replace('token-','token-input-')).parent().before('<li class="token-input-token-pl-wide"><span class="token-input-delete-token-pl token-input-delete-token-pl-custom" data-menu="'+menu_id+'" data-value="'+cx_id+'">&#10799</span><p>'+cx_name+'</p></li>');
	          reBind_removeToken();
	          var id_string = cx_id + ","
	         $("ul#"+menu_id).parent().children("input[data-auto='true'][type='text']:not(:visible)").val($("ul#"+menu_id).parent().children("input[data-auto='true'][type='text']:not(:visible)").val() + id_string);
			}
		  });
		};
		$.magnificPopup.open({
		  type	: 'inline',
		  items: {src: "#"+return_window}
	    });
		$("#add-organization-form").trigger("reset");
		$("input[type='submit']:visible").attr("disabled",false).val("Save Changes");
	  }
	});
	return false;
  });
});

function modal_view_allresults(menu_limit,func_menu_name,all_results_url,func_tokenmenu){
  var tokenmenu = func_tokenmenu.replace('token-','');
  var menu_name = func_menu_name.replace('token-','');
  $("#contacts-view-all-results-content").empty();
  $("#contacts-view-all-results-content-container").hide();
  $("#contacts-view-all-results-loading").show();
  $("#contacts-view-all-results .modal-back").hide().unbind();
  if($("input[id='"+menu_name+"']").data("auto-returnto") !== undefined && $("input[id='"+menu_name+"']").data("auto-returnto") != ""){
	 $("#contacts-view-all-results .modal-back")
	  .show()
	  .click(function(){
		$.magnificPopup.close();
		 setTimeout(function (){$.magnificPopup.open({
		   type	: 'inline',
		   items: {src: "#"+$("input[id='"+menu_name+"']").data("auto-returnto")}
		 })},40);
	});
  }
  $.magnificPopup.open({
	  type	: 'inline',
	  items: {src: "#contacts-view-all-results"}
  });
  $.ajax({
		  type: "GET",
		  url: "https://platform.gulfpartyline.com"+all_results_url,
		  success: function(data, responsetext, xhr){
			var table_html = "";
			$.each(JSON.parse(data), function(xx){
			  if(!isNaN(parseFloat(this.id)) && isFinite(this.id)){
   			    table_html = table_html+'<tr class="border"><td width="15"><input type="radio" name="contacts-view-all-results-content-contact" id="addperson-'+this.id+'" data-trigger="add-token" data-id="'+this.id+'" data-name="'+this.name+'"';
				if(typeof this.returnto != "undefined"){
				  table_html = table_html+' data-auto-returnto="'+this.returnto+'"';
				}				
				table_html = table_html+'></td><td><label for="addperson-'+this.id+'">'+this.name_proper+'</label></td><td width="20" align="right"><a target="_blank" href="/pl.people:'+this.id+'"><img src="/images/icon-open-new.png" height="17" class="inline-button"></a></td></tr>';
			  }
			});
			$("#contacts-view-all-results-content").html('<table width="100%" class="tabledata smtext" cellspacing="0">'+table_html+'</table>');
			$("input[name='contacts-view-all-results-content-contact']").click(function(){
			  $("#contacts-view-all-results-button").fadeIn();
			});
			$("input[data-trigger='contacts-view-all-results-content-contact-select']").click(function(){
			   var cx_name = $("input[name='contacts-view-all-results-content-contact']:checked").data("name");
			   var cx_id = $("input[name='contacts-view-all-results-content-contact']:checked").data("id");
			   $("ul#token-"+tokenmenu+" li input#token-input-"+tokenmenu).parent().before('<li class="token-input-token-pl-wide"><span class="token-input-delete-token-pl token-input-delete-token-pl-custom" data-menu="'+tokenmenu+'" data-value="'+cx_id+'">&#10799</span><p>'+cx_name+'</p></li>');
			   reBind_removeToken();
			   if(menu_limit == 1){
				   $("#token-input-"+tokenmenu).hide();
			   };
			   var id_string = $("input#"+menu_name).val() + cx_id.toString() + ","
        	   $("input#"+menu_name).val(id_string);
			   $("#contacts-view-all-results-content").empty();
			   if($("input[id='"+menu_name+"']").data("auto-returnto") == "merge-org" || $("input[id='"+menu_name+"']").data("auto-returnto") == "merge-profiles"){
			     loadmergeprofile();
			   }
			   if($("input[id='"+menu_name+"']").data("auto-returnto") != "" && $("input[id='"+menu_name+"']").data("auto-returnto") !== undefined){
			     $.magnificPopup.close();
				 setTimeout(function (){$.magnificPopup.open({
                   type	: 'inline',
                   items: {src: "#"+$("input[id='"+menu_name+"']").data("auto-returnto")}
                 })},40);
			   }else{
				$.magnificPopup.close();
			   }
			  $("input[data-trigger='contacts-view-all-results-content-contact-select']").unbind();
			});
			$("#token-input-"+tokenmenu).val('');
			$("#contacts-view-all-results-loading").hide();
			$("#contacts-view-all-results-content-container").fadeIn();
		  }
  });
  return false;
}

function reBind_removeToken(){
  $("ul li span.token-input-delete-token-pl-custom").click(function () {
	$(this).parent().remove();
	var hidden_input = $("input[id='"+$(this).data("menu")+"']");
	var hidden_val = String($(this).data("value"));
	if(!$("#token-input-"+$(this).data("menu")).is(":visible")){
	  $("#token-input-"+$(this).data("menu")).fadeIn().focus();
	}
	  var str = hidden_input.val();
      var start = str.indexOf(hidden_val+",");
      var end = str.indexOf(",", start) + 1;
	  if(end >= str.length) {
        hidden_input.val(str.slice(0, start));
      }else{
        hidden_input.val(str.slice(0, start) + str.slice(end, str.length));
      }
	return false;
  });	
}

function add_org_alert(){
  $.magnificPopup.open({
    type	: 'inline',
    items: {src: "#add-org-alert"}
  });
  setTimeout(function(){$('#add-org-alert .modal-close').focus()},20)
  $("#next-add-org").fadeIn();
  return false;
}

function modal_add_contact_another(){
  $("a[data-duplicate-id=people]").click();
  $("ul.token-input-list-pl:first li.token-input-input-token-pl input").focus();
  $("ul.token-input-list-pl:first li.token-input-input-token-wide input").focus();
}

function modal_add_venue_rooms(){
  $("#location-rooms,#pseudo-location-rooms").hide();
  $("#location-rooms,#pseudo-location-rooms").load("/pl.ajax.events.venues.rooms?q="+$("input[name=q_location]").val(), function() {
    $("#location-rooms,#pseudo-location-rooms").fadeIn();
	$("#pseudo-location-rooms input[name='q_room']").each(function(){
		$(this).attr("id","ignore-"+$(this).attr("id"));
	});
	$("#pseudo-location-rooms label[for^='q_room_']").each(function(){
		$(this).attr("for","ignore-"+$(this).attr("for"));
	});
	$("#pseudo-location-rooms input[name='q_room']").attr("name","ignore-location-room").attr("data-guided-psuedo",true).attr("data-guided-elem","input[name='q_room']");
	if(pl_rebind_psuedo instanceof Function){
	  pl_rebind_psuedo();
	}
  });
  return false;
}
