const newFormHandler = async (event) => {
  console.log(1);
  event.preventDefault();

  console.log(2);


  const content = document.querySelector('#post-comment').value.trim();
  console.log(3);


  if (content) {
    console.log('ass cheeks');
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      console.log('bum cheeks');
      document.location.replace('/profile');
    } else {
      alert('Failed to create post');
    }
  }
};
console.log(4);

document
  .querySelector('.post-comment-form')
  .addEventListener('submit', newFormHandler);

console.log(5);
