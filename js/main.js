
	(function (lib, img, cjs, ss, an) {
	var p; // shortcut to reference prototypes
	lib.webFontTxtInst = {};
	var loadedTypekitCount = 0;
	var loadedGoogleCount = 0;
	var gFontsUpdateCacheList = [];
	var tFontsUpdateCacheList = [];
	lib.ssMetadata = [];
	lib.updateListCache = function (cacheList) {
		for(var i = 0; i < cacheList.length; i++) {
			if(cacheList[i].cacheCanvas)
				cacheList[i].updateCache();
		}
	};
	lib.addElementsToCache = function (textInst, cacheList) {
		var cur = textInst;
		while(cur != exportRoot) {
			if(cacheList.indexOf(cur) != -1)
				break;
			cur = cur.parent;
		}
		if(cur != exportRoot) {
			var cur2 = textInst;
			var index = cacheList.indexOf(cur);
			while(cur2 != cur) {
				cacheList.splice(index, 0, cur2);
				cur2 = cur2.parent;
				index++;
			}
		}
		else {
			cur = textInst;
			while(cur != exportRoot) {
				cacheList.push(cur);
				cur = cur.parent;
			}
		}
	};
	lib.gfontAvailable = function(family, totalGoogleCount) {
		lib.properties.webfonts[family] = true;
		var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
		for(var f = 0; f < txtInst.length; ++f)
			lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);
		loadedGoogleCount++;
		if(loadedGoogleCount == totalGoogleCount) {
			lib.updateListCache(gFontsUpdateCacheList);
		}
	};
	lib.tfontAvailable = function(family, totalTypekitCount) {
		lib.properties.webfonts[family] = true;
		var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
		for(var f = 0; f < txtInst.length; ++f)
			lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);
		loadedTypekitCount++;
		if(loadedTypekitCount == totalTypekitCount) {
			lib.updateListCache(tFontsUpdateCacheList);
		}
	};
	// symbols:
	// helper functions:
	function mc_symbol_clone() {
		var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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
	(lib.Symbol4 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#EE3E58").s().p("AgHA2IgDiIQgBgFADgDQADgEAFAAQAEgBADADQAEADABAFIgDA7IgTB4g");
		this.shape.setTransform(62.3,23.5,1.001,1.001);
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#EE3E58").s().p("AhTASIA7gWIA+gOIANgBIAcgCQAFAAADAEQAEADAAAEQAAAFgDAEQgDACgFAAIhHgBIg8AKIgnAMg");
		this.shape_1.setTransform(91.5,44.9,1.001,1.001);
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#EE3E58").s().p("AA7AWIgCAAIgXgOIgbgLIglgLIgsgIIAhAAIANAAIANACIANABIArALIAbAKQAEACACADQACAFgCAEQgCAFgEABIgFABIgEgBg");
		this.shape_2.setTransform(83.1,62.3,1.001,1.001);
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#EE3E58").s().p("AA0AjIgugkIgVgOIghgPIgVgGIANABIAgAHIAMAFIAlAQIAoAXQAEACABAFQABAFgDAEQgCAEgFABIgCAAQgEAAgDgCg");
		this.shape_3.setTransform(91.1,68.2,1.001,1.001);
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#EE3E58").s().p("ABHBCQgFAAgCgEIgBgBIgBgCIgFgJIgCgCIgBgCIgQgWIgmgjQgXgTghgUIgbgQIAdANQAhAPAbASIAQALIAPAKIAiAgIABACIACACIAIALQADAEgBAFQAAAFgEACQgDADgDAAIgDgBg");
		this.shape_4.setTransform(73.7,72.5,1.001,1.001);
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#EE3E58").s().p("AgTBAQgEAAgDgEQgEgDABgFIAHgbIAOgeIAagrQAHgKAFgGIgSAkIgEALIgGAQIgGAfIgCAYQgBAFgDADQgDADgEAAIgCgBg");
		this.shape_5.setTransform(48.5,80.1,1.001,1.001);
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#EE3E58").s().p("AABBXQgCgDgBgFIgEhFIgNhhIADAGIAjCcQABAFgDAEQgCAEgFAAIgCAAQgEAAgDgBg");
		this.shape_6.setTransform(62.8,82.5,1.001,1.001);
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#EE3E58").s().p("AhJAgQgFgCgCgEQgCgEABgEQACgFAEgCIA5gTIBlgXIgHACIgRAGIhaAlIgiARIgFABIgDAAg");
		this.shape_7.setTransform(19.1,70,1.001,1.001);
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#EE3E58").s().p("AhlBZQgEgDAAgFQgBgFADgEIAegeIBGg6IBthKIh3BiIg5A8IgPATQgDAEgFAAIgBAAQgEAAgDgCg");
		this.shape_8.setTransform(40.9,72.6,1.001,1.001);
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#EE3E58").s().p("ABLAKIgggEIgSgBIgTgBIhQACIgTADQgFABgDgDQgEgDgBgEQAAgEACgEQADgEAFgBIAUgBIAdABIASABIBpASIAfAJIgggFg");
		this.shape_9.setTransform(11.5,43.4,1.001,1.001);
		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#EE3E58").s().p("AgNAAIgTgGIhDgRQgEgBgDgEQgCgEABgFQABgEADgDQAEgCAFAAIABABIAhALIAQAGIBJAgIBPArg");
		this.shape_10.setTransform(19.8,33.4,1.001,1.001);
		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#EE3E58").s().p("AAiAJIh1gbIg6gIQgFAAgDgEQgDgEABgEQAAgFAEgDQAEgDAEABIABAAIBfAXIAbAIICdA8IAMAGg");
		this.shape_11.setTransform(34.7,50.8,1.001,1.001);
		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#EE3E58").s().p("AjHANQgDgCgBgFQgBgFADgDQADgDAEgBIABAAIArgFIATgCIAfgBIB+ABIAJAAICGASIAkAJIgkgHIhZgIIgSgBIgSAAIgJgBIhAABIgkACIgiACIgdAEIg+AJIgCAAQgEAAgDgCg");
		this.shape_12.setTransform(31.1,56.7,1.001,1.001);
		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#EE3E58").s().p("AA2AnIg7gqIg9gfQgFgCgBgFQgCgEACgFQACgEAEgCQAFgBAEACIABAAIBMA4IAlAkIARAUg");
		this.shape_13.setTransform(27.8,25.4,1.001,1.001);
		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#EE3E58").s().p("AA3A/IACACgAAqAtIgZgdIgngmIgcgVQgEgCgBgFQgBgFADgEQACgEAFgBQAFAAAEACIABABIALAKIAgAmIAwBMIgNgSg");
		this.shape_14.setTransform(33.6,16.8,1.001,1.001);
		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#EE3E58").s().p("ACKCHIgxhIIhYhwIg2g4IhFg3IgsgXIgHgCQgDgCgDgFQgCgEACgFQADgEADgBQAFgDAEADIABAAIAtAYIAHAFIAWARIAPAMIAqAnIBkB/IBIBzQAZAsAPAgQgPgegbgsg");
		this.shape_15.setTransform(39.1,34.9,1.001,1.001);
		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#EE3E58").s().p("AAqg6QAEgEAFAAQAEAAAEADQAHAIgHAJIgBABIh3Bog");
		this.shape_16.setTransform(81.8,25.6,1.001,1.001);
		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#EE3E58").s().p("AhIBAICDiCQADgEAFAAQAFABADADQADAEAAAEQAAAFgDADIgBABIiKBsIgNAMg");
		this.shape_17.setTransform(80.2,37.8,1.001,1.001);
		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#EE3E58").s().p("AChAjIAAAAIgbgRIgsgTIg7gQIgQgDIgwgGIgggCIg5ABIgoADIgQACIAQgCIBDgJIA+gDIBCAFIAhAGIA4AQIAmARIANAIQAEACABAFQACAFgDAEQgCAEgFABIgDAAQgDAAgDgCg");
		this.shape_18.setTransform(81.5,60.4,1.001,1.001);
		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#EE3E58").s().p("ABiCFQgFgBgDgEIAAgBIhYiDIhUhnIgcgZIAeAXIBbBiIBiB9QACAEAAAFQgBAFgEACQgDADgEAAIgBAAg");
		this.shape_19.setTransform(72.5,78,1.001,1.001);
		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("#EE3E58").s().p("AjaAZQgFgCgBgFQgBgEADgEQACgFAFgBIAAAAIDbgcIAVgBICfgBIApADIhmABIglACIigASIiIAdIgCAAQgDAAgDgCg");
		this.shape_20.setTransform(29.8,62.4,1.001,1.001);
		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#EE3E58").s().p("Ai7BGIAtgsIAhgaIA0gjIBDgiIBFgXIBVgQIAZgBIAXAAQAEAAADAEQAEADgBAFQAAAFgDADQgEADgFAAIgCAAIgEgBIgnAAQgMAAgTADIgkAFIgUAEIg/ATIhDAeIg1AfIghAZIgIAGIhLBKg");
		this.shape_21.setTransform(87,45.2,1.001,1.001);
		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("#EE3E58").s().p("AhVC6IBMjuIASgwQAIgVALgYIA5h4QACgEAFgCQAEgBAEACQAEACACAEQABAFgCAEIg9B2QgMAXgIAUIg7CRIgSAxIg0Ctg");
		this.shape_22.setTransform(70.4,27.3,1.001,1.001);
		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("#EE3E58").s().p("ABTCHIgEgTIgihnIgwhkQgIgQgOgTIgVgeIgkgpIgLgKIgEgDQgDgDgBgFQAAgFADgDQADgEAEgBQAFAAAEADIAEAEIAvA5IAVAfQAMAVAIAQIAUAoIARArIAIAVIAjCGIAMBVg");
		this.shape_23.setTransform(46.1,25.4,1.001,1.001);
		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f("#F9BF64").s().p("AgXg/QgCgEACgEQABgFAFgCQAEgBAFACQAEABACAFIAAABIARBRIAKBEg");
		this.shape_24.setTransform(52,14.4,1.001,1.001);
		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("#F9BF64").s().p("ABQARIgBAAIAAAAIgQgGIgdgKIhHgKIg4AAIApgGIAxgCIAHABIAIAAIAJAAIA5AKIAIACQAEABADAEQACAEgBAEQgBAFgEACQgDACgDAAIgDgBg");
		this.shape_25.setTransform(85,55.7,1.001,1.001);
		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f("#F9BF64").s().p("ABzASIgBgBIhWgTIhOgEIg3AFIgMABIgLACIA4gNIBDgGIAdAAIAQABIA5AHIAXAFQAEABADADQACAEgBAFQAAAEgFADQgCACgEAAIgCAAg");
		this.shape_26.setTransform(90.9,51.9,1.001,1.001);
		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("#F9BF64").s().p("AgGBRQgEgCgBgFIAAgmIALh3IAGB2IAFAjQABAFgDAEQgCAEgFAAIgCABQgDAAgDgDg");
		this.shape_27.setTransform(57.1,80.3,1.001,1.001);
		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.f("#F9BF64").s().p("AA/CBQgEgCgBgFIAAgBIgBgDIgBgEIgEgSIgZg7IgZguQgXgqgfgqIgbglIAeAjQAjApAaAnIAqBCIAUAuIAGATQABAFgCAEQgDAEgEABIgDABIgGgCg");
		this.shape_28.setTransform(66.9,79.4,1.001,1.001);
		this.shape_29 = new cjs.Shape();
		this.shape_29.graphics.f("#F9BF64").s().p("AgXCKQgEgDgBgEIAAgXIAEgsIAThhIAihrIgaBtIgKBhIACA/QABAEgDAEQgDADgFABIgCAAQgDAAgDgDg");
		this.shape_29.setTransform(53.5,82.5,1.001,1.001);
		this.shape_30 = new cjs.Shape();
		this.shape_30.graphics.f("#F9BF64").s().p("Ah7ARQgEgCgBgFQgBgFADgEQACgDAFgBIABAAID3gPIi7AZIg4AMIgDAAQgDAAgDgCg");
		this.shape_30.setTransform(36.2,63.7,1.001,1.001);
		this.shape_31 = new cjs.Shape();
		this.shape_31.graphics.f("#F9BF64").s().p("AiNBWQgEgDAAgFQAAgFAEgDIAAgBIAxgqIBIguIBdgtIBJgZIhsAyIhiBAIgUARIgtAsQgDAEgFgBQgEABgEgEg");
		this.shape_31.setTransform(27.8,74.8,1.001,1.001);
		this.shape_32 = new cjs.Shape();
		this.shape_32.graphics.f("#F9BF64").s().p("AiRALQgEgDgBgFQAAgDACgEQADgEAFgBIABAAIAagCIATgBID1ANIhEgBIjJAJIgSAEIgDAAQgDAAgDgCg");
		this.shape_32.setTransform(15.1,52.4,1.001,1.001);
		this.shape_33 = new cjs.Shape();
		this.shape_33.graphics.f("#F9BF64").s().p("ACCArQgmgTgRgHIhAgaIgQgGIghgLIgQgEIgtgLIglgFIgFgBIgFAAIgIgBIgQAAQgFAAgDgEQgDgDAAgFQAAgFADgDQAEgDAEAAIABAAIAkAEIA1AMIAfAKICAA3IA1AeQAfASATAOQgUgMgggRg");
		this.shape_33.setTransform(28.9,44.2,1.001,1.001);
		this.shape_34 = new cjs.Shape();
		this.shape_34.graphics.f("#F9BF64").s().p("AA0BOIgphLIgyg/IgCgCIgOgOQgDgDAAgFQAAgFADgDQAEgDAEAAQAFAAADADIABABIAQAUIAhA0IAKARIAJARIAUAxIAJAgg");
		this.shape_34.setTransform(44,25.5,1.001,1.001);
		this.shape_35 = new cjs.Shape();
		this.shape_35.graphics.f("#F9BF64").s().p("AgOB7IAQiDIABiaQAAgFAEgDQADgEAEAAQAFAAAEADQADADAAAFIgJCMIghCoIgJAeg");
		this.shape_35.setTransform(64.9,17.6,1.001,1.001);
		this.shape_36 = new cjs.Shape();
		this.shape_36.graphics.f("#F9BF64").s().p("AATAvIgcjFIgShFQgBgFACgEQACgEAFgCQAEgBAEACQAEADACAEIAAABIAHAjIASBuIAIB/IgCC8g");
		this.shape_36.setTransform(56.2,23.5,1.001,1.001);
		this.shape_37 = new cjs.Shape();
		this.shape_37.graphics.f("#F9BF64").s().p("AgoAjIAKgTIAwhIIAlgrQAEgDAFAAQAEAAAEADQADAEAAAEQAAAFgDADIgBABIgoAlIhHBcIgiA4g");
		this.shape_37.setTransform(78.6,22.7,1.001,1.001);
		this.shape_38 = new cjs.Shape();
		this.shape_38.graphics.f("#F9BF64").s().p("AiABsIB/igIBJhEIAOgLQARgMAJgFIAVgMIASgJQAEgCAFACQAEACACAEQACAEgBAFQgCAEgEACIgBAAIgSAIIgUAKQgKAFgPAKIhaBJIg7A9IhJBcIgeArIgLARg");
		this.shape_38.setTransform(79,37.5,1.001,1.001);
		this.shape_39 = new cjs.Shape();
		this.shape_39.graphics.f("#F9BF64").s().p("AhaCbQgFgCgCgEQgCgFACgEIAAgBIAwhnIAQgcIAEgHIACgDIALgSQAHgMALgQIAEgHIArg1IAmgmIAMgJIgjAjIgDAFIgJAKIgiAwIgiA8IgtBnIgOAqQgCAEgEACIgGACIgDgBg");
		this.shape_39.setTransform(45.8,78.5,1.001,1.001);
		this.shape_40 = new cjs.Shape();
		this.shape_40.graphics.f("#F9BF64").s().p("ACgBoQgFgBgDgDIAAgBIgUgeIgXgbIgNgNIg1grIgfgUIgfgSIgxgVIgsgPQgagIgRgEIgRgDIARACQATADAZAGIAeAIIBjAoIAgATIA6ApIAoAoIAXAeQACAEAAAFQgBAFgEACQgDACgEAAIgBAAg");
		this.shape_40.setTransform(77.1,71.2,1.001,1.001);
		this.shape_41 = new cjs.Shape();
		this.shape_41.graphics.f("#F9BF64").s().p("ACsBbIgxg3IgUgTIg/g0Ihcg8IgtgXIgqgSIhWgcIgBAAIgBgBQgEAAgDgFQgCgEABgEQABgFAEgCQAEgDAEABIABAAIBaAiQAXAJATALQAJAEANAIIAXANIAXAOIBpBSIAZAXIATAUIAZAdIAEAFIAEAFIAwBFIAbAxg");
		this.shape_41.setTransform(32.1,39.3,1.001,1.001);
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,109.3,96.6), null);
	(lib.Symbol3 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#EE3E58").s().p("AgDAEIgDg3QgBgHAHgBQACAAADACQACACAAADIAAASIgNBeg");
		this.shape.setTransform(39,14.8,1.001,1.001);
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#EE3E58").s().p("AghADIAcgIIAYgFIAegDQAIABAAAGQABAGgIABIgBAAIgRgBIgfABIgEAAIgKABIgrALg");
		this.shape_1.setTransform(57.4,28.1,1.001,1.001);
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#EE3E58").s().p("AAlAOIgBAAIgVgMIgPgFIgZgHIgVgDIAEAAIAKgBIAHABIAIAAIAIABIAcAFIADACIANAEIAEABIADABQAHADgDAGQgBADgDABIgDABIgCgBg");
		this.shape_2.setTransform(52.1,39,1.001,1.001);
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#EE3E58").s().p("AAhAWIgBgBIgJgHIgNgLIgUgMIgHgEIgHgDIgGgCIgNgEIADAAIAFAAIAUAFIAPAGIAoAVQADABABADQAAADgCADQgBACgDABIgBAAIgEgBg");
		this.shape_3.setTransform(57.1,42.7,1.001,1.001);
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#EE3E58").s().p("AAoAmIgCgBIgBgEIgCgCIgBgBIgDgFIgIgKIgXgWQgTgPgQgJIgRgKIASAIQAXALAOAKIAKAGIAZAUIAHAIIAGAIQAFAFgGAFIgFACQgDAAgCgEg");
		this.shape_4.setTransform(46.2,45.5,1.001,1.001);
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#EE3E58").s().p("AgSAgIABgBIABgHIAKgYIADgGIAOgYIAIgKIgOAeIgCAGIgGAZIgBANQgBAHgGgBQgHAAAAgIg");
		this.shape_5.setTransform(30.4,50.2,1.001,1.001);
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#EE3E58").s().p("AgBAxIgBgRIgJhXIAXBmQABAHgHABIgBABQgFAAgBgHg");
		this.shape_6.setTransform(39.4,51.7,1.001,1.001);
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#EE3E58").s().p("AgyAQQgDgGAGgEIABAAIAPgFIBOgUIAFAAIhAAYIgcAOIgEABQgDAAgDgEg");
		this.shape_7.setTransform(12,43.9,1.001,1.001);
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#EE3E58").s().p("Ag/A4QgGgEAFgHIAAAAIAnglIBUg7IAIgFIgIAFIgFAEIg+A0IgUAVIgIAJIgRATQgCADgDAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAg");
		this.shape_8.setTransform(25.6,45.5,1.001,1.001);
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#EE3E58").s().p("AAvAFIhBgDIgnADQgDABgDgCQgCgCgBgCQAAgCACgDQABgDADAAIABAAIAeAAIBNALIATAGg");
		this.shape_9.setTransform(7.2,27.2,1.001,1.001);
		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#EE3E58").s().p("AAwAVIhhggIgMgDQgHgCABgGQACgHAHABIABAAIAUAHIBDAdIAmAWg");
		this.shape_10.setTransform(12.4,20.9,1.001,1.001);
		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#EE3E58").s().p("ABXAcIABAAIAIADgAgdgGIg7gKQgHgBABgHQABgHAHABIAAAAIA8AOIBxAsg");
		this.shape_11.setTransform(21.7,31.9,1.001,1.001);
		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#EE3E58").s().p("Ah/AEQgBgDACgBQACgDADAAIAAAAIAngEIATgBIALgBIBEABIBKAIIAcAHIgvgGIhZgCIhlALIgBAAQgGAAgBgGgAB2AHIAKACg");
		this.shape_12.setTransform(19.5,35.5,1.001,1.001);
		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#EE3E58").s().p("AANAIIgkgVIgSgIQgDgBgBgDQgBgDABgDQADgGAHADIAAAAIAEACIAZARIATAPIAhAkg");
		this.shape_13.setTransform(17.4,15.9,1.001,1.001);
		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#EE3E58").s().p("AARAQIgYgYIgYgTQgDgBAAgDQgBgDACgDQAEgGAGAFIAEADIAEADIAUAYIAdAtIACAEg");
		this.shape_14.setTransform(21.1,10.5,1.001,1.001);
		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#EE3E58").s().p("ABWBVIg5hTIgKgMIgjgoIgagZIgmgbIgOgIIgDgBIgKgFQgHgDADgHQABgCADgBQADgBACABIABAAIAHADIAnAZIAKAIIAKAKIAFAFIAVAVIA0BEIAtBJQAQAbAJAUQgKgUgRgag");
		this.shape_15.setTransform(24.5,21.9,1.001,1.001);
		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#EE3E58").s().p("AgjAkIALgPIAyg5QAGgFAFAFQAFAEgFAGIgBABIgzAqIgXAXg");
		this.shape_16.setTransform(51.3,16.1,1.001,1.001);
		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#EE3E58").s().p("AgtAoIBShRQACgCADAAQADAAACACQAFAFgFAFIgBAAIheBLg");
		this.shape_17.setTransform(50.3,23.7,1.001,1.001);
		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#EE3E58").s().p("ABlAWIgCgCIgPgJIgUgKIgZgHQgKgDgKgCIgKgCIgygFIhGAEIAigFIARgCIAogBIAUABIAKAAIApAHIAZAIIAeAOIACACQADABABADQAAADgBACQgCAEgEAAIgEgBg");
		this.shape_18.setTransform(51.1,37.9,1.001,1.001);
		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#EE3E58").s().p("AA2BOIhLhtIghgmIgMgLIAEACIAzAzIBMBhQAFAGgGAEQgBAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgDAAgCgDg");
		this.shape_19.setTransform(45.7,49.1,1.001,1.001);
		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("#EE3E58").s().p("AiMALQAAgDABgCQACgDADgBICWgSIB9ABIh9AFIhfAOIg0AMIgDABQgEAAgCgGg");
		this.shape_20.setTransform(18.7,39.2,1.001,1.001);
		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#EE3E58").s().p("AhqAhIArgkIAbgSIA4gbIAdgJIA2gKIAPgBIAOAAQAHABAAAGQgBAIgGAAIgCAAIgCgBIgZAAIgqAFIgtAMIg0AXIgYAOIgbATIggAdIgKAMIgJAJg");
		this.shape_21.setTransform(54.6,28.3,1.001,1.001);
		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("#EE3E58").s().p("Ag6CKIAviaIBAiWQAEgGAGADQADABABADQABADgCADIAAAAIhFCRIg/C5g");
		this.shape_22.setTransform(44.1,17.1,1.001,1.001);
		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("#EE3E58").s().p("AA+CDIACAMgAA4BgIgCgFIgEgSIgahNIgmhIIgOgSIgMgPIgKgLIgKgIQgFgGAEgFQAFgFAGAEIACADIASATQAFAGAHAKIANAUIAMAXIAMAaIALAbIAVBCIALBHg");
		this.shape_23.setTransform(28.9,15.9,1.001,1.001);
		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f("#529DF7").s().p("AAAgDIgDgIIgEgLIgCgDIgFgOQgBgCABgDQABgDADgBQACgBADABQADABABADIAAABIAFAVIAMBIg");
		this.shape_24.setTransform(32.6,9,1.001,1.001);
		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("#529DF7").s().p("AAyALIgKgFIgYgGIgngGIgjAAIAKgCIAZgCIAfAAIAPABIAFABQAFAAADACIANACIAFACQAHABgCAGQgBADgDACIgDABIgCAAg");
		this.shape_25.setTransform(53.3,34.9,1.001,1.001);
		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f("#529DF7").s().p("ABIALIAAAAIgOgEIgbgHIgUgCIgjgCIgOABIgjADIgHABIAHgBIAjgHIAxgDIAEAAIAOABIAuAHQAHABgBAHQgCAFgFAAIgCAAg");
		this.shape_26.setTransform(57,32.5,1.001,1.001);
		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("#529DF7").s().p("AgGAvIgBgRIAHhRIAEBJIADAWQABAHgHABIgBAAQgEAAgCgFg");
		this.shape_27.setTransform(35.8,50.3,1.001,1.001);
		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.f("#529DF7").s().p("AAkBNIAAgBIgBgEIgBgDIAAgEIgKgcIgXgqQgNgYgUgdIgRgXIATAWQAYAeANAUIAbApIALAYIAEAPIABACQACAHgHACIgDAAQgFAAgBgFg");
		this.shape_28.setTransform(41.9,49.8,1.001,1.001);
		this.shape_29 = new cjs.Shape();
		this.shape_29.graphics.f("#529DF7").s().p("AgOBXQgDgCAAgDIACgpIAMg9IAVhDIgTBjIgDA5IABAMQABADgCACQgCACgDAAIgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
		this.shape_29.setTransform(33.5,51.7,1.001,1.001);
		this.shape_30 = new cjs.Shape();
		this.shape_30.graphics.f("#529DF7").s().p("AhNALQgCgCgBgDQgBgGAHgBIAAAAIBqgJIAxgBIh1APIgjAIIgCAAIgEgBg");
		this.shape_30.setTransform(22.7,40,1.001,1.001);
		this.shape_31 = new cjs.Shape();
		this.shape_31.graphics.f("#529DF7").s().p("AhYA2QgFgFAFgFIAAAAIAtglIAXgOIBCghIAtgPIhLAjIguAeIgUAQIgcAcQgCACgDAAQgCAAgDgCg");
		this.shape_31.setTransform(17.4,46.9,1.001,1.001);
		this.shape_32 = new cjs.Shape();
		this.shape_32.graphics.f("#529DF7").s().p("AhdACQgBgGAHgBIAAgBIAMgBIBgACIARABIA5AFIhrgBIgQABIgxAFIgIACIgCAAQgFAAgBgGg");
		this.shape_32.setTransform(9.4,32.9,1.001,1.001);
		this.shape_33 = new cjs.Shape();
		this.shape_33.graphics.f("#529DF7").s().p("AARgBIhPgYIgIgBIgSgDIgDAAIgPgBQgHAAAAgHQAAgDACgCQACgCADAAIADAAIAbAEIAuAMIBPAjQAOAHAUAMIAfATg");
		this.shape_33.setTransform(18.1,27.7,1.001,1.001);
		this.shape_34 = new cjs.Shape();
		this.shape_34.graphics.f("#529DF7").s().p("AAeApIgegwIgWgcIgMgMQgFgFAFgFQAGgFAEAFIABAAIAIAKIABACIABABIAaArIATApIAFAUg");
		this.shape_34.setTransform(27.5,15.9,1.001,1.001);
		this.shape_35 = new cjs.Shape();
		this.shape_35.graphics.f("#529DF7").s().p("AgNBlIAPhqIAAhgQAAgIAHAAQAIAAgBAHIgMB/IgRBMIgCAJg");
		this.shape_35.setTransform(40.7,11,1.001,1.001);
		this.shape_36 = new cjs.Shape();
		this.shape_36.graphics.f("#529DF7").s().p("AAOA4IgTiWIgMgrQgBgDACgCQABgDADgBQAHgCACAHIAFAaIAKBBIAGB2IgCBPg");
		this.shape_36.setTransform(35.3,14.8,1.001,1.001);
		this.shape_37 = new cjs.Shape();
		this.shape_37.graphics.f("#529DF7").s().p("AgTAKIAcgqIAZgeQAGgEAFAEQAFAGgFAEIgBABIgKAJIggAiIgbAmIgVAjg");
		this.shape_37.setTransform(49.3,14.2,1.001,1.001);
		this.shape_38 = new cjs.Shape();
		this.shape_38.graphics.f("#529DF7").s().p("AhQBEIBQhkIASgTIASgRIAigZIANgHIAFgCIAHgDQACgBADABQADABABACQADAHgGACIgMAGIgMAGQgIAEgIAGIgJAFIgSAOIgmAjIg8BEIgoA4g");
		this.shape_38.setTransform(49.5,23.5,1.001,1.001);
		this.shape_39 = new cjs.Shape();
		this.shape_39.graphics.f("#529DF7").s().p("Ag3BgQgHgDADgGIAAAAIAthbIATgfIAmgsIAEgFIAMgKIACgCIgFAFIgPAPIgPAUIgkA8IgkBYQgCAFgEAAIgDgBg");
		this.shape_39.setTransform(28.6,49.3,1.001,1.001);
		this.shape_40 = new cjs.Shape();
		this.shape_40.graphics.f("#529DF7").s().p("ABfA+IAAAAIgXgfIgCgDIgCgCIgBgCIgoghIgUgMIgngVIgKgEIg3gRIgLgCIALACIA9APIAqASIAjAUIASANIAiAgIAOATQAEAFgGAFQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQgDAAgDgEg");
		this.shape_40.setTransform(48.3,44.7,1.001,1.001);
		this.shape_41 = new cjs.Shape();
		this.shape_41.graphics.f("#529DF7").s().p("ACCBYIgkgwIgwgtIgjgbIgygfIhGgeIgfgJIgBgBIgBAAQgCAAgCgDQgBgCAAgDQABgHAIABIA4AVIBNAqIA6AvIAmAnIAbAjIAHALIAGAKIAGAIIALAWg");
		this.shape_41.setTransform(20.1,24.6,1.001,1.001);
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,68.5,60.6), null);
	(lib.Symbol2 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#529DF7").s().p("AgDAEIgDg3QgBgHAHgBQACAAADACQACACAAADIAAASIgNBeg");
		this.shape.setTransform(39,14.7,1.001,1.001);
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#529DF7").s().p("AghADIAcgIIAlgHIARgBQAIAAAAAIQABAFgIABIgBAAIgRgBIgfABIgEABIg1ALg");
		this.shape_1.setTransform(57.4,28.1,1.001,1.001);
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#529DF7").s().p("AAlAOIgBAAIgHgFIgdgMIgZgHIgVgDIAEAAIAKgBIAHABIAIAAIAIABIAcAFIADACIANAEIAEABIADABQAHADgDAGQgBADgDABIgDABIgCgBg");
		this.shape_2.setTransform(52.1,39,1.001,1.001);
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#529DF7").s().p("AAhAWIgBgBIgJgHIgNgLIgMgIIgPgIIgHgDIgLgEIgIgCIADAAIAFAAIAUAFIArATIAMAIQADABABADQAAADgCADQgBACgDABIgBAAIgEgBg");
		this.shape_3.setTransform(57.1,42.7,1.001,1.001);
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#529DF7").s().p("AAoAmIgCgBIgBgEIgCgCIgBgBIgDgFIgIgKIgXgWQgTgPgQgJIgRgKIASAIQAXALAOAKIAUAMIASARIAEAFIAGAIQAFAFgGAFIgFACQgDAAgCgEg");
		this.shape_4.setTransform(46.2,45.4,1.001,1.001);
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#529DF7").s().p("AgSAgIAAgBIACgHIAJgYIALgTIAPgVIgMAXIgGARIgDAVIgBAJIAAAEQgBAGgHAAQgHAAAAgIg");
		this.shape_5.setTransform(30.4,50.2,1.001,1.001);
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#529DF7").s().p("AgBAxIgBgRIgJhXIAXBmQABAHgHABIgBABQgFAAgBgHg");
		this.shape_6.setTransform(39.4,51.7,1.001,1.001);
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#529DF7").s().p("AgyAQQgDgGAGgEIABAAIAjgLIA6gOIAFAAIhAAYIgcAOIgEABQgDAAgDgEg");
		this.shape_7.setTransform(12,43.9,1.001,1.001);
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#529DF7").s().p("Ag/A4QgGgEAFgHIAAAAIATgTIAsgkIA3gmIANgIIg1AqIgqAoIgIAJIgRATQgCADgDAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAg");
		this.shape_8.setTransform(25.6,45.5,1.001,1.001);
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#529DF7").s().p("AAvAFIhBgDIgLAAIgcADQgDABgDgCQgCgCgBgCQAAgCACgDQABgDADAAIAqABIAjAEIAyAMg");
		this.shape_9.setTransform(7.2,27.2,1.001,1.001);
		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#529DF7").s().p("AAEAEIgXgHIgLgDIgfgIQgHgCABgGQACgHAHABIABAAIApAQIBUAqg");
		this.shape_10.setTransform(12.4,20.9,1.001,1.001);
		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#529DF7").s().p("AAWAGIhugWQgHgBABgHQABgHAHABIAAAAIAIACIBmAcIBIAfg");
		this.shape_11.setTransform(21.7,31.8,1.001,1.001);
		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#529DF7").s().p("Ah/AEQgBgDACgBQACgDADAAIAAAAIAngEIATgBIALgBIAtAAIBhAJIAcAHIhEgHIgLgBIgSAAIgnAAIhlALIgBAAQgGAAgBgGgAB2AHIAKACg");
		this.shape_12.setTransform(19.5,35.5,1.001,1.001);
		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#529DF7").s().p("AANAIIgkgVIgSgIQgDgBgBgDQgBgDABgDQADgGAHADIAAAAIAEACIAsAgIAhAkg");
		this.shape_13.setTransform(17.4,15.9,1.001,1.001);
		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#529DF7").s().p("AAFADIgYgVIgMgJQgGgEAEgGQAEgGAGAFIAEADIAEADIAZAgIAYAlIACAEg");
		this.shape_14.setTransform(21,10.5,1.001,1.001);
		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#529DF7").s().p("ABWBVIg5hTIgKgMIgugzIgPgOIgmgbIgOgIIgDgBIgKgFQgHgDADgHQABgCADgBQADgBACABIABAAIAHADIAeASIAJAIIAuArIBFBdIAcAvQAQAdAJATQgKgUgRgag");
		this.shape_15.setTransform(24.5,21.9,1.001,1.001);
		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#529DF7").s().p("AAagkQAGgFAFAFQAFAEgFAGIgBABIgZATIgxAug");
		this.shape_16.setTransform(51.3,16,1.001,1.001);
		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#529DF7").s().p("AgaAUIA/g9QACgCADAAQADAAACACQAFAFgFAFIgBAAIheBLg");
		this.shape_17.setTransform(50.3,23.7,1.001,1.001);
		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#529DF7").s().p("ABlAVIgCgBIgbgQIgYgIIgwgLIg7gDIg0AEIAigGIARgBIBGAAIA6AMIAWAJIAQAIIACABQADACABADQAAACgBADQgCADgEAAIgEgBg");
		this.shape_18.setTransform(51.1,37.9,1.001,1.001);
		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#529DF7").s().p("AA2BOIg1hOIg3hFIgMgLIAEACIAJAIIA2A6IBABSQAFAGgGAEQgBAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgDAAgCgDg");
		this.shape_19.setTransform(45.7,49.1,1.001,1.001);
		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("#529DF7").s().p("AiMALQAAgDABgCQACgDADgBICJgRICKAAIh9AFIgYADIh7AXIgDAAQgEAAgCgFg");
		this.shape_20.setTransform(18.7,39.2,1.001,1.001);
		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#529DF7").s().p("Ah4AvIAOgPIANgMIAegYIA5ggIA3gWIA2gJIAPgBIAOAAQAHABAAAGQgBAIgGAAIgCAAIgCgBIgsACIggAFIgDABIgNADIgnANIghAQIgzAhIggAdIgKALIgJAKg");
		this.shape_21.setTransform(54.6,28.3,1.001,1.001);
		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("#529DF7").s().p("AgrBdIABgCIAfhsIBAiVQAEgGAGADQADABABADQABADgCADIAAAAIhACCIgsB4IgBACIgXBOg");
		this.shape_22.setTransform(44.1,17.1,1.001,1.001);
		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("#529DF7").s().p("AAyBJIgahNIgZgyIgbgoIgMgPIgKgLIgKgIQgFgGAEgFQAFgFAGAEIACADIASATQAFAGAHAKIANAUIAMAXIAMAaIALAbIAVBCIANBTg");
		this.shape_23.setTransform(28.9,15.8,1.001,1.001);
		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f("#F9BF64").s().p("AAAgDIgDgIIgGgOIgFgOQgBgCABgDQABgDADgBQACgBADABQADABABADIAAABIALAyIAGArg");
		this.shape_24.setTransform(32.6,9,1.001,1.001);
		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("#F9BF64").s().p("AAyALIgKgFIgYgGIgOgDIgrgDIgRAAIARgDIAxgBIAPABIAFABQAFAAADACIANACIAFACQAHABgCAGQgCAGgEAAIgDAAg");
		this.shape_25.setTransform(53.3,34.9,1.001,1.001);
		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f("#F9BF64").s().p("ABIALIAAAAIgOgEIgbgHIgpgDIgOgBIgxAEIgHABIAHgBIAdgGIA3gEIAEAAIAOABIAWACIAYAFQAHABgBAHQgCAFgFAAIgCAAg");
		this.shape_26.setTransform(57,32.5,1.001,1.001);
		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("#F9BF64").s().p("AgGAvIAAghIAGhBIADBBIADAaIABAEQABADgCACQgCADgDAAIgBAAQgFAAgBgFg");
		this.shape_27.setTransform(35.8,50.3,1.001,1.001);
		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.f("#F9BF64").s().p("AAkBNIAAgBIgBgEIgBgDIAAgEIgFgPIgPgiIgNgVQgNgYgUgdIgRgXIATAWQAYAeANAUIAPAUIAXAtIADAJIABAGIABACQACAHgHACIgDAAQgFAAgBgFg");
		this.shape_28.setTransform(41.9,49.7,1.001,1.001);
		this.shape_29 = new cjs.Shape();
		this.shape_29.graphics.f("#F9BF64").s().p("AgOBXQgDgCAAgDIABgcIAKg7IAYhSIgSBUIgEA5IABAbQABADgCACQgCACgDAAIgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
		this.shape_29.setTransform(33.5,51.7,1.001,1.001);
		this.shape_30 = new cjs.Shape();
		this.shape_30.graphics.f("#F9BF64").s().p("AhNALQgCgCgBgDQgBgGAHgBIAAAAIAxgGIBqgEIh1APIgjAIIgCAAIgEgBg");
		this.shape_30.setTransform(22.7,39.9,1.001,1.001);
		this.shape_31 = new cjs.Shape();
		this.shape_31.graphics.f("#F9BF64").s().p("AhYA2QgFgFAFgFIAAAAIAOgNIAfgYIAogXIAxgYIAtgPIg7AaIgoAYIgvAkIgXAXQgCACgDAAQgCAAgDgCg");
		this.shape_31.setTransform(17.4,46.9,1.001,1.001);
		this.shape_32 = new cjs.Shape();
		this.shape_32.graphics.f("#F9BF64").s().p("AhdACQgBgGAHgBIAAgBIAMgBIBgACIARABIA5AFIhrgBIgQABIgxAFIgIACIgCAAQgFAAgBgGg");
		this.shape_32.setTransform(9.4,32.8,1.001,1.001);
		this.shape_33 = new cjs.Shape();
		this.shape_33.graphics.f("#F9BF64").s().p("AAbACIgegLIgygOIgJgCIgIgBIgIgCIgKgBIgDAAIgPgBQgHAAAAgHQAAgDACgCQACgCADAAIALABIATADIAaAGIBQAgIATAJQAOAHAUAMIAfATg");
		this.shape_33.setTransform(18.1,27.7,1.001,1.001);
		this.shape_34 = new cjs.Shape();
		this.shape_34.graphics.f("#F9BF64").s().p("AAeApIgNgYIgXghIgcgfQgFgFAFgFQAGgFAEAFIABAAIAIAKIABACIABABIAgA1IAJAWIAJAdg");
		this.shape_34.setTransform(27.6,15.9,1.001,1.001);
		this.shape_35 = new cjs.Shape();
		this.shape_35.graphics.f("#F9BF64").s().p("AgIBNIAJhSIABhgQAAgIAHAAQAHAAAAAHIgLB/IgPBCIgGATg");
		this.shape_35.setTransform(40.7,11,1.001,1.001);
		this.shape_36 = new cjs.Shape();
		this.shape_36.graphics.f("#F9BF64").s().p("AARCCIAAARgAAPA4IgOh1IgRhMQgBgDACgCQABgDADgBQAHgCACAHIASB1IABCag");
		this.shape_36.setTransform(35.2,14.7,1.001,1.001);
		this.shape_37 = new cjs.Shape();
		this.shape_37.graphics.f("#F9BF64").s().p("AgTAKIAcgqIAZgeQAGgEAFAEQAFAGgFAEIgaAYIghApIggA0g");
		this.shape_37.setTransform(49.3,14.2,1.001,1.001);
		this.shape_38 = new cjs.Shape();
		this.shape_38.graphics.f("#F9BF64").s().p("AhOBFIA7hRIATgUIASgTIAkgfIAdgSIAFgCIAHgDQACgBADABQADAAABADQABACgBAEQgBACgCABIgMAGIgMAGQgIAEgIAFIgJAGIg4AxIhKBWIgaAmg");
		this.shape_38.setTransform(49.5,23.5,1.001,1.001);
		this.shape_39 = new cjs.Shape();
		this.shape_39.graphics.f("#F9BF64").s().p("Ag3BgQgHgDADgGIAAAAIAthbIATgfIAPgTIARgUIAWgUIACgCIgFAFIgPAPIgPAUIgQAZIgDAEIgRAfIgdBEIgHAUQgCAFgEAAIgDgBg");
		this.shape_39.setTransform(28.6,49.3,1.001,1.001);
		this.shape_40 = new cjs.Shape();
		this.shape_40.graphics.f("#F9BF64").s().p("ABfA+IAAAAIgUgcIgDgDIgCgDIgCgCIgBgCIgoghIgUgMIgdgQIgwgSIgbgIIAuAKIAqAPIAPAIIAtAbIAIAGIAWAUIAMAMIAOATQAEAFgGAFQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQgDAAgDgEgAhhg/IgLgCIALACg");
		this.shape_40.setTransform(48.3,44.7,1.001,1.001);
		this.shape_41 = new cjs.Shape();
		this.shape_41.graphics.f("#F9BF64").s().p("ACOBsIgBgCIgBgCIABACIABACIAGAKgABeAoIg3gzIgqgfIg5gfIhCgaIgOgDIgBgBIgBAAQgCAAgCgDQgBgCAAgDQABgHAIABIBTAiIAyAdIA6AvIAwAzIAYAiIAGAKIAJAQg");
		this.shape_41.setTransform(20.1,24.6,1.001,1.001);
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,68.5,60.5), null);
	(lib.Symbol1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#EE3E58").s().p("AgGAGIgEhYQgBgFADgDQADgEAFAAQAEgBADADQAEADABAFIgHBbIgPBYg");
		this.shape.setTransform(62.3,23.5,1.001,1.001);
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#EE3E58").s().p("AhTASIA7gWIA+gOIApgDQAFAAADAEQAEADAAAEQAAAFgDAEQgDACgFAAIgSgBIg1AAIguAHIguAMIgHADg");
		this.shape_1.setTransform(91.5,44.9,1.001,1.001);
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#EE3E58").s().p("AA7AXIgZgPIgbgLIg6gQIgXgDIAigBIAMACIANABIAaAEIAeAIIAbAJQAEADACAEQACAEgCAFQgCAEgEACIgEABIgFgBg");
		this.shape_2.setTransform(83,62.3,1.001,1.001);
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#EE3E58").s().p("AA0AjIgBgBIgtgjIgVgOIghgPIgVgGIANABIAgAHIAMAFIAZAKIA0AdQAEACABAFQABAFgDAEQgCAEgFABIgCAAQgEAAgDgCg");
		this.shape_3.setTransform(91.1,68.1,1.001,1.001);
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#EE3E58").s().p("ABHBCQgFAAgCgEIgBgBIgBgCIgFgJIgCgCIgBgCIgDgFIgZgdIgagXQgXgTghgUIgbgQIAdANQAhAPAbASIAQALIAxAqIABACIACACIAIALQADAEgBAFQAAAFgEACQgDADgDAAIgDgBg");
		this.shape_4.setTransform(73.7,72.5,1.001,1.001);
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#EE3E58").s().p("AgTBAQgEAAgDgEQgEgDABgFIAHgbIAcg4IAMgRQAHgKAFgGIgSAkIgEALIgGAQIgGAfIgCAYQgBAFgDADQgDADgEAAIgCgBg");
		this.shape_5.setTransform(48.5,80.1,1.001,1.001);
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#EE3E58").s().p("AABBXQgCgDgBgFIAAgBIgPieIgCgHIADAGIAjCcQABAFgDAEQgCAEgFAAIgCAAQgEAAgDgBg");
		this.shape_6.setTransform(62.8,82.5,1.001,1.001);
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#EE3E58").s().p("AhJAgQgFgCgCgEQgCgEABgEQACgFAEgCIA5gTIBlgXIhMAcIhIAiIgFABIgDAAg");
		this.shape_7.setTransform(19.1,70,1.001,1.001);
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#EE3E58").s().p("AhlBZQgEgDAAgFQgBgFADgEIAegeIBGg6IBthKIhmBTIgiAgIg3A+QgDAEgFAAIgBAAQgEAAgDgCg");
		this.shape_8.setTransform(40.9,72.5,1.001,1.001);
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#EE3E58").s().p("ABLAJIgggDIgSgCIgTgBIg1AAIguAFQgFABgDgDQgEgCgBgEQAAgFACgEQADgDAFgBIAxAAIASABIASACIBXAQIAfAIIgggFg");
		this.shape_9.setTransform(11.5,43.4,1.001,1.001);
		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#EE3E58").s().p("AgNAAIgTgGIhDgRQgEgBgDgEQgCgEABgFQABgEADgDQAEgCAFAAIABABIAhALIAQAGICYBLg");
		this.shape_10.setTransform(19.8,33.4,1.001,1.001);
		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#EE3E58").s().p("ABsAhIiagrIhfgQQgFAAgDgEQgDgEABgEQAAgFAEgDQAEgDAEABIABAAIBfAXIAbAIICdA8IAMAGg");
		this.shape_11.setTransform(34.6,50.8,1.001,1.001);
		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#EE3E58").s().p("AjHANQgDgCgBgFQgBgFADgDQADgDAEgBIABAAIA+gHIAfgBIB+ABIAJAAIB6AQIAwALIgkgHIhZgIIgSgBIgSAAIgJgBIhAABIgkACIgiACIgdAEIg+AJIgCAAQgEAAgDgCg");
		this.shape_12.setTransform(31.1,56.7,1.001,1.001);
		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#EE3E58").s().p("AA2AnIg7gqIg9gfQgFgCgBgFQgCgEACgFQACgEAEgCQAFgBAEACIABAAIBGAzIArApIARAUg");
		this.shape_13.setTransform(27.8,25.3,1.001,1.001);
		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#EE3E58").s().p("AAqAtIgZgdIgngmIgcgVQgEgCgBgFQgBgFADgEQACgEAFgBQAFAAAEACIAkAmIAuBDIAMAWIgPgUg");
		this.shape_14.setTransform(33.6,16.8,1.001,1.001);
		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#EE3E58").s().p("ACJCHIhciEIgQgTIhShaIg+gxIgagQIgfgPQgEgCgDgDQgBgFABgEQADgFAEgCQAEgBAFABIAAAAIAuAaIAGAEIAWAQIAQAOIAoAmIBHBWIBnCcQAZAsAOAfQgQgegbgrg");
		this.shape_15.setTransform(39,34.9,1.001,1.001);
		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#EE3E58").s().p("AguArIBYhlQAEgEAFAAQAEAAAEADQADAEAAAEQAAAFgDAEIgBABIh3Bog");
		this.shape_16.setTransform(81.8,25.6,1.001,1.001);
		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#EE3E58").s().p("AhIBAICDiCQADgEAFAAQAFABADADQADAEAAAEQAAAFgDADIgBABIiKBsIgNAMg");
		this.shape_17.setTransform(80.2,37.8,1.001,1.001);
		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#EE3E58").s().p("AChAjIAAAAIgbgSIgsgTIg7gQIgQgDIgwgGIgggBIg5AAIgeACIBXgKIBSADIAQACIAhAFIArAMIAjAOIAdAPQAEADABAFQACAEgDAEQgCAEgFABIgDABQgDAAgDgCgAiqgYIgIABgAiigZIAKgBIgSACg");
		this.shape_18.setTransform(81.5,60.4,1.001,1.001);
		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#EE3E58").s().p("ABiCFQgFgBgDgEIAAgBIhYiDIhUhnIgcgZIAJAGIBXBVIB7CbQACAEAAAFQgBAFgEACQgDADgEAAIgBAAg");
		this.shape_19.setTransform(72.5,78,1.001,1.001);
		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("#EE3E58").s().p("AjaAZQgFgCgBgFQgBgEADgEQACgFAFgBIAAAAIBEgLICXgRIAVgBICfgBIApADIhmABIglACIh5ANIicAdIgTAFIgCAAQgDAAgDgCg");
		this.shape_20.setTransform(29.8,62.4,1.001,1.001);
		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#EE3E58").s().p("AjSBiIABgCIACgCIABgBIAyg2IAOgNIAhgaIA0gjIAvgYIA/gaIBPgTIAggEIAZgBIAXAAQAEAAADAEQAEADgBAFQAAAFgDADQgEADgFAAIgCAAIgEgBIgnAAQgMAAgTADIgkAFIgUAEIg/ATIhIAhIgwAcIghAZIhEA/IgBABIgCACIgBACIgLAMg");
		this.shape_21.setTransform(87,45.2,1.001,1.001);
		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("#EE3E58").s().p("AheDdIBVkRIASgwQAIgVALgYIA5h4QACgEAFgCQAEgBAEACQAEACACAEQABAFgCAEIg9B2QgMAXgIAUIg7CRIgSAxIg0Ctg");
		this.shape_22.setTransform(70.4,27.3,1.001,1.001);
		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("#EE3E58").s().p("ABTCHIgEgTIgrh7IgnhQQgIgQgOgTIgVgeIgkgpIgLgKIgEgDQgDgDgBgFQAAgFADgDQADgEAEgBQAFAAAEADIAEAEIAvA5IAVAfQAMAVAIAQIAUAoIARArIAIAVIAEALIAZBfIASBxg");
		this.shape_23.setTransform(46.1,25.3,1.001,1.001);
		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f("#58C2B8").s().p("AAQAuIgnhtQgCgEACgEQABgFAFgCQAEgBAFACQAEABACAFIAAABIAXByIAEAjg");
		this.shape_24.setTransform(51.9,14.4,1.001,1.001);
		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("#58C2B8").s().p("ABQARIgBAAIAAAAIgtgQIgfgFIhQgGIgQABIAQgDIBKgFIAHABIAIAAIAJAAIAXADIAqAJQAEABADAEQACAEgBAEQgBAFgEACQgDACgDAAIgDgBg");
		this.shape_25.setTransform(85,55.6,1.001,1.001);
		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f("#58C2B8").s().p("ABzASIgBgBIhcgUIg9gDIg7ADIgHACIgMABIgLACIA4gNIAggEIBAgCIAQABIA5AHIAXAFQAEABADADQACAEgBAFQAAAEgFADQgDACgDAAIgCAAg");
		this.shape_26.setTransform(90.9,51.9,1.001,1.001);
		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("#58C2B8").s().p("AgFBRQgEgCgBgFIgBgQIABgkIAKhpIAEBbIAGA3IACAHQABAFgDAEQgDAEgFAAIgCABQgCAAgDgDg");
		this.shape_27.setTransform(57.1,80.2,1.001,1.001);
		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.f("#58C2B8").s().p("AA/CBQgEgCgBgFIAAgBIgBgDIgBgEIgEgSIgGgRIgYg2IgUgiQgXgqgfgqIgbglIAeAjQAjApAaAnIAqBCIAUAuIADAKIADAJQABAFgCAEQgDAEgEABIgDABIgGgCg");
		this.shape_28.setTransform(66.8,79.3,1.001,1.001);
		this.shape_29 = new cjs.Shape();
		this.shape_29.graphics.f("#58C2B8").s().p("AgXCKQgEgDgBgEIAAgXIAHhDIAdh5IAVg8IgQA+IgSB5IgCBAIACAWQABAEgDAEQgDADgFABIgCAAQgDAAgDgDg");
		this.shape_29.setTransform(53.4,82.4,1.001,1.001);
		this.shape_30 = new cjs.Shape();
		this.shape_30.graphics.f("#58C2B8").s().p("Ah7ARQgEgCgBgFQgBgFADgEQACgDAFgBIABAAIBOgIICpgHIg5AGIgVACIilAdIgDAAQgDAAgDgCg");
		this.shape_30.setTransform(36.2,63.7,1.001,1.001);
		this.shape_31 = new cjs.Shape();
		this.shape_31.graphics.f("#58C2B8").s().p("AiNBWQgEgDAAgFQAAgFAEgDIAXgVIBihEIBdgtIBJgYIhHAdIhYAzIgvAhIhBA9QgDADgFABQgEgBgEgDg");
		this.shape_31.setTransform(27.8,74.8,1.001,1.001);
		this.shape_32 = new cjs.Shape();
		this.shape_32.graphics.f("#58C2B8").s().p("AiRALQgEgDgBgFQAAgDACgEQADgEAFgBIABAAIAagCIATgBIAvAAIDGANIjFABIhaALIgDAAQgDAAgDgCg");
		this.shape_32.setTransform(15.1,52.4,1.001,1.001);
		this.shape_33 = new cjs.Shape();
		this.shape_33.graphics.f("#58C2B8").s().p("ACCArQgmgTgRgHIhAgaIgQgGIghgLIgQgEIhHgPIgLgBIgFgBIgFAAIgIgBIgQAAQgFAAgDgEQgDgDAAgFQAAgFADgDQAEgDAEAAIABAAIAkAEIA1AMIAfAKIBRAhIBkA0QAfASATAOQgUgMgggRg");
		this.shape_33.setTransform(28.9,44.2,1.001,1.001);
		this.shape_34 = new cjs.Shape();
		this.shape_34.graphics.f("#58C2B8").s().p("AA4BYIgQglIgdgwIghgsIgRgTIgCgCIgOgOQgDgDAAgFQAAgFADgDQAEgDAEAAQAFAAADADIABABIAQAUIAhA0IAKARIAJARIAUAxIAJAgg");
		this.shape_34.setTransform(44,25.4,1.001,1.001);
		this.shape_35 = new cjs.Shape();
		this.shape_35.graphics.f("#58C2B8").s().p("AgOB7IAQiDIABiaQAAgFAEgDQADgEAEAAQAFAAAEADQADADAAAFIgLCcIgOBNIgaBpg");
		this.shape_35.setTransform(64.9,17.5,1.001,1.001);
		this.shape_36 = new cjs.Shape();
		this.shape_36.graphics.f("#58C2B8").s().p("AAZCiIgZkEIgch5QgBgFACgEQADgEAEgCQAFgBAEACQAEADABAEIAAABIAZCRIAKC8IgDB/g");
		this.shape_36.setTransform(56.2,23.5,1.001,1.001);
		this.shape_37 = new cjs.Shape();
		this.shape_37.graphics.f("#58C2B8").s().p("AgoAjIAKgTIAwhIIAlgrQAEgDAFAAQAEAAAEADQADAEAAAEQAAAFgDADIgBABIgIAHIg0A1IgHAJIgNAQIhBBkg");
		this.shape_37.setTransform(78.6,22.7,1.001,1.001);
		this.shape_38 = new cjs.Shape();
		this.shape_38.graphics.f("#58C2B8").s().p("AihCiIADgEIAAgBIABgBIgBABIAAABIgDAEIgFAJgAibCaIACgDIgEAFgAiXCTIBChkIA9hLIBDhEIAdgYIAOgLQARgMAJgFIAVgMIASgJQAEgCAFACQAEACACAEQACAEgBAFQgCAEgEACIgBAAIgSAIIgUAKQgKAFgPAKIgOAKIgOAKIgfAZIhaBZIhJBcIgaAkIgCAEg");
		this.shape_38.setTransform(79,37.5,1.001,1.001);
		this.shape_39 = new cjs.Shape();
		this.shape_39.graphics.f("#58C2B8").s().p("AhaCbQgFgCgCgEQgCgFACgEIAAgBIAwhnIAQgcIAEgHIACgDIALgSQAHgMALgQIAvg8IAvgtIADgCIgjAjIgDAFIg0BIIgZAuIgpBcIgSA1QgCAEgEACIgGACIgDgBg");
		this.shape_39.setTransform(45.8,78.5,1.001,1.001);
		this.shape_40 = new cjs.Shape();
		this.shape_40.graphics.f("#58C2B8").s().p("ACgBoQgFgBgDgDIAAgBIgUgeIgkgoIg1grIgfgUIhQgnIgsgPQgagIgRgEIgRgDIARACQATADAZAGIAeAIIBSAgIARAIIAgATIAfAUIApAiIAxA5QACAEAAAFQgBAFgEACQgDACgEAAIgBAAg");
		this.shape_40.setTransform(77.1,71.2,1.001,1.001);
		this.shape_41 = new cjs.Shape();
		this.shape_41.graphics.f("#58C2B8").s().p("ADAB1IgUgaIgxg3IgUgTIgpgjIhbhAIhEgkIgqgSIhWgcIgBAAIgBgBQgEAAgDgFQgCgEABgEQABgFAEgCQAEgDAEABIABAAIAHACIBTAgQAXAJATALQAJAEANAIIAXANIAXAOIBZBEIAQAOIAZAXIATAUIAhAnIAnA2IAkBAg");
		this.shape_41.setTransform(32,39.3,1.001,1.001);
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,109.3,96.6), null);
	// stage content:
	(lib.AboutSSN = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("#32383D").ss(2).p("AAAhnIAADP");
		this.shape.setTransform(351.2,275.3,0.85,0.851);
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f().s("#F3FFBE").ss(0.3).p("AgLBAQgKAAgKgBQgIgBAAAAQgPgDgHgKQgEgGgBgJQABgIAAAAIAAgCIArAAIAAADQgBAGADAEQAEAFAIABIADAAQAPAAABgPQAAgEgDgEIgEgCIgYgMIgDgBQgRgFgHgPQgCgFAAgHQAAgWAbgJQAPgFARAAIABAAQAbAAAPAIQAMAIABAMQABAFgBAFIAAACIgrAAIAAgCQABgHgDgFQgEgEgHAAQgKAAgDAEQgBACgBADQAAACAAAAIAAAAQgBAKAmANQAGACAEADQAKAHAAAGQADAIgBAHQgDAUgUALIgDACQgSAFgVAAg");
		this.shape_1.setTransform(365.4,254.1,0.85,0.851);
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#0E67B0").s().p("AgfA/IgIgBQgPgDgHgLQgEgGgBgIIABgIIAAgBIArAAIAAACQgBAFADAEQAEAFAIACIADAAQAPAAABgQQAAgDgDgEIgEgDIgYgLIgDgBQgRgFgHgPQgCgEAAgIQAAgWAbgKQAPgEARAAIABAAQAbAAAPAIQAMAIABALQABAGgBAFIAAABIgrAAIAAgBQABgHgDgFQgEgEgHAAQgKAAgDAEIgCAEIAAADIAAAAQgBAKAmANQAGADAEADQAKAGAAAFQADAJgBAHQgDAUgUALIgDACQgSAFgVAAIgUgBg");
		this.shape_2.setTransform(365.4,254.1,0.85,0.851);
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f().s("#F3FFBE").ss(0.3).p("AA9gZIAAACIgrAAIABgCQABgIgEgEQgDgDgEgBQgCgBgCAAIAAAAQgJAAgEAFQgBACgBACQAAABAAACQgBAKAmANIAKAFQAHAFAEAIQAGAVgPAPQgFAFgGAEQgEACgBAAIgDABQgRAFgTAAQgKAAgKgBQgIgCAAAAQgHgBgFgDQATgNACgSIABgCIAAAAIAHAAIAAACQgBAGADAEQAEAFAIACIADAAQAKAAAEgIQACgEAAgDQAAgEgDgEQgDgCAAgBIgcgNQgWgHgDgTIAeAAIABgCQABgGgBgGQgCgMgLgHQAQgIAYAAIABAAQAdAAAOAIQALAIACAMQABAFgCAFg");
		this.shape_3.setTransform(373.3,254.2,0.85,0.851);
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#0E67B0").s().p("AgmA/IgJgCQgGgBgGgDQAUgMACgSIAAgDIAAAAIAIAAIAAACQgCAGADAEQAEAGAIAAIAEAAQAKABADgIQACgDABgEQAAgEgEgEIgCgDIgdgNQgWgHgDgTIAeAAIABgCQACgGgBgGQgCgMgLgHQAQgJAXAAIACAAQAcABAOAIQALAIACAMQABAFgBAGIgBABIgqAAIAAgCQABgIgEgEQgCgDgEgBIgEAAIgBAAQgIAAgEAEIgCAFIAAABQgBALAlANIALAFQAGAFAEAIQAGAVgPAPQgEAFgGAEIgGACIgCABQgSAFgSABIgUgCg");
		this.shape_4.setTransform(373.5,254.2,0.85,0.851);
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f().s("#F3FFBE").ss(0.3).p("ABhgLIgXBKIgxAAIAVhFQAGgRgGgIQgEgEgFAAQgPAAgKANIgHAOIgUBHIgnAAQABAAAFgCQAGgEAFgFQAPgRgGgVQAAgGgLgIIgFgCIAAgBIAEgPIAZAAIABgCIAAgDIAAAAIAAgJIgCgIIgCgCIAAAAIAAgBIgEgFIgBgBIgFgDIgCgCIABgFIAwAAIgFASQALgLATgHQAKgDAIAAIABAAQAWAAAJANQALAPgIAXg");
		this.shape_5.setTransform(380.1,253.9,0.85,0.851);
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#0E67B0").s().p("AACA/IAWhFQAFgRgGgIQgDgEgGAAQgOAAgJANIgHAOIgWBHIgmAAIAFgCIALgJQAQgRgHgVQAAgGgLgIIgFgCIABgBIAEgPIAYAAIABgCIAAgDIABAAIAAgJIgDgIIgBgCIAAAAIgBgBIgEgFIgBgBIgEgDIgDgCIACgFIAwAAIgFASQALgLASgHQALgDAIAAIAAAAQAXAAAJANQAKAPgIAXIgWBKg");
		this.shape_6.setTransform(382,253.9,0.85,0.851);
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f().s("#32383D").ss(2).p("AkwiMIAAEZIJXAAIhfiKIBfiPg");
		this.shape_7.setTransform(377.1,254.6,0.85,0.851);
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#F3FFBE").s().p("AkrCNIAAkYIJXAAIhfCNIBfCLg");
		this.shape_8.setTransform(376.7,254.6,0.85,0.851);
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f().s("#32383D").ss(2).p("AAAg7IAAB3");
		this.shape_9.setTransform(484.5,363.4,0.85,0.851);
		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f().s("#32383D").ss(2).p("AivhPIAACfIFWAAIg2hPIA2hQg");
		this.shape_10.setTransform(499.5,351.6,0.85,0.851);
		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#529DF7").s().p("AirBQIAAifIFXAAIg3BQIA3BPg");
		this.shape_11.setTransform(499.1,351.6,0.85,0.851);
		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f().s("#32383D").ss(2).p("AAAg6IAAB2");
		this.shape_12.setTransform(407.6,342.4,0.85,0.851);
		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f().s("#32383D").ss(2).p("AivhQIAAChIFWAAIg2hPIA2hSg");
		this.shape_13.setTransform(422.6,330.5,0.85,0.851);
		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#529DF7").s().p("AirBQIAAigIFXAAIg3BRIA3BPg");
		this.shape_14.setTransform(422.2,330.5,0.85,0.851);
		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f().s("#32383D").ss(2).p("AAAg6IAAB2");
		this.shape_15.setTransform(294.7,342.4,0.85,0.851);
		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f().s("#32383D").ss(2).p("ACwhQIAAChIlWAAIA2hPIg2hSg");
		this.shape_16.setTransform(279.7,330.5,0.85,0.851);
		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#529DF7").s().p("AirBQIA3hPIg3hRIFXAAIAACgg");
		this.shape_17.setTransform(280.1,330.5,0.85,0.851);
		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f().s("#32383D").ss(2).p("AAAg7IAAB3");
		this.shape_18.setTransform(217.2,363.4,0.85,0.851);
		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f().s("#32383D").ss(2).p("ACwhPIAACfIlWAAIA2hPIg2hQg");
		this.shape_19.setTransform(202.2,351.6,0.85,0.851);
		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("#529DF7").s().p("AirBQIA3hPIg3hQIFXAAIAACfg");
		this.shape_20.setTransform(202.6,351.6,0.85,0.851);
		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#32383D").s().p("AhNAKQgHgCAAgIQAAgFAHACQAaAJAzgMQA0gNAaAKQAHACAAAHQAAAGgHgCQgagJg0AMQgcAHgVAAQgRAAgLgEg");
		this.shape_21.setTransform(457.9,512.5,0.85,0.851);
		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("#32383D").s().p("AhNAKQgHgDAAgHQAAgGAHADQAaAJAzgMQA0gNAaAKQAHADAAAGQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQgagJg0AMQgdAHgVAAQgQAAgLgEg");
		this.shape_22.setTransform(437.5,520.1,0.85,0.851);
		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("#32383D").s().p("AhNAKQgHgDAAgHQAAAAAAAAQAAgBAAgBQABAAAAAAQAAgBABAAQAAAAABAAQABgBAAAAQABAAAAABQABAAABAAQAaAJAzgMQA0gNAaAKQAHACAAAHQAAAGgHgCQgagJg0AMQgcAHgWAAQgQAAgLgEg");
		this.shape_23.setTransform(410.5,516.5,0.85,0.851);
		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f("#32383D").s().p("AlrAHQgHAAAAgHQAAgGAHAAILXAAQAHAAAAAGQAAAHgHAAg");
		this.shape_24.setTransform(351.7,533.8,0.85,0.851);
		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("#32383D").s().p("AlSAHQgGAAAAgHQAAgBACgDQABgCADAAIKlAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQACADAAABQABAHgHAAg");
		this.shape_25.setTransform(351.7,526.2,0.85,0.851);
		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f("#32383D").s().p("Ak+AHQgGAAgBgHQABgGAGAAIJ9AAQAGAAABAGQgBAHgGAAg");
		this.shape_26.setTransform(351.4,518.8,0.85,0.851);
		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("#32383D").s().p("AmPC8QgDAAgCgCQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIBhltQABgEAGAAIJdAAQAGAAABAEIBhFuQAAAFgHAAgAmHCyIMPAAIheljIpTAAg");
		this.shape_27.setTransform(351.7,528.7,0.85,0.851);
		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.f("#529DF7").s().p("AmPC1IBhlpIJdAAIBhFpg");
		this.shape_28.setTransform(351.6,528.6,0.85,0.851);
		this.shape_29 = new cjs.Shape();
		this.shape_29.graphics.f("#32383D").s().p("AkGBdQgHAAAAgHIAAirQAAgDACgCQADgCACAAIAlAAQAIAAAAAHIAAA/IAjAAIAAg/QAAgDACgCQADgCACAAIA7AAQAHAAAAAHIAAA/IAZAAIAAg/QAAgHAHAAIA7AAQADAAACACQACACAAADIAAA/IAYAAIAAg/QAAgDACgCQABgCADAAIA8AAQAGAAABAHIAAA/IAYAAIAAg/QAAgHAHAAIA7AAQAHAAAAAHIAAA/IAjAAIAAg/QABgDACgCQACgCACAAIAlAAQAIAAgBAHIAACrQABAHgIAAgAj+BPIH+AAIAAidIgYAAIAAA+QABAHgIAAIgxAAQgHAAAAgHIAAg+IgtAAIAAA+QAAAHgHAAIgmAAQgIAAAAgHIAAg+IgtAAIAAA+QABAHgIAAIglAAQgHAAAAgHIAAg+IgtAAIAAA+QAAAHgHAAIgnAAQgHAAAAgHIAAg+IgtAAIAAA+QAAAHgHAAIgyAAQgGAAgBgHIAAg+IgWAAg");
		this.shape_29.setTransform(294.8,396.6,0.85,0.851);
		this.shape_30 = new cjs.Shape();
		this.shape_30.graphics.f("#F9BF64").s().p("AkGBWIAAirIAlAAIAABFIAyAAIAAhFIA7AAIAABFIAnAAIAAhFIA7AAIAABFIAlAAIAAhFIA8AAIAABFIAmAAIAAhFIA7AAIAABFIAxAAIAAhFIAlAAIAACrg");
		this.shape_30.setTransform(294.8,396.6,0.85,0.851);
		this.shape_31 = new cjs.Shape();
		this.shape_31.graphics.f("#32383D").s().p("Aj5DSQgEAAgCgEQgCgEACgDID6mVQACgDADAAQAEAAACADID6GVQACAEgCADQgCAEgEAAgAjsDEIHZAAIjtmBg");
		this.shape_31.setTransform(294.9,365,0.85,0.851);
		this.shape_32 = new cjs.Shape();
		this.shape_32.graphics.f("#FC3D4B").s().p("Aj5DLID5mVID6GVg");
		this.shape_32.setTransform(294.9,365,0.85,0.851);
		this.shape_33 = new cjs.Shape();
		this.shape_33.graphics.f("#32383D").s().p("AjKBzQgHAAAAgHIAAjXQAAgHAHAAIGVAAQAHAAAAAHIAADXQAAAHgHAAgAjDBlIGHAAIAAjJImHAAg");
		this.shape_33.setTransform(294.9,389.8,0.85,0.851);
		this.shape_34 = new cjs.Shape();
		this.shape_34.graphics.f("#529DF7").s().p("AjKBsIAAjXIGVAAIAADXg");
		this.shape_34.setTransform(294.9,389.8,0.85,0.851);
		this.shape_35 = new cjs.Shape();
		this.shape_35.graphics.f("#32383D").s().p("Aj5DSQgEAAgCgEQgCgDACgEID6mUQACgEADAAQAEAAACAEID6GUQABAEgBADQgCAEgEAAgAjtDEIHaAAIjtmBg");
		this.shape_35.setTransform(407,364.4,0.85,0.851);
		this.shape_36 = new cjs.Shape();
		this.shape_36.graphics.f("#FC3D4B").s().p("Aj5DLID5mVID6GVg");
		this.shape_36.setTransform(407,364.5,0.85,0.851);
		this.shape_37 = new cjs.Shape();
		this.shape_37.graphics.f("#32383D").s().p("AkFBdQgIAAABgHIAAirQAAgDABgCQADgCADAAIAlAAQAGAAABAHIAAA/IAjAAIAAg/QAAgDACgCQACgCADAAIA7AAQAHAAAAAHIAAA/IAZAAIAAg/QAAgDACgCQAAgBABAAQABgBAAAAQABAAAAAAQABAAAAAAIA8AAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQACACAAADIAAA/IAYAAIAAg/QAAgDACgCQADgCADAAIA7AAQACAAACACQACACAAADIAAA/IAZAAIAAg/QAAgDACgCQACgCADAAIA7AAQAHAAAAAHIAAA/IAjAAIAAg/QAAgDACgCQACgCAEAAIAkAAQAHAAABAHIAACrQgBAHgHAAgAj/BPIH+AAIAAidIgWAAIAAA+QgBAHgGAAIgyAAQgHAAAAgHIAAg+IgtAAIAAA+QAAAHgHAAIgmAAQgIAAABgHIAAg+IgtAAIAAA+QAAAHgHAAIgmAAQgHAAAAgHIAAg+IgtAAIAAA+QAAAHgIAAIgmAAQgHAAAAgHIAAg+IgtAAIAAA+QAAAHgHAAIgxAAQgIAAAAgHIAAg+IgXAAg");
		this.shape_37.setTransform(407,396.6,0.85,0.851);
		this.shape_38 = new cjs.Shape();
		this.shape_38.graphics.f("#F9BF64").s().p("AkFBWIAAirIAlAAIAABFIAxAAIAAhFIA7AAIAABFIAmAAIAAhFIA8AAIAABFIAmAAIAAhFIA7AAIAABFIAmAAIAAhFIA7AAIAABFIAyAAIAAhFIAkAAIAACrg");
		this.shape_38.setTransform(407,396.6,0.85,0.851);
		this.shape_39 = new cjs.Shape();
		this.shape_39.graphics.f("#32383D").s().p("AjKBzQgHAAAAgHIAAjXQAAgDACgCQACgCADAAIGVAAQAHAAAAAHIAADXQAAAHgHAAgAjDBlIGHAAIAAjJImHAAg");
		this.shape_39.setTransform(407,389.2,0.85,0.851);
		this.shape_40 = new cjs.Shape();
		this.shape_40.graphics.f("#529DF7").s().p("AjKBsIAAjXIGVAAIAADXg");
		this.shape_40.setTransform(407,389.2,0.85,0.851);
		this.shape_41 = new cjs.Shape();
		this.shape_41.graphics.f("#32383D").s().p("ApnEAQgEAAgDgFQgBgEAEgEIJnnwQAEgDAEADIJpHwQADADgBAFQgCAFgFAAgApTDyISoAAIpVngg");
		this.shape_41.setTransform(351,304.5,0.85,0.851);
		this.shape_42 = new cjs.Shape();
		this.shape_42.graphics.f("#FC3D4B").s().p("ApnD4IJnnvIJoHvg");
		this.shape_42.setTransform(351,304.5,0.85,0.851);
		this.shape_43 = new cjs.Shape();
		this.shape_43.graphics.f("#32383D").s().p("Ap3BdQgIAAAAgHIAAirQAAgHAIAAIAlAAQAGAAABAHIAAA+IAjAAIAAg+QAAgHAHAAIA7AAQAHAAAAAHIAAA+IAYAAIAAg+QABgHAGAAIA8AAQAGAAABAHIAAA+IAYAAIAAg+QAAgHAHAAIA7AAQAHAAAAAHIAAA+IAZAAIAAg+QAAgHAHAAIA7AAQAHAAAAAHIAAA+IAjAAIAAg+QAAgHAHAAIBKAAQAHAAAAAHIAAA+IAkAAIAAg+QAAgHAHAAIA6AAQAGAAAAAHIAAA+IAaAAIAAg+QgBgHAIAAIA6AAQAIAAAAAHIAAA+IAYAAIAAg+QAAgHAHAAIA7AAQAHAAAAAHIAAA+IAYAAIAAg+QABgHAGAAIA8AAQAGAAABAHIAAA+IAjAAIAAg+QAAgDACgCQADgCACAAIBKAAQAHAAAAAHIAAA+IAjAAIAAg+QAAgHAIAAIA7AAQAGAAAAAHIAAA+IAZAAIAAg+QAAgHAHAAIAfAAQADAAADACQABACAAADIAACrQABAHgIAAgApwBPITiAAIAAidIgSAAIAAA+QAAAHgHAAIgmAAQgIAAABgHIAAg+IgtAAIAAA+QAAAHgHAAIgyAAQgHAAAAgHIAAg+Ig8AAIAAA+QAAAHgHAAIgxAAQgIAAABgHIAAg+IgtAAIAAA+QAAAHgIAAIgmAAQgHAAAAgHIAAg+IgtAAIAAA+QAAAHgHAAIgnAAQgGAAgBgHIAAg+IgtAAIAAA+QAAAHgGAAIgnAAQgHAAAAgHIAAg+IgtAAIAAA+QABAHgHAAIgyAAQgHAAAAgHIAAg+Ig7AAIAAA+QgBAHgHAAIgxAAQgHAAAAgHIAAg+IgtAAIAAA+QgBAHgGAAIgnAAQgHAAAAgHIAAg+IgtAAIAAA+QAAAHgHAAIgmAAQgIAAABgHIAAg+IgtAAIAAA+QAAAHgIAAIgmAAQgHAAAAgHIAAg+IgtAAIAAA+QAAAHgHAAIgxAAQgIAAAAgHIAAg+IgWAAg");
		this.shape_43.setTransform(350.9,351.2,0.85,0.851);
		this.shape_44 = new cjs.Shape();
		this.shape_44.graphics.f("#F9BF64").s().p("Ap3BWIAAirIAlAAIAABFIAxAAIAAhFIA7AAIAABFIAmAAIAAhFIA8AAIAABFIAmAAIAAhFIA7AAIAABFIAnAAIAAhFIA7AAIAABFIAxAAIAAhFIBKAAIAABFIAyAAIAAhFIA6AAIAABFIAnAAIAAhFIA6AAIAABFIAnAAIAAhFIA7AAIAABFIAmAAIAAhFIA8AAIAABFIAxAAIAAhFIBKAAIAABFIAyAAIAAhFIA7AAIAABFIAmAAIAAhFIAfAAIAACrg");
		this.shape_44.setTransform(350.9,351.2,0.85,0.851);
		this.shape_45 = new cjs.Shape();
		this.shape_45.graphics.f("#32383D").s().p("AgwAfQgHAAAAgGIAAgxQAAgGAHgBIBhAAQACAAADADQACACAAACIAAAxQAAAGgHAAgAgpASIBTAAIAAgiIhTAAg");
		this.shape_45.setTransform(224.4,500.5,0.85,0.851);
		this.shape_46 = new cjs.Shape();
		this.shape_46.graphics.f("#F9BF64").s().p("AgwAZIAAgxIBhAAIAAAxg");
		this.shape_46.setTransform(224.4,500.5,0.85,0.851);
		this.shape_47 = new cjs.Shape();
		this.shape_47.graphics.f("#32383D").s().p("AgwAfQgDAAgCgCQgCgCAAgDIAAgwQAAgCACgDQACgCADAAIBhAAQAHAAAAAHIAAAwQAAADgCACQgCACgDAAgAgpASIBTAAIAAgiIhTAAg");
		this.shape_47.setTransform(204,477.4,0.85,0.851);
		this.shape_48 = new cjs.Shape();
		this.shape_48.graphics.f("#F9BF64").s().p("AgwAYIAAgwIBhAAIAAAwg");
		this.shape_48.setTransform(204,477.4,0.85,0.851);
		this.shape_49 = new cjs.Shape();
		this.shape_49.graphics.f("#32383D").s().p("AgwAgQgHAAAAgHIAAgwQAAgIAHABIBhAAQAHgBAAAIIAAAwQAAAHgHAAgAgpARIBTAAIAAgiIhTAAg");
		this.shape_49.setTransform(265.1,471.7,0.85,0.851);
		this.shape_50 = new cjs.Shape();
		this.shape_50.graphics.f("#F9BF64").s().p("AgwAZIAAgwIBhAAIAAAwg");
		this.shape_50.setTransform(265.1,471.7,0.85,0.851);
		this.shape_51 = new cjs.Shape();
		this.shape_51.graphics.f("#32383D").s().p("AgwAgQgHAAAAgHIAAgxQAAgHAHAAIBhAAQAHAAAAAHIAAAxQAAAHgHAAgAgpASIBTAAIAAgjIhTAAg");
		this.shape_51.setTransform(238.5,484.8,0.85,0.851);
		this.shape_52 = new cjs.Shape();
		this.shape_52.graphics.f("#F9BF64").s().p("AgwAZIAAgxIBhAAIAAAxg");
		this.shape_52.setTransform(238.5,484.8,0.85,0.851);
		this.shape_53 = new cjs.Shape();
		this.shape_53.graphics.f("#32383D").s().p("AgwAfQgHABAAgIIAAgwQAAgHAHAAIBhAAQAHAAAAAHIAAAwQAAAIgHgBgAgpASIBTAAIAAgiIhTAAg");
		this.shape_53.setTransform(298.6,483.2,0.85,0.851);
		this.shape_54 = new cjs.Shape();
		this.shape_54.graphics.f("#F9BF64").s().p("AgwAYIAAgwIBhAAIAAAwg");
		this.shape_54.setTransform(298.6,483.2,0.85,0.851);
		this.shape_55 = new cjs.Shape();
		this.shape_55.graphics.f("#32383D").s().p("AgwAgQgHAAAAgIIAAgvQAAgIAHABIBhAAQAHgBAAAIIAAAvQAAAIgHAAgAgpARIBTAAIAAgiIhTAAg");
		this.shape_55.setTransform(281.8,496.3,0.85,0.851);
		this.shape_56 = new cjs.Shape();
		this.shape_56.graphics.f("#F9BF64").s().p("AgwAYIAAgvIBhAAIAAAvg");
		this.shape_56.setTransform(281.8,496.3,0.85,0.851);
		this.shape_57 = new cjs.Shape();
		this.shape_57.graphics.f("#32383D").s().p("AgwAfQgHAAAAgGIAAgxQAAgGAHgBIBhAAQAHABAAAGIAAAxQAAAGgHAAgAgpASIBTAAIAAgjIhTAAg");
		this.shape_57.setTransform(333.9,453.9,0.85,0.851);
		this.shape_58 = new cjs.Shape();
		this.shape_58.graphics.f("#F9BF64").s().p("AgwAZIAAgxIBhAAIAAAxg");
		this.shape_58.setTransform(333.9,453.9,0.85,0.851);
		this.shape_59 = new cjs.Shape();
		this.shape_59.graphics.f("#32383D").s().p("AgwAgQgDAAgCgCQgCgDAAgDIAAgwQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABgBQACgBADAAIBhAAQADAAACABQABABAAABQAAAAABABQAAAAAAABQAAAAAAABIAAAwQAAADgCADQgCACgDAAgAgpARIBTAAIAAgiIhTAAg");
		this.shape_59.setTransform(373.8,461.1,0.85,0.851);
		this.shape_60 = new cjs.Shape();
		this.shape_60.graphics.f("#F9BF64").s().p("AgwAZIAAgxIBhAAIAAAxg");
		this.shape_60.setTransform(373.8,461.1,0.85,0.851);
		this.shape_61 = new cjs.Shape();
		this.shape_61.graphics.f("#32383D").s().p("AgXAfQgDAAgDgBQgBgDAAgDIAAgwQAAgCABgDQADgCADAAIAvAAQAIAAAAAHIAAAwQgBAIgHgBgAgRASIAjAAIAAgiIgjAAg");
		this.shape_61.setTransform(309.8,413.9,0.85,0.851);
		this.shape_62 = new cjs.Shape();
		this.shape_62.graphics.f("#F9BF64").s().p("AgXAYIAAgwIAvAAIAAAwg");
		this.shape_62.setTransform(309.8,413.9,0.85,0.851);
		this.shape_63 = new cjs.Shape();
		this.shape_63.graphics.f("#32383D").s().p("AgXAgQgDgBgDgBQgCgDAAgDIAAgvQAAgEACgCQADgCADAAIAwAAQAGAAAAAIIAAAvQAAADgBADQgBAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAgAgQARIAiAAIAAghIgiAAg");
		this.shape_63.setTransform(391.9,411.8,0.85,0.851);
		this.shape_64 = new cjs.Shape();
		this.shape_64.graphics.f("#F9BF64").s().p("AgYAYIAAgvIAxAAIAAAvg");
		this.shape_64.setTransform(391.9,411.8,0.85,0.851);
		this.shape_65 = new cjs.Shape();
		this.shape_65.graphics.f("#32383D").s().p("AgwAgQgDgBgCgCQgCgCAAgCIAAgxQAAgHAHABIBhAAQAHgBAAAHIAAAxQAAAGgHABgAgpARIBTAAIAAgiIhTAAg");
		this.shape_65.setTransform(367.4,407.6,0.85,0.851);
		this.shape_66 = new cjs.Shape();
		this.shape_66.graphics.f("#F9BF64").s().p("AgwAZIAAgxIBhAAIAAAxg");
		this.shape_66.setTransform(367.4,407.6,0.85,0.851);
		this.shape_67 = new cjs.Shape();
		this.shape_67.graphics.f("#32383D").s().p("AgwAfQgHAAAAgGIAAgxQAAgGAHgBIBhAAQAHABAAAGIAAAxQAAAGgHAAgAgpASIBTAAIAAgiIhTAAg");
		this.shape_67.setTransform(333.9,417,0.85,0.851);
		this.shape_68 = new cjs.Shape();
		this.shape_68.graphics.f("#F9BF64").s().p("AgwAZIAAgxIBhAAIAAAxg");
		this.shape_68.setTransform(333.9,417,0.85,0.851);
		this.shape_69 = new cjs.Shape();
		this.shape_69.graphics.f("#32383D").s().p("AgwAfQgHABAAgIIAAgvQAAgIAHAAIBhAAQAHAAAAAIIAAAvQAAAIgHgBgAgpARIBTAAIAAghIhTAAg");
		this.shape_69.setTransform(414.6,481.1,0.85,0.851);
		this.shape_70 = new cjs.Shape();
		this.shape_70.graphics.f("#F9BF64").s().p("AgwAYIAAgvIBhAAIAAAvg");
		this.shape_70.setTransform(414.6,481.1,0.85,0.851);
		this.shape_71 = new cjs.Shape();
		this.shape_71.graphics.f("#32383D").s().p("AgwAgQgHgBAAgGIAAgxQAAgGAHAAIBhAAQAHAAAAAGIAAAxQAAAGgHABgAgpARIBTAAIAAgiIhTAAg");
		this.shape_71.setTransform(436.3,469.6,0.85,0.851);
		this.shape_72 = new cjs.Shape();
		this.shape_72.graphics.f("#F9BF64").s().p("AgwAZIAAgxIBhAAIAAAxg");
		this.shape_72.setTransform(436.3,469.6,0.85,0.851);
		this.shape_73 = new cjs.Shape();
		this.shape_73.graphics.f("#32383D").s().p("AgwAgQgHgBAAgHIAAgvQAAgIAHABIBhAAQAHgBAAAIIAAAvQAAAHgHABgAgpARIBTAAIAAgiIhTAAg");
		this.shape_73.setTransform(471.8,476.3,0.85,0.851);
		this.shape_74 = new cjs.Shape();
		this.shape_74.graphics.f("#F9BF64").s().p("AgwAYIAAgvIBhAAIAAAvg");
		this.shape_74.setTransform(471.8,476.3,0.85,0.851);
		this.shape_75 = new cjs.Shape();
		this.shape_75.graphics.f("#32383D").s().p("AgwAfQgHAAAAgGIAAgxQAAgGAHgBIBhAAQAHABAAAGIAAAxQAAAGgHAAgAgpASIBTAAIAAgjIhTAAg");
		this.shape_75.setTransform(492.2,480.7,0.85,0.851);
		this.shape_76 = new cjs.Shape();
		this.shape_76.graphics.f("#F9BF64").s().p("AgwAZIAAgxIBhAAIAAAxg");
		this.shape_76.setTransform(492.2,480.7,0.85,0.851);
		this.shape_77 = new cjs.Shape();
		this.shape_77.graphics.f("#32383D").s().p("AgwAgQgHAAAAgIIAAgvQAAgIAHABIBhAAQAHgBAAAIIAAAvQAAAIgHAAgAgpARIBTAAIAAgiIhTAAg");
		this.shape_77.setTransform(459.8,492.9,0.85,0.851);
		this.shape_78 = new cjs.Shape();
		this.shape_78.graphics.f("#F9BF64").s().p("AgwAYIAAgvIBhAAIAAAvg");
		this.shape_78.setTransform(459.8,492.9,0.85,0.851);
		this.shape_79 = new cjs.Shape();
		this.shape_79.graphics.f("#32383D").s().p("AgGAbIAAg2QAAgHAGAAQAHAAAAAHIAAA2QAAAIgHAAQgGAAAAgIg");
		this.shape_79.setTransform(373,510.2,0.85,0.851);
		this.shape_80 = new cjs.Shape();
		this.shape_80.graphics.f("#32383D").s().p("AgGAsIAAhXQAAgHAGAAQAHAAAAAHIAABXQAAAHgHAAQgGAAAAgHg");
		this.shape_80.setTransform(347.8,484.8,0.85,0.851);
		this.shape_81 = new cjs.Shape();
		this.shape_81.graphics.f("#32383D").s().p("AgGA0IAAhnQAAgHAGAAQAHAAAAAHIAABnQAAAHgHAAQgGAAAAgHg");
		this.shape_81.setTransform(366.7,491.9,0.85,0.851);
		this.shape_82 = new cjs.Shape();
		this.shape_82.graphics.f("#32383D").s().p("AgGA3IAAhtQAAgHAGAAQAHAAAAAHIAABtQAAAHgHAAQgGAAAAgHg");
		this.shape_82.setTransform(362.3,507.9,0.85,0.851);
		this.shape_83 = new cjs.Shape();
		this.shape_83.graphics.f("#32383D").s().p("AgGBKIAAiSQAAgHAGAAQAHAAAAAHIAACSQAAAAAAABQAAAAAAABQgBAAAAABQAAABgBAAQgDACgCAAQgGAAAAgGg");
		this.shape_83.setTransform(355.9,478.6,0.85,0.851);
		this.shape_84 = new cjs.Shape();
		this.shape_84.graphics.f("#32383D").s().p("AgGBLIAAiVQAAgHAGAAQAHAAAAAHIAACVQAAAHgHAAQgGAAAAgHg");
		this.shape_84.setTransform(347.8,506.2,0.85,0.851);
		this.shape_85 = new cjs.Shape();
		this.shape_85.graphics.f("#32383D").s().p("AgGBNIAAiZQAAgHAGAAQAHAAAAAHIAACZQAAADgCACQgDACgCAAQgGAAAAgHg");
		this.shape_85.setTransform(337.4,484,0.85,0.851);
		this.shape_86 = new cjs.Shape();
		this.shape_86.graphics.f("#32383D").s().p("AgGBDIAAiFQAAgDACgCQACgCACAAQAHAAAAAHIAACFQAAAHgHAAQgGAAAAgHg");
		this.shape_86.setTransform(330.5,506.8,0.85,0.851);
		this.shape_87 = new cjs.Shape();
		this.shape_87.graphics.f("#32383D").s().p("AktD3QgEAAgCgCQgCgCAAgDQACggAGgtQANhaAZhKQAph5BCg+QBEg+BYAAQBaAABDA+QBDA+AoB5QAZBKANBaQAGAtACAgQAAADgCACQgCACgEAAgAjwgVQgsB0gKCLIJNAAQgKiOgshxQhQjTihAAQigAAhQDTg");
		this.shape_87.setTransform(350.9,492.1,0.85,0.851);
		this.shape_88 = new cjs.Shape();
		this.shape_88.graphics.f("#FC3D4B").s().p("AktDwQAEh4Aph4QBQjvCwAAQCxAABQDvQApB4AEB4g");
		this.shape_88.setTransform(350.9,492.1,0.85,0.851);
		this.shape_89 = new cjs.Shape();
		this.shape_89.graphics.f("#32383D").s().p("AnIBfQgDAAgCgCQgCgDAAgCIAAhpQAAgHAHAAIApAAIAAg/QAAgHAHAAIA7AAQAHAAAAAHIAAA/IAiAAIAAg/QAAgDACgCQADgCACAAIA8AAQAGAAAAAHIAAA/IAjAAIAAg/QAAgDACgCQACgCADAAIA7AAQAHAAAAAHIAAA/IAiAAIAAg/QAAgHAIAAIA6AAQAHAAAAAHIAAA/IAiAAIAAg/QAAgHAHAAIA7AAQAHAAAAAHIAAA/IAjAAIAAg/QgBgHAIAAIA6AAQAIAAgBAHIAAA/IAjAAIAAg/QAAgDACgCQADgCACAAIA7AAQAHAAAAAHIAAA/IAjAAIAAg/QAAgDABgCQADgCADAAIA6AAQAIAAAAAHIAAA/IAvAAQAHAAAAAHIAABpQAAAHgHAAgAnBBRIODAAIAAhbIgwAAQgGAAAAgHIAAg/IguAAIAAA/QAAAHgGAAIgxAAQgHAAABgHIAAg/IguAAIAAA/QAAAHgHAAIgxAAQgGAAAAgHIAAg/IgtAAIAAA/QgBAHgGAAIgxAAQgHAAAAgHIAAg/IgtAAIAAA/QAAAHgHAAIgwAAQgGAAAAgHIAAg/IgtAAIAAA/QgBAHgGAAIgxAAQgHAAAAgHIAAg/IgtAAIAAA/QAAAHgHAAIgwAAQgIAAABgHIAAg/IgtAAIAAA/QgBAHgHAAIgwAAQgCAAgDgCQgCgCAAgDIAAg/IgtAAIAAA/QAAAHgHAAIgpAAg");
		this.shape_89.setTransform(350.9,435.9,0.85,0.851);
		this.shape_90 = new cjs.Shape();
		this.shape_90.graphics.f("#F9BF64").s().p("AnIBYIAAhpIAwAAIAAhGIA7AAIAABGIAwAAIAAhGIA8AAIAABGIAwAAIAAhGIA7AAIAABGIAxAAIAAhGIA6AAIAABGIAwAAIAAhGIA7AAIAABGIAxAAIAAhGIA6AAIAABGIAxAAIAAhGIA7AAIAABGIAxAAIAAhGIA6AAIAABGIA3AAIAABpg");
		this.shape_90.setTransform(350.9,435.9,0.85,0.851);
		this.shape_91 = new cjs.Shape();
		this.shape_91.graphics.f("#32383D").s().p("AkFBdQgHAAAAgHIAAirQAAgHAHAAIAlAAQAGAAAAAHIAAA+IAkAAIAAg+QAAgHAHAAIA7AAQAHAAAAAHIAAA+IAZAAIAAg+QAAgHAHAAIA7AAQAHAAAAAHIAAA+IAXAAIAAg+QAAgHAHAAIA7AAQAHAAAAAHIAAA+IAZAAIAAg+QAAgHAHAAIA7AAQAHAAAAAHIAAA+IAkAAIAAg+QAAgHAHAAIAkAAQAHAAAAAHIAACrQAAAHgHAAgAj+BPIH9AAIAAidIgWAAIAAA+QAAAHgHAAIgyAAQgHAAAAgHIAAg+IgtAAIAAA+QAAAHgHAAIgnAAQgHAAAAgHIAAg+IgtAAIAAA+QAAAHgHAAIglAAQgHAAAAgHIAAg+IgtAAIAAA+QAAAHgHAAIgnAAQgHAAAAgHIAAg+IgtAAIAAA+QAAAHgHAAIgxAAQgHAAAAgHIAAg+IgXAAg");
		this.shape_91.setTransform(484.8,417.1,0.85,0.851);
		this.shape_92 = new cjs.Shape();
		this.shape_92.graphics.f("#F9BF64").s().p("AkFBWIAAirIAlAAIAABFIAxAAIAAhFIA7AAIAABFIAnAAIAAhFIA7AAIAABFIAlAAIAAhFIA7AAIAABFIAnAAIAAhFIA7AAIAABFIAyAAIAAhFIAkAAIAACrg");
		this.shape_92.setTransform(484.8,417.1,0.85,0.851);
		this.shape_93 = new cjs.Shape();
		this.shape_93.graphics.f("#32383D").s().p("AhWCRQgHAAAAgGIAAisQAAgPAEgRQAHgiAUgVQAYgYAmAAQAoAAAXAYQAUAVAHAiQAEARAAAPIAACsQAAAGgHAAgAg0huQgRASgHAfQgDAPAAANIAAClICfAAIAAilQAAgNgDgPQgHgggRgRQgUgVghAAQggAAgUAVg");
		this.shape_93.setTransform(484.8,449.3,0.85,0.851);
		this.shape_94 = new cjs.Shape();
		this.shape_94.graphics.f("#F9BF64").s().p("AhWCLIAAisQAAgaAKgaQAVg1A3AAQA4AAAVA1QAKAaAAAaIAACsg");
		this.shape_94.setTransform(484.8,449.3,0.85,0.851);
		this.shape_95 = new cjs.Shape();
		this.shape_95.graphics.f("#32383D").s().p("AiiINIgtgbQgCgDAAgDIAAwLQAAgHAHAAIGVAAQAHAAAAAHIAAQLQAAADgCADQgNAOgfANQg/AahlAAQhjAAg/gagAjDHqQAQAOAiANQA7AUBWAAQBXAAA7gUQAigNAQgOIAAwCImHAAg");
		this.shape_95.setTransform(484.8,470.7,0.85,0.851);
		this.shape_96 = new cjs.Shape();
		this.shape_96.graphics.f("#529DF7").s().p("AigIGIgqgaIAAwLIGVAAIAAQLQgLANgfANQg+AahjAAQhiAAg+gag");
		this.shape_96.setTransform(484.8,470.7,0.85,0.851);
		this.shape_97 = new cjs.Shape();
		this.shape_97.graphics.f("#32383D").s().p("AhVCSQgHAAAAgIIAAirQgCgJAFgYQAHgiAUgUQAYgYAmAAQAoAAAXAYQAUAUAIAjQADARAAAPIAACrQAAADgCADQgCACgDAAgAg0hvQgRASgHAgQgDAPAAANIAACkICfAAIAAikQAAgNgDgPQgHgggRgSQgTgUgiAAQggAAgUAUg");
		this.shape_97.setTransform(367.4,381.7,0.85,0.851);
		this.shape_98 = new cjs.Shape();
		this.shape_98.graphics.f("#F9BF64").s().p("AhWCKIAAirQAAgaAKgbQAVg0A3AAQA4AAAVA0QAKAbAAAaIAACrg");
		this.shape_98.setTransform(367.4,381.7,0.85,0.851);
		this.shape_99 = new cjs.Shape();
		this.shape_99.graphics.f("#32383D").s().p("AhWCSQgHAAAAgIIAAirQAAgPAEgSQAHgiAUgUQAYgYAmAAQAnAAAYAYQAUAUAHAjQAEARAAAPIAACrQAAAIgHAAgAg0hvQgRASgHAgQgDAPAAANIAACkICfAAIAAikQAAgNgDgPQgHgggRgSQgUgUghAAQggAAgUAUg");
		this.shape_99.setTransform(334.6,381.7,0.85,0.851);
		this.shape_100 = new cjs.Shape();
		this.shape_100.graphics.f("#F9BF64").s().p("AhWCKIAAirQAAgaAKgbQAVg0A3AAQA4AAAVA0QAKAbAAAaIAACrg");
		this.shape_100.setTransform(334.6,381.7,0.85,0.851);
		this.shape_101 = new cjs.Shape();
		this.shape_101.graphics.f("#32383D").s().p("AhVCSQgHAAAAgIIAAirQgCgIAFgYQAHgjAUgUQAZgYAlAAQAnAAAYAYQAUAUAIAjQADARAAAPIAACrQAAAIgHAAgAg0huQgRARgHAgQgDAPAAANIAACkICfAAIAAikQAAgNgDgPQgHgggRgRQgTgVgiAAQggAAgUAVg");
		this.shape_101.setTransform(407,428.8,0.85,0.851);
		this.shape_102 = new cjs.Shape();
		this.shape_102.graphics.f("#F9BF64").s().p("AhWCKIAAirQAAgaAKgaQAVg1A3AAQA4AAAVA1QAKAaAAAaIAACrg");
		this.shape_102.setTransform(407.1,428.8,0.85,0.851);
		this.shape_103 = new cjs.Shape();
		this.shape_103.graphics.f("#32383D").s().p("AgrA7QgHgBAAgGIAAhnQAAgDACgBQACgCADAAIBXAAQAHAAAAAGIAABnQAAAGgHABgAgkAsIBJAAIAAhYIhJAAg");
		this.shape_103.setTransform(425.8,458.2,0.85,0.851);
		this.shape_104 = new cjs.Shape();
		this.shape_104.graphics.f("#F9BF64").s().p("AgrA0IAAhnIBXAAIAABng");
		this.shape_104.setTransform(425.8,458.2,0.85,0.851);
		this.shape_105 = new cjs.Shape();
		this.shape_105.graphics.f("#32383D").s().p("AgrA7QgHgBAAgGIAAhnQAAgGAHAAIBXAAQAHAAAAAGIAABnQAAAGgHABgAgkAsIBJAAIAAhYIhJAAg");
		this.shape_105.setTransform(418.3,458.2,0.85,0.851);
		this.shape_106 = new cjs.Shape();
		this.shape_106.graphics.f("#F9BF64").s().p("AgrA0IAAhnIBXAAIAABng");
		this.shape_106.setTransform(418.3,458.2,0.85,0.851);
		this.shape_107 = new cjs.Shape();
		this.shape_107.graphics.f("#32383D").s().p("AgrA7QgHgBAAgGIAAhnQAAgGAHAAIBXAAQAHAAAAAGIAABnQAAAGgHABgAgkAsIBJAAIAAhYIhJAAg");
		this.shape_107.setTransform(410.9,458.2,0.85,0.851);
		this.shape_108 = new cjs.Shape();
		this.shape_108.graphics.f("#F9BF64").s().p("AgrA0IAAhnIBXAAIAABng");
		this.shape_108.setTransform(410.9,458.2,0.85,0.851);
		this.shape_109 = new cjs.Shape();
		this.shape_109.graphics.f("#32383D").s().p("AgrA7QgHgBAAgGIAAhnQAAgGAHAAIBXAAQAHAAAAAGIAABnQAAAGgHABgAgkAsIBJAAIAAhYIhJAAg");
		this.shape_109.setTransform(403.4,458.2,0.85,0.851);
		this.shape_110 = new cjs.Shape();
		this.shape_110.graphics.f("#F9BF64").s().p("AgrA0IAAhnIBXAAIAABng");
		this.shape_110.setTransform(403.4,458.2,0.85,0.851);
		this.shape_111 = new cjs.Shape();
		this.shape_111.graphics.f("#32383D").s().p("AgrA7QgHgBAAgGIAAhnQAAgGAHAAIBXAAQAHAAAAAGIAABnQAAAGgHABgAgkAsIBJAAIAAhYIhJAAg");
		this.shape_111.setTransform(395.9,458.2,0.85,0.851);
		this.shape_112 = new cjs.Shape();
		this.shape_112.graphics.f("#F9BF64").s().p("AgrA0IAAhnIBXAAIAABng");
		this.shape_112.setTransform(395.9,458.2,0.85,0.851);
		this.shape_113 = new cjs.Shape();
		this.shape_113.graphics.f("#32383D").s().p("AgrA7QgHgBAAgGIAAhnQAAgGAHAAIBXAAQAHAAAAAGIAABnQAAAGgHABgAgkAsIBJAAIAAhYIhJAAg");
		this.shape_113.setTransform(388.5,458.2,0.85,0.851);
		this.shape_114 = new cjs.Shape();
		this.shape_114.graphics.f("#F9BF64").s().p("AgrA0IAAhnIBXAAIAABng");
		this.shape_114.setTransform(388.5,458.2,0.85,0.851);
		this.shape_115 = new cjs.Shape();
		this.shape_115.graphics.f("#32383D").s().p("AkFA7QgIgBABgGIAAhnQgBgGAIAAIILAAQAHAAABAGIAABnQgBAGgHABgAj/AsIH+AAIAAhYIn+AAg");
		this.shape_115.setTransform(407,458.2,0.85,0.851);
		this.shape_116 = new cjs.Shape();
		this.shape_116.graphics.f("#A1B4C4").s().p("AkFA0IAAhnIILAAIAABng");
		this.shape_116.setTransform(407,458.2,0.85,0.851);
		this.shape_117 = new cjs.Shape();
		this.shape_117.graphics.f("#32383D").s().p("AjKEtQgHAAAAgHIAApLQAAgCACgDQACgCADAAIGVAAQACAAADACQACADAAACIAAJLQAAAHgHAAgAjDEfIGHAAIAAo9ImHAAg");
		this.shape_117.setTransform(407,428.9,0.85,0.851);
		this.shape_118 = new cjs.Shape();
		this.shape_118.graphics.f("#529DF7").s().p("AjKEmIAApLIGVAAIAAJLg");
		this.shape_118.setTransform(407,428.9,0.85,0.851);
		this.shape_119 = new cjs.Shape();
		this.shape_119.graphics.f("#32383D").s().p("AhWCSQgHAAAAgIIAAirQAAgPAEgRQAHgjAUgUQAYgYAmAAQAmAAAZAYQAUAUAHAjQAEARAAAPIAACrQAAAIgHAAgAg0huQgRARgHAgQgDAPAAANIAACkICfAAIAAikQAAgNgDgPQgHgggRgRQgUgVghAAQggAAgUAVg");
		this.shape_119.setTransform(294.8,428.8,0.85,0.851);
		this.shape_120 = new cjs.Shape();
		this.shape_120.graphics.f("#F9BF64").s().p("AhWCKIAAirQAAgaAKgaQAVg1A3AAQA4AAAVA1QAKAaAAAaIAACrg");
		this.shape_120.setTransform(294.8,428.8,0.85,0.851);
		this.shape_121 = new cjs.Shape();
		this.shape_121.graphics.f("#32383D").s().p("AgrA7QgHgBAAgGIAAhnQAAgGAHAAIBXAAQAHAAAAAGIAABnQAAAGgHABgAgkAsIBJAAIAAhYIhJAAg");
		this.shape_121.setTransform(313.5,458.2,0.85,0.851);
		this.shape_122 = new cjs.Shape();
		this.shape_122.graphics.f("#F9BF64").s().p("AgrA0IAAhnIBXAAIAABng");
		this.shape_122.setTransform(313.5,458.2,0.85,0.851);
		this.shape_123 = new cjs.Shape();
		this.shape_123.graphics.f("#32383D").s().p("AgrA7QgHgBAAgGIAAhnQAAgGAHAAIBXAAQAHAAAAAGIAABnQAAAGgHABgAgkAsIBJAAIAAhYIhJAAg");
		this.shape_123.setTransform(306.1,458.2,0.85,0.851);
		this.shape_124 = new cjs.Shape();
		this.shape_124.graphics.f("#F9BF64").s().p("AgrA0IAAhnIBXAAIAABng");
		this.shape_124.setTransform(306.1,458.2,0.85,0.851);
		this.shape_125 = new cjs.Shape();
		this.shape_125.graphics.f("#32383D").s().p("AgrA7QgHgBAAgGIAAhnQAAgGAHAAIBXAAQAHAAAAAGIAABnQAAAGgHABgAgkAsIBJAAIAAhYIhJAAg");
		this.shape_125.setTransform(298.6,458.2,0.85,0.851);
		this.shape_126 = new cjs.Shape();
		this.shape_126.graphics.f("#F9BF64").s().p("AgrA0IAAhnIBXAAIAABng");
		this.shape_126.setTransform(298.6,458.2,0.85,0.851);
		this.shape_127 = new cjs.Shape();
		this.shape_127.graphics.f("#32383D").s().p("AgrA7QgHgBAAgGIAAhnQAAgGAHAAIBXAAQAHAAAAAGIAABnQAAAGgHABgAgkAsIBJAAIAAhYIhJAAg");
		this.shape_127.setTransform(291.1,458.2,0.85,0.851);
		this.shape_128 = new cjs.Shape();
		this.shape_128.graphics.f("#F9BF64").s().p("AgrA0IAAhnIBXAAIAABng");
		this.shape_128.setTransform(291.1,458.2,0.85,0.851);
		this.shape_129 = new cjs.Shape();
		this.shape_129.graphics.f("#32383D").s().p("AgrA7QgHgBAAgGIAAhnQAAgGAHAAIBXAAQAHAAAAAGIAABnQAAAGgHABgAgkAsIBJAAIAAhYIhJAAg");
		this.shape_129.setTransform(283.7,458.2,0.85,0.851);
		this.shape_130 = new cjs.Shape();
		this.shape_130.graphics.f("#F9BF64").s().p("AgrA0IAAhnIBXAAIAABng");
		this.shape_130.setTransform(283.7,458.2,0.85,0.851);
		this.shape_131 = new cjs.Shape();
		this.shape_131.graphics.f("#32383D").s().p("AgrA7QgHgBAAgGIAAhnQAAgGAHAAIBXAAQAHAAAAAGIAABnQAAAGgHABgAgkAsIBJAAIAAhYIhJAAg");
		this.shape_131.setTransform(276.2,458.2,0.85,0.851);
		this.shape_132 = new cjs.Shape();
		this.shape_132.graphics.f("#F9BF64").s().p("AgrA0IAAhnIBXAAIAABng");
		this.shape_132.setTransform(276.2,458.2,0.85,0.851);
		this.shape_133 = new cjs.Shape();
		this.shape_133.graphics.f("#32383D").s().p("AkGA7QgHgBAAgGIAAhnQAAgGAHAAIIMAAQAIAAgBAGIAABnQABAGgIABgAj+AsIH+AAIAAhYIn+AAg");
		this.shape_133.setTransform(294.8,458.2,0.85,0.851);
		this.shape_134 = new cjs.Shape();
		this.shape_134.graphics.f("#A1B4C4").s().p("AkGA0IAAhnIIMAAIAABng");
		this.shape_134.setTransform(294.8,458.2,0.85,0.851);
		this.shape_135 = new cjs.Shape();
		this.shape_135.graphics.f("#32383D").s().p("AiiEsIgtgbIgCgFIAApKQAAgDACgCQACgCADAAIGVAAQAHAAAAAHIAAJKQAAADgCACQgNAOggANQg+AahlAAQhkAAg+gagAjDEJQARAPAiAMQA6AUBWAAQBXAAA6gUQAigMARgPIAApAImHAAg");
		this.shape_135.setTransform(407,489.8,0.85,0.851);
		this.shape_136 = new cjs.Shape();
		this.shape_136.graphics.f("#529DF7").s().p("AigEmIgqgaIAApKIGVAAIAAJKQgLANgfANQg9AZhkAAQhiAAg+gZg");
		this.shape_136.setTransform(407,489.8,0.85,0.851);
		this.shape_137 = new cjs.Shape();
		this.shape_137.graphics.f("#32383D").s().p("AiiEsIgtgbQgCgCAAgDIAApKQAAgHAHAAIGVAAQAHAAAAAHIAAJKQAAADgCACQgNAOggANQg/AahkAAQhkAAg+gagAjDEJQARAPAhAMQA7AUBWAAQBXAAA6gUQAigMARgPIAApAImHAAg");
		this.shape_137.setTransform(294.8,489.8,0.85,0.851);
		this.shape_138 = new cjs.Shape();
		this.shape_138.graphics.f("#529DF7").s().p("AigEmIgqgaIAApKIGVAAIAAJKQgLANgfANQg+AZhjAAQhjAAg9gZg");
		this.shape_138.setTransform(294.8,489.8,0.85,0.851);
		this.shape_139 = new cjs.Shape();
		this.shape_139.graphics.f("#32383D").s().p("AjKEtQgHAAAAgHIAApLQAAgCACgDQACgCADAAIGVAAQADAAACACQACADAAACIAAJLQAAAHgHAAgAjDEfIGHAAIAAo9ImHAAg");
		this.shape_139.setTransform(294.8,428.9,0.85,0.851);
		this.shape_140 = new cjs.Shape();
		this.shape_140.graphics.f("#529DF7").s().p("AjKEmIAApLIGVAAIAAJLg");
		this.shape_140.setTransform(294.8,428.9,0.85,0.851);
		this.shape_141 = new cjs.Shape();
		this.shape_141.graphics.f("#32383D").s().p("AnIGeQgHAAAAgHIAAstQAAgHAHAAIORAAQAHAAAAAHIAAMtQAAAHgHAAgAnBGRIODAAIAAsgIuDAAg");
		this.shape_141.setTransform(350.9,477.9,0.85,0.851);
		this.shape_142 = new cjs.Shape();
		this.shape_142.graphics.f("#529DF7").s().p("AnIGXIAAstIORAAIAAMtg");
		this.shape_142.setTransform(350.9,477.9,0.85,0.851);
		this.shape_143 = new cjs.Shape();
		this.shape_143.graphics.f("#32383D").s().p("Aj9GLQgIAAAAgHIAAsHQAAgHAIAAIH7AAQAHAAAAAHIAAMHQAAAHgHAAgAj2F9IHuAAIAAr5InuAAg");
		this.shape_143.setTransform(445.9,479.6,0.85,0.851);
		this.shape_144 = new cjs.Shape();
		this.shape_144.graphics.f("#529DF7").s().p("Aj9GEIAAsHIH7AAIAAMHg");
		this.shape_144.setTransform(445.9,479.6,0.85,0.851);
		this.shape_145 = new cjs.Shape();
		this.shape_145.graphics.f("#32383D").s().p("AkGBdQgGAAgBgHIAAirQABgHAGAAIAlAAQAIAAgBAHIAAA+IAkAAIAAg+QAAgDACgCQADgCACAAIA7AAQAHAAAAAHIAAA+IAZAAIAAg+QAAgHAHAAIA7AAQAHAAAAAHIAAA+IAYAAIAAg+QAAgHAGAAIA7AAQAHAAABAHIAAA+IAYAAIAAg+QAAgHAHAAIA7AAQAHAAAAAHIAAA+IAkAAIAAg+QAAgHAGAAIAlAAQAHAAAAAHIAACrQAAAHgHAAgAj+BPIH+AAIAAidIgYAAIAAA+QABAHgIAAIgxAAQgHAAAAgHIAAg+IgtAAIAAA+QAAAHgHAAIgnAAQgHAAAAgHIAAg+IgtAAIAAA+QABAHgIAAIglAAQgHAAAAgHIAAg+IgtAAIAAA+QAAAHgHAAIgnAAQgHAAAAgHIAAg+IgtAAIAAA+QAAAHgHAAIgyAAQgGAAgBgHIAAg+IgWAAg");
		this.shape_145.setTransform(445.3,439.3,0.85,0.851);
		this.shape_146 = new cjs.Shape();
		this.shape_146.graphics.f("#F9BF64").s().p("AkGBWIAAirIAlAAIAABFIAyAAIAAhFIA7AAIAABFIAnAAIAAhFIA7AAIAABFIAlAAIAAhFIA7AAIAABFIAnAAIAAhFIA7AAIAABFIAxAAIAAhFIAlAAIAACrg");
		this.shape_146.setTransform(445.3,439.3,0.85,0.851);
		this.shape_147 = new cjs.Shape();
		this.shape_147.graphics.f("#32383D").s().p("AkGBdQgCAAgCgCQgCgCAAgDIAAirQAAgHAGAAIAmAAQAGAAAAAHIAAA+IAkAAIAAg+QAAgHAHAAIA7AAQAHAAAAAHIAAA+IAZAAIAAg+QAAgHAHAAIA7AAQAHAAAAAHIAAA+IAXAAIAAg+QAAgHAIAAIA6AAQAIAAgBAHIAAA+IAZAAIAAg+QAAgHAHAAIA7AAQAHAAAAAHIAAA+IAkAAIAAg+QgBgHAIAAIAlAAQAGAAABAHIAACrQgBAHgGAAgAj/BPIH/AAIAAidIgYAAIAAA+QAAAHgGAAIgyAAQgHAAAAgHIAAg+IgtAAIAAA+QAAAHgHAAIgnAAQgGAAAAgHIAAg+IgtAAIAAA+QgBAHgGAAIgmAAQgHAAAAgHIAAg+IgtAAIAAA+QgBAHgGAAIgnAAQgHAAAAgHIAAg+IgtAAIAAA+QAAAHgHAAIgxAAQgIAAABgHIAAg+IgYAAg");
		this.shape_147.setTransform(217,417.1,0.85,0.851);
		this.shape_148 = new cjs.Shape();
		this.shape_148.graphics.f("#F9BF64").s().p("AkGBWIAAirIAmAAIAABFIAxAAIAAhFIA7AAIAABFIAnAAIAAhFIA7AAIAABFIAmAAIAAhFIA6AAIAABFIAnAAIAAhFIA7AAIAABFIAyAAIAAhFIAlAAIAACrg");
		this.shape_148.setTransform(217,417.1,0.85,0.851);
		this.shape_149 = new cjs.Shape();
		this.shape_149.graphics.f("#32383D").s().p("AhWCRQgHAAAAgGIAAisQgCgIAGgYQAHgiAUgVQAYgYAmAAQAnAAAYAYQAUAVAHAiQAEARAAAPIAACsQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgDACgCAAgAg0huQgRASgHAfQgDAPAAANIAAClICfAAIAAilQAAgNgDgPQgHgggRgRQgUgVghAAQggAAgUAVg");
		this.shape_149.setTransform(217,449.3,0.85,0.851);
		this.shape_150 = new cjs.Shape();
		this.shape_150.graphics.f("#F9BF64").s().p("AhWCLIAAisQAAgaAKgaQAVg1A3AAQA4AAAVA1QAKAaAAAaIAACsg");
		this.shape_150.setTransform(217.1,449.3,0.85,0.851);
		this.shape_151 = new cjs.Shape();
		this.shape_151.graphics.f("#32383D").s().p("AijINQgTgJgOgJIgLgJIgCgGIAAwLQAAgDACgCQACgCADAAIGVAAQAHAAAAAHIAAQLQAAADgCADQgNAOgfANQg/AahlAAQhjAAhAgagAjDHqQARAPAhAMQA7AUBWAAQBXAAA7gUQAhgMARgPIAAwCImHAAg");
		this.shape_151.setTransform(217,470.7,0.85,0.851);
		this.shape_152 = new cjs.Shape();
		this.shape_152.graphics.f("#529DF7").s().p("AigIGIgqgaIAAwLIGVAAIAAQLQgLANgfANQg+AahjAAQhiAAg+gag");
		this.shape_152.setTransform(217,470.7,0.85,0.851);
		this.shape_153 = new cjs.Shape();
		this.shape_153.graphics.f("#32383D").s().p("Aj9GLQgIAAABgHIAAsHQgBgHAIAAIH7AAQAIAAgBAHIAAMHQABAHgIAAgAj3F9IHuAAIAAr5InuAAg");
		this.shape_153.setTransform(255.9,479.6,0.85,0.851);
		this.shape_154 = new cjs.Shape();
		this.shape_154.graphics.f("#529DF7").s().p("Aj9GEIAAsHIH7AAIAAMHg");
		this.shape_154.setTransform(255.9,479.6,0.85,0.851);
		this.shape_155 = new cjs.Shape();
		this.shape_155.graphics.f("#32383D").s().p("AkFBdQgHAAAAgHIAAirQAAgHAHAAIAkAAQAHAAAAAHIAAA+IAkAAIAAg+QAAgHAHAAIA7AAQAHAAAAAHIAAA+IAZAAIAAg+QAAgHAHAAIA7AAQAHAAAAAHIAAA+IAXAAIAAg+QAAgHAHAAIA7AAQAHAAAAAHIAAA+IAZAAIAAg+QAAgHAHAAIA7AAQAHAAAAAHIAAA+IAkAAIAAg+QAAgHAHAAIAkAAQAHAAAAAHIAACrQAAAHgHAAgAj+BPIH9AAIAAidIgWAAIAAA+QAAAHgHAAIgyAAQgHAAAAgHIAAg+IgtAAIAAA+QAAAHgHAAIgnAAQgHAAAAgHIAAg+IgtAAIAAA+QAAAHgHAAIglAAQgHAAAAgHIAAg+IgtAAIAAA+QAAAHgHAAIgnAAQgHAAAAgHIAAg+IgtAAIAAA+QAAAHgHAAIgyAAQgGAAAAgHIAAg+IgXAAg");
		this.shape_155.setTransform(256.6,439.3,0.85,0.851);
		this.shape_156 = new cjs.Shape();
		this.shape_156.graphics.f("#F9BF64").s().p("AkFBWIAAirIAkAAIAABFIAyAAIAAhFIA7AAIAABFIAnAAIAAhFIA7AAIAABFIAlAAIAAhFIA7AAIAABFIAnAAIAAhFIA7AAIAABFIAyAAIAAhFIAkAAIAACrg");
		this.shape_156.setTransform(256.6,439.3,0.85,0.851);
		this.shape_157 = new cjs.Shape();
		this.shape_157.graphics.f("#32383D").s().p("AoPHqQgHAAAAgIIAAvDQAAgIAHAAIQfAAQAHAAAAAIIAAPDQAAAIgHAAgAoIHbIQRAAIAAu1IwRAAg");
		this.shape_157.setTransform(351,399.6,0.85,0.851);
		this.shape_158 = new cjs.Shape();
		this.shape_158.graphics.f("#529DF7").s().p("AoPHiIAAvDIQfAAIAAPDg");
		this.shape_158.setTransform(351,399.6,0.85,0.851);
		this.shape_159 = new cjs.Shape();
		this.shape_159.graphics.f("#32383D").s().p("AoPDIQgHAAAAgHIAAmBQAAgHAHAAIQfAAQAHAAAAAHIAAGBQAAAHgHAAgAoIC6IQRAAIAAlzIwRAAg");
		this.shape_159.setTransform(351,342.1,0.85,0.851);
		this.shape_160 = new cjs.Shape();
		this.shape_160.graphics.f("#529DF7").s().p("AoPDBIAAmBIQfAAIAAGBg");
		this.shape_160.setTransform(351,342.1,0.85,0.851);
		this.shape_161 = new cjs.Shape();
		this.shape_161.graphics.f("#32383D").s().p("Aj5DSQgEAAgCgEQgCgEACgDID6mVQACgDADAAQAEAAACADID6GVQACADgCAEQgCAEgEAAgAjsDEIHZAAIjtmBg");
		this.shape_161.setTransform(484.8,385.2,0.85,0.851);
		this.shape_162 = new cjs.Shape();
		this.shape_162.graphics.f("#FC3D4B").s().p("Aj5DLID5mVID6GVg");
		this.shape_162.setTransform(484.8,385.1,0.85,0.851);
		this.shape_163 = new cjs.Shape();
		this.shape_163.graphics.f("#32383D").s().p("AjKBzQgHAAAAgHIAAjXQAAgHAHAAIGVAAQAHAAAAAHIAADXQAAAHgHAAgAjDBlIGHAAIAAjJImHAAg");
		this.shape_163.setTransform(484.8,409.9,0.85,0.851);
		this.shape_164 = new cjs.Shape();
		this.shape_164.graphics.f("#529DF7").s().p("AjKBsIAAjXIGVAAIAADXg");
		this.shape_164.setTransform(484.8,409.9,0.85,0.851);
		this.shape_165 = new cjs.Shape();
		this.shape_165.graphics.f("#32383D").s().p("Aj5DSQgEAAgCgEQgCgEACgDID6mVQACgDADAAQAEAAACADID6GVQABADgBAEQgCAEgEAAgAjtDEIHaAAIjtmBg");
		this.shape_165.setTransform(217,385.2,0.85,0.851);
		this.shape_166 = new cjs.Shape();
		this.shape_166.graphics.f("#FC3D4B").s().p("Aj5DLID5mVID6GVg");
		this.shape_166.setTransform(217,385.1,0.85,0.851);
		this.shape_167 = new cjs.Shape();
		this.shape_167.graphics.f("#32383D").s().p("AjKBzQgHAAAAgHIAAjXQAAgHAHAAIGVAAQAHAAAAAHIAADXQAAAHgHAAgAjDBlIGHAAIAAjJImHAAg");
		this.shape_167.setTransform(217.1,409.9,0.85,0.851);
		this.shape_168 = new cjs.Shape();
		this.shape_168.graphics.f("#529DF7").s().p("AjKBsIAAjXIGVAAIAADXg");
		this.shape_168.setTransform(217,409.9,0.85,0.851);
		this.shape_169 = new cjs.Shape();
		this.shape_169.graphics.f("#32383D").s().p("A6yBmQgyAAglgXQglgWAAggIAAh5QAAgEAHgBMA5PAAAQAHABAAAEIAAB5QAAAgglAWQglAXgyAAgA8gAZQAAAdAgATQAhAUAtAAMA1lAAAQAtAAAhgUQAggTAAgdIAAh1Mg5BAAAg");
		this.shape_169.setTransform(350.8,519.3,0.85,0.851);
		this.shape_170 = new cjs.Shape();
		this.shape_170.graphics.f("#ABF4EB").s().p("A6yBhQgxAAghgVQgjgVAAgeIAAh5MA5PAAAIAAB5QAAAegjAVQghAVgxAAg");
		this.shape_170.setTransform(350.8,519.3,0.85,0.851);
		this.shape_171 = new cjs.Shape();
		this.shape_171.graphics.f("#32383D").s().p("AhNA5QgHAAAAgFIAAhnQAAgFAHAAICbAAQAHAAAAAFIAABnQAAAFgHAAgAhGAvICNAAIAAhdIiNAAg");
		this.shape_171.setTransform(211.3,530.2,0.85,0.851);
		this.shape_172 = new cjs.Shape();
		this.shape_172.graphics.f("#A1B4C4").s().p("AhNA0IAAhnICbAAIAABng");
		this.shape_172.setTransform(211.3,530.2,0.85,0.851);
		this.shape_173 = new cjs.Shape();
		this.shape_173.graphics.f("#32383D").s().p("ABZA5QhNgBg2gmQgqgdgLgnQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAgBQACgCAEAAICyAAQAGAAAAAFIAABnQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBABIgEABgAggALQAvAhBEADIAAhdIijAAQANAiAjAXg");
		this.shape_173.setTransform(197,530.2,0.85,0.851);
		this.shape_174 = new cjs.Shape();
		this.shape_174.graphics.f("#A1B4C4").s().p("AgmAOQgogbgKgmICxAAIAABnQhKgCg1gkg");
		this.shape_174.setTransform(197.1,530.2,0.85,0.851);
		this.shape_175 = new cjs.Shape();
		this.shape_175.graphics.f("#32383D").s().p("AhWAvQgHAAAAgDQgEgNAAgOIAAg6QAAgFAHAAIC1AAQAHAAAAAFIAABUQAAAEgHAAgAhTARQAAAMACAJICmAAIAAhLIioAAg");
		this.shape_175.setTransform(196.9,522.2,0.85,0.851);
		this.shape_176 = new cjs.Shape();
		this.shape_176.graphics.f("#A1B4C4").s().p("AhXAqQgDgLAAgOIAAg7IC1AAIAABUg");
		this.shape_176.setTransform(196.9,522.2,0.85,0.851);
		this.shape_177 = new cjs.Shape();
		this.shape_177.graphics.f("#32383D").s().p("AhNA5QgHAAAAgFIAAhnQAAgFAHAAICbAAQAHAAAAAFIAABnQAAAFgHAAgAhGAvICNAAIAAhdIiNAAg");
		this.shape_177.setTransform(237.9,530.2,0.85,0.851);
		this.shape_178 = new cjs.Shape();
		this.shape_178.graphics.f("#A1B4C4").s().p("AhNA0IAAhnICbAAIAABng");
		this.shape_178.setTransform(237.9,530.2,0.85,0.851);
		this.shape_179 = new cjs.Shape();
		this.shape_179.graphics.f("#32383D").s().p("AhNA5QgHAAAAgFIAAhnQAAgFAHAAICbAAQAHAAAAAFIAABnQAAAFgHAAgAhGAvICNAAIAAhdIiNAAg");
		this.shape_179.setTransform(264.5,530.2,0.85,0.851);
		this.shape_180 = new cjs.Shape();
		this.shape_180.graphics.f("#A1B4C4").s().p("AhNA0IAAhnICbAAIAABng");
		this.shape_180.setTransform(264.5,530.2,0.85,0.851);
		this.shape_181 = new cjs.Shape();
		this.shape_181.graphics.f("#32383D").s().p("AhNA5QgHAAAAgFIAAhnQAAgFAHAAICbAAQAHAAAAAFIAABnQAAAFgHAAgAhGAvICNAAIAAhdIiNAAg");
		this.shape_181.setTransform(224.6,530.2,0.85,0.851);
		this.shape_182 = new cjs.Shape();
		this.shape_182.graphics.f("#A1B4C4").s().p("AhNA0IAAhnICbAAIAABng");
		this.shape_182.setTransform(224.6,530.2,0.85,0.851);
		this.shape_183 = new cjs.Shape();
		this.shape_183.graphics.f("#32383D").s().p("AhaAxQgHAAAAgFIAAhXQAAgFAHAAIC1AAQAHAAAAAFIAABXQAAAFgHAAgAhTAnICoAAIAAhNIioAAg");
		this.shape_183.setTransform(196.9,514.8,0.85,0.851);
		this.shape_184 = new cjs.Shape();
		this.shape_184.graphics.f("#A1B4C4").s().p("AhaAsIAAhXIC1AAIAABXg");
		this.shape_184.setTransform(196.9,514.8,0.85,0.851);
		this.shape_185 = new cjs.Shape();
		this.shape_185.graphics.f("#32383D").s().p("AhNA5QgHAAAAgFIAAhnQAAgFAHAAICbAAQAHAAAAAFIAABnQAAAFgHAAgAhGAvICNAAIAAhdIiNAAg");
		this.shape_185.setTransform(251.2,530.2,0.85,0.851);
		this.shape_186 = new cjs.Shape();
		this.shape_186.graphics.f("#A1B4C4").s().p("AhNA0IAAhnICbAAIAABng");
		this.shape_186.setTransform(251.2,530.2,0.85,0.851);
		this.shape_187 = new cjs.Shape();
		this.shape_187.graphics.f("#32383D").s().p("AhNA5QgHAAAAgFIAAhnQAAgFAHAAICbAAQAHAAAAAFIAABnQAAAFgHAAgAhGAvICNAAIAAhdIiNAAg");
		this.shape_187.setTransform(277.7,530.2,0.85,0.851);
		this.shape_188 = new cjs.Shape();
		this.shape_188.graphics.f("#A1B4C4").s().p("AhNA0IAAhnICbAAIAABng");
		this.shape_188.setTransform(277.7,530.2,0.85,0.851);
		this.shape_189 = new cjs.Shape();
		this.shape_189.graphics.f("#32383D").s().p("AhNAxQgHAAAAgFIAAhXQAAgFAHAAICbAAQAHAAAAAFIAABXQAAAFgHAAgAhGAnICNAAIAAhNIiNAAg");
		this.shape_189.setTransform(291.1,514.8,0.85,0.851);
		this.shape_190 = new cjs.Shape();
		this.shape_190.graphics.f("#A1B4C4").s().p("AhNAsIAAhXICbAAIAABXg");
		this.shape_190.setTransform(291.1,514.8,0.85,0.851);
		this.shape_191 = new cjs.Shape();
		this.shape_191.graphics.f("#32383D").s().p("AhNAxQgHAAAAgFIAAhXQAAgFAHAAICbAAQAHAAAAAFIAABXQAAAFgHAAgAhGAnICNAAIAAhNIiNAAg");
		this.shape_191.setTransform(277.7,514.8,0.85,0.851);
		this.shape_192 = new cjs.Shape();
		this.shape_192.graphics.f("#A1B4C4").s().p("AhNAsIAAhXICbAAIAABXg");
		this.shape_192.setTransform(277.7,514.8,0.85,0.851);
		this.shape_193 = new cjs.Shape();
		this.shape_193.graphics.f("#32383D").s().p("AhNAxQgHAAAAgFIAAhXQAAgFAHAAICbAAQAHAAAAAFIAABXQAAAFgHAAgAhGAnICNAAIAAhNIiNAAg");
		this.shape_193.setTransform(304.3,514.8,0.85,0.851);
		this.shape_194 = new cjs.Shape();
		this.shape_194.graphics.f("#A1B4C4").s().p("AhNAsIAAhXICbAAIAABXg");
		this.shape_194.setTransform(304.3,514.8,0.85,0.851);
		this.shape_195 = new cjs.Shape();
		this.shape_195.graphics.f("#32383D").s().p("AhNAxQgHAAAAgFIAAhXQAAgFAHAAICbAAQAHAAAAAFIAABXQAAAFgHAAgAhGAnICNAAIAAhNIiNAAg");
		this.shape_195.setTransform(251.2,514.8,0.85,0.851);
		this.shape_196 = new cjs.Shape();
		this.shape_196.graphics.f("#A1B4C4").s().p("AhNAsIAAhXICbAAIAABXg");
		this.shape_196.setTransform(251.2,514.8,0.85,0.851);
		this.shape_197 = new cjs.Shape();
		this.shape_197.graphics.f("#32383D").s().p("AhNAxQgHAAAAgFIAAhXQAAgFAHAAICbAAQAHAAAAAFIAABXQAAAFgHAAgAhGAnICNAAIAAhNIiNAAg");
		this.shape_197.setTransform(224.6,514.8,0.85,0.851);
		this.shape_198 = new cjs.Shape();
		this.shape_198.graphics.f("#A1B4C4").s().p("AhNAsIAAhXICbAAIAABXg");
		this.shape_198.setTransform(224.6,514.8,0.85,0.851);
		this.shape_199 = new cjs.Shape();
		this.shape_199.graphics.f("#32383D").s().p("AhNAxQgHAAAAgFIAAhXQAAgFAHAAICbAAQAHAAAAAFIAABXQAAAFgHAAgAhGAnICNAAIAAhNIiNAAg");
		this.shape_199.setTransform(237.9,514.8,0.85,0.851);
		this.shape_200 = new cjs.Shape();
		this.shape_200.graphics.f("#A1B4C4").s().p("AhNAsIAAhXICbAAIAABXg");
		this.shape_200.setTransform(237.9,514.8,0.85,0.851);
		this.shape_201 = new cjs.Shape();
		this.shape_201.graphics.f("#32383D").s().p("AhNAxQgHAAAAgFIAAhXQAAgFAHAAICbAAQAHAAAAAFIAABXQAAAFgHAAgAhGAnICNAAIAAhNIiNAAg");
		this.shape_201.setTransform(211.3,514.8,0.85,0.851);
		this.shape_202 = new cjs.Shape();
		this.shape_202.graphics.f("#A1B4C4").s().p("AhNAsIAAhXICbAAIAABXg");
		this.shape_202.setTransform(211.3,514.8,0.85,0.851);
		this.shape_203 = new cjs.Shape();
		this.shape_203.graphics.f("#32383D").s().p("AhNAxQgHAAAAgFIAAhXQAAgFAHAAICbAAQAHAAAAAFIAABXQAAAFgHAAgAhGAnICNAAIAAhNIiNAAg");
		this.shape_203.setTransform(264.5,514.8,0.85,0.851);
		this.shape_204 = new cjs.Shape();
		this.shape_204.graphics.f("#A1B4C4").s().p("AhNAsIAAhXICbAAIAABXg");
		this.shape_204.setTransform(264.5,514.8,0.85,0.851);
		this.shape_205 = new cjs.Shape();
		this.shape_205.graphics.f("#32383D").s().p("AhNA5QgHAAAAgFIAAhnQAAgFAHAAICbAAQAHAAAAAFIAABnQAAAFgHAAgAhGAvICNAAIAAhdIiNAAg");
		this.shape_205.setTransform(437.3,530.2,0.85,0.851);
		this.shape_206 = new cjs.Shape();
		this.shape_206.graphics.f("#A1B4C4").s().p("AhNA0IAAhnICbAAIAABng");
		this.shape_206.setTransform(437.3,530.2,0.85,0.851);
		this.shape_207 = new cjs.Shape();
		this.shape_207.graphics.f("#32383D").s().p("AhNA5QgHAAAAgFIAAhnQAAgFAHAAICbAAQAHAAAAAFIAABnQAAAFgHAAgAhGAvICNAAIAAhdIiNAAg");
		this.shape_207.setTransform(291.1,530.2,0.85,0.851);
		this.shape_208 = new cjs.Shape();
		this.shape_208.graphics.f("#A1B4C4").s().p("AhNA0IAAhnICbAAIAABng");
		this.shape_208.setTransform(291.1,530.2,0.85,0.851);
		this.shape_209 = new cjs.Shape();
		this.shape_209.graphics.f("#32383D").s().p("AhNA5QgHAAAAgFIAAhnQAAgFAHAAICcAAQAGAAAAAFIAABnQAAAFgGAAgAhGAvICNAAIAAhdIiNAAg");
		this.shape_209.setTransform(450.5,530.2,0.85,0.851);
		this.shape_210 = new cjs.Shape();
		this.shape_210.graphics.f("#A1B4C4").s().p("AhNA0IAAhnICbAAIAABng");
		this.shape_210.setTransform(450.6,530.2,0.85,0.851);
		this.shape_211 = new cjs.Shape();
		this.shape_211.graphics.f("#32383D").s().p("AhNAxQgHAAAAgFIAAhXQAAgFAHAAICbAAQAHAAAAAFIAABXQAAAFgHAAgAhGAnICNAAIAAhNIiNAAg");
		this.shape_211.setTransform(317.6,514.8,0.85,0.851);
		this.shape_212 = new cjs.Shape();
		this.shape_212.graphics.f("#A1B4C4").s().p("AhNAsIAAhXICbAAIAABXg");
		this.shape_212.setTransform(317.6,514.8,0.85,0.851);
		this.shape_213 = new cjs.Shape();
		this.shape_213.graphics.f("#32383D").s().p("AhYA5IgFgBQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAhnQAAgFAHAAICxAAQAEAAACACQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAQgLAngqAdQg2AmhNABgAhRAvQBDgDAvghQAjgXANgiIiiAAg");
		this.shape_213.setTransform(504.7,530.2,0.85,0.851);
		this.shape_214 = new cjs.Shape();
		this.shape_214.graphics.f("#A1B4C4").s().p("AhYgzICxAAQgKAmgpAbQgzAkhLACg");
		this.shape_214.setTransform(504.7,530.2,0.85,0.851);
		this.shape_215 = new cjs.Shape();
		this.shape_215.graphics.f("#32383D").s().p("AhaAvQgHAAAAgEIAAhUQAAgFAHAAIC1AAQAHAAAAAFIAAA6QAAAOgDANQgCADgFAAgAhTAmIClAAQACgJAAgMIAAg2IinAAg");
		this.shape_215.setTransform(504.8,522.2,0.85,0.851);
		this.shape_216 = new cjs.Shape();
		this.shape_216.graphics.f("#A1B4C4").s().p("AhaAqIAAhUIC1AAIAAA7QAAAOgDALg");
		this.shape_216.setTransform(504.8,522.2,0.85,0.851);
		this.shape_217 = new cjs.Shape();
		this.shape_217.graphics.f("#32383D").s().p("AhNA5QgHAAAAgFIAAhnQAAgFAHAAICbAAQAHAAAAAFIAABnQAAAFgHAAgAhGAvICNAAIAAhdIiNAAg");
		this.shape_217.setTransform(424,530.2,0.85,0.851);
		this.shape_218 = new cjs.Shape();
		this.shape_218.graphics.f("#A1B4C4").s().p("AhNA0IAAhnICbAAIAABng");
		this.shape_218.setTransform(424,530.2,0.85,0.851);
		this.shape_219 = new cjs.Shape();
		this.shape_219.graphics.f("#32383D").s().p("AhNA5QgHAAAAgFIAAhnQAAgFAHAAICbAAQAHAAAAAFIAABnQAAAFgHAAgAhGAvICNAAIAAhdIiNAAg");
		this.shape_219.setTransform(477.1,530.2,0.85,0.851);
		this.shape_220 = new cjs.Shape();
		this.shape_220.graphics.f("#A1B4C4").s().p("AhNA0IAAhnICbAAIAABng");
		this.shape_220.setTransform(477.1,530.2,0.85,0.851);
		this.shape_221 = new cjs.Shape();
		this.shape_221.graphics.f("#32383D").s().p("AhNA5QgHAAAAgFIAAhnQAAgFAHAAICbAAQAHAAAAAFIAABnQAAAFgGAAgAhGAvICNAAIAAhdIiNAAg");
		this.shape_221.setTransform(490.4,530.2,0.85,0.851);
		this.shape_222 = new cjs.Shape();
		this.shape_222.graphics.f("#A1B4C4").s().p("AhNA0IAAhnICbAAIAABng");
		this.shape_222.setTransform(490.4,530.2,0.85,0.851);
		this.shape_223 = new cjs.Shape();
		this.shape_223.graphics.f("#32383D").s().p("AhNA5QgHAAAAgFIAAhnQAAgFAHAAICbAAQAHAAAAAFIAABnQAAAFgHAAgAhHAvICOAAIAAhdIiOAAg");
		this.shape_223.setTransform(463.9,530.2,0.85,0.851);
		this.shape_224 = new cjs.Shape();
		this.shape_224.graphics.f("#A1B4C4").s().p("AhNA0IAAhnICbAAIAABng");
		this.shape_224.setTransform(463.9,530.2,0.85,0.851);
		this.shape_225 = new cjs.Shape();
		this.shape_225.graphics.f("#32383D").s().p("AhNA5QgHAAAAgFIAAhnQAAgFAHAAICbAAQAHAAAAAFIAABnQAAAFgHAAgAhGAvICNAAIAAhdIiNAAg");
		this.shape_225.setTransform(330.9,530.2,0.85,0.851);
		this.shape_226 = new cjs.Shape();
		this.shape_226.graphics.f("#A1B4C4").s().p("AhNA0IAAhnICbAAIAABng");
		this.shape_226.setTransform(330.9,530.2,0.85,0.851);
		this.shape_227 = new cjs.Shape();
		this.shape_227.graphics.f("#32383D").s().p("AhNA5QgHAAAAgFIAAhnQAAgFAHAAICbAAQAHAAAAAFIAABnQAAAFgHAAgAhGAvICNAAIAAhdIiNAAg");
		this.shape_227.setTransform(344.2,530.2,0.85,0.851);
		this.shape_228 = new cjs.Shape();
		this.shape_228.graphics.f("#A1B4C4").s().p("AhNA0IAAhnICbAAIAABng");
		this.shape_228.setTransform(344.2,530.2,0.85,0.851);
		this.shape_229 = new cjs.Shape();
		this.shape_229.graphics.f("#32383D").s().p("AhNA5QgHAAAAgFIAAhnQAAgFAHAAICbAAQAHAAAAAFIAABnQAAAFgHAAgAhGAvICNAAIAAhdIiNAAg");
		this.shape_229.setTransform(317.6,530.2,0.85,0.851);
		this.shape_230 = new cjs.Shape();
		this.shape_230.graphics.f("#A1B4C4").s().p("AhNA0IAAhnICbAAIAABng");
		this.shape_230.setTransform(317.6,530.2,0.85,0.851);
		this.shape_231 = new cjs.Shape();
		this.shape_231.graphics.f("#32383D").s().p("AhNA5QgHAAAAgFIAAhnQAAgFAHAAICbAAQAHAAAAAFIAABnQAAAFgHAAgAhGAvICNAAIAAhdIiNAAg");
		this.shape_231.setTransform(304.3,530.2,0.85,0.851);
		this.shape_232 = new cjs.Shape();
		this.shape_232.graphics.f("#A1B4C4").s().p("AhNA0IAAhnICbAAIAABng");
		this.shape_232.setTransform(304.3,530.2,0.85,0.851);
		this.shape_233 = new cjs.Shape();
		this.shape_233.graphics.f("#32383D").s().p("AhNA5QgHAAAAgFIAAhnQAAgFAHAAICbAAQAHAAAAAFIAABnQAAAFgHAAgAhGAvICNAAIAAhdIiNAAg");
		this.shape_233.setTransform(370.8,530.2,0.85,0.851);
		this.shape_234 = new cjs.Shape();
		this.shape_234.graphics.f("#A1B4C4").s().p("AhNA0IAAhnICbAAIAABng");
		this.shape_234.setTransform(370.8,530.2,0.85,0.851);
		this.shape_235 = new cjs.Shape();
		this.shape_235.graphics.f("#32383D").s().p("AhNA5QgHAAAAgFIAAhnQAAgFAHAAICbAAQAHAAAAAFIAABnQAAAFgHAAgAhGAvICNAAIAAhdIiNAAg");
		this.shape_235.setTransform(397.4,530.2,0.85,0.851);
		this.shape_236 = new cjs.Shape();
		this.shape_236.graphics.f("#A1B4C4").s().p("AhNA0IAAhnICbAAIAABng");
		this.shape_236.setTransform(397.4,530.2,0.85,0.851);
		this.shape_237 = new cjs.Shape();
		this.shape_237.graphics.f("#32383D").s().p("AhNA5QgHAAAAgFIAAhnQAAgFAHAAICbAAQAHAAAAAFIAABnQAAAFgHAAgAhGAvICOAAIAAhdIiOAAg");
		this.shape_237.setTransform(357.5,530.2,0.85,0.851);
		this.shape_238 = new cjs.Shape();
		this.shape_238.graphics.f("#A1B4C4").s().p("AhNA0IAAhnICbAAIAABng");
		this.shape_238.setTransform(357.5,530.2,0.85,0.851);
		this.shape_239 = new cjs.Shape();
		this.shape_239.graphics.f("#32383D").s().p("AhNA5QgHAAAAgFIAAhnQAAgFAHAAICbAAQAHAAAAAFIAABnQAAAFgHAAgAhGAvICNAAIAAhdIiNAAg");
		this.shape_239.setTransform(410.7,530.2,0.85,0.851);
		this.shape_240 = new cjs.Shape();
		this.shape_240.graphics.f("#A1B4C4").s().p("AhNA0IAAhnICbAAIAABng");
		this.shape_240.setTransform(410.7,530.2,0.85,0.851);
		this.shape_241 = new cjs.Shape();
		this.shape_241.graphics.f("#32383D").s().p("AhNA5QgHAAAAgFIAAhnQAAgFAHAAICbAAQAHAAAAAFIAABnQAAAFgHAAgAhGAvICNAAIAAhdIiNAAg");
		this.shape_241.setTransform(384.1,530.2,0.85,0.851);
		this.shape_242 = new cjs.Shape();
		this.shape_242.graphics.f("#A1B4C4").s().p("AhNA0IAAhnICbAAIAABng");
		this.shape_242.setTransform(384.1,530.2,0.85,0.851);
		this.shape_243 = new cjs.Shape();
		this.shape_243.graphics.f("#32383D").s().p("AhNAvQgHAAAAgEIAAhUQAAgFAHAAICbAAQAHAAAAAFIAABUQAAAEgHAAgAhGAmICNAAIAAhLIiNAAg");
		this.shape_243.setTransform(237.9,522.2,0.85,0.851);
		this.shape_244 = new cjs.Shape();
		this.shape_244.graphics.f("#A1B4C4").s().p("AhNAqIAAhUICbAAIAABUg");
		this.shape_244.setTransform(237.9,522.2,0.85,0.851);
		this.shape_245 = new cjs.Shape();
		this.shape_245.graphics.f("#32383D").s().p("AhNAvQgHAAAAgEIAAhUQAAgFAHAAICbAAQAHAAAAAFIAABUQAAAEgHAAgAhGAmICNAAIAAhLIiNAAg");
		this.shape_245.setTransform(317.6,522.2,0.85,0.851);
		this.shape_246 = new cjs.Shape();
		this.shape_246.graphics.f("#A1B4C4").s().p("AhNAqIAAhUICbAAIAABUg");
		this.shape_246.setTransform(317.6,522.2,0.85,0.851);
		this.shape_247 = new cjs.Shape();
		this.shape_247.graphics.f("#32383D").s().p("AhNAvQgHAAAAgEIAAhUQAAgFAHAAICbAAQAHAAAAAFIAABUQAAAEgHAAgAhGAmICNAAIAAhLIiNAAg");
		this.shape_247.setTransform(330.9,522.2,0.85,0.851);
		this.shape_248 = new cjs.Shape();
		this.shape_248.graphics.f("#A1B4C4").s().p("AhNAqIAAhUICbAAIAABUg");
		this.shape_248.setTransform(330.9,522.2,0.85,0.851);
		this.shape_249 = new cjs.Shape();
		this.shape_249.graphics.f("#32383D").s().p("AhNAvQgHAAAAgEIAAhUQAAgFAHAAICbAAQAHAAAAAFIAABUQAAAEgHAAgAhGAmICOAAIAAhLIiOAAg");
		this.shape_249.setTransform(357.5,522.2,0.85,0.851);
		this.shape_250 = new cjs.Shape();
		this.shape_250.graphics.f("#A1B4C4").s().p("AhNAqIAAhUICbAAIAABUg");
		this.shape_250.setTransform(357.5,522.2,0.85,0.851);
		this.shape_251 = new cjs.Shape();
		this.shape_251.graphics.f("#32383D").s().p("AhNAvQgHAAAAgEIAAhUQAAgFAHAAICbAAQAHAAAAAFIAABUQAAAEgHAAgAhGAmICNAAIAAhLIiNAAg");
		this.shape_251.setTransform(344.2,522.2,0.85,0.851);
		this.shape_252 = new cjs.Shape();
		this.shape_252.graphics.f("#A1B4C4").s().p("AhNAqIAAhUICbAAIAABUg");
		this.shape_252.setTransform(344.2,522.2,0.85,0.851);
		this.shape_253 = new cjs.Shape();
		this.shape_253.graphics.f("#32383D").s().p("AhNAvQgHAAAAgEIAAhUQAAgFAHAAICbAAQAHAAAAAFIAABUQAAAEgHAAgAhGAmICNAAIAAhLIiNAAg");
		this.shape_253.setTransform(370.8,522.2,0.85,0.851);
		this.shape_254 = new cjs.Shape();
		this.shape_254.graphics.f("#A1B4C4").s().p("AhNAqIAAhUICbAAIAABUg");
		this.shape_254.setTransform(370.8,522.2,0.85,0.851);
		this.shape_255 = new cjs.Shape();
		this.shape_255.graphics.f("#32383D").s().p("AhNAvQgHAAAAgEIAAhUQAAgFAHAAICbAAQAHAAAAAFIAABUQAAAEgHAAgAhGAmICNAAIAAhLIiNAAg");
		this.shape_255.setTransform(410.7,522.2,0.85,0.851);
		this.shape_256 = new cjs.Shape();
		this.shape_256.graphics.f("#A1B4C4").s().p("AhNAqIAAhUICbAAIAABUg");
		this.shape_256.setTransform(410.7,522.2,0.85,0.851);
		this.shape_257 = new cjs.Shape();
		this.shape_257.graphics.f("#32383D").s().p("AhNAvQgHAAAAgEIAAhUQAAgFAHAAICbAAQAHAAAAAFIAABUQAAAEgHAAgAhGAmICNAAIAAhLIiNAAg");
		this.shape_257.setTransform(397.4,522.2,0.85,0.851);
		this.shape_258 = new cjs.Shape();
		this.shape_258.graphics.f("#A1B4C4").s().p("AhNAqIAAhUICbAAIAABUg");
		this.shape_258.setTransform(397.4,522.2,0.85,0.851);
		this.shape_259 = new cjs.Shape();
		this.shape_259.graphics.f("#32383D").s().p("AhNAvQgHAAAAgEIAAhUQAAgFAHAAICbAAQAHAAAAAFIAABUQAAAEgHAAgAhGAmICNAAIAAhLIiNAAg");
		this.shape_259.setTransform(384.1,522.2,0.85,0.851);
		this.shape_260 = new cjs.Shape();
		this.shape_260.graphics.f("#A1B4C4").s().p("AhNAqIAAhUICbAAIAABUg");
		this.shape_260.setTransform(384.1,522.2,0.85,0.851);
		this.shape_261 = new cjs.Shape();
		this.shape_261.graphics.f("#32383D").s().p("AhNAvQgHAAAAgEIAAhUQAAgFAHAAICbAAQAHAAAAAFIAABUQAAAEgHAAgAhGAmICNAAIAAhLIiNAAg");
		this.shape_261.setTransform(224.6,522.2,0.85,0.851);
		this.shape_262 = new cjs.Shape();
		this.shape_262.graphics.f("#A1B4C4").s().p("AhNAqIAAhUICbAAIAABUg");
		this.shape_262.setTransform(224.6,522.2,0.85,0.851);
		this.shape_263 = new cjs.Shape();
		this.shape_263.graphics.f("#32383D").s().p("AhNAvQgHAAAAgEIAAhUQAAgFAHAAICbAAQAHAAAAAFIAABUQAAAEgHAAgAhGAmICNAAIAAhLIiNAAg");
		this.shape_263.setTransform(211.3,522.2,0.85,0.851);
		this.shape_264 = new cjs.Shape();
		this.shape_264.graphics.f("#A1B4C4").s().p("AhNAqIAAhUICbAAIAABUg");
		this.shape_264.setTransform(211.3,522.2,0.85,0.851);
		this.shape_265 = new cjs.Shape();
		this.shape_265.graphics.f("#32383D").s().p("AhNAvQgHAAAAgEIAAhUQAAgFAHAAICbAAQAHAAAAAFIAABUQAAAEgHAAgAhGAmICNAAIAAhLIiNAAg");
		this.shape_265.setTransform(424,522.2,0.85,0.851);
		this.shape_266 = new cjs.Shape();
		this.shape_266.graphics.f("#A1B4C4").s().p("AhNAqIAAhUICbAAIAABUg");
		this.shape_266.setTransform(424,522.2,0.85,0.851);
		this.shape_267 = new cjs.Shape();
		this.shape_267.graphics.f("#32383D").s().p("AhaAxQgHAAAAgFIAAhXQAAgFAHAAIC1AAQAHAAAAAFIAABXQAAAFgHAAgAhTAnICnAAIAAhNIinAAg");
		this.shape_267.setTransform(504.8,514.8,0.85,0.851);
		this.shape_268 = new cjs.Shape();
		this.shape_268.graphics.f("#A1B4C4").s().p("AhaAsIAAhXIC1AAIAABXg");
		this.shape_268.setTransform(504.8,514.8,0.85,0.851);
		this.shape_269 = new cjs.Shape();
		this.shape_269.graphics.f("#32383D").s().p("AhNAxQgHAAAAgFIAAhXQAAgFAHAAICbAAQAHAAAAAFIAABXQAAAFgHAAgAhGAnICNAAIAAhNIiNAAg");
		this.shape_269.setTransform(330.9,514.8,0.85,0.851);
		this.shape_270 = new cjs.Shape();
		this.shape_270.graphics.f("#A1B4C4").s().p("AhNAsIAAhXICbAAIAABXg");
		this.shape_270.setTransform(330.9,514.8,0.85,0.851);
		this.shape_271 = new cjs.Shape();
		this.shape_271.graphics.f("#32383D").s().p("AhNAvQgHAAAAgEIAAhUQAAgFAHAAICbAAQAHAAAAAFIAABUQAAAEgHAAgAhGAmICNAAIAAhLIiNAAg");
		this.shape_271.setTransform(291.1,522.2,0.85,0.851);
		this.shape_272 = new cjs.Shape();
		this.shape_272.graphics.f("#A1B4C4").s().p("AhNAqIAAhUICbAAIAABUg");
		this.shape_272.setTransform(291.1,522.2,0.85,0.851);
		this.shape_273 = new cjs.Shape();
		this.shape_273.graphics.f("#32383D").s().p("AhNAvQgHAAAAgEIAAhUQAAgFAHAAICbAAQAHAAAAAFIAABUQAAAEgHAAgAhGAmICNAAIAAhLIiNAAg");
		this.shape_273.setTransform(277.7,522.2,0.85,0.851);
		this.shape_274 = new cjs.Shape();
		this.shape_274.graphics.f("#A1B4C4").s().p("AhNAqIAAhUICbAAIAABUg");
		this.shape_274.setTransform(277.7,522.2,0.85,0.851);
		this.shape_275 = new cjs.Shape();
		this.shape_275.graphics.f("#32383D").s().p("AhNAvQgHAAAAgEIAAhUQAAgFAHAAICbAAQAHAAAAAFIAABUQAAAEgHAAgAhGAmICNAAIAAhLIiNAAg");
		this.shape_275.setTransform(251.2,522.2,0.85,0.851);
		this.shape_276 = new cjs.Shape();
		this.shape_276.graphics.f("#A1B4C4").s().p("AhNAqIAAhUICbAAIAABUg");
		this.shape_276.setTransform(251.2,522.2,0.85,0.851);
		this.shape_277 = new cjs.Shape();
		this.shape_277.graphics.f("#32383D").s().p("AhNAvQgHAAAAgEIAAhUQAAgFAHAAICbAAQAHAAAAAFIAABUQAAAEgHAAgAhGAmICNAAIAAhLIiNAAg");
		this.shape_277.setTransform(304.3,522.2,0.85,0.851);
		this.shape_278 = new cjs.Shape();
		this.shape_278.graphics.f("#A1B4C4").s().p("AhNAqIAAhUICbAAIAABUg");
		this.shape_278.setTransform(304.3,522.2,0.85,0.851);
		this.shape_279 = new cjs.Shape();
		this.shape_279.graphics.f("#32383D").s().p("AhNAvQgHAAAAgEIAAhUQAAgFAHAAICbAAQAHAAAAAFIAABUQAAAEgHAAgAhGAmICNAAIAAhLIiNAAg");
		this.shape_279.setTransform(264.5,522.2,0.85,0.851);
		this.shape_280 = new cjs.Shape();
		this.shape_280.graphics.f("#A1B4C4").s().p("AhNAqIAAhUICbAAIAABUg");
		this.shape_280.setTransform(264.5,522.2,0.85,0.851);
		this.shape_281 = new cjs.Shape();
		this.shape_281.graphics.f("#32383D").s().p("AhNAxQgHAAAAgFIAAhXQAAgFAHAAICbAAQAHAAAAAFIAABXQAAAFgHAAgAhGAnICNAAIAAhNIiNAAg");
		this.shape_281.setTransform(410.7,514.8,0.85,0.851);
		this.shape_282 = new cjs.Shape();
		this.shape_282.graphics.f("#A1B4C4").s().p("AhNAsIAAhXICbAAIAABXg");
		this.shape_282.setTransform(410.7,514.8,0.85,0.851);
		this.shape_283 = new cjs.Shape();
		this.shape_283.graphics.f("#32383D").s().p("AhNAxQgHAAAAgFIAAhXQAAgFAHAAICbAAQAHAAAAAFIAABXQAAAFgHAAgAhGAnICNAAIAAhNIiNAAg");
		this.shape_283.setTransform(397.4,514.8,0.85,0.851);
		this.shape_284 = new cjs.Shape();
		this.shape_284.graphics.f("#A1B4C4").s().p("AhNAsIAAhXICbAAIAABXg");
		this.shape_284.setTransform(397.4,514.8,0.85,0.851);
		this.shape_285 = new cjs.Shape();
		this.shape_285.graphics.f("#32383D").s().p("AhNAxQgHAAAAgFIAAhXQAAgFAHAAICbAAQAHAAAAAFIAABXQAAAFgHAAgAhGAnICNAAIAAhNIiNAAg");
		this.shape_285.setTransform(424,514.8,0.85,0.851);
		this.shape_286 = new cjs.Shape();
		this.shape_286.graphics.f("#A1B4C4").s().p("AhNAsIAAhXICbAAIAABXg");
		this.shape_286.setTransform(424,514.8,0.85,0.851);
		this.shape_287 = new cjs.Shape();
		this.shape_287.graphics.f("#32383D").s().p("AhNAxQgHAAAAgFIAAhXQAAgFAHAAICbAAQAHAAAAAFIAABXQAAAFgHAAgAhGAnICNAAIAAhNIiNAAg");
		this.shape_287.setTransform(437.3,514.8,0.85,0.851);
		this.shape_288 = new cjs.Shape();
		this.shape_288.graphics.f("#A1B4C4").s().p("AhNAsIAAhXICbAAIAABXg");
		this.shape_288.setTransform(437.3,514.8,0.85,0.851);
		this.shape_289 = new cjs.Shape();
		this.shape_289.graphics.f("#32383D").s().p("AhNAxQgHAAAAgFIAAhXQAAgFAHAAICbAAQAHAAAAAFIAABXQAAAFgHAAgAhGAnICNAAIAAhNIiNAAg");
		this.shape_289.setTransform(384.1,514.8,0.85,0.851);
		this.shape_290 = new cjs.Shape();
		this.shape_290.graphics.f("#A1B4C4").s().p("AhNAsIAAhXICbAAIAABXg");
		this.shape_290.setTransform(384.1,514.8,0.85,0.851);
		this.shape_291 = new cjs.Shape();
		this.shape_291.graphics.f("#32383D").s().p("AhNAvQgHAAAAgEIAAhUQAAgFAHAAICbAAQAHAAAAAFIAABUQAAAEgHAAgAhGAmICNAAIAAhLIiNAAg");
		this.shape_291.setTransform(437.3,522.2,0.85,0.851);
		this.shape_292 = new cjs.Shape();
		this.shape_292.graphics.f("#A1B4C4").s().p("AhNAqIAAhUICbAAIAABUg");
		this.shape_292.setTransform(437.3,522.2,0.85,0.851);
		this.shape_293 = new cjs.Shape();
		this.shape_293.graphics.f("#32383D").s().p("AhNAxQgHAAAAgFIAAhXQAAgFAHAAICbAAQAHAAAAAFIAABXQAAAFgHAAgAhGAnICOAAIAAhNIiOAAg");
		this.shape_293.setTransform(357.5,514.8,0.85,0.851);
		this.shape_294 = new cjs.Shape();
		this.shape_294.graphics.f("#A1B4C4").s().p("AhNAsIAAhXICbAAIAABXg");
		this.shape_294.setTransform(357.5,514.8,0.85,0.851);
		this.shape_295 = new cjs.Shape();
		this.shape_295.graphics.f("#32383D").s().p("AhNAxQgHAAAAgFIAAhXQAAgFAHAAICbAAQAHAAAAAFIAABXQAAAFgHAAgAhGAnICNAAIAAhNIiNAAg");
		this.shape_295.setTransform(370.8,514.8,0.85,0.851);
		this.shape_296 = new cjs.Shape();
		this.shape_296.graphics.f("#A1B4C4").s().p("AhNAsIAAhXICbAAIAABXg");
		this.shape_296.setTransform(370.8,514.8,0.85,0.851);
		this.shape_297 = new cjs.Shape();
		this.shape_297.graphics.f("#32383D").s().p("AhNAxQgHAAAAgFIAAhXQAAgFAHAAICbAAQAHAAAAAFIAABXQAAAFgHAAgAhGAnICNAAIAAhNIiNAAg");
		this.shape_297.setTransform(344.2,514.8,0.85,0.851);
		this.shape_298 = new cjs.Shape();
		this.shape_298.graphics.f("#A1B4C4").s().p("AhNAsIAAhXICbAAIAABXg");
		this.shape_298.setTransform(344.2,514.8,0.85,0.851);
		this.shape_299 = new cjs.Shape();
		this.shape_299.graphics.f("#32383D").s().p("AhNAvQgHAAAAgEIAAhUQAAgFAHAAICbAAQAHAAAAAFIAABUQAAAEgHAAgAhGAmICNAAIAAhLIiNAAg");
		this.shape_299.setTransform(477.1,522.2,0.85,0.851);
		this.shape_300 = new cjs.Shape();
		this.shape_300.graphics.f("#A1B4C4").s().p("AhNAqIAAhUICbAAIAABUg");
		this.shape_300.setTransform(477.1,522.2,0.85,0.851);
		this.shape_301 = new cjs.Shape();
		this.shape_301.graphics.f("#32383D").s().p("AhNAvQgHAAAAgEIAAhUQAAgFAHAAICbAAQAHAAAAAFIAABUQAAAEgHAAgAhHAmICOAAIAAhLIiOAAg");
		this.shape_301.setTransform(463.9,522.2,0.85,0.851);
		this.shape_302 = new cjs.Shape();
		this.shape_302.graphics.f("#A1B4C4").s().p("AhNAqIAAhUICbAAIAABUg");
		this.shape_302.setTransform(463.9,522.2,0.85,0.851);
		this.shape_303 = new cjs.Shape();
		this.shape_303.graphics.f("#32383D").s().p("AhNAvQgHAAAAgEIAAhUQAAgFAHAAICcAAQAGAAAAAFIAABUQAAAEgGAAgAhGAmICNAAIAAhLIiNAAg");
		this.shape_303.setTransform(450.5,522.2,0.85,0.851);
		this.shape_304 = new cjs.Shape();
		this.shape_304.graphics.f("#A1B4C4").s().p("AhNAqIAAhUICbAAIAABUg");
		this.shape_304.setTransform(450.6,522.2,0.85,0.851);
		this.shape_305 = new cjs.Shape();
		this.shape_305.graphics.f("#32383D").s().p("AhNAxQgHAAAAgFIAAhXQAAgFAHAAICbAAQAHAAAAAFIAABXQAAAFgHAAgAhGAnICNAAIAAhNIiNAAg");
		this.shape_305.setTransform(477.1,514.8,0.85,0.851);
		this.shape_306 = new cjs.Shape();
		this.shape_306.graphics.f("#A1B4C4").s().p("AhNAsIAAhXICbAAIAABXg");
		this.shape_306.setTransform(477.1,514.8,0.85,0.851);
		this.shape_307 = new cjs.Shape();
		this.shape_307.graphics.f("#32383D").s().p("AhNAvQgHAAAAgEIAAhUQAAgFAHAAICbAAQAHAAAAAFIAABUQAAAEgHAAgAhGAmICNAAIAAhLIiNAAg");
		this.shape_307.setTransform(490.4,522.2,0.85,0.851);
		this.shape_308 = new cjs.Shape();
		this.shape_308.graphics.f("#A1B4C4").s().p("AhNAqIAAhUICbAAIAABUg");
		this.shape_308.setTransform(490.4,522.2,0.85,0.851);
		this.shape_309 = new cjs.Shape();
		this.shape_309.graphics.f("#32383D").s().p("AhNAxQgHAAAAgFIAAhXQAAgFAHAAICcAAQAGAAAAAFIAABXQAAAFgGAAgAhGAnICNAAIAAhNIiNAAg");
		this.shape_309.setTransform(450.5,514.8,0.85,0.851);
		this.shape_310 = new cjs.Shape();
		this.shape_310.graphics.f("#A1B4C4").s().p("AhNAsIAAhXICbAAIAABXg");
		this.shape_310.setTransform(450.6,514.8,0.85,0.851);
		this.shape_311 = new cjs.Shape();
		this.shape_311.graphics.f("#32383D").s().p("AhNAxQgHAAAAgFIAAhXQAAgFAHAAICbAAQAHAAAAAFIAABXQAAAFgHAAgAhHAnICOAAIAAhNIiOAAg");
		this.shape_311.setTransform(463.9,514.8,0.85,0.851);
		this.shape_312 = new cjs.Shape();
		this.shape_312.graphics.f("#A1B4C4").s().p("AhNAsIAAhXICbAAIAABXg");
		this.shape_312.setTransform(463.9,514.8,0.85,0.851);
		this.shape_313 = new cjs.Shape();
		this.shape_313.graphics.f("#32383D").s().p("AhNAxQgHAAAAgFIAAhXQAAgFAHAAICbAAQAHAAAAAFIAABXQAAAFgHAAgAhGAnICNAAIAAhNIiNAAg");
		this.shape_313.setTransform(490.4,514.8,0.85,0.851);
		this.shape_314 = new cjs.Shape();
		this.shape_314.graphics.f("#A1B4C4").s().p("AhNAsIAAhXICbAAIAABXg");
		this.shape_314.setTransform(490.4,514.8,0.85,0.851);
		this.shape_315 = new cjs.Shape();
		this.shape_315.graphics.f().s("#32383D").ss(2).p("AI1h8IxpAAIAAD5IRpAAg");
		this.shape_315.setTransform(526.1,446.4,0.85,0.851);
		this.shape_316 = new cjs.Shape();
		this.shape_316.graphics.f("#626474").s().p("Ao0B9IAAj5IRpAAIAAD5g");
		this.shape_316.setTransform(526.1,446.4,0.85,0.851);
		this.shape_317 = new cjs.Shape();
		this.shape_317.graphics.f().s("#878891").ss(6).p("AAAjfIAAG/");
		this.shape_317.setTransform(567.3,475.4,0.85,0.851);
		this.shape_318 = new cjs.Shape();
		this.shape_318.graphics.f().s("#32383D").ss(10).p("AAAjfIAAG/");
		this.shape_318.setTransform(567.3,475.4,0.85,0.851);
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(62));
		// Layer 5
		this.instance = new lib.Symbol4();
		this.instance.parent = this;
		this.instance.setTransform(531.5,363.4,0.263,0.263,0,0,0,54.6,47.9);
		this.instance._off = true;
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(36).to({_off:false},0).wait(1).to({regX:54.7,regY:48.3,scaleX:0.26,scaleY:0.26,x:544.2,y:335.1},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:557.9,y:307.3},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:572.4,y:279.8},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:587.5,y:252.6},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:602.9,y:225.6},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:618.7,y:198.9},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:634.7,y:172.3},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:651.1,y:145.9},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:667.7,y:119.6},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:684.5,y:93.4},0).wait(1).to({scaleX:0.38,scaleY:0.38,y:93.5},0).wait(1).to({scaleX:0.57,scaleY:0.57,y:93.6},0).wait(1).to({scaleX:0.76,scaleY:0.76,y:93.7},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.909},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:684.6,alpha:0.818},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.727},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.636},0).wait(1).to({scaleX:1,scaleY:1,y:93.8,alpha:0.545},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:93.7,alpha:0.455},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:684.5,alpha:0.364},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:93.8,alpha:0.273},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.182},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:684.6,y:93.7,alpha:0.091},0).wait(1).to({scaleX:1.06,scaleY:1.06,y:93.8,alpha:0},0).wait(1));
		// Layer 4
		this.instance_1 = new lib.Symbol3();
		this.instance_1.parent = this;
		this.instance_1.setTransform(437.1,341.2,0.233,0.233,0,0,0,34.2,30.1);
		this.instance_1._off = true;
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).wait(1).to({regX:34.3,regY:30.3,scaleX:0.24,scaleY:0.24,x:443.8,y:322.1},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:451.7,y:303.4},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:460.5,y:285.1},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:470.5,y:267.4},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:481.7,y:250.4},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:493.9,y:234.1},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:507.3,y:218.9},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:521.7,y:204.5},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:537.1,y:191.3},0).wait(1).to({scaleX:0.56,scaleY:0.56},0).wait(1).to({scaleX:0.86,scaleY:0.86,y:191.4},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:537.2},0).wait(1).to({scaleX:1.2,scaleY:1.2,alpha:0.933},0).wait(1).to({scaleX:1.23,scaleY:1.23,y:191.5,alpha:0.867},0).wait(1).to({scaleX:1.26,scaleY:1.26,y:191.4,alpha:0.8},0).wait(1).to({scaleX:1.3,scaleY:1.3,y:191.5,alpha:0.733},0).wait(1).to({scaleX:1.33,scaleY:1.33,alpha:0.667},0).wait(1).to({scaleX:1.36,scaleY:1.36,y:191.4,alpha:0.6},0).wait(1).to({scaleX:1.4,scaleY:1.4,y:191.5,alpha:0.533},0).wait(1).to({scaleX:1.43,scaleY:1.43,alpha:0.467},0).wait(1).to({scaleX:1.47,scaleY:1.47,alpha:0.4},0).wait(1).to({scaleX:1.5,scaleY:1.5,alpha:0.333},0).wait(1).to({scaleX:1.53,scaleY:1.53,alpha:0.267},0).wait(1).to({scaleX:1.57,scaleY:1.57,alpha:0.2},0).wait(1).to({scaleX:1.6,scaleY:1.6,alpha:0.133},0).wait(1).to({scaleX:1.63,scaleY:1.63,alpha:0.067},0).wait(1).to({scaleX:1.67,scaleY:1.67,alpha:0},0).wait(3).to({_off:true},1).wait(18));
		// Layer 3
		this.instance_2 = new lib.Symbol2();
		this.instance_2.parent = this;
		this.instance_2.setTransform(308.5,345.5,0.345,0.345,0,0,0,33.7,30.3);
		this.instance_2._off = true;
		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(27).to({_off:false},0).wait(1).to({regX:34.3,regY:30.2,scaleX:0.35,scaleY:0.35,x:299.7,y:325.4},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:289.6,y:306},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:278,y:287.2},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:265.2,y:269.5},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:250.9,y:252.8},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:235.4,y:237.3},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:218.6,y:223.2},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:200.7,y:210.4},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:200.8},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:201},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:201.1},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.917},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:201.2,alpha:0.833},0).wait(1).to({scaleX:1.26,scaleY:1.26,alpha:0.75},0).wait(1).to({scaleX:1.3,scaleY:1.3,alpha:0.667},0).wait(1).to({scaleX:1.34,scaleY:1.34,x:201.3,alpha:0.583},0).wait(1).to({scaleX:1.37,scaleY:1.37,alpha:0.5},0).wait(1).to({scaleX:1.41,scaleY:1.41,alpha:0.417},0).wait(1).to({scaleX:1.45,scaleY:1.45,alpha:0.333},0).wait(1).to({scaleX:1.49,scaleY:1.49,alpha:0.25},0).wait(1).to({scaleX:1.52,scaleY:1.52,alpha:0.167},0).wait(1).to({scaleX:1.56,scaleY:1.56,x:201.4,alpha:0.083},0).wait(1).to({scaleX:1.6,scaleY:1.6,alpha:0},0).to({_off:true},1).wait(11));
		// Layer 2
		this.instance_3 = new lib.Symbol1();
		this.instance_3.parent = this;
		this.instance_3.setTransform(214.4,365.7,0.184,0.205,0,0,0,54.5,47.8);
		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:54.6,regY:48.3,scaleX:0.17,scaleY:0.19,x:203.4,y:336.8},0).wait(1).to({scaleX:0.16,scaleY:0.18,x:191.3,y:308.2},0).wait(1).to({scaleX:0.15,scaleY:0.17,x:177.9,y:280.1},0).wait(1).to({scaleX:0.14,scaleY:0.16,x:163.5,y:252.7},0).wait(1).to({scaleX:0.13,scaleY:0.14,x:147.9,y:225.8},0).wait(1).to({scaleX:0.12,scaleY:0.13,x:131.1,y:199.6},0).wait(1).to({scaleX:0.11,scaleY:0.12,x:113.3,y:174.2},0).wait(1).to({scaleX:0.1,scaleY:0.11,x:94.4,y:149.6},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:74.4,y:125.7},0).wait(1).to({scaleX:0.18,scaleY:0.2,y:125.8},0).wait(1).to({scaleX:0.27,scaleY:0.3},0).wait(1).to({scaleX:0.37,scaleY:0.41,y:125.9},0).wait(1).to({scaleX:0.46,scaleY:0.51,x:74.5,y:126,alpha:0.875},0).wait(1).to({scaleX:0.55,scaleY:0.62,alpha:0.75},0).wait(1).to({scaleX:0.65,scaleY:0.72,y:126.1,alpha:0.625},0).wait(1).to({scaleX:0.74,scaleY:0.83,alpha:0.5},0).wait(1).to({scaleX:0.83,scaleY:0.93,y:126.2,alpha:0.375},0).wait(1).to({scaleX:0.93,scaleY:1.03,alpha:0.25},0).wait(1).to({scaleX:1.02,scaleY:1.14,y:126.3,alpha:0.125},0).wait(1).to({scaleX:1.12,scaleY:1.24,x:74.6,alpha:0},0).wait(9).to({_off:true},1).wait(32));
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(557.1,514.7,389.1,303);
	// library properties:
	lib.properties = {
		width: 742,
		height: 546,
		fps: 24,
		color: "#FFFFFF",
		opacity: 1.00,
		webfonts: {},
		manifest: [],
		preloads: []
	};
	})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
	var lib, images, createjs, ss, AdobeAn;
	// </script>
	// <script>
	var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
	function init() {
		canvas = document.getElementById("as_canvas");
		anim_container = document.getElementById("as_animation_container");
		dom_overlay_container = document.getElementById("as_dom_overlay_container");
		handleComplete();
	}
	function handleComplete() {
		//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
		exportRoot = new lib.AboutSSN();
		stage = new createjs.Stage(canvas);
		stage.addChild(exportRoot);
		//Registers the "tick" event listener.
		fnStartAnimation = function() {
			createjs.Ticker.setFPS(lib.properties.fps);
			createjs.Ticker.addEventListener("tick", stage);
		}
		//Code to support hidpi screens and responsive scaling.
		function makeResponsive(isResp, respDim, isScale, scaleType) {
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
				canvas.width = w*pRatio*sRatio;
				canvas.height = h*pRatio*sRatio;
				canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';
				canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
				stage.scaleX = pRatio*sRatio;
				stage.scaleY = pRatio*sRatio;
				lastW = iw; lastH = ih; lastS = sRatio;
			}
		}
		// makeResponsive(true,'both',false,1);
		fnStartAnimation();
	}
