// 페이지네이션의 기본원리
// 한 페이지에 보여질 게시물 수 : 5
// 총 게시물수 : 22

// 총 페이지 수(total_page) : 22/5 => 5
//

// 1page) (1-1) * 5 => start : 0 end : 5
// 2page) (2-1) * 5 => start : 5 end : 10
// 3page) (3-1) * 5 => start : 10 end : 15

const comments = [
    {
        id: 1,
        profile_url: 'https://picsum.photos/id/1/50/50',
        author: 'abc_1',
        content: 'UI 테스트는 어떻게 진행하나요',
        createdAt: '2020-05-01',
    },
    {
        id: 2,
        profile_url: 'https://picsum.photos/id/2/50/50',
        author: 'abc_2',
        content: '막히면 대답은 빨리 해주나요',
        createdAt: '2020-05-02',
    },
    {
        id: 3,
        profile_url: 'https://picsum.photos/id/3/50/50',
        author: 'abc_3',
        content: '코드에러가 발생했는데 어딘지 모르겠어요',
        createdAt: '2020-05-03',
    },
    {
        id: 4,
        profile_url: 'https://picsum.photos/id/4/50/50',
        author: 'abc_4',
        content: 'Javascript 기초가 부족한데 좋은 가이드 있나요',
        createdAt: '2020-05-04',
    },
    {
        id: 5,
        profile_url: 'https://picsum.photos/id/5/50/50',
        author: 'abc_5',
        content: 'Typescript는 어떤점에서 좋나요',
        createdAt: '2020-05-05',
    },
    {
        id: 6,
        profile_url: 'https://picsum.photos/id/6/50/50',
        author: 'abc_6',
        content: 'React 소스 배포는 보통 어떤식으로 하나요.',
        createdAt: '2020-05-06',
    },
    {
        id: 7,
        profile_url: 'https://picsum.photos/id/7/50/50',
        author: 'abc_7',
        content: '주변에 React 개발자 있나요',
        createdAt: '2020-05-07',
    },
    {
        id: 8,
        profile_url: 'https://picsum.photos/id/8/50/50',
        author: 'abc_8',
        content: 'Typescript 배워 보려고 합니다. 어떻게 배우는게 빠를까요',
        createdAt: '2020-05-08',
    },
    {
        id: 9,
        profile_url: 'https://picsum.photos/id/9/50/50',
        author: 'abc_9',
        content: '컴포넌트 테스트는 어떻게 하나요.',
        createdAt: '2020-05-09',
    },
    {
        id: 10,
        profile_url: 'https://picsum.photos/id/10/50/50',
        author: 'abc_10',
        content: 'storybook은 무엇인가요.',
        createdAt: '2020-05-10',
    },
    {
        id: 11,
        profile_url: 'https://picsum.photos/id/11/50/50',
        author: 'abc_11',
        content: '주변에 React 개발자 있나요',
        createdAt: '2020-05-11',
    },
    {
        id: 12,
        profile_url: 'https://picsum.photos/id/12/50/50',
        author: 'abc_12',
        content: '주변에 React 개발자 있나요',
        createdAt: '2020-05-12',
    },
    {
        id: 13,
        profile_url: 'https://picsum.photos/id/13/50/50',
        author: 'abc_13',
        content: '주변에 React 개발자 있나요',
        createdAt: '2020-05-13',
    },
    {
        id: 14,
        profile_url: 'https://picsum.photos/id/14/50/50',
        author: 'abc_14',
        content: 'Next.js 가이드 주세요.14',
        createdAt: '2020-05-14',
    },
    {
        id: 15,
        profile_url: 'https://picsum.photos/id/15/50/50',
        author: 'abc_15',
        content: 'vue vs react 뭐가 좋나요.',
        createdAt: '2020-05-15',
    },
    {
        id: 16,
        profile_url: 'https://picsum.photos/id/16/50/50',
        author: 'abc_16',
        content: 'Atomic 디자인은 무엇인가요',
        createdAt: '2020-05-16',
    },
    {
        id: 17,
        profile_url: 'https://picsum.photos/id/18/50/50',
        author: 'abc_17',
        content: 'UI 테스트는 어떻게 진행하나요',
        createdAt: '2020-05-17',
    },
    {
        id: 18,
        profile_url: 'https://picsum.photos/id/18/50/50',
        author: 'abc_18',
        content: 'local storage는 언제 사용하는게 좋나요.',
        createdAt: '2020-05-18',
    },
    {
        id: 19,
        profile_url: 'https://picsum.photos/id/19/50/50',
        author: 'abc_19',
        content: '막히면 대답은 빨리 해주나요',
        createdAt: '2020-05-19',
    },
    {
        id: 20,
        profile_url: 'https://picsum.photos/id/20/50/50',
        author: 'abc_20',
        content: 'Form 처리는 어떻게 하면 깔끔할까요',
        createdAt: '2020-05-20',
    },
    {
        id: 21,
        profile_url: 'https://picsum.photos/id/21/50/50',
        author: 'abc_21',
        content: 'typescript도 배워 보려고 합니다. 어떻게 배우는게 빠를까요',
        createdAt: '2020-05-21',
    },
    {
        id: 22,
        profile_url: 'https://picsum.photos/id/22/50/50',
        author: 'abc_22',
        content: '주변에 React 개발자 있나요',
        createdAt: '2020-05-22',
    },
];

