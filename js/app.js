'use strict';

var theForm = document.getElementById('the-form');
var allWorks = [];

function WrittenWork(author, title, text){
  this.author = author;
  this.title = title;
  this.text = text;
  allWorks.push(this);
}

function handleClick(event){
  event.preventDefault();

  //gets usable data and console.logs it
  var userName = event.target.username.value;
  console.log('userName: ', userName);

  var workTitle = event.target.worktitle.value;
  console.log('workTitle: ', workTitle);

  var someText = event.target.sometext.value;
  console.log('someText: ', someText);

  //creates a new instance of writtenwork every time user inputs into form
  new WrittenWork(userName, workTitle, someText);
  console.log('allWorks array contains instance of WrittenWork', allWorks);

  //clears the form so ready for next user input
  event.target.username.value = null;
  event.target.worktitle.value = null;
  event.target.sometext.value = null;

  ///initial save to lacl storage would go here

}



theForm.addEventListener('submit', handleClick);

