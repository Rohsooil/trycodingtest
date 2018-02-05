class Blog {
	constructor() {
		this.setInitVariables();
		this.resgisterEvent();
		this.likedSet = new Set();
	}

	setInitVariables() {
		this.blogList = document.querySelector('.blogList > ul');
	}
	resgisterEvent() {
		const startBtn = document.querySelector('.start');
		const dataURL = "https://jsonplaceholder.typicode.com/posts/";
		startBtn.addEventListener('click', () => {
			this.setInitData(dataURL);
		});

		this.blogList.addEventListener('click', ({ target }) => {
			const targetclassName = target.className;
			const title = target.previousElementSibling.textContent;
			//console.log(targetclassName); 
			if (targetclassName !== 'like' && target.className !== 'unlike') return;
			if (target.className === 'unlike') {
				target.className = 'like';
				target.innerText = '찜하기';

				this.likedSet.delete(title);
			} else {
				this.likedSet.add(title);

				target.className = 'unlike';
				target.innerText = '찜 취소';
			}
			this.updateLikedList();
		});
	}

	updateLikedList() {
		const ul = document.querySelector('.like-list > ul');
		let likedSum = '';
		this.likedSet.forEach((v) => {
			likedSum += `<li>${v}</li>`;
		});
		ul.innerHTML = likedSum;
	}

	setInitData(dataURL) {
		this.getData(dataURL, this.insertPosts.bind(this));
	}
	getData(dataURL, fn) {
		const oReq = new XMLHttpRequest();
		oReq.addEventListener("load", () => {
			const list = JSON.parse(oReq.responseText);
			fn(list);
		});
		oReq.open('GET', dataURL);
		oReq.send();
	}
	insertPosts(list) {
		console.log(list);
		list.forEach((v) => {
			this.blogList.innerHTML += `
			<li>
				<a href ='#'> ${v.title}</a>
				<div class = 'like'>찜하기</div>
			</li>`;
		});
	}
}
export default Blog;