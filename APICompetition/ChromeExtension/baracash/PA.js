  
// PA replace
//$('.pa:eq(1) tr:eq(1) td:eq(0)').html('<div style="width: 1000px;height:450px;"><object style="width:1000px;height: 446px;margin-left:0px" data="http://baracash.azurewebsites.net/Demo/Index.html"/></div>')
$('.landCarImgs li:eq(0) div:eq(1)').html('');
$('.landCarImgs li:eq(0) div:eq(0)').css("margin-left","0px");
$('.landCarImgs li:eq(0) picture').html('<div style="width: 1000px;height:450px;margin-left:-20px"><object style="width:1000px;height: 446px;margin-left:0px" data="http://baracash.azurewebsites.net/Demo/index.html"/></div>');

// baracash ticket add
$('.fTopSides').append('<div class="fTCGaranty"><div id="baracashTicketDiv" class="fTSidesTit">BARACASH</div><label><input id="InsuranceWarrantyList_0__Value_0__FormData_IsChecked" name="InsuranceWarrantyList[0].Value[0].FormData.IsChecked" onclick="" type="checkbox" value="true"><p class="fpTGarTxt">Ticket Baracash<br><span class="redS">0,99€</span><br><img src="http://jeuxdegrattage.eu//wp-content/uploads/2015/04/banco-jeu-grattage.jpg"/></p></label></div>');

// baracash ticket Pani
//var checkQty = function(){alert($('#bcQte').val())};


//$(document).ready(function() {
	$('.bRecap').append('<form action="ShoppingCartRwd/add.html" class="fmPrd"> <div class="bRPrd"><div class="bRPImg"><a href="http://www.cdiscount.com/high-tech/image/samsung-ue48h6400-smart-tv-3d-full-hd-121cm-48/f-1062613-samue48h6400.html" target="_self"><img src="http://jeuxdegrattage.eu//wp-content/uploads/2015/04/banco-jeu-grattage.jpg" style="cursor: pointer" width="115" alt=""></a></div><div class="bRPDesc"><p><a href="http://www.cdiscount.com/high-tech/image/samsung-ue48h6400-smart-tv-3d-full-hd-121cm-48/f-1062613-samue48h6400.html" target="_self"><strong>Ticket Baracash</strong></a><br>Vendu par <span class="logoCDS">Cdiscount</span><br></p></div><div class="bRPPrix"><div class="price">0<sup>€99</sup></div></div><div class="bRPCart"><select id="bcQte" class="jsQte" name="quantityList"><option selected="selected">1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option></select><div class="bRPCDel jsDelete">Supprimer</div></div></div><!-- .bRPrd --><!-- input hidden à placer ici --><input id="productId" name="productId" type="hidden" value="SAMUE48H6400"><input id="lineId" name="lineId" type="hidden" value="fb074cc3-245f-43e7-897d-1f0db26b0ba4"><input id="siteMapNodeId" name="siteMapNodeId" type="hidden" value="66521"></form>');
//});


