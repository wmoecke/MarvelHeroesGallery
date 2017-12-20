		var ts = "1";
		var apikey = "da647173dba247d5732cb78175395daa";
		var hash = "c8feb60a586895eefe1f8341028f718b";
		
		$(function() {
			$('div#stan-lee').show('fast', function(){ $('div.login').show('slow'); });
			populateCards();
		});
		
		function hideStan() {
			$('div.login').hide('slow',function(){ $('div#stan-lee').hide('fast'); });
		}

		function toTitleCase(str) {
			return str.replace(/(?:^|\s)\w/g, function(match) {
				return match.toUpperCase();
			});
		}
		
		function populateCards(){
			$.get("https://gateway.marvel.com/v1/public/characters?ts=" + ts + "&apikey=" + apikey + "&hash=" + hash, function(data) {
				var results = data.data.results;
				results.forEach(function(item, index) {
					var element = "";
					element += "<div class='viz-card' id='" + item.id + "'";
					element += " style=\"background-image: url('" + item.thumbnail.path + "." + item.thumbnail.extension 
								+ "?ts=" + ts + "&apikey=" + apikey + "&hash=" + hash + "'); background-size: cover;\"";
					element += " data-name='" + item.name.trim() + "'";
					element += " data-description='" + item.description.trim() + "'";
					element += " data-comics='" + JSON.stringify(item.comics.items) + "'";
					element += " data-urls='" + JSON.stringify(item.urls) + "'";
					element += " onclick=\"populateDetails(this.id);\" href=\"javascript:void(0);\" style=\"text-decoration:none;\"";
					element += " title='" + item.name.trim() + "'>";
					$(element).appendTo("div.viz-cards");
				});
			}, "json");
		}
		
		function populateDetails(id){
			var card = $("div.viz-cards div#" + id);
			$("div.login-title span.black").html(card.attr("data-name"));
			$("div#login-title p").html(card.attr("data-description"));
			$("div#login-title ul").remove();
			var comics = JSON.parse(card.attr("data-comics"));
			var urls = JSON.parse(card.attr("data-urls"));
			var ulUrls = "<br>";
			urls.forEach(function(item, index) {
				ulUrls += "<span style=\"font-size: 18px;\"><a href=\"" + item.url;
				ulUrls += "\" target=\"blank\"";
				ulUrls += " style=\"text-decoration:none;\">" 
						+ toTitleCase(item.type) + "</a></span>";
				if(index < urls.length - 1)
					ulUrls += "<span style=\"font-size: 18px;\"> | </span>";
			});
			$(ulUrls).appendTo("div.login-title span");
			var ulComics = "<ul>";
			comics.forEach(function(item, index) {
				ulComics += "<li>" + item.name + "</li>";
			});
			ulComics += "</ul>";
			$(ulComics).appendTo("div#login-title");
			$("div.content button").hide();
			$('div#stan-lee').show('fast', function(){ $('div.login').show('slow'); });
		}