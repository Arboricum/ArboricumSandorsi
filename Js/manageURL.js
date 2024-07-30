function removeURLParameter(param, url) {
    url = decodeURI(url).split("?");
    path = url.length == 1 ? "" : url[1];
    path = path.replace(new RegExp("&?"+param+"\\[\\d*\\]=[\\w]+", "g"), "");
    path = path.replace(new RegExp("&?"+param+"=[\\w]+", "g"), "");
    path = path.replace(/^&/, "");
    return url[0] + (path.length
        ? "?" + path
        : "");
}

function addURLParameter(param, val, url) {
    if(typeof val === "object") {
        // recursively add in array structure
        if(val.length) {
            return addURLParameter(
                param + "[]",
                val.splice(-1, 1)[0],
                addURLParameter(param, val, url)
            )
        } else {
            return url;
        }
    } else {
        url = decodeURI(url).split("?");
        path = url.length == 1 ? "" : url[1];
        path += path.length
            ? "&"
            : "";
        path += decodeURI(param + "=" + val);
        return url[0] + "?" + path;
    }
}

/*
url = location.href;
    -> http://example.com/?tags[]=single&tags[]=promo&sold=1

url = removeURLParameter("sold", url)
    -> http://example.com/?tags[]=single&tags[]=promo

url = removeURLParameter("tags", url)
    -> http://example.com/

url = addURLParameter("tags", ["single", "promo"], url)
    -> http://example.com/?tags[]=single&tags[]=promo

url = addURLParameter("sold", 1, url)
    -> http://example.com/?tags[]=single&tags[]=promo&sold=1
	*/