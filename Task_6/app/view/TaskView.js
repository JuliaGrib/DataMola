class TaskView extends View {
  constructor(id) {
    super(id);
  }

  display(task) {
    this.nodeElem.className = 'main main__template_task-page';
    this.nodeElem.innerHTML = this._createBack() + this._createTask(task);
  }

  _createTask(task) {
    return `
        <div class="container">
        <section class="task-block">
        <div class="task-block__content">
            <div class="task-block__header">
            <h1 class="title title_h1 title_task">${task.name}</h1>
            <div class="task-block__tools">
                <a href="#" class="icon icon_upload">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M16.5 6V17.5C16.5 19.71 14.71 21.5 12.5 21.5C10.29 21.5 8.5 19.71 8.5 17.5V5C8.5 4.33696 8.76339 3.70107 9.23223 3.23223C9.70107 2.76339 10.337 2.5 11 2.5C11.663 2.5 12.2989 2.76339 12.7678 3.23223C13.2366 3.70107 13.5 4.33696 13.5 5V15.5C13.5 16.05 13.05 16.5 12.5 16.5C11.95 16.5 11.5 16.05 11.5 15.5V6H10V15.5C10 16.163 10.2634 16.7989 10.7322 17.2678C11.2011 17.7366 11.837 18 12.5 18C13.163 18 13.7989 17.7366 14.2678 17.2678C14.7366 16.7989 15 16.163 15 15.5V5C15 2.79 13.21 1 11 1C8.79 1 7 2.79 7 5V17.5C7 20.54 9.46 23 12.5 23C15.54 23 18 20.54 18 17.5V6H16.5Z"
                    />
                </svg>
                </a>
                <a href="#" class="icon icon_change">
                <svg
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
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M18.8623 19C18.8623 19.7956 18.5462 20.5587 17.9836 21.1213C17.421 21.6839 16.658 22 15.8623 22H8.8623C8.06666 22 7.30359 21.6839 6.74098 21.1213C6.17838 20.5587 5.8623 19.7956 5.8623 19V7H4.8623V4H9.3623L10.3623 3H14.3623L15.3623 4H19.8623V7H18.8623V19ZM6.8623 7V19C6.8623 19.5304 7.07302 20.0391 7.44809 20.4142C7.82316 20.7893 8.33187 21 8.8623 21H15.8623C16.3927 21 16.9014 20.7893 17.2765 20.4142C17.6516 20.0391 17.8623 19.5304 17.8623 19V7H6.8623ZM18.8623 6V5H14.8623L13.8623 4H10.8623L9.8623 5H5.8623V6H18.8623ZM8.8623 9H9.8623V19H8.8623V9ZM14.8623 9H15.8623V19H14.8623V9Z"
                    />
                </svg>
                </a>
            </div>
            </div>
            <span class="priority priority_${task.priority.toLowerCase()} priority_task">
            ${task.priority}</span>
            <span class="task-block__date">
            <time datetime="${task.createdAt}">${new Date(
      task.createdAt
    ).toDateString()}</time>
            </span>
            <p class="task-block__text">
            ${task.description}
            </p>
            <div class="task-block__options">
            <div class="task-block__options-elem">
                <span class="task-block__subtitle">Privacy</span>
                <span class="task-block__desc">${Helper.isPrivate(
                  task.isPrivate
                )}</span>
            </div>
            <div class="task-block__options-elem">
                <span class="task-block__subtitle">Status</span>
                <span class="task-block__desc">${task.status}</span>
            </div>
            <div class="task-block__options-elem">
                <span class="task-block__subtitle">Assignee</span>
                <div class="user-icon">
                <svg
                    class="user-icon__img"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M17 9.75C17 10.9435 16.5259 12.0881 15.682 12.932C14.8381 13.7759 13.6935 14.25 12.5 14.25C11.3065 14.25 10.1619 13.7759 9.31802 12.932C8.47411 12.0881 8 10.9435 8 9.75C8 8.55653 8.47411 7.41193 9.31802 6.56802C10.1619 5.72411 11.3065 5.25 12.5 5.25C13.6935 5.25 14.8381 5.72411 15.682 6.56802C16.5259 7.41193 17 8.55653 17 9.75Z"
                    />
                    <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.5 12.75C0.5 9.5674 1.76428 6.51516 4.01472 4.26472C6.26516 2.01428 9.3174 0.75 12.5 0.75C15.6826 0.75 18.7348 2.01428 20.9853 4.26472C23.2357 6.51516 24.5 9.5674 24.5 12.75C24.5 15.9326 23.2357 18.9848 20.9853 21.2353C18.7348 23.4857 15.6826 24.75 12.5 24.75C9.3174 24.75 6.26516 23.4857 4.01472 21.2353C1.76428 18.9848 0.5 15.9326 0.5 12.75ZM12.5 2.25C10.5227 2.25011 8.58555 2.80854 6.9116 3.86104C5.23766 4.91354 3.89492 6.41732 3.03795 8.19929C2.18097 9.98127 1.84458 11.969 2.0675 13.9337C2.29042 15.8985 3.06358 17.7603 4.298 19.305C5.363 17.589 7.7075 15.75 12.5 15.75C17.2925 15.75 19.6355 17.5875 20.702 19.305C21.9364 17.7603 22.7096 15.8985 22.9325 13.9337C23.1554 11.969 22.819 9.98127 21.9621 8.19929C21.1051 6.41732 19.7623 4.91354 18.0884 3.86104C16.4145 2.80854 14.4773 2.25011 12.5 2.25Z"
                    />
                </svg>
                <span class="user-icon__name">${task.assignee}</span>
                </div>
            </div>
            <div class="task-block__options-elem">
                <span class="task-block__subtitle">Files</span>
                <div class="file">
                <span class="file__name">homework.rar</span>
                <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M12.2662 11.4207C12.3777 11.5332 12.4403 11.6853 12.4403 11.8437C12.4403 12.0021 12.3777 12.1542 12.2662 12.2667C12.1527 12.3765 12.0011 12.4378 11.8432 12.4378C11.6853 12.4378 11.5336 12.3765 11.4201 12.2667L6.49943 7.33862L1.57873 12.2667C1.46524 12.3765 1.31355 12.4378 1.15568 12.4378C0.997816 12.4378 0.846126 12.3765 0.732637 12.2667C0.621141 12.1542 0.558594 12.0021 0.558594 11.8437C0.558594 11.6853 0.621141 11.5332 0.732637 11.4207L5.66076 6.49995L0.732637 1.57924C0.637956 1.46388 0.58957 1.31742 0.596891 1.16836C0.604212 1.0193 0.666716 0.878289 0.772246 0.772759C0.877776 0.667229 1.01879 0.604725 1.16785 0.597404C1.31691 0.590083 1.46337 0.638469 1.57873 0.73315L6.49943 5.66127L11.4201 0.73315C11.5355 0.638469 11.682 0.590083 11.831 0.597404C11.9801 0.604725 12.1211 0.667229 12.2266 0.772759C12.3322 0.878289 12.3947 1.0193 12.402 1.16836C12.4093 1.31742 12.3609 1.46388 12.2662 1.57924L7.33811 6.49995L12.2662 11.4207Z"
                    fill="#333333"
                    />
                </svg>
                </div>
            </div>
            </div>
            <hr class="line line_dashed" />
            <span class="task-block__comments">Comments</span>
            <div class="task-block__comment-wrap">
                    ${this._createComment(task.comments)}
            </div>
        </div>
        <form class="task-block__send">
            <input
            class="input input_editor input_send"
            type="text"
            id="name"
            placeholder="Write a comment..."
            />
            <button class="button button_disabled" type="submit">Send</button>
        </form>
        </section>
    </div>
    `;
  }

  _createComment(comments) {
    let commentsNodes = '';
    comments.forEach((com) => {
      commentsNodes += `
        <div class="comment">
            <div class="comment__header">
                <div class="user-icon">
                    <svg
                    class="user-icon__img"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M17 9.75C17 10.9435 16.5259 12.0881 15.682 12.932C14.8381 13.7759 13.6935 14.25 12.5 14.25C11.3065 14.25 10.1619 13.7759 9.31802 12.932C8.47411 12.0881 8 10.9435 8 9.75C8 8.55653 8.47411 7.41193 9.31802 6.56802C10.1619 5.72411 11.3065 5.25 12.5 5.25C13.6935 5.25 14.8381 5.72411 15.682 6.56802C16.5259 7.41193 17 8.55653 17 9.75Z"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.5 12.75C0.5 9.5674 1.76428 6.51516 4.01472 4.26472C6.26516 2.01428 9.3174 0.75 12.5 0.75C15.6826 0.75 18.7348 2.01428 20.9853 4.26472C23.2357 6.51516 24.5 9.5674 24.5 12.75C24.5 15.9326 23.2357 18.9848 20.9853 21.2353C18.7348 23.4857 15.6826 24.75 12.5 24.75C9.3174 24.75 6.26516 23.4857 4.01472 21.2353C1.76428 18.9848 0.5 15.9326 0.5 12.75ZM12.5 2.25C10.5227 2.25011 8.58555 2.80854 6.9116 3.86104C5.23766 4.91354 3.89492 6.41732 3.03795 8.19929C2.18097 9.98127 1.84458 11.969 2.0675 13.9337C2.29042 15.8985 3.06358 17.7603 4.298 19.305C5.363 17.589 7.7075 15.75 12.5 15.75C17.2925 15.75 19.6355 17.5875 20.702 19.305C21.9364 17.7603 22.7096 15.8985 22.9325 13.9337C23.1554 11.969 22.819 9.98127 21.9621 8.19929C21.1051 6.41732 19.7623 4.91354 18.0884 3.86104C16.4145 2.80854 14.4773 2.25011 12.5 2.25Z"
                    />
                    </svg>
                    <span class="user-icon__name">${com.author}</span>
                </div>
            <div class="comment__time">
        <time datetime="${new Date(com.createdAt).toDateString()}</time>
            </div>
            </div>
            <div class="comment__message">${com.text}</div>
        </div>
        
        `;
    });
    return commentsNodes;
  }

  _createBack() {
    return `
        <div class="container">
        <div class="main__content">
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
            <a href="./main.html" class="link back__text"> My tasks </a>
        </div>
        </div>
    </div>
    `;
  }
}
