var _promise = function (param) {
	return new Promise(function (resolve, reject) {
		window.setTimeout(function () {
			if (param) { 
        resolve("해결 완료");
			}	else {
        reject(Error("실패!!"));
			}
		}, 3000);
	});
};

//Promise 실행
_promise(true)
.then(function (text) {
	// 성공시
	console.log(text);
}, function (error) {
	// 실패시 
	console.error(error);
});