// 	init();
//
// 	});
// }
var coasterStart = 770;
var c1 = { t : 310 , r : 0 , l : 0 },c2 = { t : 310 , r : 0 , l : 0};
var halfWidth = $(window).width()/2;

var start = function(x){
	c1.l = x;
	c2.l = x+82;
	if (x >= coasterStart && x <= coasterStart + 30) {
		c2.r = 0;
		c2.t = 310;
	}
	if (x >= coasterStart && x <= coasterStart + 112) {
		c1.r = 0;
		c1.t = 310;
	}
	if(x >= coasterStart + 30 && x <= coasterStart + 100){
		c2.t =310;
		c2.r= -(38*(x - coasterStart - 30)/70);
	}
	if(x >= coasterStart + 112 && x <= coasterStart + 182){
		c1.t =310;
		c1.r= -(38*(x - coasterStart - 112)/70);
	}
	if(x >= coasterStart + 100 && x <= coasterStart + 400){
		c2.t =(310 - (x - coasterStart - 100) / 348 * 268) ;
		c2.r = -38;
	}
	if(x >= coasterStart + 182 && x <= coasterStart + 482){
		c1.t =310 - (x - coasterStart -182)/348*268;
		c1.r = -38;
	}
	if(x >= coasterStart + 400 && x <= coasterStart + 478){
		c2.t =(80 - (x - coasterStart - 400) / 78 * 60) ;
		c2.r = -38 + (38*(x - coasterStart - 400)/78);
	}
	if(x >= coasterStart + 482 && x <= coasterStart + 560){
		c1.t =80 - (x - coasterStart - 482) / 78 * 60;
		c1.r= -38 + (38*(x - coasterStart - 482) / 78);
	}
	if(x >= coasterStart + 478 && x <= coasterStart + 510){
		c2.t = 20;
		c2.r = 0;
	}
	if(x >= coasterStart + 560 && x <= coasterStart + 592){
		c2.t = 20;
		c1.r = 0;
	}
	if(x >= coasterStart + 510 && x <= coasterStart + 590){
		c2.t =(20 + (x - coasterStart - 510) / 79 * 28) ;
		c2.r = (49*(x - coasterStart - 510)/79);
	}
	if(x >= coasterStart + 592 && x <= coasterStart + 670){
	  c1.t =(20 + (x - coasterStart - 592) / 79 * 28);
	  c1.r= (49*(x - coasterStart - 592) / 79);
	}
	if(x >= coasterStart + 590 && x <= coasterStart + 690){
		c2.t =(47 + (x - coasterStart - 590) / 97 * 109) ;
		c2.r = 49;
	}
	if(x >= coasterStart + 670 && x <= coasterStart + 770){
	  c1.t =(47 + (x - coasterStart - 670) / 97 * 109);
		c1.r = 49;
	}
	if(x >= coasterStart + 680 && x <= coasterStart + 745){
		c2.t =(155 + (x - coasterStart - 680) / 65 * 29) ;
		c2.r = 49-(49*(x - coasterStart - 680)/65);
	}
	if(x >= coasterStart + 760 && x <= coasterStart + 825){
	  c1.t =(155 + (x - coasterStart - 760) / 65 * 29);
	  c1.r= 49-(49*(x - coasterStart - 760) / 65);
	}
	if(x >= coasterStart + 770 && x <= coasterStart + 860){
		c2.t =(188 - (x - coasterStart - 770) / 90 * 27) ;
		c2.r = -(45*(x - coasterStart - 770)/90);
	}
	if(x >= coasterStart + 840 && x <= coasterStart + 940){
	  c1.t =(188 - (x - coasterStart - 850) / 90 * 27);
	  c1.r= -(45*(x - coasterStart - 850) / 90);
	}
	if(x >= coasterStart + 860 && x <= coasterStart + 975){
		c2.t =(160 - (x - coasterStart - 860) / 165 * 165) ;
		c2.r = -45;
	}
	if(x >= coasterStart + 940 && x <= coasterStart + 1055){
	  c1.t =(160 - (x - coasterStart - 940) / 165 * 165);
		c1.r = -45;
	}
	if(x >= coasterStart + 975 && x <= coasterStart + 1081){
		c2.t =(42 - (x - coasterStart - 975) / 106 * 75) ;
		c2.r = -45 + (45*(x - coasterStart - 975)/106);
	}
	if(x >= coasterStart + 1055 && x <= coasterStart + 1161){
		c1.t =(42 - (x - coasterStart - 1055) / 106 * 75);
		c1.r= -45 + (45*(x - coasterStart - 1055) / 106);
	}
	if(x >= coasterStart + 1081 && x <= coasterStart + 1354){
		c2.r = 0;
		c2.t = -30;
	}
	if(x >= coasterStart + 1161 && x <= coasterStart + 1434){
		c1.r = 0;
		c1.t = -30;
	}
	if(x >= coasterStart + 1354 && x <= coasterStart + 1412){
		c2.t = (-30 + (x - coasterStart - 1354) / 58 * 21) ;
		c2.r = (36.4 * (x - coasterStart - 1354) / 58);
	}
	if(x >= coasterStart + 1434 && x <= coasterStart + 1492){
		c1.t =(-30 + (x - coasterStart - 1434) / 58 * 21);
		c1.r= (36.4 * (x - coasterStart - 1434) / 58);
	}
	if(x >= coasterStart + 1412 && x <= coasterStart + 1597){
		c2.t = (-10 + (x - coasterStart - 1412) / 215 * 159) ;
		c2.r = (36.4 );
	}
	if(x >= coasterStart + 1492 && x <= coasterStart + 1677){
		c1.t =(-10 + (x - coasterStart - 1492) / 215 * 159);
		c1.r= (36.4 );
	}
	if(x >= coasterStart + 1597 && x <= coasterStart + 1656){
		c2.t = (120 + (x - coasterStart - 1597) / 59 * 50) ;
		c2.r= 36.4 - (36.4 * (x - coasterStart - 1597) / 59);
	}
	if(x >= coasterStart + 1677 && x <= coasterStart + 1736){
		c1.t =(120 + (x - coasterStart - 1677) / 59 * 50);
		c1.r= 36.4 - (36.4 * (x - coasterStart - 1677) / 59);
	}
	if(x >= coasterStart + 1656 && x <= coasterStart + 1849){
		c2.t = (170 ) ;
		c2.r= 0
	}
	if(x >= coasterStart + 1736 && x <= coasterStart + 1929){
		c1.t =(170);
		c1.r= 0;
	}
	if(x >= coasterStart + 1849 && x <= coasterStart + 1908){
		c2.t = (170 - (x - coasterStart - 1849) / 59 * 12) ;
		c2.r=  - (28.2 * (x - coasterStart - 1849) / 59);
	}
	if(x >= coasterStart + 1929 && x <= coasterStart + 1988){
		c1.t =(170 - (x - coasterStart - 1929) / 59 * 12);
		c1.r= -(28.2 * (x - coasterStart - 1929) / 59);
	}
	if(x >= coasterStart + 1908 && x <= coasterStart + 2216){
		c2.t = (158 - (x - coasterStart - 1908) / 328 * 173) ;
		c2.r=  - (28.2);
	}
	if(x >= coasterStart + 1988 && x <= coasterStart + 2296){
		c1.t =(158 - (x - coasterStart - 1988) / 328 * 173);
		c1.r= -(28.2);
	}
	if(x >= coasterStart + 2216 && x <= coasterStart + 2270){
		c2.t = (-5 - (x - coasterStart - 2216) / 54 * 22) ;
		c2.r=  -28.2 + (28.2 * (x - coasterStart - 2216) / 54);
	}
	if(x >= coasterStart + 2296 && x <= coasterStart + 2350){
		c1.t =(-5 - (x - coasterStart - 2296) / 54 * 22);
		c1.r= -28.2 + (28.2 * (x - coasterStart - 2296) / 54);
	}
	if(x >= coasterStart + 2270 && x <= coasterStart + 2310){
		c2.t = (-28) ;
		c2.r= 0
	}
	if(x >= coasterStart + 2350 && x <= coasterStart + 2390){
		c1.t =(-28);
		c1.r= 0;
	}
	if(x >= coasterStart + 2290 && x <= coasterStart + 2370){
		c2.t = (-28 + (x - coasterStart - 2290) / 80 * 25) ;
		c2.r=   (46 * (x - coasterStart - 2290) / 80);
	}
	if(x >= coasterStart + 2370 && x <= coasterStart + 2450){
		c1.t =(-28 + (x - coasterStart - 2370) / 80 * 25);
		c1.r= (46 * (x - coasterStart - 2370) / 80);
	}
	if(x >= coasterStart + 2370 && x <= coasterStart + 2620){
		c2.t = (0 + (x - coasterStart - 2370) / 290 * 284) ;
		c2.r=   (46);
	}
	if(x >= coasterStart + 2450 && x <= coasterStart + 2700){
		c1.t =(0 + (x - coasterStart - 2450) / 290 * 284);
		c1.r= (46);
	}
	if(x >= coasterStart + 2620 && x <= coasterStart + 2700){
		c2.t = (240 + (x - coasterStart - 2620) / 80 * 54) ;
		c2.r=  46 - (46 * (x - coasterStart - 2620) / 80);
	}
	if(x >= coasterStart + 2700 && x <= coasterStart + 2780){
		c1.t =(240 + (x - coasterStart - 2700) / 80 * 54);
		c1.r= 46 - (46 * (x - coasterStart - 2700) / 80);
	}
	if(x >= coasterStart + 2700 && x <= coasterStart + 2850){
		c2.t = 294;
		c2.r=  0;
	}
	if(x >= coasterStart + 2780 && x <= coasterStart + 2850){
		c1.t =294;
		c1.r= 0;
	}
	movement();
}