//Wirte JS code Here!
function Pagination() {
    // 초기값 셋팅
    this.current_page = 1;
    this.limit = 5;

    // 총 페이지 갯수를 받아오는 total_page 변수를 완성하세요
    this.total_page = Math.ceil(comments.length / this.limit);
}

// page 번호를 받아서 해당 게시물을 리턴하는 함수를 완성하시오.
// getComments(1) 은 comments 배열중 1번부터 5번 게시물까지 리턴합니다.
Pagination.prototype.getComments = function (page) {
    // 해당 페이지의 게시물의 첫 번호를 불러옵니다.
    let start = (page - 1) * this.limit;
    this.current_page = page; // 현재 페이지 번호로 셋팅합니다.

    // 해당 페이지의 게시물의 마지막 지점을 보여줍니다.
    let limit = start + this.limit;

    // 게시물의 결과를 배열로 리턴합니다.
    // 배열의 인덱스가 시작지점부터 한페이제 보여질 게시물
    return comments.filter(function (_, index) {
        if (index >= start && index < limit) {
            return true;
        } else {
            return false;
        }
    });
};

// 게시물의 배열을 넣으면 html 템플릿으로 리턴하는 함수입니다.
Pagination.prototype.getCommentFormat = function (comments) {
    return comments.reduce(function (acc, comment) {
        return (
            acc +
            `<div class="commentWrap">
          <img src="` +
            comment.profile_url +
            `" alt="" />
          ` +
            comment.author +
            `
          <div class="createdAt">
              ` +
            comment.createdAt +
            `
          </div>
          <div class="content">
              ` +
            comment.content +
            `
          </div>
          <hr />
      </div>`
        );
    }, '');
};

// 페이지의 1,2,3,4,5 전체 페이지를 html 로 보여주는 함수를 만듭니다.
// 현재 페이지의 경우 활성화가 되어있어야 합니다.

// #pageContainer 로 들어가게 됩니다.
Pagination.prototype.getPageListFormat = function () {
    // 리턴할 html 변수입니다.
    var result = '';

    for (let num = 1; num <= this.total_page; num++) {
        let className = num == this.current_page ? 'active' : '';
        result += '<button class="' + className + '">' + num + '</button>';
    }

    return result;
};

document.addEventListener('DOMContentLoaded', function () {
    let pagination = new Pagination();

    let commentContainer = document.querySelector('#commentContainer');
    let pageContainer = document.querySelector('#pageContainer');

    commentContainer.innerHTML = pagination.getCommentFormat(pagination.getComments(1));

    pageContainer.innerHTML = pagination.getPageListFormat();

    // 첫 페이지 로딩시에 pagaination 객체를 활용해서
    // #commentContainer , #pageContainer 에 각각 넣어줍니다.

    // 1. 문서가 로드 된 뒤 1페이지에 해당하는 게시물을 보여준다.
    // 2. 페이지 리스트들을 보여주고, 1페이를 활성화 한다.

    document.addEventListener(
        'click',
        function (event) {
            // pageContainer 안에 페이지 변수들은 동적으로 생성됩니다.
            // 이벤트를 클릭했을 때 해당 지점이 버튼변수일때 innerHtml 로 넣어주는 부분을 완성해주세요.
            if (event.target.matches('#pageContainer button')) {
                let page = event.target.innerHTML;
                commentContainer.innerHTML = pagination.getCommentFormat(pagination.getComments(page));
            }
            pageContainer.innerHTML = pagination.getPageListFormat();
            return;
        },
        false
    );
});
