(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ad8j6QAAAUgIAPQgHAPgKAAQgLAAgHgPQgHgPAAgUQAAgVAHgPQAHgOALAAQAKAAAHAOQAIAPAAAVgAbmjyQAAAVgIAOQgHAPgKAAQgLAAgHgPQgHgOAAgVQAAgUAHgPQAHgPALAAQAKAAAHAPQAIAPAAAUgAZajpQAAAUgIAPQgHAPgKAAQgLAAgHgPQgHgPAAgUQAAgVAHgPQAHgOALAAQAKAAAHAOQAIAPAAAVgAZaBqQAAAUgIAPQgHAPgKAAQgLAAgHgPQgHgPAAgUQAAgVAHgPQAHgOALAAQAKAAAHAOQAIAPAAAVgAXbhyIAAA2IAAA1IAAA0I6KAAIlmAAIAAg0IAAg1IAAg2ImdAAQAQAZADAdQABAIAAAIQAAATgFASQgNArgtAiQg/AwhZAAQhZAAg/gwQgtgigNgrIigAAIAACWQhbBmhFhmIAAljQBZh3BHB3IAABiIAAA2IAAA1AbsB2QAAAUgHAPQgHAPgLAAQgKAAgIgPQgHgPAAgUQAAgVAHgPQAIgOAKAAQALAAAHAOQAHAPAAAVgAeDCAQAAAUgIAPQgHAPgKAAQgLAAgHgPQgHgPAAgUQAAgVAHgPQAHgOALAAQAKAAAHAOQAIAPAAAVgAXbinIAAA1AXbinII/goIAAEnIo/grA04hyQAPgYAcgVQA/gwBZAAQBZAAA/AwQAbAVAQAYgAoVg8ImKAAImsAAIicAAAoVhyIAAg1IFLAAIalAAAivAtQgVDyj/CvQkWDAmKAAQmJAAkXjAQkWi/AAkPQAAkOEWjAQEXi/GJAAQGKAAEWC/QC8CCA9ClAoVgHImOAAImkAAQgFgSAAgTQAAgIABgIQADgdAQgZIivAAA4Qh1QAAAGgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgGQAAgGAEgFQAEgEAGAAQAGAAAEAEQAFAFAAAGgA5Eg/QAAAGgEAEQgEAEgGAAQgGAAgFgEQgEgEAAgGQAAgGAEgFQAFgEAGAAQAGAAAEAEQAEAFAAAGgA4Qg/QAAAGgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgGQAAgGAEgFQAEgEAGAAQAGAAAEAEQAFAFAAAGgA4QgFQAAAFgFAEQgEAFgGAAQgGAAgEgFQgEgEAAgFQAAgGAEgEQAEgEAGAAQAGAAAEAEQAFAEAAAGgA5EgFQAAAFgEAEQgEAFgGAAQgGAAgFgFQgEgEAAgFQAAgGAEgEQAFgEAGAAQAGAAAEAEQAEAEAAAGgA4QA1QAAAGgFAEQgEAFgGAAQgGAAgEgFQgEgEAAgGQAAgGAEgEQAEgFAGAAQAGAAAEAFQAFAEAAAGgAoVhyIfwAAAoVgHIfwAAAoVg8IfwAA");
	this.shape.setTransform(195.575,65.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPBgQgEgFAAgFQAAgHAEgEQAFgEAGAAQAGAAAEAEQAEAEAAAHQAAAFgEAFQgEAEgGAAQgGAAgFgEgAAPAlQgEgEAAgGQAAgGAEgEQAFgEAGgBQAGABAEAEQAEAEAAAGQAAAGgEAEQgEAFgGAAQgGAAgFgFgAgjAlQgEgEAAgGQAAgGAEgEQAEgEAGgBQAGABAEAEQAFAEAAAGQAAAGgFAEQgEAFgGAAQgGAAgEgFgAAPgUQgEgFAAgFQAAgHAEgEQAFgEAGAAQAGAAAEAEQAEAEAAAHQAAAFgEAFQgEAEgGAAQgGAAgFgEgAgjgUQgEgFAAgFQAAgHAEgEQAEgEAGAAQAGAAAEAEQAFAEAAAHQAAAFgFAFQgEAEgGAAQgGAAgEgEgAAPhKQgEgFAAgFQAAgHAEgEQAFgEAGAAQAGAAAEAEQAEAEAAAHQAAAFgEAFQgEAEgGAAQgGAAgFgEg");
	this.shape_1.setTransform(36.225,62.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AlzC2IAAliQBZh3BHB3IAABiIAAA1IAAA0IAACXQguAzgoAAQgoAAgigzgAkWBSQgEAEAAAGQAAAGAEAEQAFAFAGAAQAGAAAEgFQAFgEgBgGQABgGgFgEQgEgEgGAAQgGAAgFAEgAkWAXQgEAFAAAGQAAAGAEAEQAFAEAGAAQAGAAAEgEQAFgEgBgGQABgGgFgFQgEgEgGAAQgGAAgFAEgAlJAXQgEAFAAAGQAAAGAEAEQAFAEAGAAQAFAAAEgEQAFgEAAgGQAAgGgFgFQgEgEgFAAQgGAAgFAEgAkWgiQgEAEAAAGQAAAGAEAEQAFAFAGAAQAGAAAEgFQAFgEgBgGQABgGgFgEQgEgEgGAAQgGAAgFAEgAlJgiQgEAEAAAGQAAAGAEAEQAFAFAGAAQAFAAAEgFQAFgEAAgGQAAgGgFgEQgEgEgFAAQgGAAgFAEgAkWhYQgEAEAAAGQAAAGAEAEQAFAFAGAAQAGAAAEgFQAFgEgBgGQABgGgFgEQgEgEgGAAQgGAAgFAEgAAGBtQgsgigNgsIGiAAQgNAsgsAiQhAAwhYAAQhaAAg+gwgAgzAfQgFgRgBgTIABgQIGsAAIABAQQAAATgGARgAgzAfgAg4gVQADgcAQgZQAQgZAbgVQA+gvBaAAQBYAABAAvQAbAVAQAZQAPAZAEAcgAFhhKImGAAg");
	this.shape_2.setTransform(65.6,61.4875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC66").s().p("AqeHOQkWi/AAkPQAAkNEWjAQEWjAGJAAQGKAAEWDAQC7CBA9CmIlKAAIAAA0ImdAAQgQgYgbgVQhAgwhXAAQhaAAg+AwQgcAVgQAYIiuAAIAAhhQhHh3hZB3IAAFiQBFBmBbhmIAAiWICgAAQANArAtAiQA+AwBagBQBXABBAgwQAsgiANgrQAGgSAAgTIgBgQIGKAAIAAA1ImPAAIGPAAIAAA0IFmAAQgWDyj+CvQkWDAmKAAQmJAAkWjAgAmCgHIAAg1IAAg2ICuAAQgQAagDAcIibAAICbAAIgBAQQABATAFASgAmCgHgADFg8QgEgcgPgaIGdAAIAAA2gADFg8gACyhygAmChyg");
	this.shape_3.setTransform(83.1,65.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#996633").s().p("AqRBqIlnAAIAAg1IAAg1IAAg1IfxAAI/xAAIAAg0IFLAAIamAAIAAA0IAAA1I/xAAIfxAAIAAA1I/xAAIfxAAIAAA1gAP5AAg");
	this.shape_4.setTransform(243.85,59.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("ACDDgQgIgOABgVQgBgUAIgPQAHgPALAAQAKAAAHAPQAIAPgBAUQABAVgIAOQgHAPgKAAQgLAAgHgPgAgTDWQgHgOAAgVQAAgUAHgPQAIgPAKAAQAJAAAIAPQAHAPAAAUQAAAVgHAOQgIAPgJAAQgKAAgIgPgAilDLQgIgPABgUQgBgVAIgPQAHgOALAAQAKAAAHAOQAIAPgBAVQABAUgIAPQgHAPgKAAQgLAAgHgPgAiliIQgIgPABgUQgBgVAIgPQAHgOALAAQAKAAAHAOQAIAPgBAVQABAUgIAPQgHAPgKAAQgLAAgHgPgAgaiRQgGgOgBgVQABgUAGgPQAIgPAKAAQAKAAAHAPQAHAPAAAUQAAAVgHAOQgHAPgKAAQgKAAgIgPgAB8iZQgIgPAAgUQAAgVAIgPQAHgOALAAQAKAAAHAOQAIAPAAAVQAAAUgIAPQgHAPgKAAQgLAAgHgPg");
	this.shape_5.setTransform(370.5,59.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AkeBpIAAg1IAAg0IAAg2IAAg0II9gpIAAEng");
	this.shape_6.setTransform(374.225,59.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-12.8,-1,416.8,132.8), null);


(lib.guitar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// guitar1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(-48,-39.2,1,1,0,0,0,207.3,65.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(23));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-267.6,-105.1,415.8,131.79999999999998);


(lib.guitars = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.guitar("synched",0);
	this.instance.setTransform(10.9,-13.7,0.8092,0.7365,-49.5551,0,0,-0.1,0.1);

	this.instance_1 = new lib.guitar("synched",0);
	this.instance_1.setTransform(38.3,-57.65,0.8092,0.7365,-128.5315,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.3,-138.2,328.70000000000005,279.2);


// stage content:
(lib.ad = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("MIKLOSEY GUITARS", "bold 32px 'Kefa'", "#F3B307");
	this.text.textAlign = "center";
	this.text.lineHeight = 39;
	this.text.lineWidth = 385;
	this.text.parent = this;
	this.text.setTransform(271.5,343.05);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(94));

	// Layer_1
	this.instance = new lib.guitars("synched",0);
	this.instance.setTransform(-226.85,134.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-216.4689,y:138.3457},0).wait(1).to({x:-205.9442,y:142.3184},0).wait(1).to({x:-195.3588,y:146.1446},0).wait(1).to({x:-184.7433,y:149.8494},0).wait(1).to({x:-174.0874,y:153.4481},0).wait(1).to({x:-163.3915,y:156.9431},0).wait(1).to({x:-152.6666,y:160.3281},0).wait(1).to({x:-141.8964,y:163.602},0).wait(1).to({x:-131.1075,y:166.7469},0).wait(1).to({x:-120.2662,y:169.7594},0).wait(1).to({x:-109.3839,y:172.6178},0).wait(1).to({x:-98.4585,y:175.2985},0).wait(1).to({x:-87.496,y:177.7677},0).wait(1).to({x:-76.0652,y:180.0616},0).wait(1).to({x:-65.4008,y:182.0208},0).wait(1).to({x:-54.344,y:184.0709},0).wait(1).to({x:-43.2796,y:186.1327},0).wait(1).to({x:-32.2236,y:188.2003},0).wait(1).to({x:-21.1685,y:190.2738},0).wait(1).to({x:-10.1188,y:192.352},0).wait(1).to({x:0.9359,y:194.4367},0).wait(1).to({x:11.9918,y:196.527},0).wait(1).to({x:23.0338,y:198.6204},0).wait(1).to({x:34.0853,y:200.7214},0).wait(1).to({x:45.1454,y:202.8303},0).wait(1).to({x:56.1935,y:204.9438},0).wait(1).to({x:67.2392,y:207.0643},0).wait(1).to({x:78.277,y:209.1917},0).wait(1).to({x:89.3208,y:211.3299},0).wait(1).to({x:100.3583,y:213.478},0).wait(1).to({x:111.4062,y:215.6416},0).wait(1).to({x:122.4448,y:217.8197},0).wait(1).to({x:133.0851,y:214.4804},0).wait(1).to({x:142.7436,y:208.7062},0).wait(1).to({x:151.5856,y:201.7741},0).wait(1).to({x:159.5725,y:193.8742},0).wait(1).to({x:167.2645,y:185.6627},0).wait(1).to({x:175.374,y:177.8663},0).wait(1).to({x:183.6694,y:170.271},0).wait(1).to({x:192.1077,y:162.8219},0).wait(1).to({x:200.6522,y:155.521},0).wait(1).to({x:209.3177,y:148.3484},0).wait(1).to({x:218.1011,y:141.3125},0).wait(1).to({x:226.9972,y:134.4322},0).wait(1).to({x:236.0185,y:127.7213},0).wait(1).to({x:245.269,y:121.3354},0).wait(1).to({x:254.7593,y:115.2936},0).wait(1).to({x:264.4398,y:109.535},0).wait(1).to({x:275.3378,y:108.7818},0).wait(1).to({x:286.0316,y:112.2103},0).wait(1).to({x:295.7714,y:117.8024},0).wait(1).to({x:304.2243,y:125.1919},0).wait(1).to({x:311.9679,y:133.3577},0).wait(1).to({x:319.4958,y:141.7142},0).wait(1).to({x:326.8612,y:150.2182},0).wait(1).to({x:334.0519,y:158.8652},0).wait(1).to({x:341.0358,y:167.6868},0).wait(1).to({x:347.7235,y:176.7182},0).wait(1).to({x:354.2421,y:185.8885},0).wait(1).to({x:360.6822,y:195.1014},0).wait(1).to({x:367.0675,y:204.3764},0).wait(1).to({x:373.3836,y:213.7087},0).wait(1).to({x:382.6491,y:216.2843},0).wait(1).to({x:393.7562,y:214.4892},0).wait(1).to({x:404.8297,y:212.5399},0).wait(1).to({x:415.8966,y:210.4625},0).wait(1).to({x:426.9212,y:208.2858},0).wait(1).to({x:437.9411,y:206.0187},0).wait(1).to({x:448.953,y:203.6739},0).wait(1).to({x:459.9399,y:201.265},0).wait(1).to({x:470.893,y:198.8017},0).wait(1).to({x:481.8638,y:196.2788},0).wait(1).to({x:492.8162,y:193.7094},0).wait(1).to({x:503.7567,y:191.0965},0).wait(1).to({x:514.6944,y:188.4414},0).wait(1).to({x:525.6125,y:185.7512},0).wait(1).to({x:536.5217,y:183.026},0).wait(1).to({x:547.4321,y:180.2652},0).wait(1).to({x:558.3254,y:177.4754},0).wait(1).to({x:569.2215,y:174.6529},0).wait(1).to({x:580.0966,y:171.8051},0).wait(1).to({x:590.9622,y:168.93},0).wait(1).to({x:601.8347,y:166.0238},0).wait(1).to({x:612.6958,y:163.0918},0).wait(1).to({x:623.5518,y:160.1323},0).wait(1).to({x:634.3911,y:157.1482},0).wait(1).to({x:645.2322,y:154.1333},0).wait(1).to({x:656.0632,y:151.0893},0).wait(1).to({x:666.8805,y:148.0142},0).wait(1).to({x:677.6914,y:144.9009},0).wait(1).to({x:688.4867,y:141.7424},0).wait(1).to({x:699.3819,y:138.4815},0).wait(1).to({x:710,y:135.15},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-116.2,170.6,990.6,250.50000000000003);
// library properties:
lib.properties = {
	id: '4547028C4F2044518083216EA6C48E9C',
	width: 550,
	height: 400,
	fps: 24,
	color: "#7A3A13",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4547028C4F2044518083216EA6C48E9C'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;