var movement = function(){
	$('.coaster-1').offset({left:c1.l});
	$('.coaster-2').offset({left:(c2.l)});
	$('.coaster-1').css({'transform': 'rotate('+ c1.r +'deg)','top': c1.t+'px'});
	$('.coaster-2').css({'transform': 'rotate('+ c2.r +'deg)','top': c2.t+'px'});

};

var roller = function(){
	if($(document).scrollLeft()+halfWidth >= coasterStart && $(document).scrollLeft()+halfWidth <= coasterStart + 2845 ){
		start($(document).scrollLeft()+halfWidth);
	}else if($(document).scrollLeft()+halfWidth < coasterStart){
		$('.coaster').css({'transform': 'rotate(0deg)','left':'0px','top':'310px'});
		$('.coaster-1').css({'left':'5px'});
	}else{
		$('.coaster-2').offset({left: coasterStart + 2926 });
		$('.coaster-1').offset({left: coasterStart + 2845 });
		$('.coaster').css({'transform': 'rotate(0deg)','top':'294px'});
	}
};
function eventhover(){
	document.getElementById("st81").classList.remove("event-anim");
	document.getElementById("st82").classList.remove("event-anim");
	document.getElementById("st83").classList.remove("event-anim");
}
function eventplay(){
	document.getElementById("st81").classList.add("event-anim");
	document.getElementById("st82").classList.add("event-anim");
	document.getElementById("st83").classList.add("event-anim");
}

