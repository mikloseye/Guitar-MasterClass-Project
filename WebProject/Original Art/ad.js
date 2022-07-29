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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ad8j6QAAAUgIAPQgHAPgKAAQgLAAgHgPQgHgPAAgUQAAgVAHgPQAHgOALAAQAKAAAHAOQAIAPAAAVgAbmjyQAAAVgIAOQgHAPgKAAQgLAAgHgPQgHgOAAgVQAAgUAHgPQAHgPALAAQAKAAAHAPQAIAPAAAUgAZajpQAAAUgIAPQgHAPgKAAQgLAAgHgPQgHgPAAgUQAAgVAHgPQAHgOALAAQAKAAAHAOQAIAPAAAVgAXbhyIAAA2IAAA1IAAA0I6KAAIlmAAIAAg0IAAg1IAAg2IAAg1IFLAAIalAAII/goIAAEnIo/grAZaBqQAAAUgIAPQgHAPgKAAQgLAAgHgPQgHgPAAgUQAAgVAHgPQAHgOALAAQAKAAAHAOQAIAPAAAVgAbsB2QAAAUgHAPQgHAPgLAAQgKAAgIgPQgHgPAAgUQAAgVAHgPQAIgOAKAAQALAAAHAOQAHAPAAAVgAeDCAQAAAUgIAPQgHAPgKAAQgLAAgHgPQgHgPAAgUQAAgVAHgPQAHgOALAAQAKAAAHAOQAIAPAAAVgAXbinIAAA1A04hyQAPgYAcgVQA/gwBZAAQBZAAA/AwQAbAVAQAYQAQAZADAdQABAIAAAIQAAATgFASQgNArgtAiQg/AwhZAAQhZAAg/gwQgtgigNgrIigAAIAACWQhbBmhFhmIAAljQBZh3BHB3IAABiIAAA2IAAA1AoVgHImOAAImkAAQgFgSAAgTQAAgIABgIIicAAAivAtQgVDyj/CvQkWDAmKAAQmJAAkXjAQkWi/AAkPQAAkOEWjAQEXi/GJAAQGKAAEWC/QC8CCA9ClAoVhyImdAAImGAAAoVg8ImKAAImsAAQADgdAQgZIivAAA4Qh1QAAAGgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgGQAAgGAEgFQAEgEAGAAQAGAAAEAEQAFAFAAAGgA5Eg/QAAAGgEAEQgEAEgGAAQgGAAgFgEQgEgEAAgGQAAgGAEgFQAFgEAGAAQAGAAAEAEQAEAFAAAGgA4Qg/QAAAGgFAEQgEAEgGAAQgGAAgEgEQgEgEAAgGQAAgGAEgFQAEgEAGAAQAGAAAEAEQAFAFAAAGgA4QgFQAAAFgFAEQgEAFgGAAQgGAAgEgFQgEgEAAgFQAAgGAEgEQAEgEAGAAQAGAAAEAEQAFAEAAAGgA5EgFQAAAFgEAEQgEAFgGAAQgGAAgFgFQgEgEAAgFQAAgGAEgEQAFgEAGAAQAGAAAEAEQAEAEAAAGgA4QA1QAAAGgFAEQgEAFgGAAQgGAAgEgFQgEgEAAgGQAAgGAEgEQAEgFAGAAQAGAAAEAFQAFAEAAAGgAoVg8IfwAAAoVgHIfwAAAoVhyIfwAA");
	this.shape.setTransform(195.575,65.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPBgQgEgFAAgFQAAgHAEgEQAFgEAGAAQAGAAAEAEQAEAEAAAHQAAAFgEAFQgEAEgGAAQgGAAgFgEgAAPAlQgEgEAAgGQAAgGAEgEQAFgEAGgBQAGABAEAEQAEAEAAAGQAAAGgEAEQgEAFgGAAQgGAAgFgFgAgjAlQgEgEAAgGQAAgGAEgEQAEgEAGgBQAGABAEAEQAFAEAAAGQAAAGgFAEQgEAFgGAAQgGAAgEgFgAAPgUQgEgFAAgFQAAgHAEgEQAFgEAGAAQAGAAAEAEQAEAEAAAHQAAAFgEAFQgEAEgGAAQgGAAgFgEgAgjgUQgEgFAAgFQAAgHAEgEQAEgEAGAAQAGAAAEAEQAFAEAAAHQAAAFgFAFQgEAEgGAAQgGAAgEgEgAAPhKQgEgFAAgFQAAgHAEgEQAFgEAGAAQAGAAAEAEQAEAEAAAHQAAAFgEAFQgEAEgGAAQgGAAgFgEg");
	this.shape_1.setTransform(36.225,62.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AlzC2IAAliQBZh3BHB3IAABiIAAA1IAAA0IAACXQguAzgoAAQgoAAgigzgAkWBSQgEAEAAAGQAAAGAEAEQAFAFAGAAQAGAAAEgFQAFgEgBgGQABgGgFgEQgEgEgGAAQgGAAgFAEgAkWAXQgEAFAAAGQAAAGAEAEQAFAEAGAAQAGAAAEgEQAFgEgBgGQABgGgFgFQgEgEgGAAQgGAAgFAEgAlJAXQgEAFAAAGQAAAGAEAEQAFAEAGAAQAFAAAEgEQAFgEAAgGQAAgGgFgFQgEgEgFAAQgGAAgFAEgAkWgiQgEAEAAAGQAAAGAEAEQAFAFAGAAQAGAAAEgFQAFgEgBgGQABgGgFgEQgEgEgGAAQgGAAgFAEgAlJgiQgEAEAAAGQAAAGAEAEQAFAFAGAAQAFAAAEgFQAFgEAAgGQAAgGgFgEQgEgEgFAAQgGAAgFAEgAkWhYQgEAEAAAGQAAAGAEAEQAFAFAGAAQAGAAAEgFQAFgEgBgGQABgGgFgEQgEgEgGAAQgGAAgFAEgAAGBtQgsgigNgsIGiAAQgNAsgsAiQhAAwhYAAQhaAAg+gwgAgzAfQgFgRgBgTIABgQIGsAAIABAQQAAATgGARgAgzAfgAF0gVgAg4gVQADgcAQgZQAQgZAbgVQA+gvBaAAQBYAABAAvQAbAVAQAZQAPAZAEAcgAFhhKImGAAg");
	this.shape_2.setTransform(65.6,61.4875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC66").s().p("AqeHOQkWi/AAkPQAAkNEWjAQEWjAGJAAQGKAAEWDAQC7CBA9CmIlKAAIAAA0ImdAAQgQgYgbgVQhAgwhXAAQhaAAg+AwQgcAVgQAYIiuAAIAAhhQhHh3hZB3IAAFiQBFBmBbhmIAAiWICgAAQANArAtAiQA+AwBagBQBXABBAgwQAsgiANgrIGPAAImPAAQAGgSAAgTIgBgQIGKAAIAAA1IAAA0IFmAAQgWDyj+CvQkWDAmKAAQmJAAkWjAgAmCgHIAAg1ICbAAIgBAQQABATAFASgAmCgHgADFg8QgEgcgPgaIGdAAIAAA2gADFg8gAmCg8IAAg2ICuAAQgQAagDAcgAmCg8gACyhygAjUhyg");
	this.shape_3.setTransform(83.1,65.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#996633").s().p("AqRBqIlnAAIAAg1IAAg1IfxAAI/xAAIAAg1IAAg0IFLAAIamAAIAAA0I/xAAIfxAAIAAA1IAAA1I/xAAIfxAAIAAA1gAP5g1g");
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

	// Layer_1
	this.instance = new lib.guitars("synched",0);
	this.instance.setTransform(-214.95,137.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-202.8668,y:142.003},0).wait(1).to({x:-190.6322,y:146.5676},0).wait(1).to({x:-178.3215,y:150.953},0).wait(1).to({x:-165.9698,y:155.1841},0).wait(1).to({x:-153.552,y:159.279},0).wait(1).to({x:-141.0944,y:163.2264},0).wait(1).to({x:-128.6071,y:167.0147},0).wait(1).to({x:-116.0439,y:170.642},0).wait(1).to({x:-103.4344,y:174.0766},0).wait(1).to({x:-90.7816,y:177.2865},0).wait(1).to({x:-78.0469,y:180.2367},0).wait(1).to({x:-65.2513,y:182.8576},0).wait(1).to({x:-52.4089,y:185.2226},0).wait(1).to({x:-39.5625,y:187.607},0).wait(1).to({x:-26.714,y:190.0044},0).wait(1).to({x:-13.8748,y:192.4091},0).wait(1).to({x:-1.0368,y:194.8215},0).wait(1).to({x:11.7889,y:197.239},0).wait(1).to({x:24.6339,y:199.6675},0).wait(1).to({x:37.4779,y:202.1035},0).wait(1).to({x:50.313,y:204.5458},0).wait(1).to({x:63.1397,y:206.9953},0).wait(1).to({x:75.9703,y:209.4552},0).wait(1).to({x:88.8012,y:211.9261},0).wait(1).to({x:101.6196,y:214.4073},0).wait(1).to({x:114.4509,y:216.9063},0).wait(1).to({x:127.2641,y:219.4204},0).wait(1).to({x:140.0038,y:219.6914},0).wait(1).to({x:151.6083,y:213.7163},0).wait(1).to({x:162.102,y:205.9725},0).wait(1).to({x:171.4661,y:196.8812},0).wait(1).to({x:180.4542,y:187.3881},0).wait(1).to({x:189.9297,y:178.4009},0).wait(1).to({x:199.6321,y:169.6531},0).wait(1).to({x:209.5042,y:161.0989},0).wait(1).to({x:219.5346,y:152.7236},0).wait(1).to({x:229.7081,y:144.5433},0).wait(1).to({x:240.0481,y:136.5607},0).wait(1).to({x:250.5698,y:128.8029},0).wait(1).to({x:261.4502,y:121.573},0).wait(1).to({x:272.5701,y:114.7078},0).wait(1).to({x:284.7465,y:111.378},0).wait(1).to({x:297.2761,y:114.9235},0).wait(1).to({x:308.5533,y:121.4484},0).wait(1).to({x:318.171,y:130.2923},0).wait(1).to({x:327.0568,y:139.8555},0).wait(1).to({x:335.7083,y:149.6535},0).wait(1).to({x:344.1353,y:159.6443},0).wait(1).to({x:352.288,y:169.8465},0).wait(1).to({x:360.0673,y:180.337},0).wait(1).to({x:367.6265,y:190.9992},0).wait(1).to({x:375.0862,y:201.7219},0).wait(1).to({x:382.4571,y:212.5085},0).wait(1).to({x:392.3549,y:219.6165},0).wait(1).to({x:405.2458,y:217.5586},0).wait(1).to({x:418.1179,y:215.2859},0).wait(1).to({x:430.9617,y:212.8478},0).wait(1).to({x:443.7547,y:210.2813},0).wait(1).to({x:456.5477,y:207.5994},0).wait(1).to({x:469.3206,y:204.8231},0).wait(1).to({x:482.0711,y:201.9659},0).wait(1).to({x:494.7944,y:199.0391},0).wait(1).to({x:507.5108,y:196.0462},0).wait(1).to({x:520.2152,y:192.995},0).wait(1).to({x:532.9062,y:189.8909},0).wait(1).to({x:545.5839,y:186.7384},0).wait(1).to({x:558.2482,y:183.541},0).wait(1).to({x:570.9124,y:180.2984},0).wait(1).to({x:583.5548,y:177.0183},0).wait(1).to({x:596.1785,y:173.702},0).wait(1).to({x:608.8213,y:170.3407},0).wait(1).to({x:621.4325,y:166.9487},0).wait(1).to({x:634.0301,y:163.5216},0).wait(1).to({x:646.6279,y:160.055},0).wait(1).to({x:659.2183,y:156.5495},0).wait(1).to({x:671.795,y:153.0042},0).wait(1).to({x:684.3594,y:149.4131},0).wait(1).to({x:696.9031,y:145.768},0).wait(1).to({x:709.4329,y:142.042},0).wait(1).to({x:721.9,y:138.15},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-104.3,173.2,990.5999999999999,187.40000000000003);
// library properties:
lib.properties = {
	id: '4547028C4F2044518083216EA6C48E9C',
	width: 550,
	height: 400,
	fps: 24,
	color: "#222222",
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