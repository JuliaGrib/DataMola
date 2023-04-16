class UserPageView extends View {
  constructor(id) {
    super(id);
  }

  display(user) {
    this.nodeElem.className = 'main main__template_user';
    this.nodeElem.innerHTML = `
    <div class="container">
    <div class="main__wrap main__wrap_user">
      <div class="back">
        <svg
          class="back__icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
            fill="#333333"
          />
        </svg>
        <a  class="link back__text" href="#"> My tasks </a>
      </div>
      <h1 class="title title_h1">Account settings</h1>
    </div>
  </div>
  <div class="container">
    <section class="user">
      <aside class="user__photo">
        <img
          class="user__img"
          src="./assets/img/images/user.webp"
          alt="User photo"
          loading="lazy"
        />
        <div class="user__photo-tools">
          <a href="./user_edit.html" class="icon icon_change">
            <svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.71 8.04L17.37 10.37L13.62 6.62L15.96 4.29C16.35 3.9 17 3.9 17.37 4.29L19.71 6.63C20.1 7 20.1 7.65 19.71 8.04ZM3 17.25L13.06 7.18L16.81 10.93L6.75 21H3V17.25ZM16.62 5.04L15.08 6.58L17.42 8.92L18.96 7.38L16.62 5.04ZM15.36 11L13 8.64L4 17.66V20H6.34L15.36 11Z"
              />
            </svg>
          </a>
          <a href="#" class="icon icon_del">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 19C18 19.7956 17.6839 20.5587 17.1213 21.1213C16.5587 21.6839 15.7956 22 15 22H8C7.20435 22 6.44129 21.6839 5.87868 21.1213C5.31607 20.5587 5 19.7956 5 19V7H4V4H8.5L9.5 3H13.5L14.5 4H19V7H18V19ZM6 7V19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H15C15.5304 21 16.0391 20.7893 16.4142 20.4142C16.7893 20.0391 17 19.5304 17 19V7H6ZM18 6V5H14L13 4H10L9 5H5V6H18ZM8 9H9V19H8V9ZM14 9H15V19H14V9Z"
              />
            </svg>
          </a>
        </div>
      </aside>
      <div class="user__info">
        <div class="user__header">
          <h2 class="title title_h2">General information</h2>
          <a href="#" class="icon icon_change">
            <svg  class="icon-change 
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.71 8.04L17.37 10.37L13.62 6.62L15.96 4.29C16.35 3.9 17 3.9 17.37 4.29L19.71 6.63C20.1 7 20.1 7.65 19.71 8.04ZM3 17.25L13.06 7.18L16.81 10.93L6.75 21H3V17.25ZM16.62 5.04L15.08 6.58L17.42 8.92L18.96 7.38L16.62 5.04ZM15.36 11L13 8.64L4 17.66V20H6.34L15.36 11Z"
              />
            </svg>
          </a>
        </div>
        <form action="/">
          <div class="container__form-four container__form_user">
            <div class="form-elem form-elem_user form-elem_icon">
              <label class="label" for="login">Login*</label>
              <input
                class="input input_disabled"
                type="text"
                id="login"
                value="${user.login}"
                placeholder="Enter your login"
                disabled
              />
              <span class="input_icon-svg">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 0C12.0196 0 14.4359 1.00089 16.2175 2.78249C17.9991 4.56408 19 6.98044 19 9.5C19 12.0196 17.9991 14.4359 16.2175 16.2175C14.4359 17.9991 12.0196 19 9.5 19C6.98044 19 4.56408 17.9991 2.78249 16.2175C1.00089 14.4359 0 12.0196 0 9.5C0 6.98044 1.00089 4.56408 2.78249 2.78249C4.56408 1.00089 6.98044 0 9.5 0ZM9.5 1C7.24566 1 5.08365 1.89553 3.48959 3.48959C1.89553 5.08365 1 7.24566 1 9.5C1 11.7543 1.89553 13.9163 3.48959 15.5104C5.08365 17.1045 7.24566 18 9.5 18C10.6162 18 11.7215 17.7801 12.7528 17.353C13.7841 16.9258 14.7211 16.2997 15.5104 15.5104C16.2997 14.7211 16.9258 13.7841 17.353 12.7528C17.7801 11.7215 18 10.6162 18 9.5C18 7.24566 17.1045 5.08365 15.5104 3.48959C13.9163 1.89553 11.7543 1 9.5 1ZM9 5V7H10V5H9ZM9 9V14H10V9H9Z"
                    fill="#808080"
                  />
                </svg>
              </span>
              <div class="input__message input__message-login"></div>
            </div>
            <div class="form-elem form-elem_user form-elem_icon">
              <label class="label" for="name">Name*</label>
              <input
                class="input input_disabled"
                type="text"
                id="name"
                value="${user.userName}"
                placeholder="Enter your name"
                disabled
              />
              <span class="input_icon-svg">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 0C12.0196 0 14.4359 1.00089 16.2175 2.78249C17.9991 4.56408 19 6.98044 19 9.5C19 12.0196 17.9991 14.4359 16.2175 16.2175C14.4359 17.9991 12.0196 19 9.5 19C6.98044 19 4.56408 17.9991 2.78249 16.2175C1.00089 14.4359 0 12.0196 0 9.5C0 6.98044 1.00089 4.56408 2.78249 2.78249C4.56408 1.00089 6.98044 0 9.5 0ZM9.5 1C7.24566 1 5.08365 1.89553 3.48959 3.48959C1.89553 5.08365 1 7.24566 1 9.5C1 11.7543 1.89553 13.9163 3.48959 15.5104C5.08365 17.1045 7.24566 18 9.5 18C10.6162 18 11.7215 17.7801 12.7528 17.353C13.7841 16.9258 14.7211 16.2997 15.5104 15.5104C16.2997 14.7211 16.9258 13.7841 17.353 12.7528C17.7801 11.7215 18 10.6162 18 9.5C18 7.24566 17.1045 5.08365 15.5104 3.48959C13.9163 1.89553 11.7543 1 9.5 1ZM9 5V7H10V5H9ZM9 9V14H10V9H9Z"
                    fill="#808080"
                  />
                </svg>
              </span>
              <div class="input__message input__message-name"></div>
            </div>

            <div class="form__btn">
              <button class="button button_disabled" type="reset">
                Reset
              </button>
              <button class="button button_disabled" type="submit">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
          `;
  }

  addEvents() {
    const iconChange = document.querySelector('.icon-change');
    iconChange.addEventListener('click', () => {
      taskController.createUserEditPage();
    });

    const backMain = document.querySelector('.back');
    backMain.addEventListener('click', (event) => {
      if (event.target.className === 'link back__text') {
        taskController.createMainView();
      }
    });
  }
}