function blink(bubble) {
	if (bubble.style.display == 'block' || bubble.style.display=='')
	{			bubble.style.display = 'none';	}
	else
	{			bubble.style.display = 'block';	}
}
(function loop() {
	var rand = Math.round(Math.random() * 400);
	setTimeout(function() {
					var e = (Math.round(Math.random() * 1000) % 3)+1;
					var bubble = "bubble"+e;
					var elem = document.getElementById(bubble);
					blink(elem);
					loop();
	}, rand);
}());

function schedulehover(){
	document.getElementById("wheel").style.animationPlayState = "paused";
}
function scheduleplay(){
	document.getElementById("wheel").style.animationPlayState = "running";
}

function hospitalityhover(){
	document.getElementById("window1").classList.remove("sth4");
	document.getElementById("window2").classList.remove("sth4");
	document.getElementById("window3").classList.remove("sth4");
	document.getElementById("window4").classList.remove("sth4");
}
function hospitalityplay(){
	document.getElementById("window1").classList.add("sth4");
	document.getElementById("window2").classList.add("sth4");
	document.getElementById("window3").classList.add("sth4");
	document.getElementById("window4").classList.add("sth4");
}

function sponsorshover() {
	document.getElementById("sc1").style.animationPlayState = "paused";
	document.getElementById("sc2").style.animationPlayState = "paused";
	document.getElementById("sc3").style.animationPlayState = "paused";
	document.getElementById("sc4").style.animationPlayState = "paused";
	document.getElementById("sc5").style.animationPlayState = "paused";
	document.getElementById("sc6").style.animationPlayState = "paused";
	document.getElementById("sc7").style.animationPlayState = "paused";
	document.getElementById("sc8").style.animationPlayState = "paused";
}
function sponsorsplay() {
	document.getElementById("sc1").style.animationPlayState = "running";
	document.getElementById("sc2").style.animationPlayState = "running";
	document.getElementById("sc3").style.animationPlayState = "running";
	document.getElementById("sc4").style.animationPlayState = "running";
	document.getElementById("sc5").style.animationPlayState = "running";
	document.getElementById("sc6").style.animationPlayState = "running";
	document.getElementById("sc7").style.animationPlayState = "running";
	document.getElementById("sc8").style.animationPlayState = "running";
}

