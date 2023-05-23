const Card = (article) => {

    const divCard = document.createElement('div');
    divCard.classList.add('card');
  
    const divHeadline = document.createElement('div');
    divHeadline.classList.add('headline');
    divHeadline.textContent = article.headline;
  
    const divAuthor = document.createElement('div');
    divAuthor.classList.add('author');
  
    const divImgContainer = document.createElement('div');
    divImgContainer.classList.add('img-container');
  
    const imgAuthorPhoto = document.createElement('img');
    imgAuthorPhoto.src = article.authorPhoto;
  
    const spanAuthorName = document.createElement('span');
    spanAuthorName.textContent = `By ${article.authorName}`;
  
    divImgContainer.appendChild(imgAuthorPhoto);
    divAuthor.appendChild(divImgContainer);
    divAuthor.appendChild(spanAuthorName);
  
    divCard.appendChild(divHeadline);
    divCard.appendChild(divAuthor);
  
    divCard.addEventListener('click', () => {
      console.log(article.headline);
    });
  
    return divCard;
  }
  
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const cardAppender = (selector) => {
    fetch('http://localhost:5001/api/articles')
      .then(response => response.json())
      .then(data => {
        const articles = Object.values(data.articles).flat();
        articles.forEach(article => {
          const card = Card(article);
          const element = document.querySelector(selector);
          element.appendChild(card);
        });
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }
  
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

export { Card, cardAppender }
