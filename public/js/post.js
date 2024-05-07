console.log('dddd');

const newFormHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector('#post-comment').value.trim();
  const post_id = event.target.getAttribute('data-post-id');

  if (content) {
    console.log('ass cheeks');
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ content, post_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      console.log('bum cheeks');
      document.location.replace('/post/'+ post_id);
    } else {
      alert('Failed to create post');
    }
  }
};

document
  .querySelector('.post-comment-form')
  .addEventListener('submit', newFormHandler);