function cblink(bubble) {
	if (bubble.style.display == 'block' || bubble.style.display=='')
	{
			bubble.style.display = 'none';
	}
	else
	{
			bubble.style.display = 'block';
	}
}
(function cloop() {
	var rand = Math.round(Math.random() * 400);
	setTimeout(function() {
					var e = (Math.round(Math.random() * 1000) % 12)+1;
					for (var i = 0; i < e; i++) {
						var el = (Math.round(Math.random() * 1000) % 12)+1;
						var bubble = "bub"+el;
						var elem = document.getElementById(bubble);
						cblink(elem);
					}
					cloop();
	}, rand);
}());

var cloudanimate = function(){
	$('.c1').animate({left: "-200px"},{duration: 10000, easing: "linear", queue: false, done: hidecloud});
	$('.c2').animate({left: "-250px"},{duration: 10000, easing: "linear", queue: false, done: hidecloud});
	$('.c3').animate({left: "-250px"},{duration: 20000, easing: "linear", queue: false, done: hidecloud});
	$('.c4').animate({left: "-250px"},{duration: 20000, easing: "linear", queue: false, done: hidecloud});
	$('.c5').animate({left: "-250px"},{duration: 30000, easing: "linear", queue: false, done: resetcloud});
	$('.c6').animate({left: "-250px"},{duration: 30000, easing: "linear", queue: false, done: resetcloud});
	$('.c7').animate({left: "-250px"},{duration: 45000, easing: "linear", queue: false, done: resetcloud});
	$('.c8').animate({left: "-250px"},{duration: 45000, easing: "linear", queue: false, done: resetcloud});
}
var cloudanim = function(o){
	o.animate({left: "-250px"},{duration: 30000, easing: "linear", queue: false, done: resetcloud});
}
var hidecloud = function() {
	$(this).hide();
}
var resetcloud = function() {
	$(this).css({left:"100vw"});
	cloudanim($(this));
}
var setsky = function(dr,dg,db,lr,lg,lb) {
	var colorone = 'rgb(' + dr + ',' + dg + ',' + db + ')';
	var colortwo = 'rgb(' + lr + ',' + lg + ',' + lb + ')';
	// console.log(colorone+" "+colortwo);
	$('#body').css({background: 'linear-gradient(to bottom,' + colorone + ',' + colortwo + ')'});
}
var calcskycolor = function(start,end,time) {
	return Math.round((end-start)*time/5400);
}
var sky = function(){
	var startdr,startdg,startdb,enddr,enddg,enddb,startlr,startlg,startlb,endlr,endlg,endlb,time;
	var today = new Date();
	var skyhr = today.getHours();
	var skymin = today.getMinutes();
	// var skyhr = 17;
	// var skymin = 0;
	$('.clouds').hide();
	$('.stars').show();
	if(skyhr == 4 && skymin >30){
		time = (skymin-30) * 60 ;
		startdr = 40; enddr = 192; startlr = 75; endlr = 240;
		startdg = 62; enddg = 81; startlg = 121; endlg = 203;
		startdb = 81; enddb = 48; startlb = 161; endlb = 53;
		$('.clouds').hide();
		$('.stars').show();
	}else if(skyhr > 4 && skyhr < 6){
		time = 1800 + (skymin * 60) ;
		startdr = 40; enddr = 192; startlr = 75; endlr = 240;
		startdg = 62; enddg = 81; startlg = 121; endlg = 203;
		startdb = 81; enddb = 48; startlb = 161; endlb = 53;
		$('.clouds').hide();
		$('.stars').hide();
	}else if(skyhr > 5 && skyhr < 7){
		time = (skymin * 60) ;
		startdr = 192; enddr = 148; startlr = 240; endlr = 256;
		startdg = 81; enddg = 233; startlg = 203; endlg = 256;
		startdb = 48; enddb = 254; startlb = 53; endlb = 256;
		$('.clouds').hide();
		$('.stars').hide();
	}else if(skyhr == 7 && skymin < 30){
		time = 3600 + (skymin * 60) ;
		startdr = 192; enddr = 148; startlr = 240; endlr = 256;
		startdg = 81; enddg = 233; startlg = 203; endlg = 256;
		startdb = 48; enddb = 254; startlb = 53; endlb = 256;
		$('.clouds').show();
		$('.stars').hide();
	}else if(skyhr == 7 && skymin >=30){
		time = 0 ;
		startdr = 148; enddr = 148; startlr = 256; endlr = 256;
		startdg = 233; enddg = 233; startlg = 256; endlg = 256;
		startdb = 254; enddb = 254; startlb = 256; endlb = 256;
		$('.clouds').show();
		$('.stars').hide();
	}else if(skyhr > 7 && skyhr < 16){
		time = 0 ;
		startdr = 148; enddr = 148; startlr = 256; endlr = 256;
		startdg = 233; enddg = 233; startlg = 256; endlg = 256;
		startdb = 254; enddb = 254; startlb = 256; endlb = 256;
		$('.clouds').show();
		$('.stars').hide();
	}else if(skyhr == 16 && skymin <=30){
		time = 0 ;
		startdr = 148; enddr = 148; startlr = 256; endlr = 256;
		startdg = 233; enddg = 233; startlg = 256; endlg = 256;
		startdb = 254; enddb = 254; startlb = 256; endlb = 256;
		$('.clouds').show();
		$('.stars').hide();
	}else if(skyhr == 16 && skymin > 30){
		time = (skymin-30) * 60 ;
		startdr = 148; enddr = 192; startlr = 256; endlr = 240;
		startdg = 233; enddg = 81; startlg = 256; endlg = 203;
		startdb = 254; enddb = 48; startlb = 256; endlb = 53;
		$('.clouds').show();
		$('.stars').hide();
	}else if(skyhr > 16 && skyhr < 18){
		time = 1800 + (skymin * 60);
		startdr = 148; enddr = 192; startlr = 256; endlr = 240;
		startdg = 233; enddg = 81; startlg = 256; endlg = 203;
		startdb = 254; enddb = 48; startlb = 256; endlb = 53;
		$('.clouds').hide();
		$('.stars').hide();
	}else if(skyhr > 17 && skyhr <19){
		time = (skymin * 60);
		startdr = 192; enddr = 40; startlr = 240; endlr = 75;
		startdg = 81; enddg = 62; startlg = 203; endlg = 121;
		startdb = 48; enddb = 81; startlb = 53; endlb = 161;
		$('.clouds').hide();
		$('.stars').hide();
	}else if(skyhr == 19 && skymin < 30){
		time = 3600 + (skymin * 60);
		startdr = 192; enddr = 40; startlr = 240; endlr = 75;
		startdg = 81; enddg = 62; startlg = 203; endlg = 121;
		startdb = 48; enddb = 81; startlb = 53; endlb = 161;
		$('.clouds').hide();
		$('.stars').show();
	}
	var dr = startdr + calcskycolor(startdr,enddr,time);
	var dg = startdg + calcskycolor(startdg,enddg,time);
	var db = startdb + calcskycolor(startdb,enddb,time);
	var lr = startlr + calcskycolor(startlr,endlr,time);
	var lg = startlg + calcskycolor(startlg,endlg,time);
	var lb = startlb + calcskycolor(startlb,endlb,time);
	setsky(dr,dg,db,lr,lg,lb);
};
var setstarsize = function(){
	for (var i = 0; i < 20; i++) {
		var n = i+1;
		var star = ".star" + n;
		var starsize = Math.random()*12+6;
		// console.log(starsize);
		$(star).height(starsize);
		$(star).width(starsize);
	}
};
var spreadstar =function() {
	var vpw = $(window).width();
	for (var i = 0; i < 20; i++) {
		var n = i+1;
		var star = ".star" + n;
		var starleft = (Math.random()* vpw) - 25;
		var startop = (Math.random()* 300) - 25;
		// console.log(starsize);
		$(star).css({'left' : starleft , 'top': startop});
	}
};
var blinkstars = function() {
	setInterval(function() {
		var vpw = $(window).width();
		var n = (Math.random() * 5) + 1;
		for (var i = 1; i <= n; i++) {
			var k = Math.round(Math.random()*20);
			var star = ".star" + k;
			var starsize = Math.random()*12+6;
			// console.log(starsize);
			var starleft = (Math.random()* vpw) - 25;
			var startop = (Math.random()* 300) - 25;
			$(star).hide(100);
			$(star).height(starsize);
			$(star).width(starsize);
			$(star).css({'left' : starleft , 'top': startop});
			$(star).show(100);
		}
	},1000);
};
var checkarrow = function () {
	var leftv = $('.event-names').position().left;
	var width = $('.event-names').width();
	var owidth = $('.events-names').width();
	if(leftv >= 0){
		$('.left').addClass('arrow-disabled');
	}else{
		$('.left').removeClass('arrow-disabled');
	}
	if(leftv + width <= owidth){
		$('.right').addClass('arrow-disabled');
	}else{
		$('.right').removeClass('arrow-disabled');
	}
}
var eventnamereset = function () {
	$('.event-names').css({left: "0px"});
	$('.event-name-active').removeClass('event-name-active');
	$('.event-name').eq(0).addClass('event-name-active');
}
var randomspeaking = function functionName(o,n,t) {
	setInterval(function functionName() {
		o.attr("src","img/characters/"+n+".png");
		setTimeout(function functionName() {
			o.attr("src","img/characters/"+n+"-normal.png");
		},1000);
		// console.log(t);
	},t);
}
// function myFunction() {
//     console.log("time");
// 		// $('html, body').scrollLeft(1000);
// }

