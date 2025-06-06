function SignInBtn() {
    const loginBtn = document.getElementById('loginBtn');
    const loginPage = document.querySelector('login-page');
    const mainContent = document.querySelector('.home-page'); // Sửa để chọn đúng phần tử

    loginBtn.addEventListener('click', function() {
        // Đổi URL sang nhánh /login mà không reload trang
        window.history.pushState({page: 'login'}, 'Trang Đăng nhập', '/login');
        // Hiển thị nội dung trang đăng nhập
        loginPage.innerHTML = `            
    <div class="form-box">
    <style>
    .form-box {
        max-width: 300px;
        background: #f1f7fe;
        overflow: hidden;
        border-radius: 16px;
        color: #010101;
      }

      .form {
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 32px 24px 24px;
        gap: 16px;
        text-align: center;
      }

      /*Form text*/
      .title {
        font-weight: bold;
        font-size: 1.6rem;
      }

      .subtitle {
        font-size: 1rem;
        color: #666;
      }

      /*Inputs box*/
      .form-container {
        overflow: hidden;
        border-radius: 8px;
        background-color: #fff;
        margin: 1rem 0 .5rem;
        width: 100%;
      }

      .input {
        background: none;
        border: 0;
        outline: 0;
        height: 40px;
        width: 100%;
        border-bottom: 1px solid #eee;
        font-size: .9rem;
        padding: 8px 15px;
      }

      .form-section {
        padding: 16px;
        font-size: .85rem;
        background-color: #e0ecfb;
        box-shadow: rgb(0 0 0 / 8%) 0 -1px;
      }

      .form-section a {
        font-weight: bold;
        color: #0066ff;
        transition: color .3s ease;
      }

      .form-section a:hover {
        color: #005ce6;
        text-decoration: underline;
      }

      /*Button*/
      .form button {
        background-color: #0066ff;
        color: #fff;
        border: 0;
        border-radius: 24px;
        padding: 10px 16px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: background-color .3s ease;
      }

      .form button:hover {
        background-color: #005ce6;
    </style>
        <form class="form">
            <span class="title">Sign up</span>
            <span class="subtitle">Create a free account with your email.</span>
            <div class="form-container">
              <input type="text" class="input" placeholder="Full Name">
              <input type="email" class="input" placeholder="Email">
              <input type="password" class="input" placeholder="Password">
            </div>
            <button>Sign up</button>
        </form>
        <div class="form-section">
          <p>Have an account? <a href="">Log in</a> </p>
        </div>
    </div>`;
    });

    // Xử lý khi người dùng bấm nút back/forward trình duyệt
    window.addEventListener('popstate', function(event) {
        if (event.state && event.state.page === 'login') {
            loginPage.innerHTML = `            
    <div class="form-box">
    <style>
    .form-box {
        max-width: 300px;
        background: #f1f7fe;
        overflow: hidden;
        border-radius: 16px;
        color: #010101;
      }

      .form {
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 32px 24px 24px;
        gap: 16px;
        text-align: center;
      }

      /*Form text*/
      .title {
        font-weight: bold;
        font-size: 1.6rem;
      }

      .subtitle {
        font-size: 1rem;
        color: #666;
      }

      /*Inputs box*/
      .form-container {
        overflow: hidden;
        border-radius: 8px;
        background-color: #fff;
        margin: 1rem 0 .5rem;
        width: 100%;
      }

      .input {
        background: none;
        border: 0;
        outline: 0;
        height: 40px;
        width: 100%;
        border-bottom: 1px solid #eee;
        font-size: .9rem;
        padding: 8px 15px;
      }

      .form-section {
        padding: 16px;
        font-size: .85rem;
        background-color: #e0ecfb;
        box-shadow: rgb(0 0 0 / 8%) 0 -1px;
      }

      .form-section a {
        font-weight: bold;
        color: #0066ff;
        transition: color .3s ease;
      }

      .form-section a:hover {
        color: #005ce6;
        text-decoration: underline;
      }

      /*Button*/
      .form button {
        background-color: #0066ff;
        color: #fff;
        border: 0;
        border-radius: 24px;
        padding: 10px 16px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: background-color .3s ease;
      }

      .form button:hover {
        background-color: #005ce6;
    </style>
        <form class="form">
            <span class="title">Sign up</span>
            <span class="subtitle">Create a free account with your email.</span>
            <div class="form-container">
              <input type="text" class="input" placeholder="Full Name">
              <input type="email" class="input" placeholder="Email">
              <input type="password" class="input" placeholder="Password">
            </div>
            <button>Sign up</button>
        </form>
        <div class="form-section">
          <p>Have an account? <a href="">Log in</a> </p>
        </div>
    </div>`; // Nội dung trang đăng nhập
        } else {
            loginPage.innerHTML = mainContent; // Hoặc nội dung trang chính của bạn
        }
    });
}

// Gọi hàm khi DOM đã tải xong
document.addEventListener('DOMContentLoaded', SignInBtn);
