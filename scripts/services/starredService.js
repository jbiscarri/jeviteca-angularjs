angular
    .module('jeviteca')
    .service('starredService', function(){
        this.updateStarredValue = function(type, id) {
            if ( typeof( Storage ) !== "undefined" ) {
    			var localStorageValue = document.getElementById( "localStorageValue" );
                var strObject;
                var key = 'favBands';
                if (type == 'albums')
                    key = 'favAlbums';
                else if (type == 'genres')
                    key = 'favGenres';
                    strObject = localStorage.getItem( key );
                if ((typeof( strObject ) === "undefined" ) || (strObject ==null))
                    strObject = JSON.stringify([]);
                var data = JSON.parse(strObject);
                var index = data.indexOf(id);
                if (index > -1) {
                    data.splice(index, 1);
                } else {
                    data.push(id);
                }
                localStorage.setItem(key, JSON.stringify(data));
            }
		};

        this.isStarred = function(type, id) {
            if ( typeof( Storage ) !== "undefined" ) {
    			var localStorageValue = document.getElementById( "localStorageValue" );
                var data;
                var key = 'favBands';
                if (type == 'albums')
                    key = 'favAlbums';
                else if (type == 'genres')
                    key = 'favGenres';
                    data = localStorage.getItem( key );
                if ((typeof( data ) === "undefined" ) || (data ==null))
                    data = [];
                var index = data.indexOf(id);
                if (index > -1) {
                    return true;
                } else {
                    return false;
                }
		    }
        };
    });