function macin(x) {
	var elem = ".img"+x;
	var k = x-1;
	$(elem).addClass('animate');
	elem = ".img"+k;
	var l = x+1;
	$(elem).addClass('animate1');
	elem = ".img"+l;
	$(elem).addClass('animate1');
}

function macout(x) {
	var elem = ".img"+x;
	var k = x-1;
	$(elem).removeClass('animate');
	elem = ".img"+k;
	var l = x+1;
	$(elem).removeClass('animate1');
	elem = ".img"+l;
	$(elem).removeClass('animate1');
}

function horizontalscrollfirefox(e) {
	var scroll=$('html, body').scrollLeft()+(e.deltaY*10);
	$('html, body').animate({scrollLeft: scroll},0);
	// e.preventDefault();
}
function horizontalscrollchrome(e) {
	var scroll=$('html, body').scrollLeft()+(e.deltaY);
	$('html, body').animate({scrollLeft: "+="+scroll},0);
	// e.preventDefault();
}


$(document).ready(function(){
	$('html, body').animate({scrollLeft: 0},300);
	// Firefox 1.0+
	var isFirefox = typeof InstallTrigger !== 'undefined';
	// Chrome 1+
	var isChrome = !!window.chrome && !!window.chrome.webstore;

	// console.log(isChrome+"" + ""+isFirefox);
	document.getElementById('body').addEventListener('wheel',function(e) {
		if(isFirefox){
			horizontalscrollfirefox(e);
		}
		else if(isChrome){
			horizontalscrollchrome(e);
		}
	});
	// document.getElementById('content-details').addEventListener('wheel',function (e) {
	//
	// });
	// $(window).mousewheel(function(event, delta) {
	// 	event.preventDefault();
	// 	var scroll = $(window).scrollLeft();
	// 	$(window).scrollLeft(scroll – (delta * 30));
	// });
	// $(document).mousewheel(function(event, delta) {
	//
      // this.scrollLeft -= (delta * 30);

      // event.preventDefault();
	//
  //  });
	sky();
	setstarsize();
	spreadstar();
	blinkstars();
	roller();
	$(window).scroll(roller);
	cloudanimate();
	var count = 0;
	var boy1Rand = (Math.random()*2+2);
	randomspeaking($('.boy1'),"boy-1",boy1Rand*1000);
	var boy2Rand = (Math.random()*3+3);
	randomspeaking($('.boy2'),"boy-2",boy2Rand*1000);
	var boy3Rand = (Math.random()*4+2);
	randomspeaking($('.boy3'),"boy-3",boy3Rand*1000);
	var boy4Rand = (Math.random()*2+2);
	randomspeaking($('.boy4'),"boy-4",boy4Rand*1000);
	var boy5Rand = (Math.random()*2+2);
	randomspeaking($('.boy5'),"boy-5",boy5Rand*1000);
	var girl1Rand = (Math.random()*2+2);
	randomspeaking($('.girl1'),"girl-1",girl1Rand*1000);
	var girl2Rand = (Math.random()*3+3);
	randomspeaking($('.girl2'),"girl-2",girl2Rand*1000);
	var girl3Rand = (Math.random()*4+2);
	randomspeaking($('.girl3'),"girl-3",girl3Rand*1000);
	var girl4Rand = (Math.random()*2+2);
	randomspeaking($('.girl4'),"girl-4",girl4Rand*1000);
	setInterval(function() {
		var today = new Date();
		count +=1;
		count %=60;
		if(count == 59 ){
			sky();
		}
		var hr = today.getHours();
		var min = today.getMinutes();
		var sec = today.getSeconds();
		var mideg = (6 * min) -45;
		var hrdeg = (30 * hr) + (mideg/30) +90;
		var sedeg = (6 * sec) -45;
		document.getElementById("chour").style.transform = 'rotate('+hrdeg+'deg)';
		document.getElementById("cminute").style.transform = 'rotate('+mideg+'deg)';
		document.getElementById("csecond").style.transform = 'rotate('+sedeg+'deg)';
	},1000);
	// $('.img-left').click(function() {
	// 	var ileft = $('.img-layers').position().left;
	// 	var iwidth = $('.img-layers').width();
	// 	var iowidth = $('.small-imgs').width()-60;
	// 	console.log(ileft);
	// 	if( ileft < 0 ){
	// 		var ichange = 800;
	// 		if(-ileft<800)
	// 		ichange = -ileft;
	// 		$('.img-layers').animate({left: ileft + ichange},500);
	// 	}
	// });
	$('.about-instincts-hover').mouseover(function() {
		$('.instincts-img').addClass('mouseon');
	});
	$('.about-instincts-hover').mouseover(function() {
		$('.instincts-img').removeClass('mouseon');
	});
	$('.home-scroll').click(function() {
		$('html, body').animate({scrollLeft: $('#scroll-home').offset().left - halfWidth + 100},1000);
	});
	$('.event-scroll').click(function() {
		$('html, body').animate({scrollLeft: $('#scroll-event').offset().left - halfWidth + 100},1000);
	});
	$('.gallery-scroll').click(function() {
		$('html, body').animate({scrollLeft: $('#scroll-gallery').offset().left - halfWidth + 100},1000);
	});
	$('.schedule-scroll').click(function() {
		$('html, body').animate({scrollLeft: $('#scroll-schedule').offset().left - halfWidth + 100},1000);
	});
	$('.hospitality-scroll').click(function() {
		$('html, body').animate({scrollLeft: $('#scroll-hospitality').offset().left - halfWidth + 100},1000);
	});
	$('.sponsors-scroll').click(function() {
		$('html, body').animate({scrollLeft: $('#scroll-sponsors').offset().left - halfWidth + 100},1000);
	});
	$('.contact-scroll').click(function() {
		$('html, body').animate({scrollLeft: $('#scroll-contact').offset().left - halfWidth + 100},1000);
	});
});

