// ECMAScript 5 strict mode
"use strict";

assert2(cr, "cr namespace not created");
assert2(cr.plugins_, "cr.plugins_ not created");

/////////////////////////////////////
// Plugin class
cr.plugins_.BaracashAPI = function(runtime)
{
	this.runtime = runtime;
};

(function ()
{
	var pluginProto = cr.plugins_.BaracashAPI.prototype;
		
	/////////////////////////////////////
	// Object type class
	pluginProto.Type = function(plugin)
	{
		this.plugin = plugin;
		this.runtime = plugin.runtime;
	};
	
	var typeProto = pluginProto.Type.prototype;

	typeProto.onCreate = function()
	{	
		
	};

	/////////////////////////////////////
	// Instance class
	pluginProto.Instance = function(type)
	{
		this.type = type;
		this.runtime = type.runtime;
	};
	
	var instanceProto = pluginProto.Instance.prototype;
	
	instanceProto.onCreate = function()
	{
		this._apiResponses = {};				
		instanceProto.fingerprint = "";
		new Fingerprint2().get(function(result){			
			instanceProto.fingerprint = result
		});
		
	};
	

	
	//////////////////////////////////////
	// Conditions
	function Cnds() {};
	pluginProto.cnds = new Cnds();
	
	//////////////////////////////////////
	// Actions
	function Acts() {};
	pluginProto.acts = new Acts();
	Acts.prototype.LoadPrizeResponse = function (data)
	{
		var o;
		try {
			o = JSON.parse(data);
			if(o != null){
				this._apiResponses["prizeResponse"] = o;
			}else{
				this._apiResponses["prizeResponse"] = {id: 'NONE'};
			}
		}
		catch(e) {
			
			return; 
		}
	    
	};	
	
	pluginProto.acts = new Acts();
	Acts.prototype.LoadGiftCodeResponse = function (data)
	{
		var o;
		try {
			o = JSON.parse(data);
			if(o != null){
				this._apiResponses["codeResponse"] = o;
			}else{
				this._apiResponses["codeResponse"] = {id: 'NONE'};
			}
		}
		catch(e) {
			
			return; 
		}
	    
	};	
	
/*
	this._apiResponses.push({
			id: o["id"],
			status: o["status"],
			deliveryDate: o["deliveryDate"],
			discoveryDate: o["discoveryDate"],
			gift: o["gift"],
			giftCode: o["giftCode"]			
		})
	*/
	//////////////////////////////////////
	// Expressions
	function Exps() {};
	pluginProto.exps = new Exps();

	
	Exps.prototype.GetPrizeId = function (ret)
	{
		if(this._apiResponses["prizeResponse"] != null){
			ret.set_string(this._apiResponses["prizeResponse"].uuid);
		}else{
			ret.set_string('NONE')
		}
	};
	
		Exps.prototype.GetPrizeValue = function (ret,campaignId)
	{
		if(this._apiResponses["prizeResponse"] == null){
			ret.set_int(0);
		}else{
			var id = this._apiResponses["prizeResponse"].uuid;
			var sum = 0;
			for (var i = 0; i < id.length; ++i) {
				 sum *= id.charCodeAt(i);
			}
			ret.set_int(sum%8388608); 
		}
	};
	
	Exps.prototype.GetPrizeDescription = function (ret)
	{
		if(this._apiResponses["prizeResponse"] != null){
			ret.set_string(this._apiResponses["prizeResponse"].gift.description);
		}else{
			ret.set_string('NONE')
		}
	};
	
	Exps.prototype.GetPrizeName = function (ret)
	{
		if(this._apiResponses["prizeResponse"] != null){
			ret.set_string(this._apiResponses["prizeResponse"].gift.name);
		}else{
			ret.set_string('NONE')
		}
	};
	
	Exps.prototype.GetGiftCode = function(ret)
	{
		if(this._apiResponses["prizeResponse"] != null){
			ret.set_string(this._apiResponses["codeResponse"].code);
		}else{
			ret.set_string('NONE')
		}
	}
	
	Exps.prototype.GetFingerPrint = function(ret){		
			ret.set_string(instanceProto.fingerprint);		
	}
	
	/**BEGIN-PREVIEWONLY**/
	instanceProto.getDebuggerValues = function (propsections)
	{
		propsections.push({
			"title": "RESPONSE",
			"properties": [
				{"name": "Prizes", "value": this._apiResponses["prizeResponse"].uuid, "readonly": true}
			]
		});
	};
	/**END-PREVIEWONLY**/	
}());