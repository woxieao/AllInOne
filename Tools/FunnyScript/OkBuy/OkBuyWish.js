    function OkBuyWish() {
        var okBuyWishKey = "okBuyWishKey";
        function getWhishData() {
            var data = localStorage.getItem(okBuyWishKey);
            data = (data === null || data === undefined || data === "") ? "[]" : data;
            return JSON.parse(data);
        }

        function saveWishData(data) {
            localStorage.setItem(okBuyWishKey, JSON.stringify(data));
        }

        this.SaveWish = function () {
            var currentPage = window.document;
            var productId = currentPage.getElementById("productid");
            var currentPrice = currentPage.getElementById("prodPriceAj");
            var wishList = getWhishData();
            var isExist = false;
            for (var i in wishList) {
                var wishInfo = wishList[i];
                if (wishInfo.ProductId === productId) {
                    wishInfo.History.push({ CurrentPrice: currentPrice, LogTime: new Date() });
                    isExist = true;
                    break;
                }
            }
            if (!isExist) {
                wishList.push({ ProductId: productId, History: [{ CurrentPrice: currentPrice, LogTime: new Date() }] });
            }
            saveWishData(wishList);
            console.log("Success");
        }
        this.ShowSingleWishHistory = function () {
            var currentPage = window.document;
            var productId = currentPage.getElementById("productid");
            var lowest = { CurrentPrice: 99999999, LogTime: new Date() };
            var highest = { CurrentPrice: -1, LogTime: new Date() };
            var wishList = getWhishData();
            var currentProd = {};
            for (var x in wishList) {
                if (wishList[x].ProductId === productId) {
                    currentProd = wishList[x];
                    for (var i in currentProd.History) {
                        var prodHistory = currentProd.History[i];
                        lowest = prodHistory.CurrentPrice < lowest.CurrentPrice ? prodHistory : lowest;
                        highest = prodHistory.CurrentPrice < highest.CurrentPrice ? prodHistory : highest;
                    }
                    break;
                }
            }
            console.log("历史最低");
            console.log(lowest);
            console.log("历史最高");
            console.log(highest);
            console.log(currentProd);
        }
    }