var app = angular.module('instincts', []);
app.controller('instinctsctrl', function ($scope, $http) {
	$scope.pagetitle = "";
	$scope.page = "";
	$http.get("js/events.json")
		.success(function(response) {
				$scope.clubdetails = response;
				$scope.club= response.Quiz;
				$scope.event = $scope.club.Events[0];

		})
		.error(function(response) {
				$scope.clubdetails = "Failed To fetch data from Server";
		});
	// $scope.in = fun
	$scope.aboutinstinctspage = function() {
		$scope.pagetitle = "ABOUT INSTINCTS";
		$scope.page = "aboutinstincts";
		$scope.instinctspage = "theteam";
		$('.page').fadeIn();
		$('.ititle-active').removeClass('ititle-active');
		$('.iteam').addClass('ititle-active');
		// $('body').unbind('wheel');
	};
	$scope.changetoteam = function(){
		$scope.instinctspage = "theteam";
		$('.ititle-active').removeClass('ititle-active');
		$('.iteam').addClass('ititle-active');
	};
	$scope.changetoabtins = function(){
		$scope.instinctspage = "theinstincts";
		$('.ititle-active').removeClass('ititle-active');
		$('.iins').addClass('ititle-active');
	};
	$scope.aboutssnpage = function() {
		$scope.pagetitle = "ABOUT SSN";
		$scope.page = "aboutssn";
		$('.page').fadeIn();
	};
	$scope.eventspage = function() {
		$scope.pagetitle = "EVENTS";
		$scope.page = "eventsp";
		$('.page').fadeIn();
		// $('body').unbind('wheel');
		// $scope.checkarrow();
		// $scope.eventnamereset();
		checkarrow();
		eventnamereset();
		$scope.quiz();
		$('.quiz-bg').addClass('club-bg');
	};
	$scope.gallerypage = function() {
		$scope.pagetitle = "GALLERY";
		$scope.page = "gallery";
		$scope.currimage = 1;
		$('.page').fadeIn();
	};

 $scope.movenextimage = function() {
 	if($scope.currimage < 13){
		$scope.currimage += 1;
		$('.big-img').attr("src","img/gallery/big/"+$scope.currimage+".jpg");
		$scope.checkarrowimage();
	}
 }

 $scope.moveprevimage = function() {
 	if($scope.currimage >1){
		$scope.currimage -= 1;
		$('.big-img').attr("src","img/gallery/big/"+$scope.currimage+".jpg");
		$scope.checkarrowimage();
	}
 }
 $scope.hospitalitypage = function() {
	 $scope.pagetitle = "HOSPITALITY";
	 $scope.page = "hospitality";
	 $scope.hospitalitypage = "general";
	 $('.page').fadeIn();
	 $('.ititle-active').removeClass('ititle-active');
	 $('.iteam').addClass('ititle-active');
 };
 $scope.changetogeneral = function () {
	 $scope.hospitalitypage = "general";
	 $('.ititle-active').removeClass('ititle-active');
	 $('.iteam').addClass('ititle-active');
 }
 $scope.changetoaccomodation = function () {
	 $scope.hospitalitypage = "accomodation";
	 $('.ititle-active').removeClass('ititle-active');
	 $('.iins').addClass('ititle-active');
 }
	$scope.sponsorspage = function() {
		$scope.pagetitle = "SPONSORS";
		$scope.page = "sponsors";
		$('.page').fadeIn();
		$('#body').addClass('stop-scrolling');
		// document.getElementById('body').removeEventListener('wheel',function(e) {
		// 	horizontalscroll(e);
		// });
	};
	$scope.contactpage = function() {
		$scope.pagetitle = "CONTACT";
		$scope.page = "contactus";
		$('.page').fadeIn();
	};
	$scope.closeoverlay = function() {
		$('.page').fadeOut();
		$scope.pagetitle = "";
		$scope.page = "";
		$('#body').removeClass('sto-scroll');
	};

	$scope.quiz = function() {
		$scope.club= $scope.clubdetails.Quiz;
		$scope.event = $scope.club.Events[0];
		$scope.eventswidth = $scope.club.NoOfEvents * 210;
		$('.event-names').width($scope.eventswidth);
		$('.club-bg').removeClass('club-bg');
		$('.quiz-bg').addClass('club-bg');
		// $scope.checkarrow();
		// $scope.eventnamereset();
		checkarrow();
		eventnamereset();
	};
	$scope.finearts = function() {
		$scope.club= $scope.clubdetails.FineArts;
		$scope.event = $scope.club.Events[0];
		$scope.eventswidth = $scope.club.NoOfEvents * 210;
		$('.event-names').width($scope.eventswidth);
		$('.club-bg').removeClass('club-bg');
		$('.finearts-bg').addClass('club-bg');
		// $scope.checkarrow();
		// $scope.eventnamereset();
		checkarrow();
		eventnamereset();
	};
	$scope.variety = function() {
		$scope.club= $scope.clubdetails.Variety;
		$scope.event = $scope.club.Events[0];
		$scope.eventswidth = $scope.club.NoOfEvents * 210;
		$('.event-names').width($scope.eventswidth);
		$('.club-bg').removeClass('club-bg');
		$('.variety-bg').addClass('club-bg');
		// $scope.checkarrow();
		// $scope.eventnamereset();
		checkarrow();
		eventnamereset();
	};
	$scope.elc = function() {
		$scope.club= $scope.clubdetails.ELC;
		$scope.event = $scope.club.Events[0];
		$scope.eventswidth = $scope.club.NoOfEvents * 210;
		$('.event-names').width($scope.eventswidth);
		$('.club-bg').removeClass('club-bg');
		$('.elc-bg').addClass('club-bg');
		// $scope.checkarrow();
		// $scope.eventnamereset();
		checkarrow();
		eventnamereset();
	};
	$scope.music = function() {
		$scope.club= $scope.clubdetails.Music;
		$scope.event = $scope.club.Events[0];
		$scope.eventswidth = $scope.club.NoOfEvents * 210;
		$('.event-names').width($scope.eventswidth);
		$('.club-bg').removeClass('club-bg');
		$('.music-bg').addClass('club-bg');
		// $scope.checkarrow();
		// $scope.eventnamereset();
		checkarrow();
		eventnamereset();
	};
	$scope.dance = function() {
		$scope.club= $scope.clubdetails.Dance;
		$scope.event = $scope.club.Events[0];
		$scope.eventswidth = $scope.club.NoOfEvents * 210;
		$('.event-names').width($scope.eventswidth);
		$('.club-bg').removeClass('club-bg');
		$('.dance-bg').addClass('club-bg');
		// $scope.checkarrow();
		// $scope.eventnamereset();
		checkarrow();
		eventnamereset();
	};
	$scope.lop = function() {
		$scope.club= $scope.clubdetails.LOP;
		$scope.event = $scope.club.Events[0];
		$scope.eventswidth = $scope.club.NoOfEvents * 210;
		$('.event-names').width($scope.eventswidth);
		$('.club-bg').removeClass('club-bg');
		$('.lop-bg').addClass('club-bg');
		// $scope.checkarrow();
		// $scope.eventnamereset();
		checkarrow();
		eventnamereset();
	};
	$scope.photography = function() {
		$scope.club= $scope.clubdetails.Photography;
		$scope.event = $scope.club.Events[0];
		$scope.eventswidth = $scope.club.NoOfEvents * 210;
		$('.event-names').width($scope.eventswidth);
		$('.club-bg').removeClass('club-bg');
		$('.photography-bg').addClass('club-bg');
		// $scope.checkarrow();
		// $scope.eventnamereset();
		checkarrow();
		eventnamereset();
	};
	$scope.saaral = function() {
		$scope.club= $scope.clubdetails.Saaral;
		$scope.event = $scope.club.Events[0];
		$scope.eventswidth = $scope.club.NoOfEvents * 210;
		$('.event-names').width($scope.eventswidth);
		$('.club-bg').removeClass('club-bg');
		$('.saaral-bg').addClass('club-bg');
		// $scope.checkarrow();
		// $scope.eventnamereset();
		checkarrow();
		eventnamereset();
	};
	$scope.filmclub = function() {
		$scope.club= $scope.clubdetails.FilmClub;
		$scope.event = $scope.club.Events[0];
		$scope.eventswidth = $scope.club.NoOfEvents * 210;
		$('.event-names').width($scope.eventswidth);
		$('.club-bg').removeClass('club-bg');
		$('.filmclub-bg').addClass('club-bg');
		// $scope.checkarrow();
		// $scope.eventnamereset();
		checkarrow();
		eventnamereset();
	};
	$scope.changeevent = function(index) {
		$scope.event = $scope.club.Events[index];
		$('.event-name-active').removeClass('event-name-active');
		$('.event-name').eq(index).addClass('event-name-active');
	};
	$scope.moveleft = function() {
		var left = $('.event-names').position().left;
		var width = $('.event-names').width();
		var owidth = $('.events-names').width();
		if( left < 0 ){
			var change = 220;
			if(-left<220)
			change = -left;
			$('.event-names').animate({left: left + change},300,checkarrow);
		}
	};

	$scope.moveright = function() {
		var left = $('.event-names').position().left;
		var width = $('.event-names').width();
		var owidth = $('.events-names').width();
		if( -left + owidth < width){
			var change =220;
			if(width - owidth +left < 220){change = width - owidth +left }
			$('.event-names').animate({left: left - change},300,checkarrow);
		}
	};

	$scope.moveimageleft = function() {
		var ileft = $('.img-layers').position().left;
		var iwidth = $('.img-layers').width();
		var iowidth = $('.image-layers').width();
		if( ileft < 30 ){
			console.log(ileft);
			var ichange = 800;
			if(-ileft<800){
				ichange = -ileft;
			}
			$('.img-layers').animate({left: ileft + ichange},500);
		}
	};


	$scope.moveimageright = function() {
		var left = $('.img-layers').position().left;
		var width = $('.img-layers').width();
		var owidth = $('.image-layers').width();
		if( -left +30 + owidth < width){
			var change =800;
			if(width - owidth +left -30 < 800){change = width - owidth +left }
			$('.img-layers').animate({left: left - change},500);
			$('.img-layers').css({left: left - change});
			console.log(left);
		}
	};
	$scope.checkarrowimage = function(){
		if($scope.currimage == 1){
			$('.arrow-disabled').removeClass('arrow-disabled');
			$('.big-left').addClass('arrow-disabled');
		}else if($scope.currimage == 13){
			$('.arrow-disabled').removeClass('arrow-disabled');
			$('.big-right').addClass('arrow-disabled');
		}else{
			$('.arrow-disabled').removeClass('arrow-disabled');
		}
	};
	$scope.changeimage = function(x) {
		$scope.currimage = x;
		$('.big-img').attr("src","img/gallery/big/"+x+".jpg");
		$scope.checkarrowimage();
	};
	
});
