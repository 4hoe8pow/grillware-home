import { component$, useStore, $ } from '@builder.io/qwik';

export default component$(() => {
  // フォームデータの管理
  const formState = useStore({
    name: '',
    email: '',
    message: '',
  });

  // handleSubmit を $() でラップする
  const handleSubmit = $(async (event: Event) => {
    event.preventDefault();

    // フォームデータをログに出力（ここでバックエンドに送信する処理を追加できます）
    console.log(formState);

    // Fetch API などでデータをバックエンドに送信する例
    try {
      const response = await fetch('/functions/contact', {
        method: 'POST',
        body: new URLSearchParams({
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
      } else {
        console.error('Error submitting form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  });

  return (
    <form onSubmit$={handleSubmit}>
      <div>
        <label for="name">Name:</label>
        <input
          id="name"
          type="text"
          value={formState.name}
          onInput$={(event) => (formState.name = (event.target as HTMLInputElement).value)}
        />
      </div>
      <div>
        <label for="email">Email:</label>
        <input
          id="email"
          type="email"
          value={formState.email}
          onInput$={(event) => (formState.email = (event.target as HTMLInputElement).value)}
        />
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea
          id="message"
          value={formState.message}
          onInput$={(event) => (formState.message = (event.target as HTMLTextAreaElement).value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
});
