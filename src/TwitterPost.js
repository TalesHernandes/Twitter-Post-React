import Like from "./Like.js";

export default function TwitterPost({ number }) {
  var post = [
    {
      name: "Tim Cook",
      username: "@tim_cook",
      message: "A aula do Cacique é boa!",
      verify: true,
      image:
        "https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg",
      verifyImg:
        "https://www.pngmart.com/files/12/Twitter-Verified-Badge-PNG-HD-420x236.png",
      date: {
        hour: "11",
        minute: "55",
        day: "09",
        month: "04",
        year: "23"
      },
      views: "1.4M",
      bookmarks: 27,
      likes: 9656,
      comments: 512
    },

    {
      name: "Tales",
      username: "@tales",
      message: "Aluno de S.I.",
      verify: false,
      image:
        "https://pbs.twimg.com/profile_images/1365068242918780928/m278bxAZ_400x400.jpg",
      verifyImg:
        "https://www.pngmart.com/files/12/Twitter-Verified-Badge-PNG-HD-420x236.png",
      date: {
        hour: "7",
        minute: "30",
        day: "26",
        month: "04",
        year: "23"
      },
      views: "27",
      bookmarks: 0,
      likes: 2,
      comments: 1
    },

    {
      name: "Lorem",
      username: "@lorem",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida suscipit augue, nec convallis erat vestibulum in. Etiam sed mi mattis dolor rutrum pretium sit amet vitae massa. Sed molestie sapien eget turpis porta elementum. Aliquam a lorem neque. Fusce faucibus, arcu biam.",
      verify: true,
      image:
        "https://pbs.twimg.com/media/FuvydqrWcAMgqcM?format=jpg&name=900x900",
      verifyImg:
        "https://www.pngmart.com/files/12/Twitter-Verified-Badge-PNG-HD-420x236.png",
      date: {
        hour: "22",
        minute: "39",
        day: "27",
        month: "04",
        year: "23"
      },
      views: "285",
      bookmarks: 2,
      likes: 12,
      comments: 3
    }
  ];

  var verify = [];

  for (var i = 0; i < post.length; i++) {
    if (post[i].verify) {
      verify[i] = <img src={post[i].verifyImg} alt="verify" />;
    }
  }

  return (
    <div className="container">
      <article className="twitterPost">
        <header>
          <section className="right">
            <div className="pfpContainer">
              <img
                className="profilePicture"
                src={post[number].image}
                alt="profilePicture"
              />
            </div>
            <div className="NVU">
              <div className="NV">
                <h1 className="name">{post[number].name}</h1>
                <div className="verify">{verify[number]}</div>
              </div>
              <h2 className="username">{post[number].username}</h2>
            </div>
          </section>
          <section className="left">
            <img
              className="twitterLogo"
              src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1.png"
              alt="logo"
            />
          </section>
        </header>
        <article className="message">
          <p className="messageContent">{post[number].message}</p>
        </article>
        <section className="information">
          <section className="timeAndViews">
            <p className="time">
              {post[number].date.hour}:{post[number].date.minute}
              <span className="dot"> · </span>
              {post[number].date.day}/{post[number].date.hour}/
              {post[number].date.year} ·
              <span className="views"> {post[number].views}</span> Views
            </p>
          </section>
          <hr />
          <section className="secBookmarks">
            <p className="bookmarks">
              <span className="bookmarkQntd">{post[number].bookmarks}</span>{" "}
              Bookmarks
            </p>
          </section>
          <hr />
          <section className="likesAndComents">
            <Like className="likes" likes={post[number].likes} />
            <img className="comentsImg" src="speech.png" alt="coments" />
            <p className="comentsQntd">{post[number].comments}</p>
          </section>
        </section>
      </article>
    </div>
  );
}
