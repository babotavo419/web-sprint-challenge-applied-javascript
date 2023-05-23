const Tabs = (topics) => {

    const divTopics = document.createElement('div');
    divTopics.classList.add('topics');
  
    topics.forEach((topic) => {
      const divTab = document.createElement('div');
      divTab.classList.add('tab');
      divTab.textContent = topic;
      divTopics.appendChild(divTab);
    });
  
    return divTopics;
  }
  
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

const tabsAppender = (selector) => {

  fetch('http://localhost:5001/api/topics')
      .then(response => response.json())
      .then(data => {
        const topics = data.topics;
        const tabs = Tabs(topics);
        const element = document.querySelector(selector);
        element.appendChild(tabs);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }

  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

export { Tabs, tabsAppender }
