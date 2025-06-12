// --- 1. DOM elements ---
let breakingImg = document.querySelector('#breakingImg');
let breakingNews_title = document.querySelector('#breakingNews .title');
let breakingNews_desc = document.querySelector('#breakingNews .description');
let topNews = document.querySelector('.topNews');
let sportsNews = document.querySelector('#News .newsBox');
let businessNews = document.querySelector('#eventNews .newsBox');
let techNews = document.querySelector('#warningNews .newsBox');

let header = document.querySelector('.header');
let toggleMenu = document.querySelector('.bar');
let menu = document.querySelector('nav ul');

// --- 2. Toggle menu ---
const toggle = () => {
  toggleMenu.classList.toggle('active');
  menu.classList.toggle('activeMenu');
};
toggleMenu.addEventListener('click', toggle);

// --- 3. Sticky header ---
window.addEventListener('scroll', () => {
  if(window.scrollY > 50){
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

// --- 4. Dữ liệu Vbài viết (viết tay) ---

const breakingData = [
   {
    title: "Đợt mưa lớn nhất từ đầu năm đang lan rộng khắp miền Bắc",
    date:"23/05/2025",
    description: "Cập nhật mới nhất diễn biến mưa lớn, Trung tâm Dự báo khí tượng thủy văn quốc gia cho biết, đêm 22.5 và sáng sớm nay 23.5, nhiều khu vực vùng núi Bắc bộ có mưa vừa, mưa to và giông.",
    content:[
    "Đặc biệt, một số nơi có mưa rất to, lượng mưa trên 100 mm (đo từ 19 giờ ngày 22.5 đến 3 giờ ngày 23.5) như: Xuân Minh (Hà Giang) 145,6 mm; Phúc Yên (Tuyên Quang) 231,4 mm; Tân Phượng (Yên Bái) 135,8 mm; Cổ Linh (Bắc Kạn) 112,6 mm.",
    "Các chuyên gia khí tượng thủy văn nhận định, miền Bắc đang đối mặt với đợt mưa lớn nhất từ đầu năm nay. Trong đó, khu vực mưa lớn nhất khả năng xuất hiện ở Sơn La, Hòa Bình, Hà Giang, Tuyên Quang, Bắc Kạn, Thái Nguyên, Bắc Giang, Cao Bằng, Lạng Sơn, Quảng Ninh, Hải Phòng...",
    "Trung tâm Dự báo khí tượng thủy văn quốc gia cảnh báo, từ hôm nay 23 - 24.5, ở khu vực Việt Bắc, Đông Bắc và đồng bằng Bắc bộ có mưa vừa, mưa to, một số nơi mưa rất to với lượng mưa phổ biến từ 60 - 130 mm, có nơi trên 220 mm.",
    "Từ ngày 23.5 đến sáng 24.5, ở khu vực tây bắc Bắc bộ có mưa vừa, mưa to và giông, lượng mưa phổ biến 40 - 70 mm, có nơi mưa rất to, trên 150 mm.",
    "Trong những ngày tới, tại Bắc bộ có khả năng xảy ra các trận mưa cường suất lớn có lượng mưa trên 120 mm/3 giờ gây ngập lụt cục bộ.",
    ],

    url:"#",
    urlToImage: "https://images2.thanhnien.vn/528068263637045248/2025/5/23/photo-1747960520363-1747960522931209166117.jpeg"

   },
];

const topData = [
  {
    title: "Thủ tướng: Ban hành 28 nghị định về phân cấp, phân quyền, phân định thẩm quyền chậm nhất ngày 15/6",
    description: "(Chinhphu.vn) - Chiều tối 29/5, Thủ tướng Phạm Minh Chính chủ trì phiên họp Chính phủ về rà soát việc phân cấp, phân quyền và phân định thẩm quyền gắn với thực hiện mô hình tổ chức chính quyền địa phương 2 cấp.",
    date:"29/05/2025",
    content: [
    "Việc gia nhập liên minh giúp Việt Nam tiếp cận công nghệ mới, thúc đẩy đổi mới sáng tạo.",
    "",
    "",
    "",
    "",
    "",


    ],
    url: "#",
    urlToImage: "https://bcp.cdnchinhphu.vn/334894974524682240/2025/5/29/img4464-17485233293012117566761.jpg"
  },

  
  {
    title: "Hà Nội tăng cường kiểm tra vệ sinh an toàn thực phẩm",
    description: "Nhân Tháng hành động vì an toàn thực phẩm năm 2025, ngày 18/4, đoàn kiểm tra liên ngành công tác an toàn thực phẩm số 3 của thành phố Hà Nội đã làm việc với huyện Thanh Trì và đi kiểm tra một số cơ sở sản xuất, kinh doanh thực phẩm trên địa bàn. ",
    date:"18/04/2025",
    content: [
    "Các cơ quan chức năng tiến hành kiểm tra nghiêm ngặt nhằm đảm bảo sức khỏe người dân.",

    ],
    url: "#",
    urlToImage: "https://cdn.nhandan.vn/images/85fc3722efdb205e3aa276f0c26aba655ed178a3602d62a71538ce82647d5cdc98718e513f0b424da5ed4d6eb6a414ee9f1252b920f14bdecea1b5d4dccea572b7ae13cda333b1a658a4aa09dbd85477/3-9542-9036-53-1379.jpg"
  },


  {
    title: "Đấu tranh với hàng giả, hàng nhái, hàng kém chất lượng",
    description: "Thời gian vừa qua, các cơ quan chức năng thành phố Cần Thơ mở đợt cao điểm đấu tranh phòng chống hàng giả, hàng nhái, hàng kém chất lượng và phát hiện rất nhiều cơ sở vi phạm.",
    date:"20/04/2025",
    content:[
     "",
    ],
    url: "#",
    urlToImage: "https://cdn.nhandan.vn/images/8f65a8cf8a8b6659b224a39b849ee244a08a4fe8faad3385d3261da7b486e48404f44ce0ad8eead095a519206f66c5bb/04.jpg"
  },
  
   {
    title: "Bộ máy Chính phủ sau khi sắp xếp, tinh gọn",
    description: "Sau sắp xếp tinh gọn, Chính phủ nhiệm kỳ 2021-2026 có 14 bộ, 3 cơ quan ngang bộ (giảm 5 bộ và cơ quan ngang bộ).",
    date:"18/02/2025",
    content:[
     "",
    ],
    url: "#",
    urlToImage: "https://cdn2.tuoitre.vn/471584752817336320/2025/2/18/danh-sach-quoc-hoithumb-1739890914426773030536.png"
  }
];

const sportsData = [
  {
    title: "Thủ tướng: Ban hành 28 nghị định về phân cấp, phân quyền, phân định thẩm quyền chậm nhất ngày 15/6",
    description: "(Chinhphu.vn) - Chiều tối 29/5, Thủ tướng Phạm Minh Chính chủ trì phiên họp Chính phủ về rà soát việc phân cấp, phân quyền và phân định thẩm quyền gắn với thực hiện mô hình tổ chức chính quyền địa phương 2 cấp.",
    date:"29/05/2025",
    content: [
    "Việc gia nhập liên minh giúp Việt Nam tiếp cận công nghệ mới, thúc đẩy đổi mới sáng tạo.",
    "",
    "",
    "",
    "",
    "",


    ],
    url: "#",
    urlToImage: "https://bcp.cdnchinhphu.vn/334894974524682240/2025/5/29/img4464-17485233293012117566761.jpg"
  },

  {
    title: "V-League và nghịch lý buồn: Kịch tính như phim vẫn gây... thờ ơ",
    description: "Dù cuộc đua ở cuối bảng xếp hạng V-League 2024/25 vẫn tiếp tục diễn ra đầy kịch tính, nhưng đáng tiếc khi chỉ nhận về sự thờ ơ của người hâm mộ…",
    date:"17/05/2025",
    content: "Các đội bóng tranh tài quyết liệt hứa hẹn những pha bóng đẹp và kết quả bất ngờ.",
    url: "#",
    urlToImage: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/5/17/hagl-vs-ha-tinh-4-90807.jpg?width=0&s=xTPAl2eCEDKdX36LqoKWig"
  },

  {
    title: "Không thể thiếu điện trong bất cứ trường hợp nào ",
    description: "Thủ tướng Chính phủ Phạm Minh Chính vừa qua đã ký Công điện số 81/CĐ-TTg về tình hình, giải pháp bảo đảm cung ứng điện trong các tháng cao điểm năm 2025 và thời gian tới.",
    date:"04/06/2025",
    content: "Các đội bóng tranh tài quyết liệt hứa hẹn những pha bóng đẹp và kết quả bất ngờ.",
    url: "#",
    urlToImage: "https://bcp.cdnchinhphu.vn/334894974524682240/2025/6/4/12111-1749030677063631234093.jpg"
  },

  {
    title: "Thủ tướng: 'Làm ngày làm đêm, làm thêm ngày nghỉ' để hoàn thành công việc ",
    description: "Sáng 4/6, Thủ tướng Chính phủ Phạm Minh Chính chủ trì Phiên họp Chính phủ thường kỳ tháng 5/2025 về tình hình kinh tế - xã hội, phân bổ và giải ngân vốn đầu tư công, triển khai các chương trình mục tiêu quốc gia trong tháng 5 và 5 tháng năm 2025; các nhiệm vụ trọng tâm tháng 6/2025 và trong thời gian tới.",
    date:"04/06/2025",
    content: "Các đội bóng tranh tài quyết liệt hứa hẹn những pha bóng đẹp và kết quả bất ngờ.",
    url: "#",
    urlToImage: "https://bcp.cdnchinhphu.vn/334894974524682240/2025/6/4/img4797-17490039522631525384536.jpg"
  },

  {
    title: "Bộ Xây dựng: Tháng 9/2025 sẽ có 2.800km đường cao tốc ",
    description: "Bộ trưởng Bộ Xây dựng Trần Hồng Minh cho biết, đến tháng 9/2025, cả nước sẽ hoàn thành 2.800km đường cao tốc.",
    date:"04/06/2025",
    content: "Các đội bóng tranh tài quyết liệt hứa hẹn những pha bóng đẹp và kết quả bất ngờ.",
    url: "#",
    urlToImage: "https://bcp.cdnchinhphu.vn/334894974524682240/2025/6/4/img4843-1749022486677190671615.jpg"
  }


];

const businessData = [
  {
    title: "Sự kiện nghệ thuật đặc biệt Vinh quang Công an nhân dân Việt Nam",
    description: "Gala âm nhạc “Vinh quang Công an nhân dân Việt Nam” là sự kiện nghệ thuật đặc biệt được tổ chức vào tối ngày 09/3/2025 tại Quảng trường Đông Kinh Nghĩa Thục, Hà Nội. Đây là một trong những hoạt động trọng tâm của chuỗi sự kiện kỷ niệm 80 năm Ngày truyền thống Công an nhân dân (19/8/1945 - 19/8/2025) và 20 năm Ngày hội toàn dân bảo vệ an ninh Tổ quốc (19/8/2005 - 19/8/2025), do Bộ Công an chủ trì phối hợp cùng các đơn vị tổ chức..",
    date:"09/03/2025",
    content: "Việc nhận vốn giúp các doanh nghiệp mở rộng quy mô và phát triển sản phẩm mới.",
    url: "#",
    urlToImage: "https://images.antv.gov.vn/public/uploads/2025/03/06/67c9817025a7f1c92e8c0d17.jpg?w=934"
  },
  {
    title: "Lễ hội Hoa Phượng Đỏ 2025: Khẳng định bản sắc và vị thế của Hải Phòng",
    description: "Không chỉ là một sự kiện văn hóa thường niên tôn vinh loài hoa mang tính biểu tượng, lễ hội Hoa Phượng Đỏ còn là dấu ấn đặc trưng, khắc sâu bản sắc riêng của thành phố Cảng. Bằng việc khai thác khéo léo tiềm năng bản địa, Hải Phòng đã phát triển thành sản phẩm văn hóa độc đáo, từ đó, định hình thương hiệu thành phố.",
    date:"16/04/2025",
    content: "Nhà đầu tư lạc quan về triển vọng kinh tế và tiếp tục đổ vốn vào thị trường.",
    url: "#",
    urlToImage: "https://bvhttdl.mediacdn.vn/291773308735864832/2025/4/1/5066e6345fbb4a0c8bfb98d2ccdeadadqrpi-1743471811255-17434718123041270196258.jpeg"
  },

  {
    title: "Kỷ niệm trọng thể 50 năm Giải phóng miền Nam, thống nhất đất nước",
    date:"30/04/2025",
    description: "Sáng 30/4, tại Thành phố Hồ Chí Minh, Ban Chấp hành Trung ương Đảng, Quốc hội, Chủ tịch nước, Chính phủ, Ủy ban Trung ương Mặt trận Tổ quốc Việt Nam và UBND Thành phố Hồ Chí Minh đã tổ chức trọng thể Lễ kỷ niệm 50 năm Ngày Giải phóng miền Nam, thống nhất đất nước (30/4/1975-30/4/2025).",
    content: "5G giúp cải thiện tốc độ kết nối và hỗ trợ nhiều ứng dụng mới trong tương lai.",
    url: "#",
    urlToImage: "https://bcp.cdnchinhphu.vn/334894974524682240/2025/4/30/img2233-1745974308984737192599.jpg"
  },

    {
        title: "Trình diễn nghệ thuật tại Quảng trường Ba Đình vào tối 18/5 kỷ niệm sinh nhật Bác Hồ",
        date: "18/05/2025",
        description: "Nhân dịp kỷ niệm 135 năm Ngày sinh Chủ tịch Hồ Chí Minh (19/5/1890-19/5/2025), Ban Tuyên giáo và Dân vận Trung ương chỉ đạo, Đài truyền hình Việt Nam, UBND thành phố Hà Nội, Bộ tư lệnh bảo vệ Lăng Chủ tịch Hồ Chí Minh, Công ty cổ phần Netmedia và các đơn vị liên quan phối hợp thực hiện chương trình nghệ thuật đặc biệt mang tên “Người là Hồ Chí Minh” vào tối 18/5 tại Quảng trường Ba Đình, Hà Nội.",
        content: "Sự kiện thu hút nhiều nhà đầu tư trong và ngoài nước tham gia.",
        url: "#",
        urlToImage: "https://cdn.nhandan.vn/images/a66ff20f6c1e5a179e007244f7bfd5c80d56617dcc09d7ab26bf7d65b9048bfc5918eae08dc5d4447b2cb278ed7fd3499cba6fe5d37fbd9ea09114b3a262b1bf/nguoila-4510-8908.jpg"
    },
];

const techData = [
  {
    title: "Dự báo nắng nóng gay gắt hơn, kéo dài hơn, nguy hiểm hơn",
    description: "Trái đất tiến gần hơn tới những mùa hè khắc nghiệt với nắng nóng gay gắt hơn, lâu hơn và nguy hiểm hơn.",
    content: "5G giúp cải thiện tốc độ kết nối và hỗ trợ nhiều ứng dụng mới trong tương lai.",
    url: "#",
    urlToImage: "https://media-cdn-v2.laodong.vn/storage/newsportal/2025/6/1/1516155/Nang-Nong.jpg?w=660"
  },
  {
    title: "Cảnh báo chiêu trò lừa đảo từ các cuộc gọi câm",
    description: "Gần đây, nhiều người dùng điện thoại phản ánh về tình trạng thường xuyên nhận được cuộc gọi từ số lạ nhưng khi bắt máy thì không ai trả lời. Nguyên nhân có thể do lỗi kỹ thuật hoặc kẻ gian cố tình thực hiện cuộc gọi không lời nhằm khơi gợi sự tò mò, khiến khách hàng gọi lại.",
    content: "Nhiều doanh nghiệp áp dụng AI để nâng cao hiệu suất và giảm chi phí vận hành.",
    url: "#",
    urlToImage: "https://cdn.nhandan.vn/images/92ead5b74e5da387e062cd350a9d869f1ebea5c1da5dccf89b11376b50d587e3d750016ebab974db334536efbfa2c5c04bcc23196673fe31bc25eb25f352bb2d/1-10-1516-5696.jpeg"
  },
  {
    title: "Tìm bị hại trong các vụ giả danh Công an, Viện kiểm sát, Tòa án gọi điện lừa đảo, chiếm đoạt tài sản, có người mất 10 tỷ đồng",
    description: " Công an thành phố Hà Nội tìm bị hại trong các vụ giả danh Công an, Viện kiểm sát, Tòa án gọi điện lừa đảo, chiếm đoạt tài sản.",
    content: "Nhiều doanh nghiệp áp dụng AI để nâng cao hiệu suất và giảm chi phí vận hành.",
    url: "#",
    urlToImage: "https://xdcs.cdnchinhphu.vn/thumb_w/900/446259493575335936/2024/4/6/bihai-1712383461289123259138-0-0-361-578-crop-17123834757261937010802.jpg"
  }
];

// --- 5. Hiển thị chi tiết bài báo ---

// Tạo phần hiển thị chi tiết bài báo (bạn nên đặt trong HTML trang)
let detailContainer = document.createElement('div');
detailContainer.id = 'newsDetail';
detailContainer.style.display = 'none';
detailContainer.style.border = '1px solid #ccc';
detailContainer.style.padding = '10px';
detailContainer.style.marginTop = '20px';
detailContainer.innerHTML = `
  <button id="closeDetail">Đóng</button>
  <h2 id="detailTitle"></h2>
  <img id="detailImg" src="" alt="" style="max-width: 100%;">
  <p id="detailDesc"></p>
  <p id="detailContent"></p>
`;
document.body.appendChild(detailContainer);

const newsDetail = document.getElementById('newsDetail');
const detailTitle = document.getElementById('detailTitle');
const detailImg = document.getElementById('detailImg');
const detailDesc = document.getElementById('detailDesc');
const detailContent = document.getElementById('detailContent');
const closeDetailBtn = document.getElementById('closeDetail');

closeDetailBtn.onclick = () => {
  newsDetail.style.display = 'none';
};

// Hàm hiển thị chi tiết bài báo
function showArticleDetail(article) {
  detailTitle.textContent = article.title;
  detailImg.src = article.urlToImage;
  detailDesc.textContent = article.description;
  detailContent.textContent = article.content;
  newsDetail.style.display = 'block';
  newsDetail.scrollIntoView({behavior: 'smooth'});
}

// --- 6. Hàm hiển thị danh sách bài viết ---
// Gần giống như code bạn gửi, nhưng thêm sự kiện click cho từng bài

const add_breakingNews = (data) => {
  breakingImg.innerHTML = `<img src="${data[0].urlToImage}" alt="image">`;
  breakingNews_title.innerHTML = `<a href="#" onclick="showArticleDetail(breakingData[0]);return false;"><h2>${data[0].title}</h2></a>`;
  breakingNews_desc.innerHTML = data[0].description;
};

const add_topNews = (data) => {
  let html = '';
  data.forEach((article, index) => {
    let title = article.title.length < 100 ? article.title : article.title.slice(0, 100) + "...";
    html += `
      <div class="news" style="cursor:pointer;" onclick='showArticleDetail(topData[${index}])'>
        <div class="img">
          <img src="${article.urlToImage}" alt="image">
        </div>
        <div class="text">
          <div class="title">
            <p>${title}</p>
          </div>
        </div>
      </div>
    `;
  });
  topNews.innerHTML = html;
};

const add_sportsNews = (data) => {
  let html = '';
  data.forEach((article, index) => {
    let title = article.title.length < 100 ? article.title : article.title.slice(0, 100) + "...";
    html += `
      <div class="newsCard" style="cursor:pointer;" onclick='showArticleDetail(sportsData[${index}])'>
        <div class="img">
          <img src="${article.urlToImage}" alt="image">
        </div>
        <div class="text">
          <div class="title">
            <p>${title}</p>
          </div>
        </div>
      </div>
    `;
  });
  sportsNews.innerHTML = html;
};

const add_businessNews = (data) => {
  let html = '';
  data.forEach((article, index) => {
    let title = article.title.length < 100 ? article.title : article.title.slice(0, 100) + "...";
    html += `
      <div class="newsCard" style="cursor:pointer;" onclick='showArticleDetail(businessData[${index}])'>
        <div class="img">
          <img src="${article.urlToImage}" alt="image">
        </div>
        <div class="text">
          <div class="title">
            <p>${title}</p>
          </div>
        </div>
      </div>
    `;
  });
  businessNews.innerHTML = html;
};

const add_techNews = (data) => {
  let html = '';
  data.forEach((article, index) => {
    let title = article.title.length < 100 ? article.title : article.title.slice(0, 100) + "...";
    html += `
      <div class="newsCard" style="cursor:pointer;" onclick='showArticleDetail(techData[${index}])'>
        <div class="img">
          <img src="${article.urlToImage}" alt="image">
        </div>
        <div class="text">
          <div class="title">
            <p>${title}</p>
          </div>
        </div>
      </div>
    `;
  });
  techNews.innerHTML = html;
};

// --- 7. Gọi hiển thị ---
add_breakingNews(breakingData);
add_topNews(topData);
add_sportsNews(sportsData);
add_businessNews(businessData);
add_techNews(techData);
